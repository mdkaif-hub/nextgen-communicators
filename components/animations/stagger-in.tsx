"use client"

import React from "react"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface StaggerInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  staggerDelay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  duration?: number
  once?: boolean
  threshold?: number
}

export function StaggerIn({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.1,
  direction = "up",
  distance = 20,
  duration = 0.5,
  once = true,
  threshold = 0.1,
}: StaggerInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [once, threshold])

  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance }
      case "down":
        return { y: -distance }
      case "left":
        return { x: distance }
      case "right":
        return { x: -distance }
      case "none":
        return {}
      default:
        return { y: distance }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      ...getDirectionOffset(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  )
}
