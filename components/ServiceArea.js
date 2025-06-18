"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import Link from "next/link";

export default function ServiceArea() {
  const coverageAreas = [
    "Downtown Metro Area",
    "North County",
    "South Bay",
    "East Valley",
    "West Hills",
    "Coastal Region",
  ];

  return (
    <section className="relative z-0 py-24 bg-white overflow-hidden">
      {/* Decorative blurred shape */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-100 rounded-full blur-[120px] opacity-30"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              Serving Your Area <span className="text-blue-600">24/7</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Our extensive service area covers the entire metro region with
              strategically located dispatch centers to ensure rapid response
              times.
            </p>

            {/* Locations */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {coverageAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center px-3 py-2 rounded-md bg-blue-50 text-blue-800 text-sm font-medium shadow-sm hover:bg-blue-100 transition"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  {area}
                </motion.div>
              ))}
            </div>

            {/* Info Box */}
            <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-xl p-6 shadow-md mb-8">
              <div className="flex items-center gap-4 mb-3">
                <Clock className="h-6 w-6 text-blue-600" />
                <p className="text-gray-900 font-semibold text-lg">
                  Avg Response Time:{" "}
                  <span className="text-blue-700">15–30 Minutes</span>
                </p>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Closest available truck is always dispatched to your location to
                minimize waiting and maximize safety.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/"
                // href="/service-area"
                className="bg-blue-600 text-white px-6 py-3 rounded-full text-center text-sm font-semibold shadow-lg hover:opacity-90 transition"
              >
                View Full Coverage Map
              </Link>
              <a
                href="tel:+12345"
                className="flex items-center justify-center gap-2 border border-blue-600 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-600 hover:text-white transition"
              >
                <Phone className="w-4 h-4" />
                Call for Service
              </a>
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.949536641391!2d-73.98981922444304!3d40.748817835720105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18f1e7f3%3A0x460be3df2030a73c!2sEmpire%20State%20Building!5e0!3m2!1sen!2sin!4v1718618569301!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Map Overlay Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md shadow-md rounded-lg p-4 flex justify-between items-center">
              <div>
                <div className="text-xs font-semibold text-gray-800 uppercase tracking-wide">
                  Service Trucks
                </div>
                <div className="text-sm text-gray-600">Available Now: 12</div>
              </div>
              <div className="w-3 h-3 rounded-full bg-green-500 animate-ping"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
