"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu } from "lucide-react"

export default function Header() {
  const [open, setOpen] = useState(false)
  const [isWalkthroughSite, setIsWalkthroughSite] = useState(false)

  // Detect which domain we are on
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsWalkthroughSite(
        window.location.hostname.includes("walkthroughs.")
      )
    }
  }, [])

  // If we are on walkthroughs.justsecure.org,
  // anchor links should point to the main site instead.
  const root = isWalkthroughSite
    ? "https://justsecure.org"
    : ""

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href={isWalkthroughSite ? "https://justsecure.org" : "/"}
          className="text-xl font-semibold text-primary hover:text-primary-light transition"
        >
          justsecure.org
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center text-foreground">
          
          <Link href={`${root}/#about`} className="hover:text-primary transition">About</Link>
          <Link href={`${root}/#experience`} className="hover:text-primary transition">Experience</Link>
          <Link href={`${root}/#skills`} className="hover:text-primary transition">Skills</Link>
          <Link href={`${root}/#contact`} className="hover:text-primary transition">Contact</Link>
          <Link href={`${root}/reading_list`} className="hover:text-primary transition">Reading List</Link>

          {/* CTF Walkthroughs */}
          {/* <Link
            href="https://walkthroughs.justsecure.org"
            className="hover:text-primary transition"
          >
            CTF Walkthroughs
          </Link> */}
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
          <Link href={`${root}/#about`} className="block hover:text-primary">About</Link>
          <Link href={`${root}/#experience`} className="block hover:text-primary">Experience</Link>
          <Link href={`${root}/#skills`} className="block hover:text-primary">Skills</Link>
          <Link href={`${root}/#contact`} className="block hover:text-primary">Contact</Link>
          <Link href={`${root}/reading_list`} className="block hover:text-primary">Reading List</Link>

          {/* <Link
            href="https://walkthroughs.justsecure.org"
            className="block hover:text-primary"
          >
            CTF Walkthroughs
          </Link> */}
        </div>
      )}
    </header>
  )
}
