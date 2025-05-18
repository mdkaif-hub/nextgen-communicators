import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NextGen Communicators | English Speaking Program for Kids & Teens",
  description:
    "Help your child become a confident English speaker with our specialized program for ages 7-16. One-on-one sessions, flexible scheduling, and engaging activities.",
  keywords:
    "English speaking, kids English program, English for teens, public speaking for children, English communication skills",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
