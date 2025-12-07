import React from "react";
import { motion } from "framer-motion";

export default function Tiling_works() {
  return (
    <div
      id="tiling_works"
      className="w-full min-h-screen bg-white pt-24 pb-16 flex flex-col items-center"
    >
      {/* TOP BANNER */}
      <div className="w-11/12 max-w-7xl mx-auto relative overflow-hidden rounded-xl shadow-xl mb-20">
        
        <motion.img
          src="/Tiling_works.webp"
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-[450px] object-cover rounded-xl"
        />

        <motion.div
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="absolute top-1/2 left-8 md:left-10 -translate-y-1/2
                     bg-white/90 border-4 border-teal-700 p-6 rounded-lg shadow-xl max-w-sm"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            Floor & Wall <br /> Tiling Works
          </h1>
        </motion.div>
      </div>

      {/* DETAILS SECTION */}
      <section className="w-11/12 max-w-7xl bg-gray-100 py-16 px-6 md:px-8 rounded-xl shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <motion.img
            src="/Tiling_works-detail.webp"
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full rounded-xl shadow-lg object-cover"
          />

          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">
              Floor & Wall Tiling Works
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We specialize in high-quality floor and wall tiling works that enhance
              the elegance, durability, and aesthetic appeal of interior spaces.
              Our expert craftsmanship ensures precise installation and long-lasting
              finishes for both residential and commercial projects.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              All tiling work is completed with premium materials and precision to
              deliver water-resistant, stain-proof, and seamless surfaces that elevate
              your interiors with luxury and practicality.
            </p>

            <h3 className="text-xl font-semibold text-teal-700 mt-6 mb-3">
              Our Floor & Wall Tiling Services Include:
            </h3>

            <ul className="text-gray-700 space-y-2">
              <li>• Installation of Ceramic, Porcelain, Vitrified & Stone Tiles</li>
              <li>• Custom Patterns & Layout Designs</li>
              <li>• Surface Preparation & Precision Cutting</li>
              <li>• Grouting & Sealant Application</li>
              <li>• Tile Repair & Restoration Services</li>
              <li>• Ideal for Kitchens, Bathrooms, Living Areas & More</li>
            </ul>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
