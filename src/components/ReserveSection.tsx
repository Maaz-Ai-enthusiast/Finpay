import React from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { fadeInUp, staggerContainer } from "@/hooks/useScrollAnimation";
import { HiOutlineWallet, HiOutlineArrowsRightLeft, HiOutlineEye } from "react-icons/hi2";

const ReserveSection: React.FC = () => {
  const features = [
    {
      icon: HiOutlineWallet,
      title: "Open your account",
      description: "Sign in using simple details verification faster than an opening."
    },
    {
      icon: HiOutlineArrowsRightLeft,
      title: "Transfer your money",
      description: "Have your money immediately transferred to your reserve account."
    },
    {
      icon: HiOutlineEye,
      title: "Watch your balance grow",
      description: "Watch as your balance grows without any transaction at every given time."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-finpay-dark via-finpay-dark to-finpay-darker text-white">
      <div className="container mx-auto">
        <AnimatedSection variants={fadeInUp} className="text-center mb-16">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Maximize your returns with a
            <br />
            <span className="text-finpay-teal">Reserve account that generates.</span>
          </motion.h2>
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
                rotateY: 10,
                transition: { duration: 0.3 }
              }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotateZ: 10 }}
                transition={{ duration: 0.3 }}
                className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-finpay-teal/20 transition-colors backdrop-blur-sm"
              >
                <feature.icon className="w-10 h-10 text-finpay-teal" />
              </motion.div>
              
              <h3 className="text-xl font-semibold mb-4">
                {feature.title}
              </h3>
              
              <p className="text-white/80 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-finpay-teal/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
};

export default ReserveSection;