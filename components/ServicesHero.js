"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import img from "../Assets/TowingTruckImage.jpg";

export default function ServicesHero() {
  return (
    <section
      style={{
        backgroundImage: `url(${img.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="pt-[100px] pb-16 relative md:h-screen flex items-center justify-center"
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="w-full px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-[4vh] md:text-[3.6vw] font-bold text-white mb-6 leading-tight">
            Our Towing & Roadside Services
            <span className="text-blue-300 block text-[3vh] md:text-[2.5vw]">
              Serving Houston & Surrounding Areas
            </span>
          </h1>

          <p className="text-[2.2vh] md:text-[1.6vw] text-blue-100 mb-8 mx-auto leading-relaxed">
            At SpaceTime Towing & Recovery, LLC, we proudly serve Houston,
            Texas, and the surrounding region with top-tier heavy- and
            light-duty roadside assistance and towing services. Whether you’re
            dealing with a minor breakdown or a major emergency, our skilled
            operators and fully equipped fleet are ready to respond 24/7—keeping
            you safe, on schedule, and back on the road.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:888-468-5561"
              className="flex items-center justify-center space-x-3 bg-blue-600 text-white px-6 py-3 rounded-full transition-all duration-300 ease-in-out shadow-xl font-semibold text-[2vh] md:text-[1.4vw]"
            >
              <Phone className="h-6 w-6" />
              <span>Emergency: (555) 123-TOWS</span>
            </a>
            <a
              href="/request-service"
              className="flex items-center justify-center space-x-7 md:px-10 bg-transparent border-2 border-red-500 text-red-100 px-6 py-3 rounded-full hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300 ease-in-out shadow-xl font-semibold text-[2vh] md:text-[1.4vw]"
            >
              Request Service
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
