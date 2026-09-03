import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, GraduationCap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building practical software with a strong focus on frontend engineering, full-stack development, and secure technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">South Africa</p>
                  <p className="text-sm text-muted-foreground">Open to software development opportunities and relocation</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Development Journey</h3>
                  <p className="text-muted-foreground">Real-world software projects since 2023</p>
                  <p className="text-sm text-muted-foreground">Frontend, backend, deployment, and security-focused development</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Education & Training</h3>
                  <p className="text-muted-foreground">Software engineering & cybersecurity training</p>
                  <p className="text-sm text-muted-foreground">Continuous learning through projects, certifications, and formal study</p>
                </div>
              </div>
            </div>

            <Card className="mt-8 border-orange-500/20">
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  I'm a software developer who combines a self-driven approach to learning with practical software
                  engineering experience. I enjoy turning ideas into usable applications, from responsive React
                  interfaces to Python and Node.js backends. My work increasingly focuses on building maintainable,
                  production-minded systems while developing a deeper understanding of cybersecurity and secure software
                  practices. I'm looking for opportunities where I can contribute, learn from experienced engineers,
                  and grow into a well-rounded software professional.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-96 rounded-2xl overflow-hidden border border-orange-500/20 shadow-xl">
                <Image
                  src="/images/profile.jpeg"
                  alt="Kgothalang Lekitlane"
                  width={320}
                  height={384}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-400/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
