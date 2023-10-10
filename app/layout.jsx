'use client'
import './globals.css'
// import { Inter } from 'next/font/google'
import React from 'react';
import Header from './components/header'; // Import your Header component
import Footer from './components/footer'; // Import your Footer component
import { ThemeProvider } from './components/ThemeContext';
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The ACM@UIC marketplace',
  description: 'ACM@UIC\'s official merch store',
}

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en" className="w-full h-full">
        <body className="w-full h-full">
          <Header /> 
          <div>
          {children}
          </div>
          <Footer /> 
        </body>
      </html>
    </ThemeProvider>
  )
}
