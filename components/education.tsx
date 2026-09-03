import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BookOpen, Sparkles } from "lucide-react"

export function Education() {
  const educationItems = [
    {
      title: "Power Learn Project Africa",
      subtitle: "Software Engineering / Full-Stack Development",
      period: "Completed November 2025",
      status: "Graduated",
      description:
        "Completed the Power Learn Project Africa software engineering programme, developing practical programming, web development, Git, and problem-solving skills through structured training and projects.",
      icon: GraduationCap,
      color: "bg-green-500/10 text-green-500 border-green-500/20",
    },
    {
      title: "weThinkCode_",
      subtitle: "Generative AI (GenAI) Certificate",
      period: "Completed April 2026",
      status: "Certified",
      description:
        "Completed specialised Generative AI training, strengthening my understanding of modern AI concepts and practical AI-assisted development workflows.",
      icon: Sparkles,
      color: "bg-violet-500/10 text-violet-500 border-violet-500/20",
    },
    {
      title: "Cybersecurity Certifications",
      subtitle: "Foundations of Cybersecurity & Security Risk Management",
      period: "2025 - 2026",
      status: "Certified",
      description:
        "Completed cybersecurity-focused learning covering security fundamentals, risk management, and core principles relevant to secure software development.",
      icon: Award,
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    },
    {
      title: "Self-Taught Learning",
      subtitle: "Web Development & Programming",
      period: "2022 - Present",
      status: "Continuous Learning",
      description:
        "Independent learning across modern web development, React, JavaScript, Python, backend development, databases, deployment, and software engineering practices.",
      icon: BookOpen,
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education & Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A practical learning journey spanning software engineering, Generative AI, cybersecurity, and continuous self-development.
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
