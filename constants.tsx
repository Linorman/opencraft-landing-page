import React from 'react';
import { NavLink, FeatureItem, CommandItem, StatItem } from './types';
import { 
  Code2, 
  GitPullRequest, 
  Terminal, 
  Cpu, 
  Users, 
  BookOpen, 
  Activity,
  Zap,
  ShieldCheck
} from 'lucide-react';

export const NAV_LINKS: NavLink[] = [
  { label: 'Motivation', href: '#motivation' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Solution', href: '#solution' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Features', href: '#features' },
  { label: 'Demo', href: '#demo' },
];

export const HERO_STATS: StatItem[] = [
  { value: 12, label: 'Languages Supported', suffix: '+', color: 'primary' },
  { value: 5, label: 'AI Agents', color: 'secondary' },
  { value: 4, label: 'Query Modes', color: 'accent' },
];

export const FEATURES: FeatureItem[] = [
  {
    title: 'Repository Analyzer',
    description: 'Deep code structure analysis using Tree-sitter AST parsing with support for 10+ programming languages.',
    icon: <Code2 className="w-6 h-6" />,
    tags: ['Python', 'JS/TS', 'Go', 'Rust'],
    colorClass: 'text-primary'
  },
  {
    title: 'Contribution Matchmaker',
    description: 'Bidirectional intelligent matching between contributors and tasks with personalized path planning.',
    icon: <Users className="w-6 h-6" />,
    tags: ['Profiling', 'Skill Matching'],
    colorClass: 'text-secondary'
  },
  {
    title: 'Environment Forge',
    description: 'One-click full-stack environment setup with intelligent dependency conflict resolution.',
    icon: <Terminal className="w-6 h-6" />,
    tags: ['Docker', 'Conda', 'Poetry'],
    colorClass: 'text-accent'
  },
  {
    title: 'PR Quality Suite',
    description: 'AI PR coach with pre-submission checks, impact prediction, and auto-generated descriptions.',
    icon: <GitPullRequest className="w-6 h-6" />,
    tags: ['Risk Assessment', 'Simulation'],
    colorClass: 'text-purple-400'
  },
  {
    title: 'Maintainer Command Center',
    description: 'Intelligent PR classification, community health metrics dashboard, and batch operations.',
    icon: <ShieldCheck className="w-6 h-6" />,
    tags: ['Auto-routing', 'Health Alerts'],
    colorClass: 'text-pink-400'
  },
  {
    title: 'Knowledge Management',
    description: 'Knowledge card extraction from PR discussions with semantic search across the knowledge base.',
    icon: <BookOpen className="w-6 h-6" />,
    tags: ['How-to', 'FAQ Generation'],
    colorClass: 'text-cyan-400'
  }
];

export const CLI_COMMANDS: CommandItem[] = [
  { command: 'opencraft analyze run', description: 'Analyze a repository and build knowledge graph' },
  { command: 'opencraft query run', description: 'Query the knowledge graph with natural language' },
  { command: 'opencraft report run', description: 'Generate comprehensive analysis reports' },
  { command: 'opencraft env setup', description: 'Setup development environment' },
  { command: 'opencraft match find', description: 'Find matching contribution tasks' },
  { command: 'opencraft pr check', description: 'Check PR quality before submission' },
  { command: 'opencraft webui', description: 'Launch web interface' },
];