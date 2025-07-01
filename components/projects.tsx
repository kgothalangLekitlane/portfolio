import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "GreatMindz Tutoring Platform",
      description:
        "Professional tutoring website providing personalized learning experiences for students of all levels. Features easy navigation, subject browsing, session booking, and tailored resources.",
      image: "/images/greatmindz-screenshot.png",
      liveUrl: "https://greatmindztutors.co.za",
      githubUrl: "https://github.com/kgothalangLekitlane/GreatMindz-Tutoring-main",
      technologies: ["React", "HTML5", "CSS3", "Responsive Design"],
      featured: true,
    },
    {
      title: "Global Wanderer Travel Blog",
      description:
        "Beautiful travel blog with engaging design and compelling content. Features clean layout, stunning visuals, and intuitive navigation for travel enthusiasts.",
      image: "/images/travel-blog-screenshot.png",
      liveUrl: "https://startling-kataifi-4a7053.netlify.app",
      githubUrl: "https://github.com/kgothalangLekitlane/studio",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      featured: true,
    },
    {
      title: "Python File Handling & Exception Management",
      description:
        "Focused project demonstrating file handling operations and exception management fundamentals. Shows error handling techniques and Python best practices.",
      githubUrl: "https://github.com/kgothalangLekitlane/filehandlingexception",
      technologies: ["Python", "File I/O", "Exception Handling"],
      featured: false,
    },
    {
      title: "Python Programming Assignments",
      description:
        "Collection of Python exercises and assignments covering core programming concepts, data structures, and algorithms. Demonstrates problem-solving skills and Python syntax mastery.",
      githubUrl: "https://github.com/kgothalangLekitlane/assignment",
      technologies: ["Python", "Algorithms", "Data Structures"],
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work, from client projects to learning exercises
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 overflow-hidden"
            >
              {project.image && (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 border-orange-500/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {project.liveUrl && (
                  <div className="mb-3">
                    <p className="text-xs text-muted-foreground mb-1">Live Site:</p>
                    <p className="text-sm text-orange-500 break-all">{project.liveUrl}</p>
                  </div>
                )}

                <div className="flex gap-3">
                  {project.liveUrl ? (
                    <Button asChild size="sm" className="bg-orange-500 hover:bg-orange-600">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Site
                      </Link>
                    </Button>
                  ) : (
                    <Button disabled size="sm" variant="secondary">
                      Code Project
                    </Button>
                  )}
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
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
