"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Users, Award, Phone, Truck } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Clock,
      title: "Fast Response Times",
      description:
        "Average 15-30 minute response time with our strategically located fleet and advanced dispatch system.",
    },
    {
      icon: Shield,
      title: "Fully Licensed & Insured",
      description:
        "Complete insurance coverage and all required licenses for your peace of mind and vehicle protection.",
    },
    {
      icon: Users,
      title: "Experienced Professionals",
      description:
        "Our certified technicians have years of experience handling all types of vehicles and situations.",
    },
    {
      icon: Award,
      title: "Competitive Pricing",
      description:
        "Fair, transparent pricing with no hidden fees. We provide upfront quotes before starting any work.",
    },
    {
      icon: Phone,
      title: "24/7 Availability",
      description:
        "Round-the-clock service because emergencies don't follow business hours. We're always ready to help.",
    },
    {
      icon: Truck,
      title: "Modern Equipment",
      description:
        "State-of-the-art towing equipment and well-maintained fleet to handle any vehicle safely.",
    },
  ];

  return (
    <section className="md:py-20 py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose SpaceTime Towing?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driven by integrity, reliability, and a commitment to excellence,
            SpaceTime Towing & Recovery is your trusted partner for roadside
            assistance in Houston and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <reason.icon className="h-8 w-8 text-blue-600" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {reason.title}
              </h3>

              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-blue-100 mb-6">
              Join thousands of satisfied customers who trust SpaceTime Towing
              for their emergency needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:888-468-5561"
                className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                Call Now: 888-468-5561 
              </a>
              <a
                href="/contact"
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
