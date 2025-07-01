import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "GreatMindz Tutoring Platform",
      description:
        "A comprehensive tutoring website that provides personalized learning experiences for students of all levels. Features an easy-to-navigate interface where students can browse available subjects, book sessions, and access resources tailored to their learning needs. The site includes a professional design with mobile responsiveness and engaging user experience.",
      image: "/images/greatmindz-screenshot.png",
      technologies: ["React", "HTML5", "CSS3", "Responsive Web Design"],
      liveUrl: "https://greatmindztutors.co.za",
      githubUrl: "https://github.com/kgothalangLekitlane/GreatMindz-Tutoring-main",
    },
    {
      title: "Global Wanderer Travel Blog",
      description:
        "A beautifully designed travel blog featuring the tagline 'Embark on Your Next Adventure'. The site offers breathtaking destinations, travel tips, and inspiring stories from around the world. Features clean typography, intuitive navigation, and engaging call-to-action buttons for exploring destinations and learning about the blog.",
      image: "/images/travel-blog-screenshot.png",
      technologies: ["HTML5", "CSS3", "Responsive Web Design", "JavaScript"],
      liveUrl: "https://startling-kataifi-4a7053.netlify.app",
      githubUrl: "https://github.com/kgothalangLekitlane/studio",
    },
    {
      title: "Python File Handling & Exception Management",
      description:
        "A Python project focused on learning file handling operations and exception management fundamentals. Demonstrates proper error handling techniques, file I/O operations, and best practices for managing exceptions in Python applications. Part of my journey learning Python programming fundamentals.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Python", "File I/O", "Exception Handling"],
      liveUrl: "#",
      githubUrl: "https://github.com/kgothalangLekitlane/filehandlingexception",
    },
    {
      title: "Python Programming Assignments",
      description:
        "A collection of Python programming assignments demonstrating core programming concepts and problem-solving skills. Includes various exercises covering Python syntax, data structures, algorithms, and programming logic. These assignments showcase my learning progression and understanding of Python fundamentals.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Python", "Data Structures", "Algorithms"],
      liveUrl: "#",
      githubUrl: "https://github.com/kgothalangLekitlane/assignment",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video relative">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {project.liveUrl !== "#" && (
                  <div className="mb-3">
                    <p className="text-sm text-muted-foreground mb-1">Live Site:</p>
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      className="text-sm text-blue-600 hover:text-blue-800 break-all"
                    >
                      {project.liveUrl}
                    </Link>
                  </div>
                )}
                <div className="flex gap-2">
                  {project.liveUrl !== "#" ? (
                    <Button size="sm" asChild>
                      <Link href={project.liveUrl} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Site
                      </Link>
                    </Button>
                  ) : (
                    <Button size="sm" disabled>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Code Project
                    </Button>
                  )}
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Code
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
