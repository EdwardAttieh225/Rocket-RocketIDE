import React from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { AppPage } from '../App';

interface PageRoadmapProps {
  onNavigate: (page: AppPage) => void;
}

const milestones = [
  { name: 'Native game runtime foundation', detail: 'Core game types, lifecycle, input, and window integration.' },
  { name: 'Textures, canvases, and display', detail: 'Texture rendering, offscreen canvases, and display controls.' },
  { name: 'Blending, shaders, and post-processing', detail: 'Rendering effects and programmable graphics.' },
  { name: 'Audio and streamed music', detail: 'Sound playback and music streaming.' },
  { name: 'Managed game assets', detail: 'The rocket.assets module and asset lifecycle.' },
  { name: 'Rendered game UI', detail: 'The rocket.ui.render module for game interfaces.' },
];

export const PageRoadmap: React.FC<PageRoadmapProps> = ({ onNavigate }) => (
  <div className="space-y-8 animate-in fade-in duration-300 py-4 max-w-4xl mx-auto">
    <div className="border-b border-neutral-800 pb-6">
      <button onClick={() => onNavigate('intro')} className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 mb-3">
        <ArrowLeft className="w-3.5 h-3.5" /> Overview
      </button>
      <p className="text-xs font-semibold text-orange-400 uppercase tracking-widest">Rocket SDK</p>
      <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mt-2">Roadmap</h1>
      <p className="text-sm text-neutral-300 leading-relaxed mt-4 max-w-3xl">
        These game development milestones are integrated in Rocket master commit <a href="https://github.com/RyanEid06/Rocket/commit/1f6ba76f16f3246095d5d573c28d825d8b9367e3" target="_blank" rel="noreferrer" className="text-orange-300 hover:underline">1f6ba76</a>, the source recorded for the published SDKs. The compiler reports version 3.0.0; the game APIs in this source are documented under the Rocket 3.5 roadmap.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {milestones.map((milestone) => (
        <section key={milestone.name} className="rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h2 className="text-sm font-semibold text-white">{milestone.name}</h2>
              <p className="text-xs leading-relaxed text-neutral-400 mt-2">{milestone.detail}</p>
            </div>
          </div>
        </section>
      ))}
    </div>

    <section className="rounded-xl border border-orange-500/30 bg-neutral-950 p-6">
      <p className="text-xs font-semibold text-orange-400 uppercase tracking-widest">Final release gate</p>
      <h2 className="text-lg font-display font-bold text-white mt-2">Scroll2Roll readiness</h2>
      <p className="text-sm leading-relaxed text-neutral-300 mt-3">
        The source repository records 307 passing checks in each local Windows Debug and Release suite. Cross-platform workflow artifacts remain the final evidence gate before claiming full readiness across supported systems.
      </p>
      <div className="flex flex-wrap gap-4 mt-5 text-xs">
        <a href="https://github.com/RyanEid06/Rocket/blob/master/docs/ROCKET_3_5_ROADMAP_IMPLEMENTATION.md" target="_blank" rel="noreferrer" className="text-orange-300 hover:underline inline-flex items-center gap-1">Source roadmap <ExternalLink className="w-3 h-3" /></a>
        <a href="https://github.com/RyanEid06/Rocket/blob/master/docs/ROCKET_3_5_WP7_EVIDENCE.md" target="_blank" rel="noreferrer" className="text-orange-300 hover:underline inline-flex items-center gap-1">Readiness evidence <ExternalLink className="w-3 h-3" /></a>
      </div>
    </section>

    <button onClick={() => onNavigate('download-lang')} className="text-sm font-semibold text-white hover:text-orange-300 inline-flex items-center gap-2">
      View verified SDK downloads <ArrowRight className="w-4 h-4" />
    </button>
  </div>
);
