import React from "react";
import { motion } from "framer-motion";

export default function False_ceiling() {
  return (
    <div
      id="false_ceiling"
      className="w-full min-h-screen bg-white pt-24 pb-16 flex flex-col items-center"
    >
      {/* === TOP BANNER SECTION === */}
      <div className="w-11/12 max-w-7xl mx-auto relative overflow-hidden rounded-xl shadow-xl mb-20">

        {/* Banner Image */}
        <motion.img
          src="/false_ceiling.webp"
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-[450px] object-cover rounded-xl"
          loading="lazy"
          alt="False ceiling banner"
        />

        {/* Title Overlay */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="absolute top-1/2 left-6 md:left-10 -translate-y-1/2 
                     bg-white/90 border-4 border-teal-700 p-6 rounded-lg shadow-xl 
                     max-w-xs md:max-w-sm"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            False Ceiling
          </h1>
        </motion.div>
      </div>

      {/* === MAIN DETAILS SECTION === */}
      <section className="w-11/12 max-w-7xl bg-gray-100 py-14 md:py-16 px-6 md:px-8 rounded-xl shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Detail Image */}
          <motion.img
            src="/False_Ceiling-detail.webp"
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full rounded-xl shadow-lg object-cover"
            loading="lazy"
            alt="False ceiling detail"
          />

          {/* Description */}
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
              We specialize in high-quality false ceiling solutions that elevate interiors
              with smooth finishes, seamless detailing, and modern architectural appeal.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our false ceilings improve ambience, hide wiring and ducts, optimize acoustics, 
              and enhance the overall visual harmony of any space.
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
              <li>• Retrofitting, Repair & Ceiling Upgrades</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
