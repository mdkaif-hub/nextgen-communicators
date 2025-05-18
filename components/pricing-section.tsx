"use client"

import { Check } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerIn } from "@/components/animations/stagger-in"

const pricingPlans = [
  {
    name: "Basic",
    price: "₹2,999",
    description: "Perfect for beginners starting their English journey",
    features: [
      "2 sessions per week (30 mins each)",
      "Basic vocabulary building",
      "Simple conversation practice",
      "Monthly progress report",
      "Access to learning materials",
    ],
    popular: false,
    color: "bg-gray-100",
  },
  {
    name: "Standard",
    price: "₹4,999",
    description: "Our most popular plan for steady improvement",
    features: [
      "3 sessions per week (45 mins each)",
      "Comprehensive vocabulary building",
      "Public speaking practice",
      "Weekly progress updates",
      "Role play activities",
      "Access to all learning materials",
    ],
    popular: true,
    color: "bg-purple-100",
  },
  {
    name: "Premium",
    price: "₹7,999",
    description: "Accelerated learning for maximum results",
    features: [
      "5 sessions per week (45 mins each)",
      "Advanced vocabulary building",
      "TED-style presentation training",
      "Podcast creation projects",
      "Personalized learning path",
      "Weekly detailed progress reports",
      "Priority scheduling",
      "1-on-1 parent consultations",
    ],
    popular: false,
    color: "bg-yellow-100",
  },
]

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly">("monthly")

  // Fallback function to format price with commas if toLocaleString fails
  const formatPriceFallback = (amount) => {
    const str = amount.toString();
    let lastThree = str.slice(-3);
    let otherNumbers = str.slice(0, -3);
    if (otherNumbers !== "") {
      lastThree = "," + lastThree;
    }
    const formatted = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return `₹${formatted}`;
  };

  // Function to format price with Indian number system (e.g., ₹8,097)
  const formatPrice = (amount) => {
    try {
      return `₹${amount.toLocaleString('en-IN')}`;
    } catch (error) {
      console.warn("toLocaleString failed, using fallback:", error);
      return formatPriceFallback(amount);
    }
  };

  // Calculate prices based on billing cycle
  const getPriceDetails = (monthlyPrice) => {
    // Remove the ₹ symbol and any commas before parsing
    const cleanPrice = monthlyPrice.replace(/₹|,/g, '');
    const monthlyAmount = Number.parseInt(cleanPrice, 10); // Parse as integer (e.g., "2999" → 2999)
    if (billingCycle === "monthly") {
      return {
        displayPrice: formatPrice(monthlyAmount),
        originalPrice: null,
      };
    } else {
      const quarterlyAmountBeforeDiscount = monthlyAmount * 3; // 3 months
      const quarterlyAmount = Math.round(quarterlyAmountBeforeDiscount * 0.9); // 10% discount
      return {
        displayPrice: formatPrice(quarterlyAmount),
        originalPrice: formatPrice(quarterlyAmountBeforeDiscount),
      };
    }
  };

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Affordable Plans for Every Child</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Choose the perfect plan to help your child become a confident English speaker
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center rounded-full border bg-white p-1 shadow-sm">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  billingCycle === "monthly"
                    ? "bg-purple-600 text-white"
                    : "bg-transparent text-muted-foreground hover:bg-gray-100"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("quarterly")}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  billingCycle === "quarterly"
                    ? "bg-purple-600 text-white"
                    : "bg-transparent text-muted-foreground hover:bg-gray-100"
                }`}
              >
                Quarterly (10% off)
              </button>
            </div>
          </div>
        </FadeIn>

        <StaggerIn staggerDelay={0.1} delay={0.2}>
          <div className="grid gap-6 md:grid-cols-3">
            {pricingPlans.map((plan, index) => {
              const { displayPrice, originalPrice } = getPriceDetails(plan.price);
              return (
                <Card
                  key={plan.name}
                  className={`relative flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg ${
                    plan.popular ? "border-purple-300 shadow-md" : ""
                  } min-h-[600px]`}
                >
                  {plan.popular && (
                    <div className="absolute -right-12 top-6 rotate-45 bg-purple-600 px-12 py-1 text-center text-xs font-semibold uppercase tracking-wider text-white">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className={`${plan.color}`}>
                    <CardTitle>{plan.name}</CardTitle>
                    <div className="mt-2 flex items-baseline">
                      <span className="text-3xl font-bold">{displayPrice}</span>
                      <span className="ml-1 text-sm text-muted-foreground">
                        /{billingCycle === "monthly" ? "month" : "quarter"}
                      </span>
                    </div>
                    {billingCycle === "quarterly" && originalPrice && (
                      <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground flex-wrap">
                        <span className="line-through">{originalPrice}</span>
                        <span>(10% off)</span>
                      </div>
                    )}
                    <CardDescription className="mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6 flex-grow">
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <motion.li
                          key={feature}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <div
                            className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                              plan.popular ? "bg-purple-100" : "bg-gray-100"
                            }`}
                          >
                            <Check className={`h-3 w-3 ${plan.popular ? "text-purple-600" : "text-gray-600"}`} />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button
                      asChild
                      className={`w-full transition-transform duration-300 hover:scale-105 ${
                        plan.popular ? "bg-purple-600 hover:bg-purple-700" : "bg-gray-800 hover:bg-gray-900"
                      }`}
                    >
                      <Link href="#contact">Enroll Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </StaggerIn>

        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Not sure which plan is right for your child?{" "}
              <Link href="#contact" className="font-medium text-purple-600 hover:underline">
                Contact us
              </Link>{" "}
              for a personalized recommendation.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}