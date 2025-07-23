import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { fadeInUp } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HiOutlineCreditCard, HiOutlineDevicePhoneMobile, HiOutlineGlobeAlt, HiOutlineShieldCheck } from "react-icons/hi2";

const Products = () => {
  const products = [
    {
      icon: HiOutlineCreditCard,
      title: "Digital Payments",
      description: "Accept payments online and in-person with our secure payment processing platform.",
      features: ["Zero setup fees", "Real-time processing", "Multi-currency support", "Advanced fraud protection"]
    },
    {
      icon: HiOutlineDevicePhoneMobile,
      title: "Mobile Banking",
      description: "Complete banking solution in your pocket with our intuitive mobile app.",
      features: ["Instant transfers", "Bill payments", "Account management", "24/7 customer support"]
    },
    {
      icon: HiOutlineGlobeAlt,
      title: "Global Transfers",
      description: "Send money worldwide with competitive exchange rates and low fees.",
      features: ["190+ countries", "Real exchange rates", "Fast transfers", "Transparent pricing"]
    },
    {
      icon: HiOutlineShieldCheck,
      title: "Business Banking",
      description: "Comprehensive banking solutions designed for modern businesses.",
      features: ["Multi-user access", "Expense management", "API integration", "Advanced reporting"]
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
                Our <span className="text-finpay-teal">Products</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover our comprehensive suite of financial products designed to simplify 
                your money management and accelerate your business growth.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <AnimatedSection
                key={product.title}
                variants={fadeInUp}
                delay={index * 0.1}
              >
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-finpay-teal/10 rounded-lg flex items-center justify-center">
                          <product.icon className="w-6 h-6 text-finpay-teal" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-foreground">
                            {product.title}
                          </CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-muted-foreground mt-4">
                        {product.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-finpay-teal rounded-full"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-finpay-teal hover:bg-finpay-teal/90">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;