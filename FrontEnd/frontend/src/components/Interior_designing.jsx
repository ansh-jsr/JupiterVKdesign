import React from "react";
import { motion } from "framer-motion";

export default function InteriorDesigning() {
  return (
    <div
      id="interior"
      className="w-full min-h-screen bg-white pt-24 pb-16 flex flex-col items-center"
    >
      {/* MAIN TOP CONTAINER */}
      <div className="w-11/12 max-w-7xl mx-auto relative overflow-hidden rounded-xl shadow-xl mb-20">

        {/* BACKGROUND IMAGE */}
        <motion.img
          src="/public/interior-bg.jpg"
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-[450px] object-cover rounded-xl"
        />

        {/* OVERLAY TITLE BOX */}
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="absolute top-1/2 left-10 -translate-y-1/2 bg-white/90 
                     border-4 border-teal-700 p-6 rounded-lg shadow-xl max-w-sm"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            Interior Designing & <br /> Fitout
          </h1>
        </motion.div>

      </div>

      {/* =======================================================
          NEW INTERIOR DETAILS SECTION (TEAL THEME + FIXED)
      ======================================================== */}
      <section className="w-11/12 max-w-7xl bg-gray-100 py-16 px-8 rounded-xl shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* IMAGE – animated from right to left */}
          <motion.img
            src="/interior-detail.jpg"   // change if needed
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full rounded-xl shadow-lg object-cover"
          />

          {/* TEXT — animated from left to right */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">
              Interior Designing & Fitout
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              From concept to completion, we take care of every aspect of interior design,
              ensuring a seamless and cohesive outcome. Our designers work closely with you
              to understand your vision and create a space that's truly yours.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We transform your space with elegance, innovation, and functionality — 
              delivering premium finishes with perfect craftsmanship.
            </p>

            <h3 className="text-xl font-semibold text-teal-700 mt-6 mb-3">
              Our Interior Designing & Fitout Includes:
            </h3>

            <ul className="text-gray-700 space-y-2">
              <li>• Concept & Layout Planning</li>
              <li>• Custom Joinery & Woodwork</li>
              <li>• Wall & Floor Finishing</li>
              <li>• Lighting & False Ceiling Design</li>
              <li>• Furniture Design & Styling</li>
              <li>• Complete Fitout Execution</li>
            </ul>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
