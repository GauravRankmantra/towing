"use client";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function TermsCondition() {
  return (
    <section className="py-8 md:py-15  bg-white text-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <p className="text-center text-gray-500 mb-12">
          Effective Date: 06/20/2025
        </p>

        <div className="space-y-12">
          <Section
            title="1. Scope of Services"
            content={`SpaceTime Towing & Recovery, LLC provides light- and heavy-duty roadside assistance and towing services within the Greater Houston area and regionally across Texas. Services include, but are not limited to:
• Light-duty and heavy-duty towing
• Emergency roadside assistance
• Jump starts, fuel delivery, tire changes, lockouts
• Accident recovery and winch-outs
• Load shifts and transfers for commercial vehicles`}
          />

          <Section
            title="2. Service Area & Pricing"
            content={`• All services within Toll 99 are billed at standard rates.
• All services outside Toll 99 are considered long-haul and will be billed at long-haul pricing based on distance, vehicle type, and complexity of the job.
• Long-haul pricing will be quoted prior to dispatch when possible. Additional fees may apply for mileage, labor, or specialized equipment.`}
          />

          <Section
            title="3. Payment Terms"
            content={`• Payment is due at the time of service unless prior arrangements have been made.
• We accept cash, major credit/debit cards, and approved fleet accounts.
• Invoices for commercial accounts are due within 15 days unless otherwise stated.
• Late payments may incur a fee and service may be withheld for outstanding accounts.`}
          />

          <Section
            title="4. Liability"
            content={`• SpaceTime Towing & Recovery, LLC is not responsible for damage resulting from pre-existing vehicle conditions or damage caused by unsafe roadside environments.
• Customers must disclose any mechanical or structural issues with the vehicle prior to service.
• We are not liable for delays caused by traffic, weather, construction, or other factors beyond our control.`}
          />

          <Section
            title="5. Cancellations & No-Shows"
            content={`• Customers must notify us of cancellations at least 30 minutes prior to scheduled service.
• A cancellation fee may apply if our team is already en route.
• No-show or refusal of service after arrival may result in a dispatch fee.`}
          />

          <Section
            title="6. Customer Responsibilities"
            content={`• Customers must provide accurate vehicle location and condition details.
• Customers must ensure the vehicle is accessible for service (e.g., not blocked or off-road without access).
• For safety, customers and bystanders must remain at a safe distance during recovery or towing operations.`}
          />

          <Section
            title="7. Service Refusal"
            content={`We reserve the right to refuse or cancel service if:
• The environment is deemed unsafe for our operators or equipment.
• The customer is uncooperative or provides false information.
• The vehicle cannot be accessed or serviced safely.`}
          />

          <Section
            title="8. Changes to Terms"
            content={`SpaceTime Towing & Recovery, LLC reserves the right to update or modify these Terms and Conditions at any time without prior notice. The most current version will be posted on our website or available upon request.`}
          />

          <section className="py-16 bg-blue-50 border-t shadow-2xl">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
                  Contact Us
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  For questions about our services or these Terms and
                  Conditions, reach out anytime — we’re here to help.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
                  <motion.a
                    href="tel:+1234567890"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-3 bg-red-600 text-white px-8 py-4 rounded-xl hover:bg-red-700 transition-colors text-lg font-semibold shadow-lg"
                  >
                    <Phone className="h-6 w-6" />
                    <span>Phone: PENDENT</span>
                  </motion.a>

                  <motion.a
                    href="mailto:info@spacetimetowing.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-3 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors text-lg font-semibold shadow-lg"
                  >
                    <Mail className="h-6 w-6" />
                    <span>Email: PENDENT</span>
                  </motion.a>
                </div>

                {/* Location & Availability */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-800">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-blue-500" />
                    <span className="text-sm">
                      SpaceTime Towing & Recovery, LLC Houston, TX
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-green-500" />
                    <span className="text-sm">24/7 Available</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

function Section({ title, content }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h2>
      <pre className="whitespace-pre-wrap text-gray-700 text-sm leading-relaxed">
        {content}
      </pre>
    </div>
  );
}
