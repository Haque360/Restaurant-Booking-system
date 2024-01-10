import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <main className="bg-gray-100 min-h-screen w-screen">
            <main className="max-w-screen-2xl m-auto bg-white">
              {/* NAVBAR */}
              <Navbar/>
              {/* NAVBAR */}
              <main>
                {/* HEADER */}
                {/* HEADER */} 
                {/* CARDS */}
                {children}
                {/* CARDS */}
              </main>
            </main>
          </main>
        
       </body>
    </html>
  )
}
