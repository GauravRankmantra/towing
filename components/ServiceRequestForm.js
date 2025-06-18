"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Phone, MapPin, Car, FileText, Upload, User, Mail } from "lucide-react";

export default function ServiceRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success(
        "Service request submitted successfully! We'll contact you within 5 minutes."
      );
      reset();
    } catch (error) {
      toast.error(
        "Failed to submit request. Please try again or call us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceTypes = [
    "Light Duty Towing",
    "Medium Duty Towing",
    "Heavy Duty Towing",
    "Roadside Assistance",
    "Long Distance Towing",
    "Lockout Service",
    "Fuel Delivery",
    "Tire Change",
    "Jump Start",
    "Other",
  ];

  const vehicleTypes = [
    "Car/Sedan",
    "SUV",
    "Pickup Truck",
    "Van",
    "Motorcycle",
    "RV/Motorhome",
    "Box Truck",
    "Semi-Truck",
    "Bus",
    "Other",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Service Request Form
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                        <User className="h-4 w-4" />
                        <span>Full Name *</span>
                      </label>
                      <input
                        type="text"
                        {...register("name", { required: "Name is required" })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                        <Phone className="h-4 w-4" />
                        <span>Phone Number *</span>
                      </label>
                      <input
                        type="tel"
                        {...register("phone", {
                          required: "Phone number is required",
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="(555) 123-4567"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                      <Mail className="h-4 w-4" />
                      <span>Email Address</span>
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Current Location */}
                  <div>
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>Current Location *</span>
                    </label>
                    <input
                      type="text"
                      {...register("location", {
                        required: "Location is required",
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Street address or nearest intersection"
                    />
                    {errors.location && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.location.message}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Service Type */}
                    <div>
                      <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                        <FileText className="h-4 w-4" />
                        <span>Service Needed *</span>
                      </label>
                      <select
                        {...register("serviceType", {
                          required: "Service type is required",
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select service type</option>
                        {serviceTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.serviceType && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.serviceType.message}
                        </p>
                      )}
                    </div>

                    {/* Vehicle Type */}
                    <div>
                      <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                        <Car className="h-4 w-4" />
                        <span>Vehicle Type *</span>
                      </label>
                      <select
                        {...register("vehicleType", {
                          required: "Vehicle type is required",
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select vehicle type</option>
                        {vehicleTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.vehicleType && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.vehicleType.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                      <FileText className="h-4 w-4" />
                      <span>Description of Issue</span>
                    </label>
                    <textarea
                      {...register("description")}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Please describe the issue and any relevant details..."
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                      <Upload className="h-4 w-4" />
                      <span>Upload Photo (Optional)</span>
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      {...register("photo")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      Upload a photo of your vehicle or situation to help us
                      prepare
                    </p>
                  </div>

                  {/* Contact Preference */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-3 block">
                      How would you like us to contact you?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value="call"
                          {...register("contactMethod", {
                            required: "Please select a contact method",
                          })}
                          className="text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">
                          Call me back
                        </span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value="text"
                          {...register("contactMethod", {
                            required: "Please select a contact method",
                          })}
                          className="text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">Send SMS</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value="email"
                          {...register("contactMethod", {
                            required: "Please select a contact method",
                          })}
                          className="text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">Email me</span>
                      </label>
                    </div>
                    {errors.contactMethod && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.contactMethod.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors font-semibold text-lg"
                  >
                    {isSubmitting
                      ? "Submitting Request..."
                      : "Submit Service Request"}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Emergency Contact */}
              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-4">
                  Emergency?
                </h3>
                <p className="text-red-700 mb-4">
                  If this is an emergency, please call us directly for immediate
                  assistance.
                </p>
                <a
                  href="tel:+15551234567"
                  className="flex items-center justify-center space-x-2 bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </div>

              {/* What to Expect */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  What to Expect
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-semibold text-sm">
                        1
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Instant Confirmation
                      </h4>
                      <p className="text-sm text-gray-600">
                        We'll confirm your request within 2-5 minutes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-semibold text-sm">
                        2
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Dispatch</h4>
                      <p className="text-sm text-gray-600">
                        Nearest available truck is dispatched to your location
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-semibold text-sm">
                        3
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Arrival</h4>
                      <p className="text-sm text-gray-600">
                        Professional service typically within 15-30 minutes
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <a
                      href="tel:+15551234567"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      (555) 123-TOWS
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <a
                      href="mailto:dispatch@SpaceTimetowing.com"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      dispatch@SpaceTimetowing.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-600">
                      24/7 Service Area Wide
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
