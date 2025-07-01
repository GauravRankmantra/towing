"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

export default function CoverageAreas() {
  const counties = [
    {
      name: "Greater Houston",
      cities: [
        "Houston (All Wards & Suburbs)",
        "Katy",
        "Cypress",
        "Sugar Land",
        "Pearland",
        "Pasadena",
      ],
      responseTime: "15-25 minutes",
      trucks: 14,
    },
    {
      name: "Northern Coverage",
      cities: [
        "Spring",
        "Tomball",
        "The Woodlands",
        "Humble",
        "Aldine",
        "Kingwood",
      ],
      responseTime: "20-30 minutes",
      trucks: 10,
    },
    {
      name: "Eastern & Coastal Area",
      cities: [
        "Baytown",
        "Deer Park",
        "Channelview",
        "La Porte",
        "Galena Park",
        "Highlands",
      ],
      responseTime: "25-35 minutes",
      trucks: 8,
    },
    {
      name: "Southern Belt",
      cities: [
        "Friendswood",
        "League City",
        "Alvin",
        "Manvel",
        "Clear Lake",
        "Webster",
      ],
      responseTime: "25-35 minutes",
      trucks: 9,
    },
    {
      name: "Western Houston",
      cities: [
        "Richmond",
        "Rosenberg",
        "Fulshear",
        "Brookshire",
        "Simonton",
        "Mission Bend",
      ],
      responseTime: "25-35 minutes",
      trucks: 7,
    },
    {
      name: "Extended Regional",
      cities: [
        "Beaumont",
        "College Station",
        "Victoria",
        "Huntsville",
        "Brenham",
        "Galveston",
      ],
      responseTime: "30-45 minutes",
      trucks: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Detailed Coverage Areas
          </h2>
          <p className="text-sm text-gray-500 mt-6 text-center">
            Note: Services outside Toll 99 are billed at long-haul rates to
            maintain fast and fair statewide coverage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {counties.map((county, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {county.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {county.trucks} trucks available
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-6">
                {county.cities.map((city, idx) => (
                  <div
                    key={idx}
                    className="text-sm text-gray-600 flex items-start"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    {city}
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-gray-900">
                      Response Time:
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-green-600">
                    {county.responseTime}
                  </span>
                </div>

                <a
                  href="tel:888-468-5561"
                  className="flex items-center justify-center space-x-2 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call for Service</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Emergency Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-red-50 border-l-4 border-red-500 rounded-lg p-6"
        >
          <div className="flex items-center space-x-3 mb-4">
            <Phone className="h-6 w-6 text-red-600" />
            <h3 className="text-lg font-semibold text-red-900">
              Emergency Services
            </h3>
          </div>
          <p className="text-red-700 mb-4">
            If you're experiencing a roadside emergency, don't wait! Call us
            immediately at
            <strong> (555) 123-TOWS</strong> for the fastest response time in
            your area.
          </p>
          <p className="text-sm text-red-600">
            * Response times may vary based on weather conditions, traffic, and
            emergency priority.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
