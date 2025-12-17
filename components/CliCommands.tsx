import React from 'react';
import { CLI_COMMANDS } from '../constants';

const CliCommands: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">CLI Reference</h2>
          <p className="text-slate-400">Powerful commands at your fingertips.</p>
        </div>

        <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-900 border-b border-slate-800">
                  <th className="py-4 px-6 font-semibold text-slate-300">Command</th>
                  <th className="py-4 px-6 font-semibold text-slate-300">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {CLI_COMMANDS.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/50 transition-colors">
                    <td className="py-4 px-6 font-mono text-sm text-primary-light">
                        {item.command}
                    </td>
                    <td className="py-4 px-6 text-slate-400 text-sm">
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CliCommands;