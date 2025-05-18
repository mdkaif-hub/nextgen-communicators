"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    quote:
      "NextGen Communicators has transformed my shy daughter into a confident speaker. The personalized attention and engaging activities have made a huge difference in just a few months.",
    name: "Priya S.",
    role: "Parent of 9-year-old",
    rating: 4.8,
  },
  {
    id: 2,
    quote:
      "My son has always struggled with expressing himself clearly in English. After joining NextGen, his vocabulary has expanded tremendously and he's much more comfortable speaking in public.",
    name: "Rajesh M.",
    role: "Parent of 12-year-old",
    rating: 4.5,
  },
  {
    id: 3,
    quote:
      "The program's focus on practical communication skills rather than just grammar rules has been refreshing. My teenager now creates her own podcasts and has developed a love for public speaking.",
    name: "Anita K.",
    role: "Parent of 15-year-old",
    rating: 4.7,
  },
  {
    id: 4,
    quote:
      "Mrs. Noorunnisa's teaching methods are exceptional. The regular feedback helps us understand our child's progress, and the flexible scheduling works perfectly with our busy family life.",
    name: "Vikram T.",
    role: "Parent of 8-year-old",
    rating: 4.9,
  },
]

// StarRating Component to display star ratings
function StarRating({rating}) {
  const fullStars = Math.floor(rating); // Number of full stars (e.g., 4 for 4.8)
  const hasHalfStar = rating % 1 >= 0.5; // True if rating has a half star (e.g., 0.8 >= 0.5)
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

  return (
    <div className="flex items-center gap-1">
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, index) => (
        <Star
          key={`full-${index}`}
          className="h-5 w-5 text-yellow-400 fill-yellow-400"
        />
      ))}
      {/* Half Star */}
      {hasHalfStar && (
        <Star
          key="half"
          className="h-5 w-5 text-yellow-400 fill-yellow-400"
          style={{ clipPath: "inset(0 50% 0 0)" }} // Shows only the left half
        />
      )}
      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <Star
          key={`empty-${index}`}
          className="h-5 w-5 text-yellow-400 fill-transparent"
        />
      ))}
      <span className="ml-2 text-sm text-gray-600">{rating}/5</span>
    </div>
  );
}

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="overflow-hidden rounded-lg">
        <div className="relative h-[300px] md:h-[250px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full"
            >
              <Card className="border-none shadow-lg">
                <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
                  <p className="text-base md:text-lg">{testimonials[currentIndex].quote}</p>
                  <StarRating rating={testimonials[currentIndex].rating} />
                  <div>
                    <p className="font-semibold">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          aria-label="Previous testimonial"
          className="transition-transform duration-300 hover:scale-110"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-purple-600 scale-125" : "bg-purple-200"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          aria-label="Next testimonial"
          className="transition-transform duration-300 hover:scale-110"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}