import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Wrench } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["React", "HTML5", "CSS3", "JavaScript", "Responsive Web Design", "Tailwind CSS"],
    },
    {
      title: "Backend & Programming",
      icon: Database,
      skills: ["Python", "Django (Basic)", "Git"],
    },
    {
      title: "Tools & Modern Development",
      icon: Wrench,
      skills: [
        "VS Code",
        "AI-Assisted Development",
        "Chrome DevTools",
        "Mobile-First Design",
        "Cross-browser Compatibility",
        "Version Control",
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index} className="border-orange-500/20 hover:border-orange-500/40 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-orange-500" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
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
