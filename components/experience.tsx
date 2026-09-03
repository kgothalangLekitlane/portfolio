import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Users, Award, BookOpen, Sparkles } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Freelance & Client Projects",
      period: "2023 - Present",
      type: "Professional Work",
      icon: Briefcase,
      description:
        "Developing responsive websites and web applications for real-world use cases, with an emphasis on clean interfaces, maintainable code, and reliable delivery.",
      achievements: [
        "Delivered client projects including the GreatMindz tutoring platform and content-focused websites",
        "Built responsive interfaces using React, JavaScript, HTML, CSS, and Tailwind CSS",
        "Worked across frontend and backend concerns as project requirements demanded",
        "Used Git and modern deployment platforms to manage and ship projects",
      ],
    },
    {
      title: "Software Engineering Training",
      company: "Power Learn Project Africa",
      period: "Completed November 2025",
      type: "Professional Development",
      icon: BookOpen,
      description:
        "Completed structured software engineering training focused on practical development, programming fundamentals, problem-solving, and building applications with modern technologies.",
      achievements: [
        "Strengthened programming and software engineering fundamentals",
        "Expanded from frontend development into backend and full-stack concepts",
        "Practiced collaborative development and version-control workflows",
        "Applied learning through hands-on software projects",
      ],
    },
    {
      title: "Generative AI Certification",
      company: "weThinkCode_",
      period: "Completed April 2026",
      type: "Certification",
      icon: Sparkles,
      description:
        "Completed Generative AI training focused on understanding and applying modern AI concepts and tools in technology workflows.",
      achievements: [
        "Completed a focused Generative AI learning programme",
        "Developed practical awareness of AI-assisted development workflows",
        "Strengthened understanding of responsible and effective AI usage",
        "Added GenAI capabilities alongside existing software engineering skills",
      ],
    },
    {
      title: "Software Engineering Certification",
      company: "Power Learn Project & EMURGO Africa",
      period: "Completed November 2025",
      type: "Certification",
      icon: Award,
      description:
        "Earned a software engineering certification after completing practical training in programming and application development.",
      achievements: [
        "Built a foundation in software engineering and application development",
        "Applied programming concepts through practical exercises and projects",
        "Developed stronger problem-solving and debugging habits",
        "Continued building a professional portfolio alongside formal training",
      ],
    },
    {
      title: "Self-Taught Developer",
      company: "Independent Learning",
      period: "2022 - Present",
      type: "Continuous Learning",
      icon: Users,
      description:
        "Independent development journey combining documentation, tutorials, experimentation, and project-based learning to build practical software engineering skills.",
      achievements: [
        "Built projects across frontend, backend, databases, and deployment",
        "Developed practical skills with React, Python, Django, Node.js, Express, and Git",
        "Learned by diagnosing implementation and deployment issues in real projects",
        "Expanded into cybersecurity fundamentals and secure software practices",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience & Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A progression from independent learning and client work toward professional software engineering.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience) => {
            const IconComponent = experience.icon
            return (
              <Card key={experience.title} className="border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <CardTitle className="text-xl">{experience.title}</CardTitle>
                        <Badge variant="secondary" className="bg-orange-500/10 text-orange-500 border-orange-500/20 w-fit">
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
                    <h4 className="font-semibold text-sm">Highlights:</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement) => (
                        <li key={achievement} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
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
