import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Experience() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Freelance & Client Projects",
      period: "2023 - Present",
      description:
        "Building responsive web applications and websites for clients using React and modern web technologies. Working collaboratively with other developers on paid client projects, demonstrating strong teamwork and project delivery skills.",
      achievements: [
        "Delivered multiple paid client projects successfully",
        "Collaborated with development teams in group settings",
        "Built responsive, professional websites using React and modern web technologies",
        "Maintained client relationships and project timelines",
      ],
    },
    {
      title: "Software Development Student",
      company: "Power Learn Project Africa",
      period: "February 2025 - Present",
      description:
        "Currently enrolled in a comprehensive software development bootcamp focusing on full-stack development, problem-solving, and modern programming practices. Actively learning advanced development concepts and working on practical projects.",
      achievements: [
        "Participating in intensive software development curriculum",
        "Learning full-stack development practices",
        "Working on collaborative coding projects",
        "Developing problem-solving and analytical skills",
      ],
    },
    {
      title: "Frontend Development Certification",
      company: "freeCodeCamp",
      period: "Completed April 2024",
      description:
        "Successfully completed the comprehensive Frontend Development certification program, mastering HTML, CSS, JavaScript, React, and responsive web design principles through hands-on projects and challenges.",
      achievements: [
        "Completed 300+ hours of coursework and projects",
        "Built 5+ certification projects demonstrating frontend skills",
        "Mastered responsive web design and modern JavaScript",
        "Gained solid foundation in React development",
      ],
    },
    {
      title: "Self-Taught Developer",
      company: "Independent Learning",
      period: "2022 - 2023",
      description:
        "Began my coding journey through self-directed learning using online resources, tutorials, and personal projects. Built foundational skills in web development while developing discipline and problem-solving abilities.",
      achievements: [
        "Learned HTML, CSS, JavaScript, and Python fundamentals",
        "Built personal projects to practice and demonstrate skills",
        "Developed strong self-learning and research abilities",
        "Established foundation for formal bootcamp education",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-foreground">{exp.company}</CardDescription>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 sm:mt-0">{exp.period}</div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
