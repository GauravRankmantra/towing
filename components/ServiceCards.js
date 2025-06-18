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
import img from "../Assets/bgDesign.jpg";

export default function ServiceCards() {
  const services = [
    {
      icon: Car,
      title: "Light Duty Towing",
      description:
        "Towing for cars, motorcycles, and small vehicles up to 10,000 lbs.",
      features: [
        "Flatbed towing",
        "Wheel lift options",
        "Damage-free transport",
        "Roadside pickup",
      ],
      price: "$75+",
      responseTime: "15-30 min",
    },
    {
      icon: Truck,
      title: "Medium Duty Towing",
      description: "Towing for box trucks, RVs, and vehicles up to 26,000 lbs.",
      features: [
        "Heavy-duty tools",
        "Pro operators",
        "Safe handling",
        "Commercial support",
      ],
      price: "$150+",
      responseTime: "20-45 min",
    },
    {
      icon: Users,
      title: "Heavy Duty Towing",
      description:
        "Solutions for commercial trucks, buses, and heavy equipment.",
      features: [
        "Rotator recovery",
        "Load adjustments",
        "Accident response",
        "Heavy gear",
      ],
      price: "Custom",
      responseTime: "30-60 min",
    },
    {
      icon: Wrench,
      title: "Roadside Assistance",
      description: "Mobile support for flat tires, batteries, fuel, and more.",
      features: ["Jump starts", "Tire change", "Fuel delivery", "Quick fixes"],
      price: "$50+",
      responseTime: "15-30 min",
    },
    {
      icon: MapPin,
      title: "Long Distance Towing",
      description: "Secure vehicle transport over long interstate journeys.",
      features: [
        "Interstate hauling",
        "GPS tracked",
        "Insured",
        "Safe delivery",
      ],
      price: "$2.50/mi",
      responseTime: "1-2 hrs",
    },
    {
      icon: Key,
      title: "Lockout & Recovery",
      description: "Emergency unlocking and tough vehicle recoveries.",
      features: ["Unlock cars", "Key cutting", "Winch-outs", "Recovery help"],
      price: "$60+",
      responseTime: "15-30 min",
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
      className="md:py-24 py-10 bg-blend-multiply relative bg-[url('/pattern.svg')] bg-cover bg-center text-white"
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
          <h2 className="text-[3.2vh] md:text-[3.4vw] font-bold text-black mb-4 tracking-wide uppercase drop-shadow-md">
            Premium Towing Services
          </h2>
          <p className="text-[2.4vh] md:text-[1.6vw] text-gray-700 max-w-2xl mx-auto ">
            Reliable, fast, and professional solutions—wherever you need us.
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
                  <service.icon className="h-8 w-8 text-blue-400" />
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
