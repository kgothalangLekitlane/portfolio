"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)
    window.location.href = `mailto:lekitlaneisaac0@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({ ...current, [e.target.name]: e.target.value }))
    setSubmitted(false)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-500 mb-3">Let's Connect</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in working together? I'm open to junior software development roles, internships, freelance work, and meaningful technical projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Let's build something useful.</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you are hiring a junior developer, looking for help with a web project, or simply want to connect, I'd be happy to hear from you.
              </p>
            </div>

            <div className="space-y-5">
              <a href="mailto:lekitlaneisaac0@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-colors">
                  <Mail className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground group-hover:text-orange-500 transition-colors">lekitlaneisaac0@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-muted-foreground">+27 67 010 0510</p>
                  <p className="text-muted-foreground">+27 69 745 4062</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">South Africa</p>
                  <p className="text-sm text-muted-foreground">Open to remote opportunities and relocation</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-orange-500/20 shadow-sm">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="border-orange-500/20 focus:border-orange-500" />
                <Input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="border-orange-500/20 focus:border-orange-500" />
                <Textarea name="message" placeholder="Tell me about the opportunity or project..." value={formData.message} onChange={handleChange} required rows={6} className="border-orange-500/20 focus:border-orange-500" />
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  <Send className="h-4 w-4 mr-2" /> Send Message
                </Button>
                {submitted && (
                  <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground" role="status">
                    <CheckCircle2 className="h-4 w-4 text-orange-500" /> Your email client should open with the message prepared.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
