export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "SQL"],
    },
    {
      title: "Web Development",
      skills: ["HTML/CSS", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "DevOps & Cloud",
      skills: ["Linux/Unix", "Docker", "Git", "CI/CD", "AWS Basics"],
    },
    {
      title: "Tools & Platforms",
      skills: ["GitHub", "VS Code", "Docker Desktop", "Postman", "PostgreSQL"],
    },
  ]

  return (
    <section id="skills" className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Technical Expertise</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-secondary border border-border rounded-xl p-6 hover:border-accent/50 transition-all hover:shadow-md"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-accent/10 text-primary rounded-full text-sm border border-accent/20 hover:bg-accent/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
