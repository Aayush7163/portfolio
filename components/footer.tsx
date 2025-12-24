export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary/20 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-primary-foreground/80">
              © {currentYear} Aayush Regmi. Built with Next.js & Tailwind CSS.
            </p>
          </div>

          <div className="flex gap-6">
            {[
              { label: "GitHub", href: "https://github.com/Aayush7163" },
              { label: "LinkedIn", href: "https://something.com" },
              { label: "Email", href: "mailto:aayushregmi018@gmail.com" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
