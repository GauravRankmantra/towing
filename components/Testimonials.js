"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare, Clock, Shield, Zap } from "lucide-react";
import Link from "next/link";
import bgImage from "../Assets/TowingTruckImage.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#111111] pt-10 pb-14 md:pb-0">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-opacity-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage.src})`,
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            24/7 Emergency
            <span className="text-[#A18B6A] block">Towing Services</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Fast, reliable, and professional towing services when you need them
            most. Licensed, insured, and ready to help.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.a
              href="tel:888-468-5561"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-3 bg-[#A18B6A] text-white px-8 py-4 rounded-xl hover:bg-[#8c7757] transition-colors text-lg font-semibold shadow-lg"
            >
              <Phone className="h-6 w-6" />
              <span>Call Now: 888-468-5561</span>
            </motion.a>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className="flex items-center justify-center space-x-3 bg-white text-[#111111] px-8 py-4 rounded-xl hover:bg-[#f5f5f5] transition-colors text-lg font-semibold shadow-lg"
              >
                <MessageSquare className="h-6 w-6" />
                <span>Request Service</span>
              </Link>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 text-white">
              <Clock className="h-8 w-8 text-[#A18B6A]" />
              <div className="text-left">
                <div className="font-semibold text-lg">15-30 Min</div>
                <div className="text-sm text-gray-300">Response Time</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 text-white">
              <Shield className="h-8 w-8 text-[#A18B6A]" />
              <div className="text-left">
                <div className="font-semibold text-lg">Fully Insured</div>
                <div className="text-sm text-gray-300">Licensed & Bonded</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 text-white">
              <Zap className="h-8 w-8 text-[#A18B6A]" />
              <div className="text-left">
                <div className="font-semibold text-lg">24/7 Available</div>
                <div className="text-sm text-gray-300">Always Ready</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
