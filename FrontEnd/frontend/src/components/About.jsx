import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const fullText = "Why Choose Us";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  // Typewriter text animation for the "Why Choose Us" title
  useEffect(() => {
    const speed = isDeleting ? 80 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (index < fullText.length) {
          setDisplayedText(fullText.substring(0, index + 1));
          setIndex(index + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 800);
        }
      } else {
        if (index > 0) {
          setDisplayedText(fullText.substring(0, index - 1));
          setIndex(index - 1);
        } else {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <>
      {/* ABOUT SECTION */}
      <section id="about" className="w-full bg-[#E6E6E6] py-20 relative">
        {/* Vertical teal strip behind the content */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 md:w-32 h-full bg-teal-700 z-0"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 md:px-20">
          <motion.img
            src="/about.jpg"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-[90%] md:w-[480px] rounded-xl shadow-xl object-cover"
          />

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-white shadow-xl rounded-xl p-10 md:p-14 max-w-xl border border-gray-200 relative"
          >
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              About Us
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              <span className="font-semibold text-teal-800">
                Jupiter VK Design & Interior Decoration
              </span>
              , a leading name in interior fit-out contracting, dedicated to
              delivering complete
              <span className="font-semibold text-teal-800">
                {" "}
                — design and execution{" "}
              </span>
              solutions. Driven by an unwavering focus on quality, our
              experienced team brings creativity and precision to tiling,
              flooring, carpentry, false ceilings, glass and aluminum
              installations, metal fabrication, and plaster finishes, shaping
              every space into a refined and inspiring environment.
            </p>

            <button
              onClick={() => {
                document.getElementById("services").scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-full font-medium shadow-md cursor-pointer"
            >
              READ MORE
            </button>
          </motion.div>
        </div>
      </section>

      {/* FEATURED SERVICES SECTION */}
      <section id="services" className="w-full py-24 bg-teal-700">
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl font-extrabold text-white mb-16"
        >
          Featured Services
        </motion.h2>

        {/* Service cards with staggered animations */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 px-6">
          {/* Interior Designing */}
          <motion.div
            initial={{ opacity: 0, x: -80, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col"
          >
            <img
              src="/interior.jpg"
              className="w-full h-48 object-cover rounded-xl shadow-lg"
            />
            <div className="flex items-center justify-between mt-4">
              <p className="text-white text-lg font-medium">Interior designing</p>
              <button
                onClick={() =>
                  (window.location.href = "/Interior_designing")
                }
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white text-white cursor-pointer"
              >
                →
              </button>
            </div>
          </motion.div>

          {/* Joinery */}
          <motion.div
            initial={{ opacity: 0, x: -70, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="flex flex-col"
          >
            <img
              src="/joinery.jpg"
              className="w-full h-48 object-cover rounded-xl shadow-lg"
            />
            <div className="flex items-center justify-between mt-4">
              <p className="text-white text-lg font-medium">Joinery</p>
              <button
                onClick={() => (window.location.href = "/Joinery")}
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white text-white cursor-pointer"
              >
                →
              </button>
            </div>
          </motion.div>

          {/* False Ceiling */}
          <motion.div
            initial={{ opacity: 0, x: -60, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col"
          >
            <img
              src="/False-Ceiling.jpg"
              className="w-full h-48 object-cover rounded-xl shadow-lg"
            />
            <div className="flex items-center justify-between mt-4">
              <p className="text-white text-lg font-medium">
                False Ceiling & <br />
                Light Partitions
              </p>
              <button
                onClick={() => (window.location.href = "/False_ceiling")}
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white text-white cursor-pointer"
              >
                →
              </button>
            </div>
          </motion.div>

          {/* Tiling Works */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 25 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.95, ease: "easeOut" }}
            className="flex flex-col"
          >
            <img
              src="/service-plumbing.jpg"
              className="w-full h-48 object-cover rounded-xl shadow-lg"
            />
            <div className="flex items-center justify-between mt-4">
              <p className="text-white text-lg font-medium">
                Floor & Wall <br />
                Tiling Works
              </p>
              <button
                onClick={() => (window.location.href = "/Tiling_works")}
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white text-white cursor-pointer"
              >
                →
              </button>
            </div>
          </motion.div>

          {/* Carpentry */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: -25 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className="flex flex-col"
          >
            <img
              src="/carpentry.jpg"
              className="w-full h-48 object-cover rounded-xl shadow-lg"
            />
            <div className="flex items-center justify-between mt-4">
              <p className="text-white text-lg font-medium">Carpentry works</p>
              <button
                onClick={() => (window.location.href = "/Carpentry")}
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white text-white cursor-pointer"
              >
                →
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="w-full bg-gray-200 py-28 relative">
        {/* Background center strip */}
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div className="w-[45%] bg-teal-700"></div>
        </div>

        <div className="relative w-full flex flex-col md:flex-row justify-center items-center px-6 md:px-24">
          {/* Text content box */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              bg-[#E8E8E8] 
              rounded-2xl shadow-xl 
              p-10 md:p-14 
              w-[90%] md:w-[55%]
              md:absolute 
              md:left-10 
              z-10
            "
          >
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-3 text-black">
              <span className="h-10 w-[4px] bg-teal-700 inline-block"></span>
              <span className="font-serif">
                {displayedText}
                <span className="border-r-2 border-black ml-1 animate-pulse"></span>
              </span>
            </h2>

            <p className="text-[15px] leading-6 text-gray-700 mb-5">
              Our expertise spans the complete spectrum of interior
              transformation—from precision tiling and bespoke decoration design
              to expertly executed carpentry, wood flooring, and false ceiling
              installations. We seamlessly integrate glass and aluminum
              elements, master metal fabrication and steel installations, and
              deliver flawless plaster finishes. Every detail reflects our
              commitment to creating spaces that are as durable as they are
              beautiful.
            </p>

            <p className="text-[15px] leading-6 text-gray-700">
              We believe in transparent partnerships and proactive support
              throughout your renovation journey. Our seasoned team listens to
              your vision, answers your questions, and guides every step with
              care. Your space deserves craftsmanship that reflects your
              lifestyle—and that journey begins with a conversation. Contact us
              today for a personalized, no-obligation consultation.
            </p>
          </motion.div>

          {/* Feature image */}
          <motion.img
            src="/why-choose-us..jpg"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="
              w-full md:w-[60%] 
              rounded-xl shadow-xl 
              object-cover 
              md:ml-auto
            "
          />
        </div>
      </section>

     {/* LICENSE SECTION */}
<section className="w-full bg-teal-700 py-10 md:py-24 px-4 md:px-24">
  <h2 className="text-center text-4xl font-extrabold text-white mb-14">
    Company License
  </h2>

  <div className="flex justify-center">
    <div className="w-full md:w-[60%]">
      {/* License display */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-2xl shadow-xl p-6 border border-gray-300"
      >
        <h3 className="text-center text-2xl font-bold mb-6">
          Commercial License
        </h3>

        <img
          src="/commercial-license.jpg"
          alt="Commercial License"
          className="w-full h-[600px] md:h-[758px] object-cover md:object-contain rounded-xl shadow-md bg-white"
        />
      </motion.div>
    </div>
  </div>
</section>
    </>
  );
}
