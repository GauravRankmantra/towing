// Modified SearchResultsPage.js with image gallery, responsive design, and call/email buttons
"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";
import {
  MapPin,
  Building2,
  Locate,
  Mail,
  Phone,
  Globe,
  Clock,
  ArrowLeft,
  Loader2,
  PhoneCall,
  Send,
  ImageIcon,
} from "lucide-react";

export const dynamic = "force-dynamic";
const API_BASE_URL = "https://towing-backend.onrender.com/api/v1/zip";

export default function SearchResultsPage() {
  const params = useParams();
  const zipCodeId = params?.zipCodeId;
  const router = useRouter();

  const [zipCodeData, setZipCodeData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (zipCodeId) {
      const fetchZipCodeDetails = async () => {
        setIsLoading(true);
        setError(null);
        try {
          const response = await axios.get(`${API_BASE_URL}/${zipCodeId}`);
          if (response.data?.data) {
            setZipCodeData(response.data.data);
            toast.success("Zip code details loaded successfully!");
          } else {
            throw new Error("Zip code details not found.");
          }
        } catch (err) {
          console.error("Error fetching zip code details:", err);
          setError(
            err.response?.data?.message ||
              "Failed to load details. Please try again."
          );
          toast.error("Something went wrong while fetching data.");
        } finally {
          setIsLoading(false);
        }
      };

      fetchZipCodeDetails();
    } else {
      setIsLoading(false);
      setError("No zip code ID provided in the URL.");
    }
  }, [zipCodeId]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const companyCardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-100 text-white p-2 sm:p-6 md:p-10 lg:p-14 font-inter">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className=" mx-auto bg-gray-100 my-24 md:my-10 rounded-3xl shadow-2xl p-4 sm:p-10 md:p-12 "
      >
        <motion.button
          onClick={() => router.back()}
          whileHover={{ x: -5 }}
          className="flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Search
        </motion.button>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 text-blue-400">
            <Loader2 className="w-16 h-16 animate-spin mb-4" />
            <p className="text-xl font-medium">Loading details...</p>
          </div>
        ) : error ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20 text-red-400 bg-red-900 rounded-xl border border-red-600 shadow-md"
          >
            <p className="text-xl font-medium mb-2">
              Oops! Something went wrong.
            </p>
            <p className="text-lg">{error}</p>
          </motion.div>
        ) : zipCodeData ? (
          <>
            <motion.div
              variants={sectionVariants}
              className="mb-8 pb-6 border-b border-gray-700"
            >
              <h1 className="text-4xl font-extrabold text-gray-800 flex items-center mb-2">
                <MapPin className="w-10 h-10 mr-3 text-blue-400" />
                {zipCodeData.zipCode}
              </h1>
              <p className="text-2xl text-gray-900 flex items-center">
                <Locate className="w-6 h-6 mr-2 text-gray-800" />
                {zipCodeData.cityName}
              </p>
              {zipCodeData.mapLink && (
                <p className="mt-3 text-lg flex items-center text-gray-300">
                  <Globe className="w-5 h-5 mr-2 text-gray-400" />
                  <a
                    href={zipCodeData.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline font-medium"
                  >
                    View on Google Maps
                  </a>
                </p>
              )}
              <p className="mt-2 text-sm text-gray-600">
                Last Updated:{" "}
                {new Date(zipCodeData.updatedAt).toLocaleDateString()}
              </p>
            </motion.div>

            <motion.div variants={sectionVariants} className="mt-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <Building2 className="w-8 h-8 mr-3 text-green-400" />
                Towing Companies ({zipCodeData.companies.length})
              </h2>

              <div className="grid gap-6">
                {zipCodeData.companies.map((company, index) => (
                  <motion.div
                    key={company._id || index}
                    custom={index}
                    variants={companyCardVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-gray-800 rounded-2xl shadow-lg p-4 md:p-6 border border-gray-700 hover:border-green-400 transition"
                  >
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                      <Building2 className="w-6 h-6 mr-3 text-green-500" />
                      {company.name}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                      {company.phone && (
                        <div className="flex flex-col gap-2">
                          <span className="flex items-center gap-2">
                            <Phone className="w-5 h-5 text-gray-400" />
                            {company.phone}
                          </span>
                          <a
                            href={`tel:${company.phone}`}
                            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition"
                          >
                            <PhoneCall className="w-5 h-5" /> Call Now
                          </a>
                        </div>
                      )}
                      {company.email && (
                        <div className="flex flex-col gap-2">
                          <span className="flex items-center gap-2">
                            <Mail className="w-5 h-5 text-gray-400" />
                            {company.email}
                          </span>
                          <a
                            href={`mailto:${company.email}`}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition"
                          >
                            <Send className="w-5 h-5" /> Send Email
                          </a>
                        </div>
                      )}
                      {company.website && (
                        <div className="flex items-center gap-2">
                          <Globe className="w-5 h-5 text-gray-400" />
                          <a
                            href={company.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline truncate"
                          >
                            {company.website}
                          </a>
                        </div>
                      )}
                      {company.exactAddress && (
                        <div className="flex items-center gap-2 md:col-span-2">
                          <Locate className="w-5 h-5 text-gray-400" />
                          {company.exactAddress}
                        </div>
                      )}
                    </div>

                    {company.services?.length > 0 && (
                      <div className="mt-4">
                        <p className="text-md font-semibold mb-2 text-gray-200">
                          Services:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {company.services.map((s, i) => (
                            <span
                              key={i}
                              className="bg-purple-800 text-purple-100 text-xs px-3 py-1 rounded-full"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {company.images?.length > 0 && (
                      <div className="mt-6">
                        <p className="text-md font-semibold mb-2 text-gray-200 flex items-center gap-2">
                          <ImageIcon className="w-5 h-5 text-gray-400" />{" "}
                          Company Photos:
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                          {company.images.map((img, idx) => (
                            <img
                              key={idx}
                              src={img}
                              alt={`Image ${idx + 1}`}
                              className="rounded-xl object-cover h-32 w-full border border-gray-700"
                              onError={(e) =>
                                (e.target.src = `https://placehold.co/300x200?text=No+Image`)
                              }
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        ) : null}
      </motion.div>
    </div>
  );
}
