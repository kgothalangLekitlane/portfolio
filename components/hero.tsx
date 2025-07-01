import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/images/profile.jpeg"
              alt="Kgothalang Lekitlane"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-4">Kgothalang Lekitlane</h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-6">Frontend Developer & React Specialist</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Passionate frontend developer specializing in React and modern web technologies. I create engaging user
            interfaces and seamless user experiences, with additional backend experience in Django. Currently expanding
            my skills through Power Learn Project Africa.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button size="lg" asChild>
            <Link href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/resume.pdf" target="_blank">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Link>
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <Link href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/isaac-lekitlane"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:lekitlaneisaac0@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
