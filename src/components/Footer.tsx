import React from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { fadeInUp } from "@/hooks/useScrollAnimation";
import { HiOutlineGlobeAlt, HiOutlinePhone, HiOutlineEnvelope } from "react-icons/hi2";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "Solutions",
      links: ["Personal", "Business", "Enterprise", "Developers"]
    },
    {
      title: "Company",
      links: ["About", "Careers", "Press", "Blog"]
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Security", "Compliance"]
    }
  ];

  const socialLinks = [
    { icon: FaTwitter, href: "#" },
    { icon: FaFacebook, href: "#" },
    { icon: FaLinkedin, href: "#" },
    { icon: FaInstagram, href: "#" }
  ];

  return (
    <footer className="bg-background border-t border-border pt-20 pb-8 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <AnimatedSection variants={fadeInUp} className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-finpay-teal rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold text-foreground">Finpay</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Empowering businesses with modern financial solutions. 
              Get paid faster, save automatically, and grow your wealth.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <HiOutlineGlobeAlt className="w-4 h-4" />
                <span>finpay.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <HiOutlinePhone className="w-4 h-4" />
                <span>+44 20 7946 0958</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <HiOutlineEnvelope className="w-4 h-4" />
                <span>hello@finpay.com</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <AnimatedSection
              key={section.title}
              variants={fadeInUp}
              delay={0.1 + index * 0.1}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {section.title}
              </h3>
              
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="text-muted-foreground hover:text-finpay-teal transition-colors duration-200"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom Section */}
        <AnimatedSection
          variants={fadeInUp}
          className="border-t border-border pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Finpay. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-finpay-teal hover:bg-finpay-teal/10 transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-finpay-teal/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl -z-10" />
    </footer>
  );
};

export default Footer;