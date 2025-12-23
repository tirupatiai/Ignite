
// Fix: Import React to resolve React.ReactNode namespace error
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  color: string;
}

export interface NavItem {
  label: string;
  path: string;
}