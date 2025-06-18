"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Emergency Hotline",
      description:
        "Available 24/7 for emergency towing and roadside assistance",
      value: "1234567",
      action: "tel:+1234567",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "General inquiries and non-emergency requests",
      value: "Tech@SpaceTimeNews.news",
      action: "mailto:Tech@SpaceTimeNews.news",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      description: "Main office and dispatch center",
      value: "1829 Pearl St Houston, TX 77029",
      action: "https://maps.google.com",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  ];

  const businessHours = [
    { day: "Emergency Services", hours: "24/7" },
    { day: "Office Hours", hours: "Mon-Fri: 8:00 AM - 6:00 PM" },
    { day: "Weekend Office", hours: "Sat-Sun: 9:00 AM - 5:00 PM" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Contact Methods */}
      <div className="space-y-6">
        {contactMethods.map((method, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`${method.bgColor} rounded-xl p-6 hover:shadow-lg transition-shadow`}
          >
            <div className="flex items-start space-x-4">
              <div
                className={`flex items-center justify-center w-12 h-12 ${method.color} bg-white rounded-full`}
              >
                <method.icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {method.description}
                </p>
                <a
                  href={method.action}
                  className={`${method.color} font-medium hover:underline`}
                >
                  {method.value}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Business Hours */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-gray-50 rounded-xl p-6"
      >
        <div className="flex items-center space-x-3 mb-4">
          <Clock className="h-6 w-6 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">
            Business Hours
          </h3>
        </div>
        <div className="space-y-3">
          {businessHours.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">{schedule.day}</span>
              <span className="text-gray-600">{schedule.hours}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Map Embed */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl overflow-hidden shadow-lg"
      >
        <div className="aspect-video bg-gray-200 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.949536641391!2d-73.98981922444304!3d40.748817835720105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18f1e7f3%3A0x460be3df2030a73c!2sEmpire%20State%20Building!5e0!3m2!1sen!2sin!4v1718618569301!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SpaceTime Towing Location"
          ></iframe>
        </div>
        <div className="p-4">
          <h4 className="font-semibold text-gray-900 mb-2">Find Us Here</h4>
          <p className="text-gray-600 text-sm">
            Our main office and dispatch center is conveniently located in the
            heart of Metro City.
          </p>
        </div>
      </motion.div>

      {/* Social Media */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl p-6 shadow-lg"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
        <p className="text-gray-600 text-sm mt-4">
          Stay updated with our latest news and service updates on social media.
        </p>
      </motion.div>
    </motion.div>
  );
}
