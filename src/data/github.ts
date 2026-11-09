// What the site reads from GitHub, once, while it is built. Nothing runs in the visitor's browser,
// so the site's strict Content-Security-Policy stays as it is. The deploy workflow rebuilds daily.
import { tools } from './tools';

const API = 'https://api.github.com';

export interface Release {
  name: string;
  tag: string;
  url: string;
  date: string;
  html: string; // the notes, rendered and sanitized by GitHub
}

export interface Issue {
  number: number;
  title: string;
  url: string;
  updated: string;
}

/** The public repositories of the toolkit, as `owner/name` with their display name. */
export const projects = tools.flatMap((tool) =>
  tool.repo ? [{ name: tool.name, repo: new URL(tool.repo).pathname.slice(1) }] : [],
);

async function get<T>(path: string): Promise<T> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github.html+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'neuro-kitchen-site',
  };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const response = await fetch(`${API}${path}`, { headers });
  if (!response.ok) throw new Error(`GitHub ${path}: ${response.status} ${response.statusText}`);
  return (await response.json()) as T;
}

/** In CI a failed read stops the deploy, so the live pages are never replaced by empty ones. */
async function orEmpty<T>(read: () => Promise<T[]>): Promise<T[]> {
  try {
    return await read();
  } catch (error) {
    if (process.env.CI) throw error;
    console.warn(`${error}: building without this data`);
    return [];
  }
}

interface ApiRelease {
  name: string | null;
  tag_name: string;
  html_url: string;
  published_at: string;
  body_html?: string;
  draft: boolean;
}

export function releases(repo: string, count = 20): Promise<Release[]> {
  return orEmpty(async () => {
    const list = await get<ApiRelease[]>(`/repos/${repo}/releases?per_page=${count}`);
    return list
      .filter((r) => !r.draft)
      .map((r) => ({
        name: r.name || r.tag_name,
        tag: r.tag_name,
        url: r.html_url,
        date: r.published_at.slice(0, 10),
        html: r.body_html ?? '',
      }));
  });
}

interface ApiIssue {
  number: number;
  title: string;
  html_url: string;
  updated_at: string;
  pull_request?: unknown;
}

export function knownIssues(repo: string): Promise<Issue[]> {
  return orEmpty(async () => {
    const list = await get<ApiIssue[]>(`/repos/${repo}/issues?state=open&labels=bug&per_page=50`);
    return list
      .filter((i) => !i.pull_request)
      .map((i) => ({ number: i.number, title: i.title, url: i.html_url, updated: i.updated_at.slice(0, 10) }));
  });
}
