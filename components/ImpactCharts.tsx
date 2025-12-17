import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const EFFICIENCY_DATA = [
  { name: 'Environment Setup', manual: 120, opencraft: 5, unit: 'mins' },
  { name: 'First PR Submission', manual: 4800, opencraft: 1200, unit: 'mins' }, // 80 hrs vs 20 hrs approx
  { name: 'Code Review Time', manual: 60, opencraft: 15, unit: 'mins' },
];

const HEALTH_DATA = [
  { month: 'Jan', traditional: 10, opencraft: 12 },
  { month: 'Feb', traditional: 12, opencraft: 18 },
  { month: 'Mar', traditional: 11, opencraft: 25 },
  { month: 'Apr', traditional: 15, opencraft: 35 },
  { month: 'May', traditional: 18, opencraft: 48 },
  { month: 'Jun', traditional: 20, opencraft: 65 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg shadow-xl">
        <p className="font-semibold text-slate-200">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }} className="text-sm">
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const ImpactCharts: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
              Measurable Impact
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Real metrics demonstrating efficiency gains and community health improvements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Chart 1: Efficiency Gains */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-sm">
            <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Time Savings Analysis</h3>
                <p className="text-slate-400 text-sm">Comparison of time spent on common tasks (Manual vs OpenCraft).</p>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={EFFICIENCY_DATA}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
                  <XAxis type="number" stroke="#94a3b8" fontSize={12} />
                  <YAxis dataKey="name" type="category" width={100} stroke="#94a3b8" fontSize={10} />
                  <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                  <Legend />
                  <Bar dataKey="manual" name="Traditional (Minutes)" fill="#475569" radius={[0, 4, 4, 0]} barSize={20} />
                  <Bar dataKey="opencraft" name="With OpenCraft (Minutes)" fill="#6366f1" radius={[0, 4, 4, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 2: Community Growth */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-sm">
            <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Contributor Retention</h3>
                <p className="text-slate-400 text-sm">Cumulative active contributors over 6 months.</p>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={HEALTH_DATA}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorOpenCraft" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorTrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#64748b" stopOpacity={0.5}/>
                      <stop offset="95%" stopColor="#64748b" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                  <YAxis stroke="#94a3b8" fontSize={12} />
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Area type="monotone" dataKey="traditional" name="Traditional Growth" stroke="#64748b" fillOpacity={1} fill="url(#colorTrad)" />
                  <Area type="monotone" dataKey="opencraft" name="OpenCraft Growth" stroke="#10b981" fillOpacity={1} fill="url(#colorOpenCraft)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ImpactCharts;