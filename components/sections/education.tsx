export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Education</p>
          <h2 className="text-4xl md:text-5xl font-bold">Academic Background</h2>
        </div>

        <div className="space-y-6">
          {/* Current Education */}
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold">BCA – 3rd Semester</h3>
                <p className="text-primary font-semibold">Everest Innovative College, Kathmandu</p>
              </div>
              <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">2024 - Present</span>
            </div>

            <p className="text-muted-foreground mb-4">
              Pursuing a Bachelor of computer applications with focus on software
              development, database management, and system administration.
            </p>

            <div className="space-y-2">
              <p className="text-sm font-semibold">Coursework & Learning:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Programming fundamentals (Python, Java)</li>
                <li>• Web technologies and frameworks</li>
                <li>• Database design and SQL</li>
                <li>• System administration and networking</li>
                <li>• Data structures and algorithms</li>
                <li>• Operating Systems and Linux</li>
              </ul>
            </div>
          </div>

          {/* Expected Graduation */}
          <div className="bg-card border border-dashed border-muted/30 rounded-xl p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-muted-foreground">Expected Graduation</h3>
                <p className="text-muted-foreground">BCA Degree</p>
              </div>
              <span className="text-sm text-muted-foreground bg-muted/10 px-3 py-1 rounded-full">2028</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
