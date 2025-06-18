"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Clock } from "lucide-react";

export default function ContactBar() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Help Right Now?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our dispatch center is open 24/7, ready to send help to your
            location. Call now for immediate assistance.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <motion.a
              href="tel:+12345"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 bg-red-600 text-white px-8 py-4 rounded-xl hover:bg-red-700 transition-colors text-lg font-semibold shadow-lg"
            >
              <Phone className="h-6 w-6" />
              <span>1234567</span>
            </motion.a>

            <motion.a
              href="sms:+1234567"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-colors text-lg font-semibold shadow-lg"
            >
              <MessageCircle className="h-6 w-6" />
              <span>Text Us</span>
            </motion.a>

            <div className="flex items-center space-x-3 text-white">
              <Clock className="h-6 w-6 text-blue-200" />
              <div className="text-left">
                <div className="font-semibold">24/7 Availability</div>
                <div className="text-sm text-blue-200">
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
