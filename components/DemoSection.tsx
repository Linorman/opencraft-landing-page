import React, { useState } from 'react';
import { Copy, Check, Play, Terminal, ExternalLink } from 'lucide-react';

const DemoSection: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const steps = [
    { label: 'Clone Repository', cmd: 'git clone https://github.com/Linorman/OpenCraft.git' },
    { label: 'Install Dependencies', cmd: 'pip install -e .' },
    { label: 'Analyze Repository', cmd: 'opencraft analyze run <Repo Url>' },
    { label: 'Launch Web UI', cmd: 'opencraft webui' },
  ];

  return (
    <section id="demo" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">See It In Action</h2>
          <p className="text-xl text-slate-400 mb-6">Watch the workflow or try it yourself.</p>
          <a
            href="http://wrt.linorman.org:12100"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark rounded-xl text-white font-semibold text-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(99,102,241,0.4)]"
          >
            Try Live Demo
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video 实际播放 */}
          <div className="relative group rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl aspect-video flex items-center justify-center">
            <video
              className="w-full h-full object-cover"
              src="/opencraft-landing-page/demo-1.mp4"
              controls
              poster="https://placehold.co/800x450/020617/fff?text=OpenCraft+Demo"
            >
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-4 left-4 right-4 text-center pointer-events-none">
              <p className="text-sm text-slate-300 bg-black/50 backdrop-blur px-3 py-1 rounded-full inline-block">
                Full walkthrough (3:45)
              </p>
            </div>
          </div>

          {/* Quick Start */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
                <Terminal className="text-primary" />
                <h3 className="text-2xl font-bold text-white">Quick Start</h3>
            </div>
            
            {steps.map((step, idx) => (
              <div key={idx} className="bg-slate-900 rounded-xl p-4 border border-slate-800 transition-colors hover:border-slate-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{step.label}</span>
                  <button 
                    onClick={() => copyToClipboard(step.cmd, idx)}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 text-xs"
                  >
                    {copiedIndex === idx ? (
                      <><Check size={14} className="text-green-500" /> Copied</>
                    ) : (
                      <><Copy size={14} /> Copy</>
                    )}
                  </button>
                </div>
                <code className="block font-mono text-sm text-emerald-400 bg-black/30 p-2 rounded overflow-x-auto">
                  {step.cmd.startsWith('git') || step.cmd.startsWith('pip') ? '$ ' : '> '}{step.cmd}
                </code>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;