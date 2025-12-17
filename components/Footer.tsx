import React from 'react';
import { Cpu, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">OpenCraft</span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm mb-6">
              Empowering the next generation of open source collaboration through intelligent agents, knowledge graphs, and automated workflows.
            </p>
            <div className="flex space-x-4">
                <a href="https://github.com/Linorman/OpenCraft.git" className="text-slate-400 hover:text-white transition-colors">
                    <Github className="w-6 h-6" />
                </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="https://github.com/Linorman/OpenCraft.git" className="hover:text-primary transition-colors">Repository</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Issue Tracker</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {['PydanticAI', 'LangGraph', 'LightRAG', 'Tree-sitter', 'React', 'Gradio'].map((tech) => (
                <span key={tech} className="px-2 py-1 bg-slate-900 border border-slate-800 rounded text-xs text-slate-400">
                    {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} OpenCraft. Released under the MIT License.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;