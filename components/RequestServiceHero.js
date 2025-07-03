"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare, Clock } from "lucide-react";

export default function RequestServiceHero() {
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
            Request Service
            <span className="text-blue-300 block">Online</span>
          </h1>

          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Fill out our quick form below or call us directly for immediate
            assistance. We'll get back to you within minutes with confirmation
            and estimated arrival time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:888-468-5561"
              className="flex items-center justify-center space-x-2 bg-red-600 text-white px-8 py-4 rounded-xl hover:bg-red-700 transition-colors text-lg font-semibold"
            >
              <Phone className="h-6 w-6" />
              <span>Call Now: 888-468-5561</span>
            </a>
            <a
              href="https://wa.me/18322256273"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-colors text-lg font-semibold"
            >
              <MessageSquare className="h-6 w-6" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="flex items-center justify-center space-x-3 text-blue-100">
            <Clock className="h-5 w-5" />
            <span>Average response time: 15-30 minutes</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
