import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'

export const metadata: Metadata = {
  title: 'Julian Johnson - Security Analyst',
  description: 'Cybersecurity Resume',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-terminal-surface text-white">
        {/* Header on every page */}
        <Header />

        {/* Page content */}
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}

