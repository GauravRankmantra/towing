"use client";

import { motion } from "framer-motion";
import {
  FaCar,
  FaTruck,
  FaUsers,
  FaWrench,
  FaMapMarkerAlt,
  FaKey,
  FaClock,
  FaDollarSign,
  FaPhone,
  FaShieldAlt,
  FaBolt,
  FaExclamationTriangle,
  FaGasPump,
  FaUndo,
  FaBox,
} from "react-icons/fa";
import img from "../Assets/bgDesign.jpg";
import { Clock, DollarSign, Phone } from "lucide-react";

export default function ServiceCards() {
  const services = [
    {
      icon: <FaCar className="h-8 w-8 text-blue-400" />,
      title: "24/7 Emergency Towing",
      description:
        "Towing for cars, SUVs, motorcycles, and light trucks across the metro area.",
      features: [
        "Flatbed & wheel-lift towing",
        "Citywide response",
        "Damage-free handling",
      ],
      price: "$75+",
      responseTime: "15-30 min",
    },
    {
      icon: <FaBolt className="h-8 w-8 text-blue-400" />,
      title: "Jump Starts",
      description: "Fast, reliable battery service wherever you’re stranded.",
      features: [
        "Mobile jump service",
        "Battery check",
        "No start? We'll tow it.",
      ],
      price: "$50+",
      responseTime: "15-25 min",
    },
    {
      icon: <FaWrench className="h-8 w-8 text-blue-400" />,
      title: "Flat Tire Changes",
      description: "Quick roadside tire replacements to get you moving again.",
      features: [
        "Spare tire installation",
        "Tire inflation",
        "On-spot service",
      ],
      price: "$45+",
      responseTime: "15-30 min",
    },
    {
      icon: <FaKey className="h-8 w-8 text-blue-400" />,
      title: "Lockout Assistance",
      description: "Non-damaging vehicle entry when keys are locked inside.",
      features: [
        "Quick entry tools",
        "No damage guarantee",
        "Car/Truck/Van access",
      ],
      price: "$60+",
      responseTime: "15-30 min",
    },
    {
      icon: <FaGasPump className="h-8 w-8 text-blue-400" />,
      title: "Fuel Delivery",
      description:
        "Emergency fuel (gas or diesel) delivered directly to your location.",
      features: ["Gas or diesel", "City-wide coverage", "On-demand delivery"],
      price: "$40+",
      responseTime: "15-30 min",
    },
    {
      icon: <FaTruck className="h-8 w-8 text-blue-400" />,
      title: "Heavy-Duty Towing",
      description:
        "For semi-trucks, buses, RVs, trailers, and heavy equipment.",
      features: [
        "Rotator & heavy winch",
        "Licensed operators",
        "Fleet transport",
      ],
      price: "Custom",
      responseTime: "30-60 min",
    },
    {
      icon: <FaExclamationTriangle className="h-8 w-8 text-blue-400" />,
      title: "Breakdown Assistance",
      description:
        "On-site diagnostics for air brakes, cooling systems & more.",
      features: ["Quick diagnostics", "Mobile repair assist", "Heavy vehicles"],
      price: "Custom",
      responseTime: "30-60 min",
    },
    {
      icon: <FaUndo className="h-8 w-8 text-blue-400" />,
      title: "Winch-Outs & Off-Road Recovery",
      description:
        "Safe and efficient recovery for vehicles stuck in mud, ditches, or off-road.",
      features: ["4x4 recovery", "Controlled winching", "Any terrain"],
      price: "$125+",
      responseTime: "30-60 min",
    },
    {
      icon: <FaShieldAlt className="h-8 w-8 text-blue-400" />,
      title: "Accident Recovery & Cleanup",
      description:
        "Complete recovery and site-clearing for private & commercial vehicles.",
      features: ["Scene-safe towing", "Hazard cleanup", "Insurance support"],
      price: "Custom",
      responseTime: "ASAP",
    },
    {
      icon: <FaBox className="h-8 w-8 text-blue-400" />,
      title: "Load Shifts & Transfers",
      description:
        "Professional rebalancing or load transfers to keep you DOT-compliant.",
      features: [
        "Load redistribution",
        "Forklift & dock access",
        "Logistics coordination",
      ],
      price: "Custom",
      responseTime: "1-2 hrs",
    },
    {
      icon: <FaUsers className="h-8 w-8 text-blue-400" />,
      title: "Tire Service (Heavy-Duty)",
      description:
        "Roadside tire changes and minor repairs for commercial trucks & trailers.",
      features: ["Tire swap", "Minor repairs", "DOT-certified service"],
      price: "$125+",
      responseTime: "45-60 min",
    },
  ];

  return (
    <section
      style={{
        backgroundImage: `url(${img.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
      className="md:py-24 py-10 relative bg-blend-multiply bg-cover bg-center text-white"
    >
      <div className="bg-black absolute top-0 left-0 h-full w-full opacity-20 inset-0"></div>

      <div className="w-full px-4 md:px-12 lg:px-20 xl:px-28 2xl:px-40 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-[3.2vh] md:text-[3.4vw] font-bold text-black mb-4 uppercase drop-shadow-md">
            Complete Roadside Services
          </h2>
          <p className="text-[2.4vh] md:text-[1.6vw] text-gray-700 max-w-2xl mx-auto ">
            Light-duty to heavy-duty—SpaceTime Towing is equipped to handle it
            all.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-700/20 rounded-full mx-auto mb-5">
                  {service.icon}
                </div>
                <h3 className="text-[2.7vh] md:text-[2vw] font-semibold text-center mb-3 text-black">
                  {service.title}
                </h3>
                <p className="text-[2.1vh] md:text-[1.4vw] text-black text-center mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-5">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-gray-700 text-[2vh] md:text-[1.3vw] pl-4 relative before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:rounded-full before:bg-blue-500"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between text-[2vh] md:text-[1.3vw] text-black border-t border-gray-400 pt-4 mt-5">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-green-400" />
                    <span>{service.price}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-blue-400" />
                    <span>{service.responseTime}</span>
                  </div>
                </div>
                <a
                  href="tel:+15551234567"
                  className="mt-6 block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-xl font-semibold transition-colors text-[2vh] md:text-[1.4vw]"
                >
                  Call for This Service
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Area & Pricing Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-2xl font-bold mb-3">
            📍 Service Area & Pricing Notice
          </h3>
          <p className="mb-3">
            We proudly serve customers inside and outside{" "}
            <strong>Toll 99</strong>, including Houston and surrounding
            counties.
          </p>
          <p className="font-semibold">
            ⚠️ Services rendered{" "}
            <span className="underline">outside of Toll 99</span> are charged at
            long-haul rates.
          </p>
          <p>
            This ensures we continue offering dependable coverage with fair,
            transparent pricing.
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-3xl p-10">
            <h3 className="text-[3.2vh] md:text-[2.4vw] font-bold mb-4 text-white">
              Need Urgent Towing Help?
            </h3>
            <p className="text-[2.3vh] md:text-[1.5vw] text-gray-100 mb-6">
              Call now for 24/7 dispatch and fast roadside support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="flex items-center justify-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition font-semibold text-[2.3vh] md:text-[1.4vw]"
              >
                <Phone className="h-5 w-5" />
                <span>(555) 123-TOWS</span>
              </a>
              <a
                href="/request-service"
                className="bg-white text-blue-700 px-6 py-3 rounded-full hover:bg-gray-100 transition font-semibold text-[2.3vh] md:text-[1.4vw]"
              >
                Request Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
