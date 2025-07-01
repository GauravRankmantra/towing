"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import img from "../Assets/service-area/2.jpg";

export default function ContactHero() {
  return (
    <section
      className="pt-40 pb-16 relative z-10 bg-cover bg-center"
      style={{
        backgroundImage: `url(${img.src})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Need help right now? Contact us for immediate assistance or send
              us a message and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:888-468-5561"
                className="flex items-center justify-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
              <a
                href="mailto:Service@SpaceTimeTowing.com"
                className="flex items-center justify-center space-x-2 border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition-colors font-semibold"
              >
                <Mail className="h-5 w-5" />
                <span>Email Us</span>
              </a>
            </div>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Phone className="h-8 w-8 text-blue-300 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">
                Emergency Line
              </h3>
              <p className="text-blue-200 text-sm mb-3">Available 24/7</p>
              <a href="tel:888-468-5561" className="text-white font-medium">
                888-468-5561
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Mail className="h-8 w-8 text-blue-300 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-blue-200 text-sm mb-3">General inquiries</p>
              <a
                href="mailto:Service@SpaceTimeTowing.com"
                className="text-white font-medium"
              >
                Service@SpaceTimeTowing.com
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <MapPin className="h-8 w-8 text-blue-300 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">
                Service Area
              </h3>
              <p className="text-blue-200 text-sm mb-3">Main service area</p>
              <p className="text-white font-medium">Houston, Texas</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Clock className="h-8 w-8 text-blue-300 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Hours</h3>
              <p className="text-blue-200 text-sm mb-3">Always available</p>
              <p className="text-white font-medium">
                24/7 Emergency
                <br />
                Service
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
