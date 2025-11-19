"use client"
import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"

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

          {/* CTF Walkthroughs */}
          <a
            href="https://walkthroughs.justsecure.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            CTF Walkthroughs
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground hover:text-primary transition"
        >
          <Menu className="w-6 h-6" />
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

          {/* CTF Walkthroughs */}
          <a
            href="https://walkthroughs.justsecure.org"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-primary"
          >
            CTF Walkthroughs
          </a>
        </div>
      )}
    </header>
  )
}
