import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, Download, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-40">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-5 rounded-full border border-orange-500/20 bg-orange-500/5 px-3 py-1.5">
              <MapPin className="h-4 w-4 text-orange-500" />
              <span className="text-sm text-muted-foreground">South Africa · Open to opportunities</span>
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500 mb-3">
              Software Developer
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Hi, I'm <span className="text-orange-500">Kgothalang</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-6 text-muted-foreground">
              Full-Stack Developer building practical, secure software.
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-muted-foreground max-w-2xl">
              I build responsive web applications across the frontend and backend using React, JavaScript, Python,
              Django, Node.js and modern development tools. I bring a security-minded approach to problem solving and
              enjoy turning real-world ideas into maintainable software.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-8 justify-center lg:justify-start">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                <Link href="#projects" className="flex items-center gap-2">
                  View My Work <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href="/Kgothalang-Lekitlane-CV.pdf" download className="flex items-center gap-2">
                  <Download className="h-4 w-4" /> Download CV
                </a>
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start gap-5">
              <Link
                href="https://github.com/kgothalangLekitlane"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="rounded-full border border-border p-2.5 text-muted-foreground hover:border-orange-500/40 hover:text-orange-500 transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/isaac-lekitlane"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="rounded-full border border-border p-2.5 text-muted-foreground hover:border-orange-500/40 hover:text-orange-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:lekitlaneisaac0@gmail.com"
                aria-label="Email Kgothalang"
                className="rounded-full border border-border p-2.5 text-muted-foreground hover:border-orange-500/40 hover:text-orange-500 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-5 rounded-full bg-orange-500/5 blur-2xl" />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-orange-500/20 shadow-2xl">
                <Image
                  src="/images/profile.jpeg"
                  alt="Kgothalang Lekitlane"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -top-3 -right-3 w-7 h-7 bg-orange-500 rounded-full animate-pulse" />
              <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-orange-400 rounded-full animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
