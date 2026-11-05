// The toolkit shown on the home page.
// To add a tool, add an entry here. Leave `repo` out while the repo is private:
// the card then shows a "Coming soon" badge instead of a link.

export interface Tool {
  name: string;
  category: string;
  description: string;
  repo?: string;
}

export const tools: Tool[] = [
  {
    name: 'dsp-kitchen',
    category: 'signal processing',
    description: 'Digital signal processing tools for neural recordings.',
    repo: 'https://github.com/neuro-kitchen/dsp-kitchen',
  },
  {
    name: 'neuro-convert',
    category: 'data formats',
    description: 'Convert neuroscience data between formats.',
    repo: 'https://github.com/neuro-kitchen/neuro-convert',
  },
  {
    name: 'quire',
    category: 'paper management',
    description: 'A reference manager for collecting, reading and citing papers, on desktop and mobile.',
  },
  {
    name: 'lumen',
    category: 'image analysis',
    description: 'Fast, Rust-powered analysis for microscopy and whole-slide images.',
  },
];
