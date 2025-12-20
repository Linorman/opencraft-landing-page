import React from 'react';
import { Layers, Database, Cpu, Terminal, Share2, Server } from 'lucide-react';

// Reusable Layer Component
const ArchLayer = ({ title, color, children, icon: Icon }: any) => (
  <div className={`relative p-6 rounded-2xl border ${color} bg-slate-900/80 backdrop-blur-sm transition-all hover:shadow-lg hover:scale-[1.01]`}>
    <div className="absolute -top-3 left-6 px-3 py-1 bg-slate-950 border border-slate-800 rounded-full text-xs font-bold text-slate-300 flex items-center gap-2">
      <Icon size={14} />
      {title}
    </div>
    <div className="flex flex-wrap gap-4 justify-center pt-2">
      {children}
    </div>
  </div>
);

// Reusable Component Box
const ArchBox = ({ label, sub, activeColor }: any) => (
  <div className={`group flex flex-col items-center justify-center p-3 w-32 md:w-40 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-${activeColor}-500/50 transition-colors cursor-default`}>
    <span className="text-sm font-semibold text-slate-200 text-center">{label}</span>
    {sub && <span className={`text-[10px] ${activeColor === 'primary' ? 'text-indigo-400' : activeColor === 'secondary' ? 'text-emerald-400' : 'text-amber-400'}`}>{sub}</span>}
  </div>
);

const ConnectionLine = () => (
    <div className="hidden md:flex h-8 w-px bg-slate-700 mx-auto my-2 relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-700 rotate-45"></div>
    </div>
);

const ArchitectureDiagram: React.FC = () => {
  return (
    <section id="architecture" className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary">
                System Architecture
                </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                A modular, layered design ensuring scalability and type-safety.
            </p>
            </div>

            <div className="space-y-2">
                {/* Client Layer */}
                <ArchLayer title="Client Layer" color="border-indigo-500/30 shadow-indigo-500/10" icon={Terminal}>
                    <ArchBox label="CLI" sub="Typer" activeColor="primary" />
                    <ArchBox label="Web UI" sub="Gradio" activeColor="primary" />
                </ArchLayer>

                <ConnectionLine />

                {/* Agent Layer */}
                <ArchLayer title="Agent Layer (PydanticAI)" color="border-amber-500/30 shadow-amber-500/10" icon={Cpu}>
                    <ArchBox label="Repo Analyzer" sub="Tree-sitter" activeColor="accent" />
                    <ArchBox label="Matchmaker" sub="Ranking" activeColor="accent" />
                    <ArchBox label="Env Forge" sub="Docker/Conda" activeColor="accent" />
                    <ArchBox label="PR Quality" sub="Linter" activeColor="accent" />
                    <ArchBox label="Maintainer" sub="Triage" activeColor="accent" />
                </ArchLayer>

                <ConnectionLine />

                {/* Services Layer */}
                <ArchLayer title="Services Layer" color="border-emerald-500/30 shadow-emerald-500/10" icon={Share2}>
                    <ArchBox label="GraphRAG" sub="Hybrid Search" activeColor="secondary" />
                    <ArchBox label="Knowledge" sub="Management" activeColor="secondary" />
                    <ArchBox label="LangChain" sub="Orchestration" activeColor="secondary" />
                </ArchLayer>

                <ConnectionLine />

                {/* Storage Layer */}
                <ArchLayer title="Storage Layer" color="border-green-500/30 shadow-green-500/10" icon={Database}>
                    <ArchBox label="Graph Store" sub="SQLite/Neo4j" activeColor="secondary" />
                    <ArchBox label="Vector Store" sub="ChromaDB" activeColor="secondary" />
                    <ArchBox label="File Storage" sub="Local/S3" activeColor="secondary" />
                </ArchLayer>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <p className="text-indigo-400 font-bold text-lg">Type-Safe</p>
                    <p className="text-slate-500 text-xs">End-to-end Pydantic validation</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <p className="text-amber-400 font-bold text-lg">Modular</p>
                    <p className="text-slate-500 text-xs">Independent agent workflows</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <p className="text-emerald-400 font-bold text-lg">Scalable</p>
                    <p className="text-slate-500 text-xs">Async I/O optimized</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <p className="text-purple-400 font-bold text-lg">Universal</p>
                    <p className="text-slate-500 text-xs">Multi-language support</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ArchitectureDiagram;