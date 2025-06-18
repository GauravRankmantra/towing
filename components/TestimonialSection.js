"use client";

// Removed useEffect as keyframes will be in global CSS

import { motion } from "framer-motion"; // Assuming you have framer-motion installed

const testimonials = [
  {
    name: "Emily Johnson",
    location: "Las Vegas, NV",
    message: "Incredible towing service! Super fast and handled my vehicle with care.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Jason Lee",
    location: "Henderson, NV",
    message: "Had a breakdown at night — they showed up in 20 minutes. Absolutely reliable!",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    name: "Sandra Williams",
    location: "North Las Vegas, NV",
    message: "Affordable and professional. They made a stressful situation so much easier.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Robert Smith",
    location: "Paradise, NV",
    message: "Best towing crew in the valley! Their long-distance towing was smooth and fast.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Angela Davis",
    location: "Spring Valley, NV",
    message: "Locked my keys in the car — they were there in 15 minutes! Lifesavers!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

export default function TestimonialTicker() {
  // useEffect for injecting styles is removed. Keyframes should be in global CSS.

  const renderRow = (direction, duration) => {
    const animName = direction === "left" ? "scrollLeft" : "scrollRight";

    // Duplicate testimonials for seamless looping
    let currentSlides = [...testimonials, ...testimonials, ...testimonials];

    // Reverse the order for the 'right' scrolling row
    if (direction === "right") {
      currentSlides = currentSlides.reverse();
    }

    return (
      <div className="overflow-hidden w-full">
        <div
          className="flex py-4 gap-8 w-max" // Increased gap and padding
          style={{
            animation: `${animName} ${duration}s linear infinite`,
            // Potentially add initial transform here if still encountering issues, though global CSS should fix it
            // transform: direction === "right" ? "translateX(-100%)" : "translateX(0)",
            willChange: "transform",
          }}
        >
          {currentSlides.map((item, idx) => (
            <motion.div // Added motion for subtle initial animation if desired
              key={`${direction}-${idx}`}
              className="min-w-[320px] max-w-sm bg-white border border-gray-100 rounded-3xl p-7 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1" // Modernized card styles
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-400 p-[2px]" // Enhanced image border
                />
                <div>
                  <p className="font-bold text-lg text-gray-900">{item.name}</p> {/* Bolder name */}
                  <p className="text-sm text-gray-600">{item.location}</p> {/* Slightly darker location */}
                </div>
              </div>
              <p className="text-gray-800 text-base leading-relaxed italic"> {/* Italic and darker message */}
                “{item.message}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 py-20 overflow-hidden"> {/* Softer gradient background */}
      {/* Fading edge gradients */}
      <h1 className=" text-3xl md:text-5xl text-center font-extrabold text-gray-900 mb-16 leading-tight"> {/* Larger, bolder title */}
        What Our Clients Say
      </h1>
      <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none" /> {/* Wider, color-matched gradient */}
      <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none" />

      <div className="space-y-10 px-0"> {/* Adjusted spacing and removed horizontal padding */}
        {renderRow("left", 40)}
        {renderRow("right", 40)}
      </div>
    </section>
  );
}