"use client"
import React from 'react';
import { ThemeProvider } from './components/ThemeContext';

export default function PageLayout({children}){
  return(
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}