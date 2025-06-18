"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-900 to-blue-800">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Complete Towing
            <span className="text-blue-300 block">Solutions</span>
          </h1>

          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            From light-duty emergency towing to heavy commercial recovery, we
            have the equipment and expertise to handle any situation safely and
            efficiently.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="flex items-center justify-center space-x-2 bg-red-600 text-white px-8 py-4 rounded-xl hover:bg-red-700 transition-colors text-lg font-semibold"
            >
              <Phone className="h-6 w-6" />
              <span>Emergency: (555) 123-TOWS</span>
            </a>
            <a
              href="/request-service"
              className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-900 transition-colors text-lg font-semibold"
            >
              Request Service
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
