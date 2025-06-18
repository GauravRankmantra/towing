"use client";

import img1 from "../Assets/hero/4.jpg";
import { motion } from "framer-motion";
import { Shield, Users, Clock, Award } from "lucide-react";

export default function AboutHero() {
  const stats = [
    { icon: Users, number: "15+", label: "Years of Service" },
    { icon: Clock, number: "24/7", label: "Availability" },
    { icon: Shield, number: "100%", label: "Insured" },
    { icon: Award, number: "5000+", label: "Happy Customers" },
  ];

  return (
    <section
      style={{
        backgroundImage: `url(${img1.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="pt-32 relative pb-16"
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Elite Towing
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              For over 15 years, Elite Towing has been the trusted name in
              professional towing and roadside assistance services. We're a
              family-owned business committed to providing reliable, fast, and
              affordable solutions when you need them most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+15551234567"
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold text-center"
              >
                Call Now: (555) 123-TOWS
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition-colors font-semibold text-center"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
              >
                <stat.icon className="h-8 w-8 text-blue-300 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
