import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Users, Award, BookOpen } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Freelance & Client Projects",
      period: "2023 - Present",
      type: "Professional Work",
      icon: Briefcase,
      description:
        "Building professional websites and web applications for clients, collaborating with other developers in team settings. Delivering paid projects with focus on user experience and modern web technologies.",
      achievements: [
        "Delivered multiple client projects including tutoring platforms and content websites",
        "Collaborated effectively with other developers in team environments",
        "Managed client relationships and project timelines professionally",
        "Built responsive, user-friendly interfaces using React and modern CSS",
      ],
    },
    {
      title: "Bootcamp Student",
      company: "Power Learn Project Africa",
      period: "Feb 2025 - Present",
      type: "Current Learning",
      icon: BookOpen,
      description:
        "Intensive full-stack development bootcamp focusing on collaborative learning, problem-solving, and building real-world applications with modern technologies.",
      achievements: [
        "Learning full-stack development with emphasis on practical application",
        "Participating in collaborative coding projects and peer programming",
        "Developing problem-solving skills through structured challenges",
        "Building portfolio projects with guidance from industry professionals",
      ],
    },
    {
      title: "Frontend Development Certification",
      company: "freeCodeCamp",
      period: "Completed April 2024",
      type: "Certification",
      icon: Award,
      description:
        "Completed comprehensive 300+ hour curriculum covering HTML, CSS, JavaScript, React, and responsive web design principles with hands-on projects.",
      achievements: [
        "Mastered responsive web design principles and mobile-first development",
        "Built multiple projects demonstrating JavaScript and React proficiency",
        "Learned modern CSS techniques including Flexbox and Grid",
        "Completed algorithm and data structure challenges",
      ],
    },
    {
      title: "Self-Taught Developer",
      company: "Independent Learning",
      period: "2022 - 2023",
      type: "Foundation",
      icon: Users,
      description:
        "Self-directed learning journey building foundational programming skills through online resources, tutorials, and personal projects.",
      achievements: [
        "Developed strong foundation in HTML, CSS, and JavaScript",
        "Built personal projects to practice and demonstrate skills",
        "Learned version control with Git and collaborative development practices",
        "Established disciplined learning routine and problem-solving approach",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience & Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional development journey from self-taught beginnings to client work
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => {
            const IconComponent = experience.icon
            return (
              <Card key={index} className="border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <CardTitle className="text-xl">{experience.title}</CardTitle>
                        <Badge variant="secondary" className="bg-orange-500/10 text-orange-500 border-orange-500/20">
                          {experience.type}
                        </Badge>
                      </div>
                      <p className="text-lg text-muted-foreground mb-1">{experience.company}</p>
                      <p className="text-sm text-muted-foreground">{experience.period}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{experience.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
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
