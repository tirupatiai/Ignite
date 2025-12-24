
import React from 'react';

export interface SubService {
  title: string;
  items: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  color: string;
  subCategories?: SubService[];
}

export interface NavItem {
  label: string;
  path: string;
  children?: { label: string; path: string }[];
}
