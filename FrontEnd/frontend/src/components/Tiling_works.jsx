import React from "react";
import { motion } from "framer-motion";

export default function Tiling_works() {
  return (
    <div
      id="false_ceiling"
      className="w-full min-h-screen bg-white pt-24 pb-16 flex flex-col items-center"
    >
      {/* MAIN TOP CONTAINER */}
      <div className="w-11/12 max-w-7xl mx-auto relative overflow-hidden rounded-xl shadow-xl mb-20">
        
        {/* BACKGROUND IMAGE */}
        <motion.img
          src="/Tiling_works.jpg"   // keep the image in public/joinery-bg.jpg
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-[450px] object-cover rounded-xl"
        />

        {/* TITLE BOX */}
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="absolute top-1/2 left-10 -translate-y-1/2 bg-white/90
                     border-4 border-teal-700 p-6 rounded-lg shadow-xl max-w-sm"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            Floor & Wall <br /> Tiling Works
          </h1>
        </motion.div>

      </div>

      {/* JOINERY DETAILS SECTION */}
      <section className="w-11/12 max-w-7xl bg-gray-100 py-16 px-8 rounded-xl shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* IMAGE — Right → Left animation */}
          <motion.img
            src="/Tiling_works-detail.jpg"   // keep the image in public/joinery-detail.jpg
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full rounded-xl shadow-lg object-cover"
          />

          {/* TEXT — Left → Right animation */}
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
              We specialize in high-quality floor and wall tiling works that enhance the elegance, durability, and aesthetic appeal of interior spaces. Our expert craftsmanship ensures precise installation, clean finishes, and long-lasting surfaces suited for both residential and commercial environments.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              The team delivers tile works with attention to detail and high-grade materials, ensuring a smooth, water-resistant, and easy-to-maintain surface that elevates your interiors with luxury and functionality.
            </p>

            <h3 className="text-xl font-semibold text-teal-700 mt-6 mb-3">
              Our Floor & Wall Tiling Services Include:
            </h3>

            <ul className="text-gray-700 space-y-2">
              <li>• Expert Installation of Ceramic, Porcelain, Vitrified, and Natural Stone Tiles</li>
              <li>• Custom Tile Designs and Pattern Layouts to Match Your Interior Style</li>
              <li>• Surface Preparation, Cutting, and Precision Fitting for Flawless Finish</li>
              <li>• Grouting and Sealant Application for Durability and Moisture Resistance</li>
              <li>• Tile Repair, Restoration, and Maintenance Services</li>
              <li>• Suitable for Kitchens, Bathrooms, Living Areas, and Commercial Spaces</li>
            </ul>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
