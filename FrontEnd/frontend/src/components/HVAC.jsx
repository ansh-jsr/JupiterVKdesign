import React from "react";
import { motion } from "framer-motion";

const fadeRight = {
  initial: { opacity: 0, x: 120 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1, ease: "easeOut" },
};

const fadeLeft = {
  initial: { opacity: 0, x: -120 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1, ease: "easeOut" },
};

const fadeRightOnView = {
  initial: { opacity: 0, x: 120 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 1 },
};

const fadeLeftOnView = {
  initial: { opacity: 0, x: -120 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 1 },
};

export default function HVAC() {
  return (
    <div
      id="hvac"
      className="w-full min-h-screen bg-white pt-24 pb-16 flex flex-col items-center"
    >
      {/* HERO BANNER*/}
      <div className="w-11/12 max-w-7xl mx-auto relative overflow-hidden rounded-xl shadow-xl mb-20">

        {/* Banner Image */}
        <motion.img
          src="/hvac-detail.webp"
          alt="HVAC Banner"
          {...fadeRight}
          className="w-full h-[450px] object-cover rounded-xl"
        />

        {/* Title Overlay */}
        <motion.div
          {...fadeLeft}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="absolute top-1/2 left-10 -translate-y-1/2 
                     bg-white/90 border-4 border-teal-700 
                     p-6 rounded-lg shadow-xl max-w-sm"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            HVAC & <br /> Ventilation
          </h1>
        </motion.div>

      </div>

      {/*DETAILS SECTION*/}
      <section className="w-11/12 max-w-7xl bg-gray-100 py-16 px-6 md:px-10 rounded-xl shadow-md">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <motion.img
            src="/hvac-bg.webp"
            alt="HVAC System"
            {...fadeLeftOnView}
            className="w-full rounded-xl shadow-lg object-cover"
          />

          {/* Text */}
          <motion.div {...fadeRightOnView}>
            
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">
              HVAC & Ventilation
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We specialize in premium HVAC and ventilation services designed to 
              deliver optimal air quality, temperature control, and energy 
              efficiency in sophisticated interiors. Our team ensures precise 
              design, installation, and maintenance for comfort and health in 
              both residential and commercial spaces.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our solutions guarantee reliable performance, reduced energy 
              consumption, and enhanced indoor comfort while matching your 
              architectural and interior aesthetics.
            </p>

            <h3 className="text-xl font-semibold text-teal-700 mt-6 mb-3">
              Our HVAC & Ventilation Services Include:
            </h3>

            <ul className="text-gray-700 space-y-2">
              <li>• HVAC system design & installation</li>
              <li>• Custom ductwork fabrication & installation</li>
              <li>• Air filtration & purification systems</li>
              <li>• Ventilation setup to prevent moisture buildup</li>
              <li>• Custom climate-control solutions</li>
              <li>• Routine maintenance, repairs & system upgrades</li>
            </ul>

          </motion.div>

        </div>
      </section>
    </div>
  );
}
