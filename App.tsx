import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Motivation from './components/Motivation';
import Solution from './components/Solution';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import DeveloperWorkflow from './components/DeveloperWorkflow';
import Features from './components/Features';
import DemoSection from './components/DemoSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-primary/30">
      <Navbar />
      
      <main>
        <Hero />
        <Motivation />
        <DeveloperWorkflow />
        <Solution />
        <ArchitectureDiagram />
        <Features />
        <DemoSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;