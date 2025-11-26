import React from "react";
import { motion } from "framer-motion";

export default function Electrical() {
  return (
    <div
      id="electrical"
      className="w-full min-h-screen bg-white pt-24 pb-16 flex flex-col items-center"
    >
      {/* TOP BANNER SECTION */}
      <div className="w-11/12 max-w-7xl mx-auto relative overflow-hidden rounded-xl shadow-xl mb-20">

        {/* Banner Background Image */}
        <motion.img
          src="/electrical-bg.jpg"
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-[450px] object-cover rounded-xl"
        />

        {/* Title Overlay Box */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="absolute top-1/2 left-10 -translate-y-1/2 bg-white/90 
                     border-4 border-teal-700 p-6 rounded-lg shadow-xl max-w-sm"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            Electrical
          </h1>
        </motion.div>

      </div>

      {/* MAIN DETAILS SECTION */}
      <section className="w-11/12 max-w-7xl bg-gray-100 py-16 px-8 rounded-xl shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Service Detail Image */}
          <motion.img
            src="/electrical-detail.jpg" // change if needed
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full rounded-xl shadow-lg object-cover"
          />

          {/* Service Description Text */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">
              Electrical Services for Interiors
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We offer luxury electrical services for interior spaces, ensuring safety,
              efficiency, and aesthetic integration. Our expert electricians deliver precise
              installation, maintenance, and upgrade solutions tailored for high-end
              residential, commercial, and industrial projects.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our team adheres strictly to safety standards and employs premium-quality
              materials, providing seamless integration that elevates both the look and
              functionality of your interiors.
            </p>

            <h3 className="text-xl font-semibold text-teal-700 mt-6 mb-3">
              Our Electrical Services Includes:
            </h3>

            <ul className="text-gray-700 space-y-2">
              <li>• Complete electrical system installation including wiring, lighting, sockets, and switches</li>
              <li>• Electrical panel and circuit breaker setup for safety and load management</li>
              <li>• Smart home automation for lighting, security, and energy efficiency</li>
              <li>• Rewiring and system upgrades to meet contemporary standards and enhance safety</li>
              <li>• Troubleshooting, repairs, and safety checks to ensure long-lasting, reliable performance</li>
              <li>• Specialized solutions for high-tech offices, retail spaces, and luxury apartments</li>
            </ul>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
