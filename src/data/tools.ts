// The toolkit shown on the home page.
// To add a tool, add an entry here. Leave `repo` out while the repo is private:
// the card then shows a "Coming soon" badge instead of a link.
// The Changelog page lists the releases of every tool with a `repo`.

export interface Tool {
  name: string;
  category: string;
  description: string;
  /** A few things it does, one line each. */
  highlights?: string[];
  /** How to get it, shown as a command (`pip install dspk`). */
  install?: string;
  repo?: string;
}

export const tools: Tool[] = [
  {
    name: 'dsp-kitchen',
    category: 'signal processing',
    description:
      'Multi-channel signal processing and spike sorting, written once and run on any GPU (Vulkan, Metal, CUDA, ROCm) or the CPU. A desktop app, Rust crates, a Python package and a command line.',
    highlights: [
      'Filtering, whitening and spike sorting on the GPU',
      'Open .bin, .cbin, Zarr and NWB recordings',
      'Explore, sort, curate and analyze in one app',
    ],
    install: 'pip install dspk',
    repo: 'https://github.com/neuro-kitchen/dsp-kitchen',
  },
  {
    name: 'lumen',
    category: 'image analysis',
    description:
      'A GPU workstation for histology and microscopy: whole-slide and OME-Zarr images, annotation, pipelines and measurement tables.',
    highlights: [
      'Find tissue and cells, classify them, map their density',
      'Nucleus models (StarDist) and Segment Anything as plugins',
      'Every step recorded, and replayed over many slides from the command line',
    ],
  },
  {
    name: 'kitchen',
    category: 'shared foundation',
    description:
      'What the apps share: one look, one frame and one list of actions, so every tool works the same way, for people and for agents.',
    highlights: [
      'kitchen-ui on crates.io: design tokens, widgets, code and diff views, the chat and the activity timeline',
      'The frame: menus, search, Settings and a status bar with the running jobs',
      'An agent workspace, and the apps’ actions served to agents over MCP',
    ],
    install: 'cargo add kitchen-ui',
    repo: 'https://github.com/neuro-kitchen/kitchen',
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
    description: 'A local-first reference manager for collecting, reading and citing papers, on desktop and mobile.',
  },
];
