import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const fullText = "Why Choose Us";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  // Typewriter animation
  useEffect(() => {
    const speed = isDeleting ? 70 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (index < fullText.length) {
          setDisplayedText(fullText.substring(0, index + 1));
          setIndex(index + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 700);
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
        {/* Background strip */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-28 h-full bg-teal-700"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 md:px-20">
          <motion.img
            src="/about.webp"
            loading="lazy"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full max-w-[480px] rounded-xl shadow-xl object-cover"
            alt="About Jupiter VK Design"
          />

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-white shadow-xl rounded-xl p-10 md:p-14 max-w-xl border border-gray-200"
          >
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              About Us
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              <span className="font-semibold text-teal-800">
                Jupiter VK Design & Interior Decoration
              </span>
              , a leading name in interior fit-out contracting, delivering
              complete
              <span className="font-semibold text-teal-800">
                {" "}
                — design and execution{" "}
              </span>
              solutions. Our experienced team brings creativity and precision to
              every detail including tiling, flooring, carpentry, false ceilings,
              aluminum installations, metal fabrication, and plaster finishes.
            </p>

            <button
              onClick={() =>
                document.getElementById("services").scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-full font-medium shadow-md"
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

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 px-6">
          {[
            {
              title: "Interior Designing",
              img: "/interior.webp",
              link: "/Interior_designing",
            },
            {
              title: "Joinery",
              img: "/joinery.webp",
              link: "/Joinery",
            },
            {
              title: "False Ceiling & Light Partitions",
              img: "/False-Ceiling.webp",
              link: "/False_ceiling",
            },
            {
              title: "Floor & Wall Tiling Works",
              img: "/service-plumbing.webp",
              link: "/Tiling_works",
            },
            {
              title: "Carpentry Works",
              img: "/carpentry.webp",
              link: "/Carpentry",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="flex flex-col"
            >
              <img
                src={service.img}
                loading="lazy"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />

              <div className="flex items-center justify-between mt-4">
                <p className="text-white text-lg font-medium">{service.title}</p>

                <button
                  onClick={() => (window.location.href = service.link)}
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white text-white"
                >
                  →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="w-full bg-gray-200 py-28 relative">
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div className="w-[45%] bg-teal-700"></div>
        </div>

        <div className="relative w-full flex flex-col md:flex-row justify-center items-center px-6 md:px-24">
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
              Our expertise spans the complete spectrum of interior transformation—
              from precision tiling and decoration design to expertly executed
              carpentry, flooring, false ceiling installations, glass and aluminum
              work, and flawless plaster finishes.
            </p>

            <p className="text-[15px] leading-6 text-gray-700">
              We believe in transparent partnerships and proactive support.
              Everything begins with a conversation—contact us today for a
              personalized, no-obligation consultation.
            </p>
          </motion.div>

          <motion.img
            src="/why-choose-us..webp"
            loading="lazy"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-[60%] rounded-xl shadow-xl object-cover md:ml-auto"
            alt="Why Choose Us"
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
                loading="lazy"
                alt="Commercial License"
                className="w-full h-auto max-h-[758px] object-contain rounded-xl shadow-md"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
