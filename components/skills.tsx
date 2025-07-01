import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Building modern, responsive user interfaces",
      skills: ["React", "HTML5", "Responsive Web Design", "CSS3", "JavaScript"],
    },
    {
      title: "Backend & Programming",
      description: "Server-side development and programming languages",
      skills: ["Python", "Django (Basic)", "Git"],
    },
    {
      title: "Tools & Modern Development",
      description: "Development tools, AI assistance, and design principles",
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
