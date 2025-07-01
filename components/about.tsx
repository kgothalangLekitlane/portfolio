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
            Get to know more about my journey, skills, and passion for frontend development
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
                  <p className="text-muted-foreground">Virginia, South Africa</p>
                  <p className="text-sm text-muted-foreground">Open to relocating to Johannesburg/Pretoria</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Experience</h3>
                  <p className="text-muted-foreground">2.5 years of frontend development</p>
                  <p className="text-sm text-muted-foreground">Building client projects since 2023</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Education</h3>
                  <p className="text-muted-foreground">Bootcamps & Certifications</p>
                  <p className="text-sm text-muted-foreground">Self-taught with formal training</p>
                </div>
              </div>
            </div>

            <Card className="mt-8 border-orange-500/20">
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate frontend developer who started as a self-taught programmer and evolved through
                  structured bootcamp training. My journey began with curiosity about web technologies and grew into a
                  professional career building real-world applications for clients. I specialize in React development
                  and am currently expanding my skills with Django to become a more well-rounded developer.
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
