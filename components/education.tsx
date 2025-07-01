import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar } from "lucide-react"

export function Education() {
  const education = [
    {
      title: "Power Learn Project Africa",
      type: "Software Development Bootcamp",
      period: "2024 - Present",
      status: "Currently Enrolled",
      description:
        "Comprehensive software development program focusing on modern web technologies, problem-solving, and practical project development.",
      skills: ["Full Stack Development", "Problem Solving", "Project Management", "Team Collaboration"],
    },
    {
      title: "freeCodeCamp",
      type: "Frontend Development Certification",
      period: "2023",
      status: "Completed",
      description:
        "Completed comprehensive frontend development curriculum covering HTML, CSS, JavaScript, React, and responsive web design principles.",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"],
    },
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Education & Certifications</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Award className="h-5 w-5 text-orange-500" />
                      {edu.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-foreground">{edu.type}</CardDescription>
                  </div>
                  <div className="flex flex-col items-start sm:items-end mt-2 sm:mt-0">
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {edu.period}
                    </div>
                    <Badge variant={edu.status === "Completed" ? "default" : "secondary"} className="mt-1">
                      {edu.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{edu.description}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline">
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
