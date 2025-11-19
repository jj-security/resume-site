"use client"
import Link from "next/link"
import { useState } from "react"
import { Github } from "lucide-react"    // ← add this

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo / Name */}
        <Link
          href="/"
          className="text-xl font-semibold text-primary hover:text-primary-light transition"
        >
          justsecure.org
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center text-foreground">
          <Link href="/#about" className="hover:text-primary transition">About</Link>
          <Link href="/#experience" className="hover:text-primary transition">Experience</Link>
          <Link href="/#skills" className="hover:text-primary transition">Skills</Link>
          <Link href="/#contact" className="hover:text-primary transition">Contact</Link>
          <Link href="/reading_list" className="hover:text-primary transition">Reading List</Link>

          {/* GitHub Icon */}
          <Link
            href="https://github.com/jj-security"
            target="_blank"
            className="hover:text-primary transition flex items-center"
          >
            <Github className="w-5 h-5" />
          </Link>
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
          <Link href="/#about" className="block hover:text-primary">About</Link>
          <Link href="/#experience" className="block hover:text-primary">Experience</Link>
          <Link href="/#skills" className="block hover:text-primary">Skills</Link>
          <Link href="/#contact" className="block hover:text-primary">Contact</Link>
          <Link href="/reading_list" className="block hover:text-primary">Reading List</Link>

          {/* Mobile GitHub Icon */}
          <Link
            href="https://github.com/jj-security"
            target="_blank"
            className="block hover:text-primary flex items-center"
          >
            <Github className="w-5 h-5" />
          </Link>
        </div>
      )}
    </header>
  )
}
