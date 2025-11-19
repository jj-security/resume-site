import { Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-20 py-6">
      <div className="container mx-auto px-6 text-center text-muted text-sm flex flex-col items-center gap-3">


        {/* GitHub Icon with hover tooltip */}
        <a
          href="https://github.com/jj-security"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"   // ← Hover text here
          className="hover:text-primary transition flex items-center gap-2"
        >
          <Github className="w-5 h-5" />
          <span className="text-xs">github.com/jj-security</span>
        </a>
        
        <p>© {new Date().getFullYear()} Julian Johnson — All rights reserved.</p>


      </div>
    </footer>
  )
}
