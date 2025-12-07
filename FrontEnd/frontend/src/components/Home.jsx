import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const images = ["/decor4.webp", "/decor3.webp", "/decor2.webp", "/decor1.webp"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="bg-white">
      {/*  hero section  */}
      <div className="relative w-full min-h-screen pt-24 overflow-hidden flex items-center">

        {/* Slider */}
        <motion.div
          key={index}
          className="absolute inset-0 flex"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <img
            src={images[index]}
            className="w-full h-full object-cover flex-shrink-0"
          />
          <img
            src={images[(index + 1) % images.length]}
            className="w-full h-full object-cover flex-shrink-0"
          />
        </motion.div>

        {/* Dots */}
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

        {/*  overlay box  */}
        <div className="relative z-20 w-full flex justify-end px-6 md:px-16">

          {/* OVERLAY BOX */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="
              bg-white/90 backdrop-blur-md border-r-8 border-yellow-400
              w-full 
              max-w-[480px] md:max-w-[420px] sm:max-w-[360px] xs:max-w-[300px]
              p-6 md:p-10 sm:p-5 xs:p-4
              max-h-[80vh] overflow-auto
              rounded-xl shadow-2xl
            "
          >
            <h1 className="
              text-4xl md:text-5xl sm:text-3xl xs:text-2xl
              font-extrabold text-teal-900 leading-tight
            ">
              INNOVATIVE <br />
              <span className="text-teal-700">CONCEPTS</span> <br />
              ELEGANT <br />
              <span className="text-yellow-600">DESIGNS</span>
            </h1>

            <p className="mt-5 text-gray-700 leading-relaxed 
                          text-sm md:text-base sm:text-sm xs:text-xs">
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
              className="
                mt-6 bg-teal-700 hover:bg-teal-800 text-white 
                px-6 py-3 sm:px-5 sm:py-2 xs:px-4 xs:py-2
                rounded-full shadow-md duration-200 cursor-pointer
                text-base sm:text-sm xs:text-xs
              "
            >
              Explore More
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
