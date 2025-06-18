"use client";

import { motion } from "framer-motion";
import {
  Truck,
  Car,
  Users,
  Wrench,
  MapPin,
  Key,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ServicesOverview() {
  const services = [
    {
      icon: Car,
      title: "Light Duty Towing",
      description: "Cars, motorcycles, and small trucks up to 10,000 lbs.",
      features: ["Flatbed towing", "Wheel lift towing", "Damage-free transport"],
    },
    {
      icon: Truck,
      title: "Medium Duty Towing",
      description: "Box trucks, RVs, and vehicles up to 26,000 lbs.",
      features: ["Specialized equipment", "Experienced operators", "Careful handling"],
    },
    {
      icon: Users,
      title: "Heavy Duty Towing",
      description: "Commercial trucks, buses, and heavy equipment.",
      features: ["Rotator services", "Heavy recovery", "Load transfers"],
    },
    {
      icon: Wrench,
      title: "Roadside Assistance",
      description: "Get back on the road with our mobile services.",
      features: ["Jump starts", "Tire changes", "Fuel delivery"],
    },
    {
      icon: MapPin,
      title: "Long Distance Towing",
      description: "Safe transport across state lines and beyond.",
      features: ["Interstate hauling", "Secure transport", "GPS tracking"],
    },
    {
      icon: Key,
      title: "Lockout & Recovery",
      description: "Emergency lockout services and vehicle recovery.",
      features: ["Door unlocking", "Key replacement", "Recovery services"],
    },
  ];

  const ServiceCard = ({ service, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className="relative group rounded-3xl border border-white/10 bg-white/80 backdrop-blur-xl shadow-md hover:shadow-xl p-6 transition-all duration-300"
    >
      <div className="absolute -top-10 -right-10 w-36 h-36 bg-blue-500/30 blur-3xl rounded-full opacity-20 group-hover:opacity-40 transition-all -z-10" />

      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 mb-4 shadow-inner">
        <service.icon className="h-6 w-6 text-blue-700" />
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-gray-600 mb-3 text-sm">{service.description}</p>

      <ul className="space-y-1">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
            <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <section className="relative z-0 py-24 bg-gradient-to-tr from-white via-slate-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/10 blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
            Complete Towing Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fast, reliable, and professional towing services available 24/7
            across all distances and vehicle types.
          </p>
        </motion.div>

        {/* Desktop and Tablet View */}
        <div className="hidden sm:grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Mobile View with Swiper */}
        <div className="block sm:hidden -mx-4 px-2">
          <Swiper
            modules={[Autoplay, Pagination, A11y]}
            spaceBetween={5}
            slidesPerView={1.4}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            
            className="pb-14"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="p-2">
                  <ServiceCard service={service} index={index} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transition-all"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
