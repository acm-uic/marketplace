"use client"
import React from 'react';
import { ThemeProvider } from './Domain/ThemeContext';
import { CartContextProvider } from './Domain/cartContext';
import { ProductProvider } from "./Domain/ProductContext";


export default function PageLayout({ children }) {
  return (
    <ThemeProvider>
      <ProductProvider>
        <CartContextProvider>
          {children}
        </CartContextProvider>
      </ProductProvider>
    </ThemeProvider>
  )
}