import { ReactNode } from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: ReactNode;
  tags: string[];
  colorClass: string;
}

export interface CommandItem {
  command: string;
  description: string;
}

export interface StatItem {
  value: number;
  label: string;
  suffix?: string;
  color: 'primary' | 'secondary' | 'accent';
}