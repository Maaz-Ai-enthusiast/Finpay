import React from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { fadeInUp, fadeInLeft } from "@/hooks/useScrollAnimation";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";

const Stats: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-finpay-light">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <AnimatedSection variants={fadeInLeft} className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why they prefer Finpay
              </h2>
              
              <motion.div
                variants={fadeInUp}
                className="space-y-6"
              >
                <div className="bg-card rounded-2xl p-6 shadow-card">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl font-bold text-finpay-teal mb-2"
                  >
                    3k+
                  </motion.div>
                  <p className="text-muted-foreground">
                    Businesses already running
                    <br />
                    on Finpay
                  </p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-card rounded-2xl p-6 shadow-card border border-finpay-teal/20"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-finpay-teal rounded-xl flex items-center justify-center">
                      <HiOutlineArrowTrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Instant Withdraw</div>
                      <div className="text-sm text-muted-foreground">your funds at any time</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Right Content - Chart */}
          <AnimatedSection variants={fadeInUp} className="relative">
            <motion.div
              variants={fadeInUp}
              className="bg-card rounded-3xl p-8 shadow-floating"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm text-muted-foreground">No asset volatility</div>
                  <div className="text-2xl font-bold text-foreground">$1,576,590</div>
                  <div className="text-sm text-green-600">+24% vs last month</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">8 months →</div>
                </div>
              </div>

              {/* Simple Chart Visualization */}
              <div className="relative h-32">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 300 100"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M10,80 Q50,60 100,50 T200,30 T300,20"
                    stroke="#2A8E9E"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                  
                  {/* Gradient fill under curve */}
                  <motion.path
                    d="M10,80 Q50,60 100,50 T200,30 T300,20 L300,100 L10,100 Z"
                    fill="url(#gradient)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                  
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#2A8E9E" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#2A8E9E" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Data points */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="absolute top-6 right-8 w-3 h-3 bg-finpay-teal rounded-full shadow-lg"
                />
              </div>

              {/* Chart Labels */}
              <div className="flex justify-between text-xs text-muted-foreground mt-4">
                <span>Jan</span>
                <span>Mar</span>
                <span>May</span>
                <span>Jul</span>
                <span>Sep</span>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Stats;