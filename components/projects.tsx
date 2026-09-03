import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "DevHeaven — Developer Platform",
      description:
        "Full-stack developer platform built with React and Express. Designed around real-world developer workflows, profiles, discovery, and community features, with a focus on responsive UX, backend integration, and production readiness.",
      liveUrl: "https://dev-h-drab.vercel.app/profile",
      githubUrl: "https://github.com/kgothalangLekitlane/devH",
      technologies: ["React", "JavaScript", "Express", "Node.js", "MongoDB", "Vercel"],
      featured: true,
    },
    {
      title: "GreatMindz Tutoring Platform",
      description:
        "Professional tutoring platform built with Django and Python. Provides a structured experience for discovering subjects, connecting learners with tutoring services, and managing learning resources through a backend-driven application.",
      image: "/images/greatmindz-screenshot.png",
      liveUrl: "https://www.greatmindztutors.co.za",
      githubUrl: "https://github.com/kgothalangLekitlane/GreatMindz-Tutoring-main",
      technologies: ["Django", "Python", "HTML5", "CSS3", "Responsive Design"],
      featured: true,
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A focused selection of projects demonstrating full-stack development, backend engineering, and practical problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 overflow-hidden h-full flex flex-col"
            >
              {project.image && (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 border-orange-500/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <Button asChild size="sm" className="bg-orange-500 hover:bg-orange-600">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Source Code
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
