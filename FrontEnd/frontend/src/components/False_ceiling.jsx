import React from "react";
import { motion } from "framer-motion";

export default function False_ceiling() {
  return (
    <div
      id="false_ceiling"
      className="w-full min-h-screen bg-white pt-24 pb-16 flex flex-col items-center"
    >
      {/* TOP BANNER SECTION */}
      <div className="w-11/12 max-w-7xl mx-auto relative overflow-hidden rounded-xl shadow-xl mb-20">

        {/* Banner Background Image */}
        <motion.img
          src="/false_ceiling.jpg" 
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-[450px] object-cover rounded-xl"
        />

        {/* Title Overlay */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="absolute top-1/2 left-10 -translate-y-1/2 bg-white/90
                     border-4 border-teal-700 p-6 rounded-lg shadow-xl max-w-sm"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            False Ceiling
          </h1>
        </motion.div>

      </div>

      {/* MAIN DETAILS SECTION */}
      <section className="w-11/12 max-w-7xl bg-gray-100 py-16 px-8 rounded-xl shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Service Detail Image */}
          <motion.img
            src="/False_Ceiling-detail.jpg" 
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
              False Ceiling
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We specialize in high-quality false ceiling solutions that transform interiors
              with a refined, architectural finish. Our systems balance aesthetics, performance,
              and precision detailing to create ceilings that feel both luxurious and functional.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our false ceiling works are designed to conceal services such as wiring, ducts,
              and fixtures while enhancing the space with depth, ambient lighting, and improved
              acoustics.
            </p>

            <h3 className="text-xl font-semibold text-teal-700 mt-6 mb-3">
              Our False Ceiling Services Include:
            </h3>

            <ul className="text-gray-700 space-y-2">
              <li>• Gypsum & POP False Ceilings</li>
              <li>• Layered & Cove Ceiling Designs</li>
              <li>• Wooden & Metal Accent Ceilings</li>
              <li>• Acoustic & Grid Ceilings for Offices</li>
              <li>• Integrated Lighting & Service Cut-outs</li>
              <li>• Repair, Retrofitting & Ceiling Upgrades</li>
            </ul>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
