import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold">Kgothalang Lekitlane</h3>
            <p className="text-muted-foreground">Software Developer · Full-Stack · Cybersecurity</p>
          </div>

          <div className="flex items-center gap-5">
            <Link href="https://github.com/kgothalangLekitlane" aria-label="GitHub" className="text-muted-foreground hover:text-orange-500 transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/isaac-lekitlane" aria-label="LinkedIn" className="text-muted-foreground hover:text-orange-500 transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="mailto:lekitlaneisaac0@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-orange-500 transition-colors">
              <Mail className="h-5 w-5" />
            </Link>
            <Link href="#hero" aria-label="Back to top" className="text-muted-foreground hover:text-orange-500 transition-colors">
              <ArrowUp className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Kgothalang Lekitlane. Built with Next.js, React and TypeScript.</p>
        </div>
      </div>
    </footer>
  )
}
