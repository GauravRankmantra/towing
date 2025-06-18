"use client";

import { motion } from "framer-motion";
import {
  Car,
  Truck,
  Users,
  Wrench,
  MapPin,
  Key,
  Clock,
  DollarSign,
  Phone,
} from "lucide-react";

export default function ServiceCards() {
  const services = [
    {
      icon: Car,
      title: "Light Duty Towing",
      description:
        "Professional towing for cars, motorcycles, and small vehicles up to 10,000 lbs.",
      features: [
        "Flatbed towing for maximum safety",
        "Wheel lift towing when needed",
        "Damage-free vehicle transport",
        "Emergency roadside pickup",
      ],
      price: "Starting at $75",
      responseTime: "15-30 minutes",
    },
    {
      icon: Truck,
      title: "Medium Duty Towing",
      description:
        "Specialized towing for larger vehicles including box trucks, RVs, and vehicles up to 26,000 lbs.",
      features: [
        "Heavy-duty towing equipment",
        "Experienced operators",
        "Careful vehicle handling",
        "Commercial vehicle expertise",
      ],
      price: "Starting at $150",
      responseTime: "20-45 minutes",
    },
    {
      icon: Users,
      title: "Heavy Duty Towing",
      description:
        "Complete heavy-duty solutions for commercial trucks, buses, and heavy equipment.",
      features: [
        "Rotator recovery services",
        "Load transfers and adjustments",
        "Accident scene management",
        "Specialized heavy equipment",
      ],
      price: "Custom pricing",
      responseTime: "30-60 minutes",
    },
    {
      icon: Wrench,
      title: "Roadside Assistance",
      description:
        "Get back on the road quickly with our comprehensive mobile assistance services.",
      features: [
        "Battery jump starts",
        "Flat tire changes",
        "Fuel delivery service",
        "Minor mechanical repairs",
      ],
      price: "Starting at $50",
      responseTime: "15-30 minutes",
    },
    {
      icon: MapPin,
      title: "Long Distance Towing",
      description:
        "Safe and reliable vehicle transport across state lines and long distances.",
      features: [
        "Interstate hauling services",
        "Secure vehicle transport",
        "GPS tracking available",
        "Insurance coverage included",
      ],
      price: "$2.50 per mile",
      responseTime: "1-2 hours",
    },
    {
      icon: Key,
      title: "Lockout & Recovery",
      description:
        "Emergency lockout services and vehicle recovery from difficult situations.",
      features: [
        "Professional door unlocking",
        "Key cutting and replacement",
        "Vehicle recovery services",
        "Winch-out operations",
      ],
      price: "Starting at $60",
      responseTime: "15-30 minutes",
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
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive towing and roadside assistance services to get you
            back on the road safely.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 mx-auto">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  {service.title}
                </h3>
                <p className="text-blue-100 text-sm text-center">
                  {service.description}
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing and Response Time */}
                <div className="border-t pt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-gray-900">
                        Price:
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-green-600">
                      {service.price}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-gray-900">
                        Response:
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-blue-600">
                      {service.responseTime}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-6">
                  <a
                    href="tel:+15551234567"
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Call for This Service
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Service Right Now?</h3>
            <p className="text-blue-100 mb-6">
              Don't wait - call us now for immediate assistance. Our dispatch
              team is standing by 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="flex items-center justify-center space-x-2 bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                <Phone className="h-5 w-5" />
                <span>Emergency: (555) 123-TOWS</span>
              </a>
              <a
                href="/request-service"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Request Service Online
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
