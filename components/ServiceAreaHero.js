"use client";

import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import img from "../Assets/service-area/1.jpg";

export default function ServiceAreaHero() {
  return (
    <section
      style={{
        backgroundImage: `url(${img.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="pt-32 pb-16 relative"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Service Area
            <span className="text-red-700 block">& </span>Coverage
          </h1>

          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            We provide comprehensive towing and roadside assistance across the
            entire metropolitan region with strategically located dispatch
            centers for the fastest response times.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <MapPin className="h-6 w-6 text-blue-300" />
              <div className="text-left">
                <div className="text-lg font-semibold text-white">
                  6 States Covered
                </div>
                <div className="text-sm text-blue-200">
                  Comprehensive Coverage
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Clock className="h-6 w-6 text-blue-300" />
              <div className="text-left">
                <div className="text-lg font-semibold text-white">
                  15-30 Minutes
                </div>
                <div className="text-sm text-blue-200">
                  Average Response Time
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
