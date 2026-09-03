import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  metadataBase: new URL("https://kgothalanglekitlane.vercel.app"),
  title: {
    default: "Kgothalang Lekitlane | Software Developer",
    template: "%s | Kgothalang Lekitlane",
  },
  description:
    "Portfolio of Kgothalang Lekitlane, a South African software developer building responsive web applications with React, JavaScript, Python and Django, with a focus on secure development.",
  keywords: [
    "Kgothalang Lekitlane",
    "Software Developer",
    "Junior Software Developer",
    "Frontend Developer",
    "Full-Stack Developer",
    "React Developer",
    "JavaScript Developer",
    "Python Developer",
    "Django Developer",
    "Cybersecurity",
    "South Africa",
  ],
  authors: [{ name: "Kgothalang Lekitlane" }],
  creator: "Kgothalang Lekitlane",
  openGraph: {
    title: "Kgothalang Lekitlane | Software Developer",
    description:
      "Software developer portfolio featuring React, JavaScript, Python, Django and cybersecurity-focused projects.",
    type: "website",
    locale: "en_ZA",
    url: "https://kgothalanglekitlane.vercel.app",
    siteName: "Kgothalang Lekitlane Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kgothalang Lekitlane | Software Developer",
    description:
      "Software developer portfolio featuring React, JavaScript, Python, Django and cybersecurity-focused projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="dark antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
