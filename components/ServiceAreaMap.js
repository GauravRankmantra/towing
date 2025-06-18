'use client';

import { motion } from 'framer-motion';
import { MapPin, Truck, Clock } from 'lucide-react';

export default function ServiceAreaMap() {
  const dispatchCenters = [
    { name: 'Central Dispatch', location: 'Downtown Metro', trucks: 8, coords: { top: '45%', left: '50%' } },
    { name: 'North Station', location: 'North County', trucks: 6, coords: { top: '25%', left: '40%' } },
    { name: 'South Hub', location: 'South Bay', trucks: 7, coords: { top: '70%', left: '45%' } },
    { name: 'East Center', location: 'East Valley', trucks: 5, coords: { top: '50%', left: '75%' } },
    { name: 'West Point', location: 'West Hills', trucks: 4, coords: { top: '40%', left: '25%' } },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Coverage Map & Dispatch Centers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our strategically located dispatch centers ensure rapid response times 
            throughout the entire service area.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 relative overflow-hidden">
              {/* Map Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-blue-300/30"></div>
              
              {/* Dispatch Centers */}
              <div className="relative h-full w-full">
                {dispatchCenters.map((center, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="absolute"
                    style={center.coords}
                  >
                    <div className="relative group cursor-pointer">
                      {/* Pulse Animation */}
                      <motion.div
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-red-500 rounded-full opacity-30"
                      ></motion.div>
                      
                      {/* Center Dot */}
                      <div className="relative w-4 h-4 bg-red-600 rounded-full shadow-lg z-10"></div>
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
                        <div className="text-sm font-semibold text-gray-900">{center.name}</div>
                        <div className="text-xs text-gray-600">{center.location}</div>
                        <div className="text-xs text-blue-600">{center.trucks} trucks available</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Legend */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-900">Dispatch Centers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-600">Live Status</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dispatch Centers Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Dispatch Centers
            </h3>
            
            {dispatchCenters.map((center, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{center.name}</h4>
                    <p className="text-gray-600">{center.location}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Truck className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-900">{center.trucks} Trucks</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">15-30 min response</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">24/7 Operation</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}