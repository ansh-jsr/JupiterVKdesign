import React from "react";
import { motion } from "framer-motion";

export default function Joinery() {
  return (
    <div
      id="joinery"
      className="w-full min-h-screen bg-white pt-24 pb-16 flex flex-col items-center"
    >
      {/* MAIN TOP CONTAINER */}
      <div className="w-11/12 max-w-7xl mx-auto relative overflow-hidden rounded-xl shadow-xl mb-20">

        {/* BACKGROUND IMAGE */}
        <motion.img
          src="/joinery-bg.jpg"   // place file in public/joinery-bg.jpg
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-[450px] object-cover rounded-xl"
        />

        {/* OVERLAY TITLE BOX */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="absolute top-1/2 left-10 -translate-y-1/2 bg-white/90 
                     border-4 border-teal-700 p-6 rounded-lg shadow-xl max-w-sm"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            Joinery & <br /> Woodwork
          </h1>
        </motion.div>

      </div>

      {/* ======= JOINERY DETAILS SECTION ======= */}
      <section className="w-11/12 max-w-7xl bg-gray-100 py-16 px-8 rounded-xl shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* IMAGE – right to left */}
          <motion.img
            src="/joineryy-detail.jpg"   // place file in public/joinery-detail.jpg
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full rounded-xl shadow-lg object-cover"
          />

          {/* TEXT – left to right */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">
              Joinery & Custom Woodwork
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We specialize in premium-quality joinery and custom woodwork designed to
              elevate your interior spaces. Our craftsmanship blends durability, beauty,
              and functional design.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              From modular cabinets to fine-crafted wooden elements, we deliver projects
              with precision and high-end finishes.
            </p>

            <h3 className="text-xl font-semibold text-teal-700 mt-6 mb-3">
              Our Joinery Services Include:
            </h3>

            <ul className="text-gray-700 space-y-2">
              <li>• Custom Furniture Fabrication</li>
              <li>• Modular Kitchen & Wardrobes</li>
              <li>• Wooden Partitions & Panels</li>
              <li>• Doors, Frames & Cabinets</li>
              <li>• Premium Wood Finishing & Polishing</li>
              <li>• CNC & Precision Cutting Work</li>
            </ul>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
