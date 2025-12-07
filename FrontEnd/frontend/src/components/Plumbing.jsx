import React from "react";
import { motion } from "framer-motion";

export default function Plumbing() {
  return (
    <div
      id="plumbing"
      className="w-full min-h-screen bg-white pt-24 pb-16 flex flex-col items-center"
    >
      {/* TOP HERO / BANNER */}
      <div className="w-11/12 max-w-7xl mx-auto relative overflow-hidden rounded-xl shadow-xl mb-20">

        {/* Background Image */}
        <motion.img
          src="/plumbing-bg.webp"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-[350px] md:h-[450px] object-cover rounded-xl"
          alt="Plumbing Services Banner"
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
            Plumbing
          </h1>
        </motion.div>

      </div>

      {/* MAIN DETAILS SECTION */}
      <section className="w-11/12 max-w-7xl bg-gray-100 py-14 md:py-16 px-6 md:px-10 rounded-xl shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* DETAIL IMAGE */}
          <motion.img
            src="/plumbing-detail.webp"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="w-full rounded-xl shadow-lg object-cover"
            alt="Plumbing Detail Work"
            loading="lazy"
          />

          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">
              Plumbing Services for Interiors
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We offer comprehensive luxury plumbing services designed for efficient water
              management, hygiene, and long-term durability. Our trained professionals use
              premium materials and advanced techniques for installation, repairs, and maintenance.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Every service is carried out with precision, ensuring full safety compliance,
              leak-free durability, and smooth integration with your interior design.
            </p>

            <h3 className="text-xl font-semibold text-teal-700 mt-6 mb-3">
              Our Plumbing Services Include:
            </h3>

            <ul className="text-gray-700 space-y-2">
              <li>• Installation & repair of water supply and drainage systems</li>
              <li>• Bathroom & kitchen plumbing (sinks, faucets, showers, toilets)</li>
              <li>• Leak detection & long-lasting repair services</li>
              <li>• Premium piping installation (copper, PVC, CPVC, UPVC)</li>
              <li>• Preventive maintenance to avoid major repairs & water damage</li>
              <li>• Sanitary fixture installation including smart toilets & modern systems</li>
            </ul>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
