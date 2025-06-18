"use client"; // This directive is necessary for client-side features like Framer Motion

import { motion } from "framer-motion";
import { Phone, MessageSquare, Clock, Shield, Zap } from "lucide-react";
// Local image imports - These paths are for your local project setup.
// In this isolated environment, we'll use placeholder URLs to demonstrate the layout.
// import img1 from "../Assets/hero/1.jpg";
// import img2 from "../Assets/hero/2.jpg";
// import img3 from "../Assets/hero/3.jpg";
// import img4 from "../Assets/hero/4.jpg";

// Placeholder URLs for demonstration purposes.
// Replace these with your actual image paths in a real Next.js project.
const backgroundImages = [
  "https://images.unsplash.com/photo-1655220711988-430a51a5c254?q=80&w=1448&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1557305089-5da8109b753b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 
  "https://images.unsplash.com/photo-1675092910167-13382da372e6?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function HeroSection() {
  // Animation variants for staggered text and elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger children animations by 0.2 seconds
        delayChildren: 0.3, // Delay the start of children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Variants for individual background image sections (for larger screens)
  const bgImageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.25, // Stagger appearance of background images
        duration: 1.5,
        ease: "easeInOut",
      },
    }),
  };

  // Variants for the single background image (for smaller screens)
  const mobileBgImageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      {/* Background Image Sections (visible on medium screens and up) */}
      <div className="absolute inset-0 hidden md:flex z-0">
        {" "}
        {/* hidden on small, flex on md and up */}
        {backgroundImages.map((imageUrl, index) => (
          <motion.div
            key={index}
            className="w-[33.333333%] h-full bg-cover bg-center" // Each takes 1/4th width, covers full height
            style={{ backgroundImage: `url(${imageUrl})` }}
            variants={bgImageVariants}
            initial="hidden"
            animate="visible"
            custom={index} // Pass index for staggered animation
          />
        ))}
      </div>
      {/* Single Background Image (visible on small screens only) */}
      <motion.div
        className="absolute inset-0 md:hidden bg-cover bg-center z-0" // visible on small, hidden on md and up
        style={{ backgroundImage: `url(${backgroundImages[2]})` }} // Using the first image for mobile
        variants={mobileBgImageVariants}
        initial="hidden"
        animate="visible"
      />
      {/* Semi-transparent dark overlay to make text pop over diverse backgrounds */}
      {/* z-10 places it above the background images but below the main content */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>{" "}
      {/* Increased opacity slightly for better mobile text contrast */}
      {/* Content */}
      <div className="relative  z-20 container mx-auto px-4 py-16 md:py-24 text-center">
        {" "}
        {/* z-20 ensures content is on top */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto space-y-2 md:space-y-20"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl mt-6 md:mt-0 md:text-8xl font-extrabold text-white leading-tight mb-4 md:mb-6 drop-shadow-lg" /* Existing drop-shadow-lg */
            style={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
            }} /* Added custom text-shadow */
          >
            24/
            <span className="text-red-500">7</span> Emergency
            <span className="text-blue-300 block mt-2">Towing Services</span>
          </motion.h1>

          <motion.p
            style={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
            }} 
            variants={itemVariants}
            className="flex md:hidden text-base md:text-xl text-white mb-8 md:mb-10 max-w-2xl mx-auto drop-shadow-md" /* Adjusted text size for better mobile fit */
          >
            Fast, reliable, and professional towing services when you need them
            most. Licensed, insured, and ready to help.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={containerVariants} // Apply container variants for buttons too
            className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center mb-12 md:mb-16" /* Adjusted gap for mobile */
          >
            <motion.a
              href="tel:+1234567"
              variants={buttonVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-3 bg-blue-600 text-white px-6 py-3 rounded-full transition-all duration-300 ease-in-out text-base font-semibold shadow-xl" /* Adjusted padding/text size for mobile */
            >
              <Phone className="h-5 w-5" />{" "}
              {/* Adjusted icon size for mobile */}
              <span>Call Now : 1234567</span>
            </motion.a>

            <motion.a
              href="#" // Update with your actual service request page
              variants={buttonVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-3 bg-transparent border-2 border-red-500 text-red-50 px-6 py-3 rounded-full hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300 ease-in-out text-base font-semibold shadow-xl" /* Adjusted padding/text size for mobile */
            >
              <MessageSquare className="h-5 w-5" />{" "}
              {/* Adjusted icon size for mobile */}
              <span>Request Service</span>
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants} // Stagger indicators
            className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto" /* Adjusted gap for mobile */
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center space-x-3 md:space-x-4 bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-lg border border-white/20 text-white" /* Adjusted padding for mobile */
            >
              <Clock className="h-8 w-8 md:h-10 md:w-10 text-blue-300" />{" "}
              {/* Adjusted icon size for mobile */}
              <div className="text-left">
                <div className="font-semibold text-lg md:text-xl">
                  15-30 Min
                </div>{" "}
                {/* Adjusted text size for mobile */}
                <div className="text-xs md:text-sm text-blue-100">
                  Response Time
                </div>{" "}
                {/* Adjusted text size for mobile */}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center space-x-3 md:space-x-4 bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-lg border border-white/20 text-white" /* Adjusted padding for mobile */
            >
              <Shield className="h-8 w-8 md:h-10 md:w-10 text-blue-300" />{" "}
              {/* Adjusted icon size for mobile */}
              <div className="text-left">
                <div className="font-semibold text-lg md:text-xl">
                  Fully Insured
                </div>{" "}
                {/* Adjusted text size for mobile */}
                <div className="text-xs md:text-sm text-blue-100">
                  Licensed & Bonded
                </div>{" "}
                {/* Adjusted text size for mobile */}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex col-span-2 md:col-span-1 items-center justify-center space-x-3 md:space-x-4 bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-lg border border-white/20 text-white" /* Adjusted padding for mobile */
            >
              <Zap className="h-8 w-8 md:h-10 md:w-10 text-blue-300" />{" "}
              {/* Adjusted icon size for mobile */}
              <div className="text-left">
                <div className="font-semibold text-lg md:text-xl">
                  24/7 Available
                </div>{" "}
                {/* Adjusted text size for mobile */}
                <div className="text-xs md:text-sm text-blue-100">
                  Always Ready
                </div>{" "}
                {/* Adjusted text size for mobile */}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-blue-200 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-3 bg-blue-200 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
