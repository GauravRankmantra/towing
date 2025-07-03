"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Clock } from "lucide-react";

export default function ContactBar() {
  return (
    <section className="py-16 bg-blue-50 border-t shadow-2xl">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Need Help Right Now?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our dispatch center is open 24/7, ready to send help to your
            location. Call now for immediate assistance.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="flex gap-2 ">
              <motion.a
                href="tel:888-468-5561"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 bg-red-600 text-white px-8 py-4 rounded-xl hover:bg-red-700 transition-colors text-lg font-semibold shadow-lg"
              >
                <Phone className="h-6 w-6" />
                <span>888-468-5561</span>
              </motion.a>

              <motion.a
                href="https://wa.me/18322256273"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-colors text-lg font-semibold shadow-lg"
              >
                <MessageCircle className="h-6 w-6" />
                <span>WhatsApp</span>
              </motion.a>
            </div>

            <div className="flex items-center space-x-3 text-gray-900">
              <Clock className="h-6 w-6 text-blue-500" />
              <div className="text-left">
                <div className="font-semibold">24/7 Availability</div>
                <div className="text-sm text-blue-500">
                  Always Ready to Help
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
