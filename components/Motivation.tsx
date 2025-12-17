import React from 'react';
import { AlertCircle, Clock, Database, ChevronRight } from 'lucide-react';

const ProblemCard = ({ icon: Icon, title, description, color }: any) => (
  <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-800/30 transition-colors">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <h4 className="font-semibold text-lg mb-2 text-slate-200">{title}</h4>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  </div>
);

const VisionItem = ({ title, desc, colorClass }: any) => (
  <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-5 hover:border-slate-600 transition-all group">
    <div className="flex items-center space-x-3 mb-2">
      <div className={`w-2 h-8 rounded-full ${colorClass}`}></div>
      <h4 className="font-semibold text-white group-hover:text-slate-200 transition-colors">{title}</h4>
    </div>
    <p className="text-slate-400 text-sm pl-5">{desc}</p>
  </div>
);

const Motivation: React.FC = () => {
  return (
    <section id="motivation" className="py-24 bg-slate-900 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">OpenCraft?</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Open source is broken. We fixed it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Problem Column */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold mb-8 text-white pl-4 border-l-4 border-red-500">The Bottlenecks</h3>
            <div className="space-y-6">
              <ProblemCard 
                icon={AlertCircle}
                title="High Entry Barrier"
                description="New contributors struggle with complex codebases, environment setup hell, and finding suitable first issues."
                color="bg-red-500/20 text-red-400"
              />
              <ProblemCard 
                icon={Clock}
                title="Maintainer Burnout"
                description="Maintainers drown in low-quality PRs, repetitive questions, and onboarding tasks, leaving no time for innovation."
                color="bg-orange-500/20 text-orange-400"
              />
              <ProblemCard 
                icon={Database}
                title="Knowledge Loss"
                description="Valuable insights in PR discussions and reviews are ephemeral, buried in closed threads rather than a structured knowledge base."
                color="bg-yellow-500/20 text-yellow-400"
              />
            </div>
          </div>

          {/* Solution Column */}
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary opacity-10 blur-2xl rounded-3xl"></div>
             <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Database size={100} />
                </div>
                
                <h3 className="text-2xl font-bold mb-8 text-white">The Vision</h3>
                
                <div className="space-y-4">
                    <VisionItem 
                        title="Frictionless Contribution"
                        desc="Automated environment setup and intelligent task matching."
                        colorClass="bg-primary"
                    />
                    <VisionItem 
                        title="Liberated Maintainers"
                        desc="AI agents handle triage, initial reviews, and FAQ generation."
                        colorClass="bg-secondary"
                    />
                    <VisionItem 
                        title="Sustainable Ecosystem"
                        desc="A self-healing knowledge graph that grows with every interaction."
                        colorClass="bg-accent"
                    />
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Motivation;