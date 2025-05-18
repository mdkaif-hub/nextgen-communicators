"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  parentName: z.string().min(2, {
    message: "Parent name must be at least 2 characters.",
  }),
  childName: z.string().min(2, {
    message: "Child name must be at least 2 characters.",
  }),
  childAge: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 7 && Number(val) <= 16, {
    message: "Child age must be between 7 and 16 years.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  message: z.string().optional(),
})

export function EnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      parentName: "",
      childName: "",
      childAge: "",
      phoneNumber: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log(values)
      toast({
        title: "Enquiry Sent!",
        description: "Redirecting to WhatsApp...",
      })
      form.reset()
      setIsSubmitting(false)
      setIsSuccess(true)

      // Construct WhatsApp message
      const whatsappNumber = "+919059649099" // Replace with your WhatsApp number (e.g., +91xxxxxxxxxx)
      const message = `
Hello, I have an enquiry from NextGen Communicators!
Parent's Name: ${values.parentName}
Child's Name: ${values.childName}
Child's Age: ${values.childAge}
Phone Number: ${values.phoneNumber}${values.message ? `\nMessage: ${values.message}` : ""}
      `.trim()
      const encodedMessage = encodeURIComponent(message)
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

      // Redirect to WhatsApp after a short delay to show success message
      setTimeout(() => {
        window.open(whatsappLink, "_blank")
        setIsSuccess(false) // Hide success message after redirect
      }, 2000) // 2-second delay to allow the user to see the success message
    }, 1500) // Simulated submission delay
  }

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  }

  const successVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  }

  return (
    <Form {...form}>
      <motion.form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div variants={itemVariants}>
            <FormField
              control={form.control}
              name="parentName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parent's Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter parent's name"
                      {...field}
                      className="transition-all duration-300 focus:ring-2 focus:ring-purple-300 focus:border-purple-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FormField
              control={form.control}
              name="childName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Child's Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter child's name"
                      {...field}
                      className="transition-all duration-300 focus:ring-2 focus:ring-purple-300 focus:border-purple-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div variants={itemVariants}>
            <FormField
              control={form.control}
              name="childAge"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Child's Age</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter child's age"
                      {...field}
                      className="transition-all duration-300 focus:ring-2 focus:ring-purple-300 focus:border-purple-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter phone number"
                      {...field}
                      className="transition-all duration-300 focus:ring-2 focus:ring-purple-300 focus:border-purple-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>
        </div>
        <motion.div variants={itemVariants}>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Any specific requirements or questions?"
                    className="min-h-[120px] transition-all duration-300 focus:ring-2 focus:ring-purple-300 focus:border-purple-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Button
            type="submit"
            className="w-full transition-transform duration-300 hover:scale-[1.02]"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              "Send Enquiry"
            )}
          </Button>
        </motion.div>

        {isSuccess && (
          <motion.div
            variants={successVariants}
            initial="hidden"
            animate="visible"
            className="mt-4 rounded-md bg-green-50 p-4 text-center text-green-800"
          >
            <p className="font-medium">Thank you for your enquiry!</p>
            <p className="text-sm">Redirecting to WhatsApp...</p>
          </motion.div>
        )}
      </motion.form>
    </Form>
  )
}