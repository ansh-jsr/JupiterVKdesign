import React from "react";
import { motion } from "framer-motion";

export default function Electrical() {
  return (
    <div
      id="electrical"
      className="w-full min-h-screen bg-white pt-24 pb-16 flex flex-col items-center"
    >
      {/* HERO / TOP BANNER */}
      <div className="w-11/12 max-w-7xl mx-auto relative overflow-hidden rounded-xl shadow-xl mb-20">

        {/* Background Banner Image */}
        <motion.img
          src="/electrical-bg.webp"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-[350px] md:h-[450px] object-cover rounded-xl"
          alt="Electrical Services"
          loading="lazy"
        />

        {/* Title Overlay */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="absolute top-1/2 left-6 md:left-10 -translate-y-1/2 bg-white/90 
                     border-4 border-teal-700 p-5 md:p-6 rounded-lg shadow-xl max-w-sm"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            Electrical
          </h1>
        </motion.div>

      </div>

      {/* DETAILS SECTION */}
      <section className="w-11/12 max-w-7xl bg-gray-100 py-14 md:py-16 px-6 md:px-10 rounded-xl shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* LEFT IMAGE */}
          <motion.img
            src="/electrical-detail.webp"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="w-full rounded-xl shadow-lg object-cover"
            alt="Electrical Detail Work"
            loading="lazy"
          />

          {/* RIGHT TEXT BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">
              Electrical Services for Interiors
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We offer luxury electrical services for interior spaces, ensuring safety,
              efficiency, and seamless integration. Our expert electricians deliver
              precise installation, maintenance, and upgrade solutions for high-end
              residential and commercial projects.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Using premium materials and adhering to strict safety standards, our team
              provides a flawless experience that enhances both functionality and interior
              aesthetics.
            </p>

            <h3 className="text-xl font-semibold text-teal-700 mt-6 mb-3">
              Our Electrical Services Include:
            </h3>

            <ul className="text-gray-700 space-y-2">
              <li>• Complete electrical installation (wiring, lighting, sockets, switches)</li>
              <li>• Electrical panel + circuit breaker setup for safety</li>
              <li>• Smart home automation (lighting, energy control, security)</li>
              <li>• Rewiring & system upgrades to modern standards</li>
              <li>• Troubleshooting, repairs, and safety inspections</li>
              <li>• Specialized setups for offices, retail spaces, luxury interiors</li>
            </ul>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
