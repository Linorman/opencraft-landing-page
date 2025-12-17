import React from 'react';
import { Search, Network, Bot } from 'lucide-react';

const SolutionCard = ({ icon: Icon, title, desc, features, color }: any) => (
  <div className={`bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-${color} transition-all duration-300 hover:-translate-y-2`}>
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-${color}-500/10 text-${color}-500`}>
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
    <p className="text-slate-400 mb-6 min-h-[48px]">{desc}</p>
    <ul className="text-slate-500 text-sm space-y-3">
        {features.map((f: string, i: number) => (
            <li key={i} className="flex items-center">
                <span className={`w-1.5 h-1.5 rounded-full bg-${color}-500 mr-2`}></span>
                {f}
            </li>
        ))}
    </ul>
  </div>
);

const Solution: React.FC = () => {
  return (
    <section id="solution" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Our Solution
          </h2>
          <p className="text-xl text-slate-400">End-to-end enablement via three core pillars.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2 shadow-lg">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-indigo-500/10 text-indigo-500">
                    <Search className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Intelligent Analysis</h3>
                <p className="text-slate-400 mb-6">Deep repository understanding using AST parsing and knowledge graphs.</p>
                <ul className="text-slate-500 text-sm space-y-3">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2"></span>Multi-language parsing</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2"></span>Health scoring system</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2"></span>Task identification</li>
                </ul>
            </div>

            <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800 hover:border-emerald-500 transition-all duration-300 hover:-translate-y-2 shadow-lg">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-emerald-500/10 text-emerald-500">
                    <Network className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Smart Matching</h3>
                <p className="text-slate-400 mb-6">Connecting contributors to tasks based on skills and interests.</p>
                <ul className="text-slate-500 text-sm space-y-3">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>Contributor profiling</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>Path planning</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>Skill recommendations</li>
                </ul>
            </div>

            <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800 hover:border-amber-500 transition-all duration-300 hover:-translate-y-2 shadow-lg">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-amber-500/10 text-amber-500">
                    <Bot className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">AI Assistance</h3>
                <p className="text-slate-400 mb-6">Agents for setup, quality checks, and maintenance support.</p>
                <ul className="text-slate-500 text-sm space-y-3">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></span>One-click setup</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></span>Automated reviews</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></span>Knowledge extraction</li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;