import React from "react";
import { motion } from "framer-motion";

export default function Carpentry() {
  return (
    <div
      id="carpentry"
      className="w-full min-h-screen bg-white pt-24 pb-16 flex flex-col items-center"
    >
      {/* HERO SECTION */}
      <div className="w-11/12 max-w-7xl mx-auto relative overflow-hidden rounded-xl shadow-xl mb-20">
        
        {/* TOP IMAGE */}
        <motion.img
          src="/carpentry_top.webp"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-[350px] md:h-[450px] object-cover rounded-xl"
          alt="Carpentry Work"
          loading="lazy"
        />

        {/* TITLE BOX */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="absolute top-1/2 left-6 md:left-10 -translate-y-1/2 bg-white/90
                     border-4 border-teal-700 p-5 md:p-6 rounded-lg shadow-xl max-w-sm"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            Carpentry
          </h1>
        </motion.div>

      </div>

      {/* DETAILS SECTION */}
      <section className="w-11/12 max-w-7xl bg-gray-100 py-14 md:py-16 px-6 md:px-10 rounded-xl shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* DETAIL IMAGE */}
          <motion.img
            src="/carpentry.webp"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="w-full rounded-xl shadow-lg object-cover"
            alt="Carpentry Detail"
            loading="lazy"
          />

          {/* TEXT BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">
              Carpentry
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We specialize in premium carpentry services that bring structural
              integrity, elegant design, and tailored functionality to interior
              spaces. Our skilled craftsmen use high-quality materials and precise
              techniques to create custom wooden elements.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our expert carpentry ensures every piece is built with attention to
              detail, contributing to timeless interiors that blend form and
              function seamlessly.
            </p>

            <h3 className="text-xl font-semibold text-teal-700 mt-6 mb-3">
              Our Carpentry Services Include:
            </h3>

            <ul className="text-gray-700 space-y-2">
              <li>• Custom Furniture & Bespoke Woodwork</li>
              <li>• Wooden Flooring & Ceiling Treatments</li>
              <li>• Door Frames, Window Frames & Staircases</li>
              <li>• Decorative Beams & Wooden Partitions</li>
              <li>• Modular Kitchens & Wardrobes</li>
              <li>• Furniture Repair & Restoration</li>
            </ul>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
