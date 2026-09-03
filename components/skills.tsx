import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, ShieldCheck, Wrench } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: Code,
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive UI", "Vite"],
    },
    {
      title: "Backend & Databases",
      icon: Database,
      skills: ["Node.js", "Express", "Python", "Django", "MongoDB", "MySQL", "REST APIs"],
    },
    {
      title: "Cybersecurity",
      icon: ShieldCheck,
      skills: ["Security Fundamentals", "Risk Management", "Secure Development", "Authentication", "Input Validation"],
    },
    {
      title: "Tools & Engineering",
      icon: Wrench,
      skills: ["Git", "GitHub", "VS Code", "Chrome DevTools", "Vercel", "Render", "AI-Assisted Development"],
    },
  ]

  return (
    <section id="skills" className="scroll-mt-20 bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-orange-500">Technical toolkit</p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Skills & Technologies</h2>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            A practical toolkit spanning frontend development, backend engineering, databases, deployment, and cybersecurity.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {skillCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <Card
                key={category.title}
                className="h-full border-orange-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:border-orange-500/40 hover:shadow-sm"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/10">
                      <IconComponent className="h-5 w-5 text-orange-500" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-base sm:text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="border-orange-500/20 bg-orange-500/10 text-orange-500 hover:bg-orange-500/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
