"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import heroImg from "../Assets/TowingTruckImage.jpg";

export default function TermsHero() {
  return (
    <section
      style={{
        backgroundImage: `url(${heroImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="md:h-[90vh] relative flex items-center justify-center flex-col"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-bold mb-6 text-center text-white
            text-[3.5vh] md:text-[3.5vw]"
        >
          Terms and Conditions
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-[2.2vh] md:text-[1.3vw] text-blue-100">
            Effective Date: <strong>06/20/2025</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
