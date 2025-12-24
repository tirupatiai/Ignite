
import React from 'react';
import { Code, GraduationCap, Megaphone, Users, Box } from 'lucide-react';
import { Service, NavItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Engineering high-performance applications with modern tech stacks and AI-driven automation.',
    icon: <Code className="w-8 h-8" />,
    path: '/software',
    color: 'from-blue-500 to-cyan-500',
    subCategories: [
      {
        title: 'Custom Software Development',
        items: ['Web & Mobile Application Development', 'Enterprise Application Development', 'SaaS Product Development']
      },
      {
        title: 'AI & Automation',
        items: ['AI-Powered Automation Solutions', 'Intelligent Document Processing', 'Chatbots & Virtual Assistants', 'Workflow Automation']
      },
      {
        title: 'Data & Analytics',
        items: ['Big Data Engineering', 'Business Intelligence & Dashboards', 'Predictive Analytics', 'Data Warehousing Solutions']
      },
      {
        title: 'Product Engineering',
        items: ['MVP Development', 'Product Modernization', 'API Development & Integration', 'Cloud-Native Applications']
      },
      {
        title: 'Design & Modeling',
        items: ['3D Modeling & CAD Design', 'Industrial & Product Design', 'Simulation & Prototyping', 'Digital Twin Solutions']
      },
      {
        title: 'Technology Consulting',
        items: ['Architecture & Solution Design', 'Cloud & DevOps Consulting', 'Security & Compliance Advisory']
      }
    ]
  },
  {
    id: 'academy',
    title: 'Academy',
    description: 'Empowering the next generation of tech leaders through industry-focused training and mentorship.',
    icon: <GraduationCap className="w-8 h-8" />,
    path: '/academy',
    color: 'from-orange-500 to-red-500',
    subCategories: [
      {
        title: 'Training Programs',
        items: ['Software Development Courses', 'AI, Data & Analytics Programs', 'Cloud & DevOps Training', '3D Modeling & Design Tools']
      },
      {
        title: 'Corporate Learning',
        items: ['Corporate Upskilling Programs', 'Customized Training Workshops', 'Onsite & Virtual Training']
      },
      {
        title: 'Workshops & Seminars',
        items: ['Industry Expert Workshops', 'Technology Awareness Sessions', 'Career Guidance Seminars']
      },
      {
        title: 'Certification & Skill Building',
        items: ['Certification Preparation Programs', 'Skill-Based Learning Tracks', 'Project-Based Learning']
      },
      {
        title: 'Students & Institutions',
        items: ['School & College Training Programs', 'Faculty Development Programs', 'Internship & Apprenticeship Programs']
      },
      {
        title: 'Learning Resources',
        items: ['Recorded Courses', 'Study Materials', 'Webinars & Events']
      }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to amplify your brand presence and drive measurable growth.',
    icon: <Megaphone className="w-8 h-8" />,
    path: '/marketing',
    color: 'from-purple-500 to-pink-500',
    subCategories: [
      {
        title: 'Digital Strategy',
        items: ['Digital Transformation Strategy', 'Go-To-Market Planning', 'Growth & Performance Strategy']
      },
      {
        title: 'Branding & Creative',
        items: ['Brand Identity & Positioning', 'Logo & Visual Design', 'Content Creation']
      },
      {
        title: 'Performance Marketing',
        items: ['SEO & SEM', 'Social Media Advertising', 'Lead Generation Campaigns']
      },
      {
        title: 'Social Media & Content',
        items: ['Social Media Management', 'Content Marketing', 'Video & Influencer Marketing']
      },
      {
        title: 'Web & Experience',
        items: ['Website Design & Development', 'Landing Page Optimization', 'UI/UX Design']
      },
      {
        title: 'Analytics & Optimization',
        items: ['Marketing Analytics & Reporting', 'Conversion Rate Optimization', 'Campaign Performance Tracking']
      }
    ]
  },
  {
    id: 'hr-recruitment',
    title: 'HR & Recruitment',
    description: 'Connecting top-tier talent with world-class organizations through strategic talent acquisition.',
    icon: <Users className="w-8 h-8" />,
    path: '/hr',
    color: 'from-emerald-500 to-teal-500',
    subCategories: [
      {
        title: 'Recruitment Services',
        items: ['Permanent Staffing', 'Contract & Temporary Staffing', 'Executive Search', 'Bulk & Campus Hiring']
      },
      {
        title: 'IT & Specialized Hiring',
        items: ['IT & Digital Talent Hiring', 'Data, AI & Engineering Recruitment', 'Niche Skill Hiring']
      },
      {
        title: 'HR Consulting',
        items: ['Workforce Planning', 'Talent Strategy & Advisory', 'HR Process Optimization']
      },
      {
        title: 'Third-Party Hiring Support',
        items: ['RPO (Recruitment Process Outsourcing)', 'Vendor & Partner Hiring Management']
      },
      {
        title: 'Career Services',
        items: ['Resume Building', 'Interview Preparation', 'Career Counseling']
      },
      {
        title: 'HR Events & Engagement',
        items: ['Job Fairs & Hiring Drives', 'Employer Branding Events', 'Campus Recruitment Programs']
      }
    ]
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { 
    label: 'Services', 
    path: '#services',
    children: [
      { label: 'Software Development', path: '/software' },
      { label: 'Academy', path: '/academy' },
      { label: 'Digital Marketing', path: '/marketing' },
      { label: 'HR & Recruitment', path: '/hr' }
    ]
  },
  { label: 'Ignite Products', path: '/products' },
  { label: 'About Us', path: '/#about' },
  { label: 'Contact', path: '/#contact' }
];
