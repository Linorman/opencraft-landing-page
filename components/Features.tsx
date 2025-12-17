import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Key Features
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive tools for every stage of the open source lifecycle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <div 
                key={idx}
                className="group bg-slate-950 rounded-2xl p-6 border border-slate-800 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105"
            >
                <div className={`w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-4 ${feature.colorClass} group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-slate-400 text-sm mb-6 min-h-[60px]">
                    {feature.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-2 py-1 bg-slate-900 border border-slate-800 rounded text-xs text-slate-400 font-medium">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;