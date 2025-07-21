import React from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { fadeInUp, scaleIn } from "@/hooks/useScrollAnimation";
import { HiCheck } from "react-icons/hi2";

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Plus",
      price: "£2.99",
      period: "/month",
      features: [
        "Basic account management",
        "Standard transfers",
        "Email support",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "£8.99",
      period: "/month",
      features: [
        "Advanced analytics",
        "Priority support",
        "Unlimited transfers",
        "Investment insights",
        "Multi-currency support",
        "API access"
      ],
      popular: true
    }
  ];

  return (
    <section className="py-20 px-6 bg-finpay-light">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Choose your plan
          </h2>
          <p className="text-lg text-muted-foreground">
            Start free and scale as you grow
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, index) => (
            <AnimatedSection
              key={plan.name}
              variants={scaleIn}
              delay={index * 0.2}
              className="relative"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className={`bg-card rounded-3xl p-8 shadow-card border-2 transition-all duration-300 h-full relative overflow-hidden ${
                  plan.popular 
                    ? 'border-finpay-teal shadow-floating' 
                    : 'border-border/50 hover:border-finpay-teal/30'
                }`}
              >
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-finpay-teal text-white px-6 py-2 rounded-full text-sm font-semibold"
                  >
                    Most Popular
                  </motion.div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  
                  <div className="flex items-baseline justify-center">
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-5xl font-bold text-foreground"
                    >
                      {plan.price}
                    </motion.span>
                    <span className="text-muted-foreground ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.5 + featureIndex * 0.1 
                      }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-5 h-5 bg-finpay-teal/20 rounded-full flex items-center justify-center">
                        <HiCheck className="w-3 h-3 text-finpay-teal" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    className={`w-full py-3 font-semibold ${
                      plan.popular
                        ? 'bg-finpay-teal hover:bg-finpay-teal/90 text-white'
                        : 'bg-muted hover:bg-muted/80 text-foreground'
                    }`}
                  >
                    Get Started
                  </Button>
                </motion.div>

                {/* Background decoration */}
                <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-finpay-teal/5 rounded-full blur-2xl" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;