import React from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/hooks/useScrollAnimation";

const CTA: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-finpay-dark via-finpay-dark to-finpay-darker text-white relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <AnimatedSection variants={fadeInUp} className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Ready to level up your
            <br />
            <span className="text-finpay-teal">payment process?</span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            Join thousands of businesses already using Finpay
            to streamline their financial operations.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                size="lg"
                className="bg-finpay-teal hover:bg-finpay-teal/90 text-white px-8 py-4 text-lg font-semibold shadow-floating"
              >
                Get Started Free
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-[#2c8c96] hover:bg-white/10 px-8 py-4 text-lg"
              >
                Schedule Demo →
              </Button>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-finpay-teal/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-finpay-teal/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
};

export default CTA;