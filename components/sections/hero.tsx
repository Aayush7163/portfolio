"use client"

import { Download, ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 px-4 sm:px-6 lg:px-8 flex items-center bg-gradient-to-br from-background via-background to-secondary">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left Column - Text */}
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground text-center md:text-left">
              Hello ! 'm Aayush Regmi
            </h1>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            BCA – 3rd Semester Student at Everest Innovative College, Kalanki, Kathmandu, Nepal | DevOps Intern since
            December 2025. Passionate about cloud infrastructure, automation, and full-stack development.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all transform hover:scale-105 font-semibold shadow-md hover:shadow-lg"
            >
              View My Projects <ArrowRight size={18} />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all font-semibold"
            >
              <Download size={18} /> Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 pt-4">
            {[
              { icon: "🔗", label: "LinkedIn", href: "https://something.com" },
              { icon: "🐙", label: "GitHub", href: "https://github.com/Aayush7163" },
              { icon: "✉️", label: "Email", href: "mailto:aayushregmi018@gmail.com" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                title={social.label}
                className="text-2xl hover:scale-110 transition-transform"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative hidden md:block">
          <div className="relative w-full aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl border border-border"></div>
            <img
              src="/aayushh.png"
              alt="aayush portrait"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
