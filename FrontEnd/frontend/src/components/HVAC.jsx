import React from "react";
import { motion } from "framer-motion";

export default function HVAC() {
  return (
    <div
      id="hvac"
      className="w-full min-h-screen bg-white pt-24 pb-16 flex flex-col items-center"
    >
      {/* Top section featuring header image and title overlay */}
      <div className="w-11/12 max-w-7xl mx-auto relative overflow-hidden rounded-xl shadow-xl mb-20">

        {/* Main background banner image */}
        <motion.img
          src="/hvac-detail.jpg" // Ensure the file exists in the public folder
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-[450px] object-cover rounded-xl"
        />

        {/* Title box overlaying the banner */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="absolute top-1/2 left-10 -translate-y-1/2 bg-white/90 
                     border-4 border-teal-700 p-6 rounded-lg shadow-xl max-w-sm"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            HVAC & <br /> Ventilation
          </h1>
        </motion.div>

      </div>

      {/* Main content section describing services */}
      <section className="w-11/12 max-w-7xl bg-gray-100 py-16 px-8 rounded-xl shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Service detail image with entrance animation */}
          <motion.img
            src="/hvac-bg.jpg" // Ensure file exists in the public folder
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full rounded-xl shadow-lg object-cover"
          />

          {/* Text content describing HVAC services */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">
              HVAC & Ventilation
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We specialize in premium HVAC and ventilation services designed to deliver
              optimal air quality, temperature control, and energy efficiency in sophisticated
              interiors. Our team ensures precise system design, installation, and maintenance
              for comfort and health in residential and commercial spaces.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our expert services ensure reliable performance, lower energy costs, and a
              comfortable indoor environment that complements your luxury interiors.
            </p>

            <h3 className="text-xl font-semibold text-teal-700 mt-6 mb-3">
              Our HVAC & Ventilation Services Include:
            </h3>

            <ul className="text-gray-700 space-y-2">
              <li>• Design and installation of heating, ventilation, and air conditioning systems</li>
              <li>• Ductwork fabrication and installation for efficient airflow</li>
              <li>• Air filtration and purification system integration for healthier environments</li>
              <li>• Ventilation solutions to prevent moisture buildup and improve indoor air quality</li>
              <li>• Customized systems tailored to your architectural and aesthetic needs</li>
              <li>• Routine HVAC maintenance, repairs, and system upgrades</li>
            </ul>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
