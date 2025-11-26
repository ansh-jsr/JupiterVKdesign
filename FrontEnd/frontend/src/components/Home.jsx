import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const images = ["/decor4.jpg", "/decor3.jpg", "/decor2.jpg", "/decor1.jpg"];
  const [index, setIndex] = useState(0);

  // Automatically switch images every 3 seconds (2s display + 1s slide)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="bg-white">
      <div className="relative w-full h-[100vh] overflow-hidden">

        {/* Full-width slider with seamless transition */}
        <motion.div
          key={index}
          className="absolute inset-0 flex"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 1, // Slide speed
            ease: "easeInOut",
            delay: 2     // Hold each image before sliding
          }}
        >
          {/* Active image */}
          <img
            src={images[index]}
            className="w-full h-full object-cover flex-shrink-0"
          />

          {/* Preloaded next image for smooth sliding */}
          <img
            src={images[(index + 1) % images.length]}
            className="w-full h-full object-cover flex-shrink-0"
          />
        </motion.div>

        {/* Slider navigation indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-white" : "bg-white/50"
              }`}
            ></div>
          ))}
        </div>

        {/* Text and call-to-action overlay */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 right-10 md:right-20 -translate-y-1/2
                     bg-white/90 backdrop-blur-md border-r-8 border-yellow-400
                     w-[85%] md:w-[420px] p-6 md:p-10 rounded-xl shadow-2xl z-10"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-teal-900 leading-tight">
            INNOVATIVE <br />
            <span className="text-teal-700">CONCEPTS</span> <br />
            ELEGANT <br />
            <span className="text-yellow-600">DESIGNS</span>
          </h1>

          <p className="mt-5 text-gray-700 leading-relaxed text-sm md:text-base">
            Welcome to Jupiter Design & Interior, a trusted partner in comprehensive
            interior solutions, delivering expert design, precision execution, and
            superior craftsmanship for residential, corporate, and commercial
            environments.
          </p>

          <button
            onClick={() => {
              document.getElementById("about").scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="mt-6 bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-full shadow-md duration-200 cursor-pointer"
          >
            Explore More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
