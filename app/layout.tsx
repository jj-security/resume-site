import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'

export const metadata = {
  title: "Julian Johnson - Security Analyst",
  description: "Security Analyst Resume",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

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

