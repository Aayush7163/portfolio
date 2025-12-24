import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    // No projects listed here as per the updates
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href={project.live}
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
