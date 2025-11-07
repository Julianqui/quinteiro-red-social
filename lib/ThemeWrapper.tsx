'use client';

import { useEffect } from 'react';

export const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Siempre aplicar modo oscuro
    const root = document.documentElement;
    const body = document.body;
    
    root.classList.add('dark');
    body.classList.add('dark');
  }, []);

  return <>{children}</>;
};

