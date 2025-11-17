"use client"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Name */}
        <Link href="/" className="text-xl font-semibold text-primary hover:text-primary-light transition">
          julian@justsecure.org
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-foreground">
          <Link href="#about" className="hover:text-primary transition">About</Link>
          <Link href="#experience" className="hover:text-primary transition">Experience</Link>
          <Link href="#skills" className="hover:text-primary transition">Skills</Link>
          <Link href="#projects" className="hover:text-primary transition">Projects</Link>
          <Link href="#contact" className="hover:text-primary transition">Contact</Link>
          <Link href="#reading-list" className="hover:text-primary transition">Reading List</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground hover:text-primary transition"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7..." />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-4">
          <Link href="#about" className="block hover:text-primary">About</Link>
          <Link href="#experience" className="block hover:text-primary">Experience</Link>
          <Link href="#skills" className="block hover:text-primary">Skills</Link>
          <Link href="#projects" className="block hover:text-primary">Projects</Link>
          <Link href="#contact" className="block hover:text-primary">Contact</Link>
          <Link href="#contact" className="block hover:text-primary">Reading List</Link>
        </div>
      )}
    </header>
  )
}
