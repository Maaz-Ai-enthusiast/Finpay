import React from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { fadeInUp, staggerContainer } from "@/hooks/useScrollAnimation";
import { HiOutlineCreditCard, HiOutlineShieldCheck, HiOutlineBanknotes } from "react-icons/hi2";

const Features: React.FC = () => {
  const features = [
    {
      icon: HiOutlineBanknotes,
      title: "Free transfers",
      description: "Enjoy fee free transfers on your transfers from and to your finpay account."
    },
    {
      icon: HiOutlineCreditCard,
      title: "Multiple account",
      description: "Finpay's innovative account management allow for multiple account creation and management with your individual account."
    },
    {
      icon: HiOutlineShieldCheck,
      title: "Unmatched security",
      description: "Utilizing modern security and using the modern fintech and security tools, make for secured transact are assured transactions."
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <AnimatedSection variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Experience that grows
            <br />
            <span className="text-finpay-teal">with your scale.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Digitizing financial operations so that you can focus less 
            and streamlined cash flow for improved operations.
          </p>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-floating transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 bg-finpay-teal/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-finpay-teal/20 transition-colors"
              >
                <feature.icon className="w-8 h-8 text-finpay-teal" />
              </motion.div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;