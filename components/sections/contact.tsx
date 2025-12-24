"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Linkedin, Github, Phone } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for reaching out! I will get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground">
            I'm always open to new opportunities, collaborations, and interesting conversations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-accent focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-accent focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-accent focus:outline-none transition-colors resize-none text-foreground placeholder:text-muted-foreground"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all transform hover:scale-105 font-semibold shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-background border border-border rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <Phone className="text-accent mt-1" size={20} />
                <div>
                  <p className="font-semibold text-foreground mb-1">Phone</p>
                  <a href="tel:9813967163" className="text-muted-foreground hover:text-accent transition-colors">
                    +977 9813967163
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-background border border-border rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <Mail className="text-accent mt-1" size={20} />
                <div>
                  <p className="font-semibold text-foreground mb-1">Email</p>
                  <a
                    href="mailto:aayushregmi018@gmail.com"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    aayushregmi018@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-background border border-border rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <Linkedin className="text-accent mt-1" size={20} />
                <div>
                  <p className="font-semibold text-foreground mb-1">LinkedIn</p>
                  <a href="https://something.com" className="text-muted-foreground hover:text-accent transition-colors">
                    something.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-background border border-border rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <Github className="text-accent mt-1" size={20} />
                <div>
                  <p className="font-semibold text-foreground mb-1">GitHub</p>
                  <a
                    href="https://github.com/Aayush7163"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    github.com/Aayush7163
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
