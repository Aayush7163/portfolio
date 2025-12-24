export default function Experience() {
  return (
    <section id="experience" className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold">Professional Journey</h2>
        </div>

        <div className="space-y-8">
          {/* DevOps Intern */}
          <div className="relative pl-8 border-l-2 border-primary">
            <div className="absolute -left-4 -top-2 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold">DevOps Intern</h3>
                  <p className="text-primary">Internship Position</p>
                </div>
                <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">
                  Dec 2025 - Present
                </span>
              </div>

              <p className="text-muted-foreground mb-4">
                Gaining hands-on experience with DevOps practices and infrastructure management.
              </p>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground">Key Responsibilities:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>✓ Managing Docker containers and containerized applications</li>
                  <li>✓ Setting up and maintaining CI/CD pipelines using GitHub Actions</li>
                  <li>✓ Working with Linux/Unix systems and shell scripting</li>
                  <li>✓ Version control with Git and GitHub</li>
                  <li>✓ Cloud infrastructure basics with AWS</li>
                  <li>✓ Monitoring and logging practices</li>
                </ul>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Docker", "GitHub Actions", "Linux", "AWS", "Git"].map((tool, idx) => (
                  <span key={idx} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Placeholder for future experience */}
          <div className="relative pl-8 border-l-2 border-muted/30">
            <div className="absolute -left-4 -top-2 w-6 h-6 bg-muted/30 rounded-full border-4 border-background"></div>

            <div className="bg-card border border-dashed border-muted/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-muted-foreground">Future Experience</h3>
              <p className="text-sm text-muted-foreground mt-2">
                More opportunities coming as I continue my journey...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
