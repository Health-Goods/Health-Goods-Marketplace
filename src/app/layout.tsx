import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Navigation from './components/navigation';
import Footer from './components/navigation/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Health Goods Marketplace',
  description: 'Ecommerce site to find all of your health-related products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
