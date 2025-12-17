import React from 'react';
import { Terminal, FileCode, CheckCircle, Database, ArrowRight } from 'lucide-react';

const WORKFLOW_STEPS = [
  {
    id: 'analyze',
    title: 'Repo Analysis',
    icon: FileCode,
    description: 'Parses code into Abstract Syntax Trees (AST) to understand dependency structures.',
  },
  {
    id: 'match',
    title: 'Task Matching',
    icon: Database,
    description: 'Matches contributor skills to open issues using vector similarity search.',
  },
  {
    id: 'env',
    title: 'Env Forge',
    icon: Terminal,
    description: 'Generates deterministic Docker/Conda environments based on repo analysis.',
  },
  {
    id: 'audit',
    title: 'PR Pre-Flight',
    icon: CheckCircle,
    description: 'Simulates PR impact and checks compliance before submission.',
  }
];

const DeveloperWorkflow: React.FC = () => {
  return (
    <section id="workflow" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-indigo-400 to-secondary">
              Developer Workflow
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            From analysis to merge. See how OpenCraft automates the hard parts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WORKFLOW_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="relative bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:bg-slate-800 transition-all duration-300 group hover:-translate-y-2 hover:border-slate-700"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-sm font-bold text-slate-500 group-hover:border-primary group-hover:text-primary transition-colors shadow-lg">
                  {index + 1}
                </div>
                
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-primary/10 group-hover:text-primary text-slate-400">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow between steps (desktop only, except last) */}
                {index < WORKFLOW_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 text-slate-800 z-10">
                    <ArrowRight size={24} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DeveloperWorkflow;