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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A practical toolkit spanning frontend development, backend engineering, databases, deployment, and cybersecurity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <Card key={category.title} className="border-orange-500/20 hover:border-orange-500/40 transition-colors h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center shrink-0">
                      <IconComponent className="h-5 w-5 text-orange-500" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 border-orange-500/20"
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
