import React from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { fadeInUp, fadeInRight, scaleIn } from "@/hooks/useScrollAnimation";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <AnimatedSection variants={fadeInUp} className="space-y-8">
            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-6xl font-bold text-foreground leading-tight"
            >
              Get paid early
              <br />
              <span className="text-finpay-teal">save automatically</span>
              <br />
              all your pay.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground max-w-lg"
            >
              Improve your financial wellness with simple budgeting, 
              faster deposits, and automatic cash back rewards built 
              into your everyday spending.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Button
                size="lg"
                className="bg-finpay-teal hover:bg-finpay-teal/90 text-white px-8 py-4 text-lg font-semibold shadow-floating"
              >
                Get Started
              </Button>
            </motion.div>

            {/* Partner Logos */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center space-x-8 pt-8"
            >
              <span className="text-sm text-muted-foreground">Trusted by</span>
              <div className="flex items-center space-x-6">
                <div className="text-2xl font-bold text-muted-foreground/60">Klarna</div>
                <div className="text-2xl font-bold text-muted-foreground/60">coinbase</div>
                <div className="text-2xl font-bold text-muted-foreground/60">instacart</div>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Right Content - Card Interface */}
          <AnimatedSection variants={fadeInRight} className="relative">
            <motion.div
              variants={scaleIn}
              className="bg-card rounded-3xl shadow-floating p-8 border border-border/50 relative overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-finpay-teal/10 rounded-full blur-3xl" />
              
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-finpay-teal rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">F</span>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Finpay Gold</div>
                    <div className="text-lg font-semibold">234 **** **** 1234</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">VISA</div>
                </div>
              </div>

              {/* Balance */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="mb-8"
              >
                <div className="text-sm text-muted-foreground mb-1">Available Balance</div>
                <div className="text-4xl font-bold text-foreground">$1,576,590</div>
              </motion.div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center space-x-2 py-3 px-4 bg-muted rounded-xl hover:bg-muted/80 transition-colors"
                >
                  <div className="w-6 h-6 bg-finpay-teal rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs">💳</span>
                  </div>
                  <span className="font-medium">Quick Card</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center space-x-2 py-3 px-4 bg-muted rounded-xl hover:bg-muted/80 transition-colors"
                >
                  <div className="w-6 h-6 bg-finpay-teal rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs">🏦</span>
                  </div>
                  <span className="font-medium">Bank Account</span>
                </motion.button>
              </div>

              {/* Send Money Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-finpay-teal hover:bg-finpay-teal/90 text-white py-4 rounded-xl font-semibold transition-colors"
              >
                Send Money
              </motion.button>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;