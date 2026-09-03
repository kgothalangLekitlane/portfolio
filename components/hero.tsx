import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <MapPin className="h-4 w-4 text-orange-500" />
              <span className="text-sm text-muted-foreground">South Africa · Open to opportunities</span>
            </div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-500 mb-3">Software Developer</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-orange-500">Kgothalang</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-muted-foreground">
              Full-Stack Developer & Cybersecurity-Focused Technologist
            </h2>
            <p className="text-lg mb-8 text-muted-foreground max-w-2xl">
              I build practical, responsive web applications with React, JavaScript, Python, Django and modern development tools. I enjoy solving real-world problems across the frontend and backend while continuously strengthening my software engineering and cybersecurity skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="#projects" className="flex items-center gap-2">
                  View My Work
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="#contact" className="flex items-center gap-2">
                  Get In Touch
                </Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href="/Kgothalang-Lekitlane-CV.pdf" download className="flex items-center gap-2">
                  <Download className="h-4 w-4" /> Download CV
                </a>
              </Button>
            </div>
            <div className="flex justify-center lg:justify-start space-x-6">
              <Link
                href="https://github.com/kgothalangLekitlane"
                className="text-muted-foreground hover:text-orange-500 transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/isaac-lekitlane"
                className="text-muted-foreground hover:text-orange-500 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:lekitlaneisaac0@gmail.com"
                className="text-muted-foreground hover:text-orange-500 transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-orange-500/20 shadow-2xl">
                <Image
                  src="/images/profile.jpeg"
                  alt="Kgothalang Lekitlane"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-400 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
