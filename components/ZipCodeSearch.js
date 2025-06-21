"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import {
  Search,
  MapPin,
  Locate,
  Phone,
  Mail,
  ChevronRight,
  Loader2,
  Building2,
  CalendarDays,
  Hammer,
  Car,
} from "lucide-react";

// Base URL for the API. In a real application, this would be an environment variable.
const BASE_URL = "https://towing-backend.onrender.com/api/v1/zip";

export default function ZipCodeSearch() {
  const [searchTerm, setSearchTerm] = useState(""); // State for the search input term
  const [searchType, setSearchType] = useState("zipCode"); // State for the current search type (zipCode, cityName, companyName)
  const [results, setResults] = useState([]); // State to store search results
  const [isLoading, setIsLoading] = useState(false); // State to indicate if data is being fetched
  const [error, setError] = useState(null); // State to store any error messages

  const router = useRouter(); // Next.js router hook for navigation

  /**
   * Handles the search operation based on the current search term and type.
   * Fetches data from the API and updates the results state.
   */
  const handleSearch = async () => {
    // Validate search term
    if (!searchTerm.trim()) {
      toast.error("Please enter a search term.");
      return;
    }

    setIsLoading(true); // Set loading state to true
    setError(null); // Clear any previous errors
    setResults([]); // Clear previous results

    let endpoint = "";
    // Determine the API endpoint based on the selected search type
    switch (searchType) {
      case "zipCode":
        endpoint = `${BASE_URL}/search/zip`;
        break;
      case "cityName":
        endpoint = `${BASE_URL}/search/city`;
        break;
      case "companyName":
        endpoint = `${BASE_URL}/search/company`;
        break;
      default:
        toast.error("Invalid search type");
        setIsLoading(false);
        return;
    }

    try {
      // Make the API request
      const res = await axios.get(endpoint, { params: { query: searchTerm } });
      const data = res.data?.data || []; // Extract data from the response

      // Sort companies within each result by name for consistent display
      const sortedData = data.map((item) => ({
        ...item,
        companies: item.companies.sort((a, b) => a.name.localeCompare(b.name)),
      }));
      setResults(sortedData); // Update results state

      // Show a toast message if no matches are found
      if (sortedData.length === 0) {
        toast(
          "No matching towing services found. Try a different search term or type."
        );
      }
    } catch (err) {
      // Handle API request errors
      console.error("Search failed:", err);
      setError("Failed to fetch data. Please try again later.");
      toast.error(
        "Error fetching results. Check your network connection or try again."
      );
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  // Variants for Framer Motion animations
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Conditional rendering logic for the main content within AnimatePresence
  let contentToRender;
  if (isLoading) {
    contentToRender = (
      // Loading Skeleton for results
      <motion.div
        key="loading"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={containerVariants}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="bg-white rounded-2xl shadow p-6 border border-gray-100 animate-pulse"
          >
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
            <div className="h-40 bg-gray-200 rounded-lg"></div>{" "}
            {/* Placeholder for image/details */}
          </motion.div>
        ))}
      </motion.div>
    );
  } else if (results.length === 0 && searchTerm) {
    // Empty state when search term is present but no results
    contentToRender = (
      <motion.div
        key="no-results"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="text-center text-gray-600 py-16 flex flex-col items-center justify-center"
      >
        <img
          src="https://placehold.co/150x150/e0e7ff/4338ca?text=No+Results"
          alt="No Results Found"
          className="mb-6 opacity-80"
        />
        <p className="text-xl font-medium mb-2">
          No matching services found for "{searchTerm}"
        </p>
        <p className="text-md text-gray-500">
          Please try a different search term or type.
        </p>
      </motion.div>
    );
  } else if (results.length > 0) {
    // Display results
    contentToRender = (
      <motion.div
        key="results"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={containerVariants}
        className="flex flex-col gap-6  border-gray-200"
      >
        {results.map((item) => (
          <motion.div
            key={item._id}
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push(`/search-results/${item._id}`)}
            className="bg-white  rounded-3xl shadow-lg p-6 border border-blue-100 cursor-pointer overflow-hidden transform transition-all duration-300"
          >
            <div className="flex flex-col h-full">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3 mb-2">
                  <MapPin className="text-blue-500 flex-shrink-0" size={28} />{" "}
                  {item.zipCode} — {item.cityName}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  <span className="font-semibold text-blue-700">
                    {item.companies.length}
                  </span>{" "}
                  Towing Companies in this area
                </p>
              </div>

              {/* Display top 2 companies with more details */}
              <div className="flex flex-col md:flex-row justify-between  gap-6">
                {item.companies.slice(0, 2).map((company, i) => (
                  <div
                    key={company._id || i}
                    className="bg-blue-50 rounded-2xl p-4 mb-4 last:mb-0 shadow-inner"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      {company.images && company.images.length > 0 && (
                        <img
                          src={company.images[0]}
                          alt={company.name}
                          className="w-16 h-16 object-cover rounded-xl shadow-sm border border-blue-200"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://placehold.co/64x64/adc2eb/ffffff?text=${company.name.charAt(
                              0
                            )}`;
                          }}
                        />
                      )}
                      <div>
                        <h4 className="font-bold text-xl text-blue-800 mb-1 leading-tight">
                          {company.name}
                        </h4>
                        {company.exactAddress && (
                          <p className="text-gray-700 text-sm flex items-center gap-1">
                            <Locate
                              size={16}
                              className="text-blue-600 flex-shrink-0"
                            />
                            {company.exactAddress}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 mb-3">
                      {company.phone && (
                        <span className="flex items-center gap-1">
                          <Phone className="w-4 h-4 text-green-600 flex-shrink-0" />{" "}
                          {company.phone}
                        </span>
                      )}
                      {company.email && (
                        <span className="flex items-center gap-1">
                          <Mail className="w-4 h-4 text-red-600 flex-shrink-0" />{" "}
                          {company.email}
                        </span>
                      )}
                      {company.operatingHours && (
                        <span className="flex items-center gap-1 col-span-full">
                          <CalendarDays className="w-4 h-4 text-purple-600 flex-shrink-0" />{" "}
                          {company.operatingHours}
                        </span>
                      )}
                    </div>

                    {company.services && company.services.length > 0 && (
                      <div className="mt-2 text-xs text-gray-600">
                        <span className="font-semibold flex items-center gap-1 mb-1">
                          <Hammer className="w-4 h-4 text-orange-500" />{" "}
                          Services:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {company.services.slice(0, 3).map((service, idx) => (
                            <span
                              key={idx}
                              className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                            >
                              {service}
                            </span>
                          ))}
                          {company.services.length > 3 && (
                            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                              +{company.services.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {/* Button for more details */}
              <div className="mt-auto pt-4 flex justify-end">
                <div className="text-blue-700 flex items-center gap-1 font-semibold hover:text-blue-800 transition-colors duration-200">
                  <span>View All Details</span>
                  <ChevronRight size={20} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  } else {
    // Initial empty state, before any search
    contentToRender = (
      <motion.div
        key="initial-empty"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-gray-600  flex flex-col items-center justify-center"
      >
        {/* <Car className="text-blue-400 mb-6" size={80} />
        <p className="text-2xl font-semibold mb-2">Start your search above!</p>
        <p className="text-lg max-w-md">
          Enter a zip code, city, or company name to find local towing and
          roadside assistance providers.
        </p> */}
      </motion.div>
    );
  }

  return (
    <div className=" bg-gradient-to-br pt-20 from-blue-50/50 to-blue-100/50 p-3 shadow-lg border-b font-inter flex flex-col items-center">
      <div className="max-w-6xl w-full mx-auto">
        {/* Page Title and Introduction */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-extrabold text-center mb-6 text-blue-950 tracking-tight"
        >
          Search towing near you 
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className=" md:text-lg text-center text-gray-600 mb-4 md:mb-10 max-w-2xl mx-auto"
        >
          Quickly locate reliable towing services and roadside assistance by zip
          code, city, or company name.
        </motion.p>

        {/* Search Box and Type Selection */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`bg-white shadow-xl rounded-3xl p-3 sm:p-8 mb-10 transition-all duration-500 ease-in-out ${
            results.length > 0 && !isLoading ? "min-h-[220px]" : "min-h-[160px]"
          } flex flex-col justify-center`}
          // The dynamic height is controlled by the min-h property based on results presence.
          // Tailwind's transition-all duration-500 makes the height change smooth.
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
            <div className="relative flex-grow w-full">
              <Search
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                size={22}
              />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder={`Search by ${
                  searchType === "zipCode"
                    ? "Zip Code (e.g., 10001)"
                    : searchType === "cityName"
                    ? "City Name (e.g., New York)"
                    : "Company Name (e.g., Big Apple Towing)"
                }`}
                className="w-full border border-gray-300 rounded-full pl-14 pr-6 py-3 text-lg focus:outline-none focus:ring-3 focus:ring-blue-200 shadow-sm"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSearch}
              disabled={isLoading}
              className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-3 focus:ring-blue-400 transition duration-300 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={24} /> Searching...
                </>
              ) : (
                <>
                  <Search size={24} /> Search
                </>
              )}
            </motion.button>
          </div>

          {/* Search Type Buttons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6">
            {[
              {
                label: "Zip Code",
                value: "zipCode",
                icon: <MapPin size={20} />,
              },
              { label: "City", value: "cityName", icon: <Locate size={20} /> },
              {
                label: "Company",
                value: "companyName",
                icon: <Building2 size={20} />,
              },
            ].map(({ label, value, icon }) => (
              <motion.button
                key={value}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSearchType(value)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition duration-300 ${
                  searchType === value
                    ? "bg-blue-100 text-blue-800 border-2 border-blue-500 shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                }`}
              >
                {icon} {label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Results Section */}
        {error && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-600 text-center text-lg mt-4 mb-8"
          >
            {error}
          </motion.p>
        )}

        <AnimatePresence mode="wait">{contentToRender}</AnimatePresence>
      </div>
    </div>
  );
}
