
import React from 'react';
import { Code, GraduationCap, Megaphone, Users } from 'lucide-react';
import { Service, NavItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Custom web and mobile solutions tailored to your business needs using cutting-edge technologies.',
    icon: <Code className="w-8 h-8" />,
    path: '/software',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'academy',
    title: 'Academy',
    description: 'Empowering the next generation of tech leaders through industry-focused training and mentorship.',
    icon: <GraduationCap className="w-8 h-8" />,
    path: '/academy',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to amplify your brand presence and drive measurable growth.',
    icon: <Megaphone className="w-8 h-8" />,
    path: '/marketing',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'hr-recruitment',
    title: 'HR & Recruitment',
    description: 'Connecting top-tier talent with world-class organizations through strategic talent acquisition.',
    icon: <Users className="w-8 h-8" />,
    path: '/hr',
    color: 'from-emerald-500 to-teal-500'
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/#services' },
  { label: 'About Us', path: '/#about' },
  { label: 'Contact', path: '/#contact' }
];
