"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Truck, Clock } from "lucide-react";
import mapImg from "../public/map.png";

export default function ServiceAreaMap() {
  const dispatchCenters = [
    {
      name: "Central Dispatch",
      location: "Houston (All Wards & Suburbs)",
      trucks: 8,
      coords: { top: "45%", left: "50%" },
    },
    {
      name: "North Station",
      location: "Spring / The Woodlands",
      trucks: 6,
      coords: { top: "25%", left: "40%" },
    },
    {
      name: "South Hub",
      location: "Pearland / Pasadena",
      trucks: 7,
      coords: { top: "70%", left: "45%" },
    },
    {
      name: "East Center",
      location: "Baytown / Humble",
      trucks: 5,
      coords: { top: "50%", left: "75%" },
    },
    {
      name: "West Point",
      location: "Katy / Cypress / Sugar Land",
      trucks: 4,
      coords: { top: "40%", left: "25%" },
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Coverage Map & Dispatch Centers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We proudly serve drivers across the Greater Houston area and beyond, providing fast, reliable roadside assistance and towing services for both light- and heavy-duty vehicles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 relative overflow-hidden">
              {/* Map Background */}
              <Image
                src={mapImg}
                alt="Coverage Map"
                className="absolute h-full object-cover inset-0 bg-gradient-to-br from-blue-200/30 to-blue-300/30"
              />

              {/* Dispatch Centers */}
              <div className="relative h-full w-full">
                {dispatchCenters.map((center, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="absolute"
                    style={center.coords}
                  >
                    <div className="relative group cursor-pointer">
                      {/* Pulse Animation */}
                      <motion.div
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-red-500 rounded-full opacity-30"
                      ></motion.div>

                      {/* Center Dot */}
                      <div className="relative w-4 h-4 bg-red-600 rounded-full shadow-lg z-10"></div>

                      {/* Tooltip */}
                      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
                        <div className="text-sm font-semibold text-gray-900">
                          {center.name}
                        </div>
                        <div className="text-xs text-gray-600">
                          {center.location}
                        </div>
                        <div className="text-xs text-blue-600">
                          {center.trucks} trucks available
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-900">
                      Dispatch Centers
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-600">Live Status</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dispatch Centers Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Local Coverage – Greater Houston
            </h3>

            <ul className="grid grid-cols-2 gap-3 text-gray-700 text-sm">
              <li>Houston (All Wards & Suburbs)</li>
              <li>Katy</li>
              <li>Cypress</li>
              <li>Sugar Land</li>
              <li>Pearland</li>
              <li>Pasadena</li>
              <li>Spring</li>
              <li>Tomball</li>
              <li>The Woodlands</li>
              <li>Humble</li>
              <li>Baytown</li>
              <li>And more — anywhere within Toll 99</li>
            </ul>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Regional Coverage – Beyond Houston
              </h4>
              <p className="text-gray-600 text-sm">
                We also offer extended roadside assistance and towing services throughout the state of Texas and neighboring regions for long-haul support, breakdowns, or accident recovery involving commercial or personal vehicles.
              </p>

              <div className="mt-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 text-sm rounded-md">
                📍 All services rendered outside of Toll 99 are billed at long-haul pricing. This allows us to maintain dependable and timely service across longer distances while remaining competitive and transparent with our rates.
              </div>

              <p className="mt-6 text-gray-700 text-sm">
                Whether you’re on a local job site, broken down along I-10, or miles out on a rural Texas highway, SpaceTime Towing & Recovery, LLC is the name to trust for prompt, professional service—any time, anywhere.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
