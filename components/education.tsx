import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BookOpen } from "lucide-react"

export function Education() {
  const educationItems = [
    {
      title: "Power Learn Project Africa",
      subtitle: "Full-Stack Development Bootcamp",
      period: "Feb 2025 - Present",
      status: "Currently Enrolled",
      description:
        "Intensive bootcamp focusing on full-stack development, collaborative learning, and real-world project building.",
      icon: BookOpen,
      color: "bg-green-500/10 text-green-500 border-green-500/20",
    },
    {
      title: "freeCodeCamp",
      subtitle: "Frontend Development Certification",
      period: "Completed April 2024",
      status: "Certified",
      description:
        "Comprehensive 300+ hour curriculum covering HTML, CSS, JavaScript, React, and responsive web design principles.",
      icon: Award,
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    },
    {
      title: "Self-Taught Learning",
      subtitle: "Web Development Fundamentals",
      period: "2022 - 2023",
      status: "Foundation",
      description:
        "Independent study of web technologies, programming concepts, and development best practices through online resources and practice projects.",
      icon: GraduationCap,
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education & Learning</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My continuous learning journey through bootcamps, certifications, and self-directed study
          </p>
        </div>

        <div className="space-y-8">
          {educationItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <Card key={index} className="border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <Badge className={item.color}>{item.status}</Badge>
                      </div>
                      <p className="text-lg text-muted-foreground mb-1">{item.subtitle}</p>
                      <p className="text-sm text-muted-foreground">{item.period}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
