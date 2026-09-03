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
      title: "OTD — Traffic Department Management System",
      description:
        "Full-stack mock traffic department platform with role-based access for drivers, officers, and administrators. Includes JWT authentication, license lookups, fines, appointments, validation, rate limiting, caching, and MongoDB-backed APIs.",
      githubUrl: "https://github.com/kgothalangLekitlane/OTD",
      technologies: ["React", "Vite", "Node.js", "Express", "MongoDB", "JWT", "React Query"],
      featured: true,
    },
    {
      title: "AlamedaAfrica",
      description:
        "Modern web application built with React and contemporary frontend tooling. A project focused on creating a polished, responsive user experience while strengthening practical frontend development and deployment skills.",
      githubUrl: "https://github.com/kgothalangLekitlane/AlamedaAfrica",
      technologies: ["React", "JavaScript", "Vite", "Responsive UI", "Vercel"],
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
    {
      title: "Global Wanderer Travel Blog",
      description:
        "Responsive travel website built with HTML, CSS, and JavaScript, combining clean information architecture with engaging visual presentation and intuitive navigation.",
      image: "/images/travel-blog-screenshot.png",
      liveUrl: "https://startling-kataifi-4a7053.netlify.app",
      githubUrl: "https://github.com/kgothalangLekitlane/studio",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      featured: false,
    },
    {
      title: "Python File Handling & Exception Management",
      description:
        "Python project demonstrating practical file I/O, exception handling, validation, and defensive programming fundamentals.",
      githubUrl: "https://github.com/kgothalangLekitlane/filehandlingexception",
      technologies: ["Python", "File I/O", "Exception Handling"],
      featured: false,
    },
    {
      title: "Python Programming Assignments",
      description:
        "Collection of Python exercises covering core programming concepts, algorithms, data structures, and problem-solving techniques.",
      githubUrl: "https://github.com/kgothalangLekitlane/assignment",
      technologies: ["Python", "Algorithms", "Data Structures"],
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Selected Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of full-stack, frontend, backend, and Python projects that demonstrate practical software development skills.
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
