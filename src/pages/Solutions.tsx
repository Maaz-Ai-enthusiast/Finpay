import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { fadeInUp } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HiOutlineUsers, HiOutlineBuildingOffice, HiOutlineCog, HiOutlineChartBarSquare } from "react-icons/hi2";

const Solutions = () => {
  const solutions = [
    {
      icon: HiOutlineUsers,
      title: "Personal Solutions",
      description: "Tailored financial tools for individuals looking to manage their money better.",
      benefits: ["Personal budgeting", "Savings goals", "Investment tracking", "Credit monitoring"],
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      icon: HiOutlineBuildingOffice,
      title: "Small Business",
      description: "Everything small businesses need to handle finances efficiently.",
      benefits: ["Invoicing & billing", "Expense tracking", "Tax preparation", "Cash flow management"],
      color: "bg-green-500/10 text-green-500"
    },
    {
      icon: HiOutlineCog,
      title: "Enterprise",
      description: "Scalable solutions for large organizations with complex financial needs.",
      benefits: ["Multi-entity management", "Advanced reporting", "API integrations", "Dedicated support"],
      color: "bg-purple-500/10 text-purple-500"
    },
    {
      icon: HiOutlineChartBarSquare,
      title: "Analytics & Insights",
      description: "Data-driven insights to help you make better financial decisions.",
      benefits: ["Real-time dashboards", "Predictive analytics", "Custom reports", "Performance metrics"],
      color: "bg-orange-500/10 text-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <AnimatedSection variants={fadeInUp} className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Smart <span className="text-finpay-teal">Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From personal finance to enterprise-grade systems, we provide solutions 
                that scale with your needs and grow with your ambitions.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <AnimatedSection
                key={solution.title}
                variants={fadeInUp}
                delay={index * 0.1}
              >
                <motion.div
                  whileHover={{ scale: 1.02, rotateX: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${solution.color}`}>
                          <solution.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-foreground">
                            {solution.title}
                          </CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-muted-foreground mt-4">
                        {solution.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-finpay-teal rounded-full"></div>
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-finpay-teal hover:bg-finpay-teal/90">
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <AnimatedSection variants={fadeInUp} className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-finpay-teal/10 to-primary/10 rounded-2xl p-12 backdrop-blur-sm border border-border/50"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Transform Your Financial Operations?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our solutions can be customized to meet your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-finpay-teal hover:bg-finpay-teal/90">
                  Schedule a Demo
                </Button>
                <Button size="lg" variant="outline">
                  Contact Sales
                </Button>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;