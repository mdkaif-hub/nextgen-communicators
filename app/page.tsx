import Image from "next/image"
import Link from "next/link"
import { Check, ChevronDown, MessageCircle, Mic, BookOpen, Users, Video, Podcast } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { EnquiryForm } from "@/components/enquiry-form"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { Logo } from "@/components/logo"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerIn } from "@/components/animations/stagger-in"
import { PricingSection } from "@/components/pricing-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* WhatsApp floating button */}
      <Link
        href="https://wa.me/9059649099"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-green-600"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </Link>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo />
            <span className="text-xl font-bold">NextGen Communicators</span>
          </div>
          <nav className="hidden md:flex md:gap-6">
            <Link href="#why-join" className="text-sm font-medium transition-colors hover:text-purple-600">
              Why Join
            </Link>
            <Link href="#features" className="text-sm font-medium transition-colors hover:text-purple-600">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-purple-600">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-purple-600">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-purple-600">
              Contact
            </Link>
            <Link href="#faq" className="text-sm font-medium transition-colors hover:text-purple-600">
              FAQ
            </Link>
          </nav>
          <Button asChild className="hidden md:inline-flex">
            <Link href="#contact">Enroll Now</Link>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <ChevronDown className="h-4 w-4" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white py-16 md:py-24">
        <div className="container grid gap-8 md:grid-cols-2 md:items-center">
          <FadeIn direction="left" duration={0.7}>
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
                Help Your Child Become a <span className="text-purple-600">Confident</span> English Speaker
              </h1>
              <p className="text-xl text-muted-foreground">For ages 7-16 years • Beginner to Advanced levels</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild className="transition-transform duration-300 hover:scale-105">
                  <Link href="#contact">Enroll Now</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="transition-all duration-300 hover:bg-purple-50">
                  <Link href="#why-join">Learn More</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.2} duration={0.7}>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
              <Image
                src="/placeholder.jpeg?height=500&width=500"
                alt="Children speaking English confidently"
                fill
                className="rounded-lg object-cover shadow-lg transition-transform duration-500 hover:scale-[1.02]"
                priority
              />
            </div>
          </FadeIn>
        </div>
        <div className="absolute -bottom-48 -left-48 h-96 w-96 animate-pulse rounded-full bg-purple-100 opacity-50 blur-3xl"></div>
      </section>

      {/* Why Join Section */}
      <section id="why-join" className="py-16 md:py-24">
        <div className="container">
          <FadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Why Join NextGen Communicators?</h2>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn direction="left" delay={0.1}>
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="/istockphoto-1500285927-612x612.jpg?height=400&width=400"
                  alt="Children in an engaging English class"
                  fill
                  className="rounded-lg object-cover shadow-lg transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </FadeIn>
            <div className="flex flex-col gap-4">
              <StaggerIn delay={0.2} staggerDelay={0.1}>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                  <p className="text-lg">One-on-one sessions with expert trainers</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                  <p className="text-lg">Classes after school or on weekends</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                  <p className="text-lg">Weekly & Monthly feedback to parents</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                  <p className="text-lg">Fun, engaging activities to build fluency and confidence</p>
                </div>
                <Button className="mt-4 self-start transition-transform duration-300 hover:scale-105" asChild>
                  <Link href="#contact">Enroll Your Child Today</Link>
                </Button>
              </StaggerIn>
            </div>
          </div>
        </div>
      </section>

      {/* Program Features Section */}
      <section id="features" className="bg-purple-50 py-16 md:py-24">
        <div className="container">
          <FadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Program Features</h2>
          </FadeIn>
          <StaggerIn staggerDelay={0.1}>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="transition-all duration-300 hover:shadow-lg">
                <CardContent className="flex flex-col items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                    <Mic className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-center text-xl font-bold">Public Speaking & Everyday Conversations</h3>
                  <p className="text-center text-muted-foreground">
                    Build confidence in expressing ideas clearly in various settings
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg">
                <CardContent className="flex flex-col items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-center text-xl font-bold">Vocabulary Building Through Games</h3>
                  <p className="text-center text-muted-foreground">
                    Expand vocabulary through fun, interactive games and activities
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg">
                <CardContent className="flex flex-col items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-center text-xl font-bold">Role Play, Mock Talks & Speeches</h3>
                  <p className="text-center text-muted-foreground">
                    Practice real-world scenarios to develop practical communication skills
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg">
                <CardContent className="flex flex-col items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                    <Video className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-center text-xl font-bold">TED-style Presentations</h3>
                  <p className="text-center text-muted-foreground">
                    Learn to deliver compelling presentations on topics of interest
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg">
                <CardContent className="flex flex-col items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                    <Podcast className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-center text-xl font-bold">Podcasts & Creative Expression</h3>
                  <p className="text-center text-muted-foreground">
                    Create podcasts and other creative content to develop communication skills
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg">
                <CardContent className="flex flex-col items-center justify-center gap-4 p-6 text-center">
                  <p className="text-xl font-bold">And much more!</p>
                  <p className="text-muted-foreground">
                    Our comprehensive program is designed to develop all aspects of English communication
                  </p>
                  <Button className="mt-2 transition-transform duration-300 hover:scale-105" asChild>
                    <Link href="#contact">Enroll Now</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24">
        <div className="container">
          <FadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">What Parents Say</h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <TestimonialCarousel />
          </FadeIn>
        </div>
      </section>

      {/* Contact & Enquiry Form Section */}
      <section id="contact" className="bg-purple-50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Contact Us</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <EnquiryForm />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24">
        <div className="container">
          <FadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
          </FadeIn>
          <div className="mx-auto max-w-3xl">
            <FadeIn delay={0.2}>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What age groups do you teach?</AccordionTrigger>
                  <AccordionContent>
                    We teach children and teenagers between the ages of 7 and 16 years. Our program is divided into
                    different levels to accommodate various age groups and proficiency levels.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Do you offer trial classes?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer a complimentary 30-minute trial class for new students. This allows both parents and
                    children to experience our teaching methodology and determine if our program is the right fit.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How often are the classes conducted?</AccordionTrigger>
                  <AccordionContent>
                    Classes are typically held twice a week, with each session lasting 45 minutes. We offer flexible
                    scheduling options including after-school hours on weekdays and various time slots on weekends.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How do parents track their child's progress?</AccordionTrigger>
                  <AccordionContent>
                    We provide weekly progress updates and monthly detailed reports to parents. Additionally, we
                    schedule quarterly parent-teacher meetings to discuss the child's development and address any
                    concerns.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>What technology or equipment is needed?</AccordionTrigger>
                  <AccordionContent>
                    Students need a computer or tablet with a stable internet connection, a webcam, and a microphone. We
                    use a user-friendly online platform that works on most devices without requiring special software
                    installation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Are there any discounts available?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer a 10% discount for quarterly payments. We also provide sibling discounts (15% off for
                    the second child) and referral bonuses. Additionally, we occasionally run seasonal promotions, so be
                    sure to contact us for the latest offers.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About Instructor Section */}
      <section className="bg-purple-50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">About the Instructor</h2>
            </FadeIn>
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <FadeIn direction="left" delay={0.2}>
                <div className="relative h-48 w-48 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Mrs. Noorunnisa"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.3}>
                <div className="flex flex-col gap-4 text-center md:text-left">
                  <h3 className="text-2xl font-bold">Mrs. Noorunnisa</h3>
                  <p className="text-lg text-muted-foreground">HOD English, Montessori Group of Schools, AP, India</p>
                  <p>
                    With over 15 years of experience in teaching English to young learners, Mrs. Noorunnisa brings
                    expertise, passion, and innovative teaching methods to help children become confident English
                    speakers.
                  </p>
                  <p className="font-medium">
                    Contact:{" "}
                    <Link
                      href="https://wa.me/9059649099"
                      className="text-purple-600 transition-colors hover:text-purple-800 hover:underline"
                    >
                      WhatsApp
                    </Link>
                  </p>
                  <p className="text-sm font-medium text-purple-600">
                    Note: Seats are limited. Enroll now to secure your child's spot!
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-6 sm:py-8">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold sm:text-lg">NextGen Communicators</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link href="#why-join" className="text-xs text-muted-foreground transition-colors hover:text-purple-600 sm:text-sm">
                Why Join
              </Link>
              <Link href="#features" className="text-xs text-muted-foreground transition-colors hover:text-purple-600 sm:text-sm">
                Features
              </Link>
              <Link href="#pricing" className="text-xs text-muted-foreground transition-colors hover:text-purple-600 sm:text-sm">
                Pricing
              </Link>
              <Link
                href="#testimonials"
                className="text-xs text-muted-foreground transition-colors hover:text-purple-600 sm:text-sm"
              >
                Testimonials
              </Link>
              <Link href="#contact" className="text-xs text-muted-foreground transition-colors hover:text-purple-600 sm:text-sm">
                Contact
              </Link>
              <Link href="#faq" className="text-xs text-muted-foreground transition-colors hover:text-purple-600 sm:text-sm">
                FAQ
              </Link>
            </div>
            <div className="text-xs text-muted-foreground sm:text-sm">
              © {new Date().getFullYear()} NextGen Communicators. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
