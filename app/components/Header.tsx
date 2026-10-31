"use client"
import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header bg-background border-b border-border sticky top-0 z-50">
      <div className="site-header-inner container mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="site-brand text-xl font-semibold text-primary hover:text-primary-light transition"
        >
          whoisjj.dev
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav hidden md:flex space-x-8 items-center text-foreground" aria-label="Main navigation">
          
          <Link href="/#about" className="hover:text-primary transition">About</Link>
          <Link href="/#experience" className="hover:text-primary transition">Experience</Link>
          <Link href="/#skills" className="hover:text-primary transition">Skills</Link>
          <Link href="/#contact" className="hover:text-primary transition">Contact</Link>

        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="mobile-menu-button md:hidden text-foreground hover:text-primary transition"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {open && (
        <nav id="mobile-navigation" className="mobile-nav md:hidden bg-background border-t border-border px-6 py-4 space-y-4" aria-label="Mobile navigation">
          <Link href="/#about" onClick={() => setOpen(false)} className="block hover:text-primary">About</Link>
          <Link href="/#experience" onClick={() => setOpen(false)} className="block hover:text-primary">Experience</Link>
          <Link href="/#skills" onClick={() => setOpen(false)} className="block hover:text-primary">Skills</Link>
          <Link href="/#contact" onClick={() => setOpen(false)} className="block hover:text-primary">Contact</Link>
          {/* <Link href="/reading_list" onClick={() => setOpen(false)} className="block hover:text-primary">Reading List</Link> */}
        </nav>
      )}
    </header>
  )
}
