import { Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

export default function Footer() {

  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    navigate("/");

    setTimeout(() => {
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const section = document.getElementById(id);
      if (section) {
        const offset = section.offsetTop - 80;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <footer className="bg-[#111] text-gray-300 pt-16 pb-10 relative overflow-hidden bg-black">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 z-10 relative">

        {/* Logo */}
        <motion.div
          key={location.pathname + "-logo"}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/logo.png" alt="Express Zone" className="w-40 mb-6" />
          <p className="text-sm text-gray-400 leading-relaxed">
            Delivering interior, designing and civil solutions with quality & precision.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          key={location.pathname + "-links"}
          className="w-[120px]"
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer" onClick={() => scrollToSection("home")}>Home</li>
            <li className="hover:text-white cursor-pointer" onClick={() => scrollToSection("about")}>About</li>
            <li className="hover:text-white cursor-pointer" onClick={() => scrollToSection("contact")}>Contact</li>
          </ul>
        </motion.div>

        {/* Services (NO col-span so alignment stays correct) */}
        <motion.div
          key={location.pathname + "-services"}
          className="w-full"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-white text-lg font-semibold mb-4">Services</h3>

          {/* STACK Civil & MEP on all screen sizes */}
          <div className="grid grid-cols-1 gap-10">

            <div>
              <h4 className="text-gray-400 text-sm font-semibold mb-2">Civil</h4>
              <ul className="space-y-1 text-sm">
                <li>Interior Designing & Fitout</li>
                <li>Joinery & Custom Woodwork</li>
                <li>False Ceiling & Electrical Fitout</li>
                <li>Glass & Aluminum Installation & Maintenance</li>
                <li>Metal Parts & Erections Contracting</li>
                <li>Plaster Works</li>
                <li>Steel Products Installation & Maintenance</li>
              </ul>
            </div>

            <div>
              <h4 className="text-gray-400 text-sm font-semibold mb-2">MEP</h4>
              <ul className="space-y-1 text-sm">
                <li>Electrical Works</li>
                <li>Plumbing</li>
                <li>HVAC & Ventilation</li>
              </ul>
            </div>

          </div>
        </motion.div>

        {/* Branches (now correctly aligned on same row!) */}
        <motion.div
          key={location.pathname + "-branches"}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-white text-lg font-semibold mb-4">Our Branches</h3>

          <p className="text-sm text-gray-400 mb-3">
            Jupiter VK Design & Interior Decoration LLC, Dubai
            <br /> PO box - 118975, Al Khabeesi, Dubai, UAE
          </p>

          <br />

          <ul className="text-sm space-y-1 text-gray-300">
            <li>📞 +971 52 750 4235</li>
            <li>📧 info@jupitervkdesign.com</li>
          </ul>

        </motion.div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-5 text-center text-gray-500 text-sm">
        © 2025 Jupiter VK Design & Interior Decoration LLC. All Rights Reserved.
      </div>

    </footer>
  );
}
