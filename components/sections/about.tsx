export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Text Content */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">About Me</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Enthusiastic Developer & DevOps Learner
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a BCA – 3rd Semester student at Everest Innovative College in Kathmandu, with a passion for DevOps,
              cloud infrastructure, and full-stack development. Since December 2025, I've been working as a DevOps
              Intern, where I'm gaining hands-on experience with containerization, CI/CD pipelines, and infrastructure
              automation.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in tech has been driven by curiosity and a commitment to continuous learning. I combine
              theoretical knowledge from my computer science curriculum with practical experience from my internship,
              working with modern DevOps tools and practices.
            </p>

            <div className="pt-4 space-y-3">
              <p className="text-foreground font-semibold">Currently learning:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Cloud platforms (AWS, GCP)</li>
                <li>✓ Kubernetes and container orchestration</li>
                <li>✓ CI/CD pipelines and automation</li>
                <li>✓ Infrastructure as Code (IaC)</li>
              </ul>
            </div>
          </div>

          {/* Info Card */}
          <div className="bg-background border border-border rounded-xl p-6 h-fit shadow-sm">
            <h3 className="font-bold text-lg text-foreground mb-4">Quick Info</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Name</p>
                <p className="font-semibold text-foreground">Aayush Regmi</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Education</p>
                <p className="font-semibold text-foreground">BCA – 3rd Semester</p>
                <p className="text-sm text-muted-foreground">Everest Innovative College</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                <p className="font-semibold text-foreground">Kalanki, Kathmandu, Nepal</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Current Role</p>
                <p className="font-semibold text-foreground">DevOps Intern</p>
                <p className="text-sm text-muted-foreground">Since Dec 2025</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Contact</p>
                <p className="font-semibold text-sm break-all text-foreground">aayushregmi018@gmail.com</p>
                <p className="font-semibold text-sm break-all text-foreground">+977 9813967163</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
