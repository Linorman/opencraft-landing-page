import React, { useEffect, useState } from 'react';
import { HERO_STATS } from '../constants';
import { ArrowRight, Github } from 'lucide-react';

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smooth finish
      const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);
      
      setCount(Math.floor(easeOutQuart(percentage) * end));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-float opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] animate-float opacity-50" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.05),transparent_70%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            OpenCraft
          </span>
          <br />
          <span className="text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent mt-2 inline-block">
            Collaboration Evolved
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Lower the barrier to contribution, enhance maintainer efficiency, and cultivate a healthy open-source community with AI agents.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#demo"
            className="group relative px-8 py-4 bg-primary hover:bg-primary-dark rounded-xl text-white font-semibold text-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(99,102,241,0.4)] flex items-center"
          >
            View Demo
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://github.com/Linorman/OpenCraft.git"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-xl text-white font-semibold text-lg transition-all hover:scale-105 flex items-center"
          >
            <Github className="mr-2 w-5 h-5" />
            Start on GitHub
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto border-t border-slate-800 pt-8">
          {HERO_STATS.map((stat, index) => (
            <div key={index} className="text-center group cursor-default">
              <div className={`text-4xl md:text-5xl font-bold mb-2 transition-colors duration-300 ${
                stat.color === 'primary' ? 'text-primary group-hover:text-primary-light' :
                stat.color === 'secondary' ? 'text-secondary group-hover:text-secondary-light' :
                'text-accent group-hover:text-accent-light'
              }`}>
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-slate-500 text-sm md:text-base font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;