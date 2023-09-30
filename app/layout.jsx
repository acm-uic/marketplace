import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The ACM@UIC marketplace',
  description: 'ACM@UIC\'s official merch store',
}
import { DarkModeProvider } from './context/DarkModeContext.js'

export default function RootLayout({ children }) {
  return (
    <DarkModeProvider>
    <html lang="en" className='w-full h-full'>
      {/* <body className={inter.className}>{children}</body> */}
      <body className='w-full h-full'>{children}</body>
    </html>
    </DarkModeProvider>
  )
}
