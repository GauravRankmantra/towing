"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Truck } from "lucide-react";

export default function CompanyHistory() {
  const timeline = [
    {
      year: "2024",
      title: "Company Founded",
      description:
        "Founded in the heart of Houston, SpaceTime Towing set out to deliver dependable, high-quality roadside assistance. With a focus on quick response, professional operators, and modern equipment, we began our journey to bring peace of mind to drivers across the region.",
      icon: Calendar,
    },
    {
      year: "2025",
      title: "Trusted by the Community",
      description:
        "In just one year, SpaceTime Towing has built a strong reputation across Houston for its rapid response, courteous service, and reliable roadside support. As we continue to grow, our focus remains on safety, integrity, and customer satisfaction.",
      icon: Users,
    },
  ];

  return (
    <section className="md:py-20 py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to becoming the region's most trusted towing
            service, our commitment to excellence has never wavered.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 ${
                index % 2 === 0 ? "md:text-right" : ""
              }`}
            >
              {/* Content */}
              <div
                className={`${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}
              >
                <div className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">
                        {item.year}
                      </div>
                      <div className="text-lg font-semibold text-gray-900">
                        {item.title}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full z-10"></div>

              {/* Spacer for timeline */}
              <div
                className={`hidden md:block ${
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                }`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
