import React from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { fadeInUp, staggerContainer } from "@/hooks/useScrollAnimation";

const Testimonials: React.FC = () => {
  const stats = [
    { value: "24%", label: "Return of business" },
    { value: "180K", label: "Registered Revenue" },
    { value: "10+", label: "Months of savings" }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <AnimatedSection variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            We've helped
            <br />
            <span className="text-finpay-teal">innovative companies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we'll go and automate it
            <br />
            More than you can ever spending
          </p>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="text-center bg-card rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-floating transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2 + index * 0.2,
                  type: "spring",
                  stiffness: 200
                }}
                className="text-5xl font-bold text-finpay-teal mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-muted-foreground font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Trust Badge */}
        <AnimatedSection variants={fadeInUp} className="text-center">
          <p className="text-sm text-muted-foreground mb-4">COMPANY TRUST</p>
          <div className="text-2xl font-bold text-muted-foreground/60">
            Trusted by leading companies worldwide
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;