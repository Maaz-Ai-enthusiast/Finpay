import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { fadeInUp } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HiOutlineBookOpen, HiOutlineAcademicCap, HiOutlineVideoCamera, HiOutlineDocumentText } from "react-icons/hi2";

const Learn = () => {
  const resources = [
    {
      icon: HiOutlineBookOpen,
      title: "Getting Started Guide",
      description: "Step-by-step instructions to set up your account and start using Finpay.",
      category: "Beginner",
      readTime: "5 min read",
      type: "Guide"
    },
    {
      icon: HiOutlineVideoCamera,
      title: "Video Tutorials",
      description: "Watch comprehensive video tutorials covering all major features.",
      category: "Intermediate",
      readTime: "15 min watch",
      type: "Video"
    },
    {
      icon: HiOutlineDocumentText,
      title: "API Documentation",
      description: "Complete developer documentation for integrating with our APIs.",
      category: "Advanced",
      readTime: "30 min read",
      type: "Documentation"
    },
    {
      icon: HiOutlineAcademicCap,
      title: "Financial Best Practices",
      description: "Learn industry best practices for financial management and compliance.",
      category: "Expert",
      readTime: "20 min read",
      type: "Article"
    }
  ];

  const faqs = [
    {
      question: "How do I get started with Finpay?",
      answer: "Simply sign up for an account, verify your email, and follow our onboarding guide to set up your first payment method."
    },
    {
      question: "What security measures does Finpay implement?",
      answer: "We use bank-level encryption, two-factor authentication, and comply with PCI DSS standards to protect your data."
    },
    {
      question: "Can I integrate Finpay with my existing systems?",
      answer: "Yes, we offer comprehensive APIs and pre-built integrations with popular platforms like Shopify, WooCommerce, and more."
    },
    {
      question: "What are the transaction fees?",
      answer: "Our fees vary by transaction type and volume. Check our pricing page for detailed information or contact sales for custom pricing."
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
                Learn & <span className="text-finpay-teal">Grow</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Master financial technology with our comprehensive resources, tutorials, 
                and expert insights designed to help you succeed.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <AnimatedSection variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Learning Resources
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to get the most out of Finpay, from basic setup to advanced integrations.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <AnimatedSection
                key={resource.title}
                variants={fadeInUp}
                delay={index * 0.1}
              >
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: 3 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-finpay-teal/10 rounded-lg flex items-center justify-center">
                            <resource.icon className="w-6 h-6 text-finpay-teal" />
                          </div>
                          <div>
                            <CardTitle className="text-xl text-foreground">
                              {resource.title}
                            </CardTitle>
                          </div>
                        </div>
                        <Badge variant="secondary">{resource.type}</Badge>
                      </div>
                      <CardDescription className="text-muted-foreground mt-4">
                        {resource.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="outline">{resource.category}</Badge>
                        <span className="text-sm text-muted-foreground">{resource.readTime}</span>
                      </div>
                      <Button className="w-full bg-finpay-teal hover:bg-finpay-teal/90">
                        Start Learning
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <AnimatedSection variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about Finpay and our services.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection
                key={index}
                variants={fadeInUp}
                delay={index * 0.05}
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                    <CardHeader>
                      <CardTitle className="text-lg text-foreground">
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <AnimatedSection variants={fadeInUp} className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-finpay-teal/10 to-primary/10 rounded-2xl p-12 backdrop-blur-sm border border-border/50"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our support team is here to help you every step of the way. Get in touch for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-finpay-teal hover:bg-finpay-teal/90">
                  Contact Support
                </Button>
                <Button size="lg" variant="outline">
                  Join Community
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

export default Learn;