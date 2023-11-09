"use client"
import React from 'react';
import { ThemeProvider } from './Domain/ThemeContext';
import { CartContextProvider } from './Domain/cartContext';

export default function PageLayout({ children }) {
  return (
    <ThemeProvider>
      <CartContextProvider>
        {children}
      </CartContextProvider>
    </ThemeProvider>
  )
}