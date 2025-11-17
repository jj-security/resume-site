export default function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-20 py-6">
      <div className="container mx-auto px-6 text-center text-muted text-sm">
        <p>© {new Date().getFullYear()} Julian Johnson — All rights reserved.</p>
      </div>
    </footer>
  )
}
