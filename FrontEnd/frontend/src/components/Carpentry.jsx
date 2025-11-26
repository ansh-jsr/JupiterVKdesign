import React from "react";
import { motion } from "framer-motion";

export default function Carpentry() {
  return (
    <div
      id="carpentry"
      className="w-full min-h-screen bg-white pt-24 pb-16 flex flex-col items-center"
    >
      {/* Top hero section with background image and title */}
      <div className="w-11/12 max-w-7xl mx-auto relative overflow-hidden rounded-xl shadow-xl mb-20">
        
        {/* Hero background image */}
        <motion.img
          src="/carpentry_top.jpg"   // keep the image in public/joinery-bg.jpg
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-[450px] object-cover rounded-xl"
        />

        {/* Title box overlay */}
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="absolute top-1/2 left-10 -translate-y-1/2 bg-white/90
                     border-4 border-teal-700 p-6 rounded-lg shadow-xl max-w-sm"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            Carpentry <br />
          </h1>
        </motion.div>

      </div>

      {/* Carpentry details section */}
      <section className="w-11/12 max-w-7xl bg-gray-100 py-16 px-8 rounded-xl shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Feature image with entrance animation */}
          <motion.img
            src="/carpentry.jpg"   // keep the image in public/joinery-detail.jpg
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full rounded-xl shadow-lg object-cover"
          />

          {/* Text block describing carpentry services */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">
              Carpentry
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We specialize in premium carpentry services that bring structural integrity, elegant design, and tailored functionality to interior spaces. Our skilled craftsmen use high-quality materials and precise techniques to create custom wooden elements that perfectly complement luxurious interiors.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our expert carpentry ensures every piece is built to specification with attention to detail, contributing to timeless, sophisticated interiors that seamlessly blend form and function.​
            </p>

            <h3 className="text-xl font-semibold text-teal-700 mt-6 mb-3">
              Our Carpentry Services Include:
            </h3>

            <ul className="text-gray-700 space-y-2">
              <li>• Custom Furniture Creation and Bespoke Woodwork</li>
              <li>• Installation of Wooden Flooring and Ceiling Treatments</li>
              <li>• Elegant Wooden Door Frames, Window Frames, and Staircases</li>
              <li>• Construction of Wooden Partitions and Decorative Beams</li>
              <li>• Modular Kitchen and Wardrobe Carpentry</li>
              <li>• Furniture Repair, Restoration, and Refinishing</li>
            </ul>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
