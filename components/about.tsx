import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/profile.jpeg"
                alt="Kgothalang Lekitlane"
                width={400}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              {
                "I'm a passionate frontend developer specializing in React and modern JavaScript frameworks. With 2.5 years of experience, I've built responsive, interactive web applications and have worked with Django for backend development."
              }
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not crafting beautiful user interfaces, you can find me learning through bootcamps like Power
              Learn Project Africa, exploring new frontend technologies, or working on personal projects to sharpen my
              skills.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground">South Africa</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Experience</h3>
                <p className="text-muted-foreground">2.5 Years</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Education</h3>
                <p className="text-muted-foreground">Bootcamps & Certifications</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Availability</h3>
                <p className="text-muted-foreground">Open to work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
