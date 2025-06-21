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
            <span className="text-red-700 block">& Coverage</span>
          </h1>

          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            At <strong>SpaceTime Towing & Recovery, LLC</strong>, we proudly serve drivers across the Greater Houston area and beyond, providing fast, reliable roadside assistance and towing services for both light- and heavy-duty vehicles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <MapPin className="h-6 w-6 text-blue-300" />
              <div className="text-left">
                <div className="text-lg font-semibold text-white">
                  Greater Houston
                </div>
                <div className="text-sm text-blue-200">
                  Local & Regional Reach
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Clock className="h-6 w-6 text-blue-300" />
              <div className="text-left">
                <div className="text-lg font-semibold text-white">
                  24/7 Dispatch
                </div>
                <div className="text-sm text-blue-200">
                  Fast Response Anytime
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
