import React, { useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Phone, Mail, MapPin, Globe, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [shakeField, setShakeField] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);

  // Animation controls for Enter key button tap
  const tapControls = useAnimation();
  const submitBtnRef = useRef(null);

  // -------------------------
  // HANDLE INPUT CHANGE (NO VALIDATION HERE)
  // -------------------------
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // -------------------------
  // FORM SUBMISSION VALIDATION ONLY
  // -------------------------
  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    let valid = true;

    // Email validation (submit only)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setEmailError("Enter a valid email (must include @ and domain)");
      setShakeField("email");
      valid = false;
    } else {
      setEmailError("");
    }

    // Phone validation (submit only)
    const phonePattern = /^[+\d][\d\s()+-]{6,}$/;
    if (!phonePattern.test(formData.phone)) {
      setPhoneError("Enter a valid phone number");
      setShakeField("phone");
      valid = false;
    } else {
      setPhoneError("");
    }

    // Reset shake class shortly after
    setTimeout(() => setShakeField(""), 400);

    if (!valid) return;

    // --- SHOW SUCCESS IMMEDIATELY (optimistic feedback) ---
    setShowSuccess(true);
    const hideTimeout = setTimeout(() => setShowSuccess(false), 2500);

    // Submit to backend (still awaited so we can handle server failure)
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!data.success) {
        // backend indicated failure
        clearTimeout(hideTimeout);
        setShowSuccess(false);
        alert(data.message || "Server error while sending message");
      } else {
        // success: clear form (popup already visible)
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (err) {
      // network error or other
      clearTimeout(hideTimeout);
      setShowSuccess(false);
      alert("Failed to send message. Please try again.");
      console.error("Submit error:", err);
    }
  };

  return (
    <div id="contact" className="relative w-full min-h-screen bg-gray-100 px-6 py-10">
      
      {/* SUCCESS POPUP */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed top-5 left-1/2 -translate-x-1/2 bg-white shadow-xl border border-gray-300 rounded-lg px-6 py-3 flex items-center gap-3 z-50"
        >
          <CheckCircle className="text-green-600" />
          <p className="text-green-700 font-medium">Message Sent Successfully!</p>
        </motion.div>
      )}

      {/* Center Vertical Teal Strip */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-40 sm:w-56 md:w-64 lg:w-80 bg-teal-700 pointer-events-none"></div>


      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT SECTION */}
      <div className="bg-white rounded-lg shadow-md p-5 relative z-20 w-fit h-fit max-w-max inline-block">
 
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-teal-800">Our Branch</h2>

          <div className="space-y-4 text-gray-700">

            <div className="flex items-start gap-3">
              <MapPin className="text-teal-800" />
              <p>
                Jupiter VK Design & Interior Decoration LLC <br />
              </p>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="text-teal-800" />
              <p>PO box - 118975, Al Khabeesi, Dubai, UAE</p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-teal-800" />
              <p>+971 52 750 4235</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-teal-700" />
              <p>info@jupitervkdesign.com</p>
            </div>

            <div className="flex items-center gap-3">
              <Globe className="text-teal-700" />
              <p>www.jupitervkdesign.com</p>
            </div>

          </div>
        </motion.div>
      </div>
        {/* CONTACT FORM */}
        <motion.form
          onSubmit={handleSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();

              // trigger visual tap (do not await)
              tapControls.start({ scale: 0.95, transition: { duration: 0.08 } });
              tapControls.start({ scale: 1, transition: { duration: 0.12 } });

              // submit immediately after triggering the animation
              handleSubmit(e);
            }
          }}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-xl rounded-xl p-6 border border-gray-200 relative z-10"
        >
          <h2 className="text-2xl font-bold mb-4 text-teal-700">
            Feel Free To Contact Us
          </h2>

          <div className="space-y-4">

            {/* NAME */}
            <div>
              <label className="font-medium text-black">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-md p-2 text-black placeholder-gray-500 focus:outline-none focus:border-teal-700"
                placeholder="Name"
                required
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="font-medium text-black">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border rounded-md p-2 text-black placeholder-gray-500 focus:outline-none focus:border-teal-700 ${
                  shakeField === "email" ? "shake" : ""
                }`}
                placeholder="Email"
                required
              />
              {emailError && <p className="text-red-600 text-sm">{emailError}</p>}
            </div>

            {/* PHONE */}
            <div>
              <label className="font-medium text-black">Phone *</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full border rounded-md p-2 text-black placeholder-gray-500 focus:outline-none focus:border-teal-700 ${
                  shakeField === "phone" ? "shake" : ""
                }`}
                placeholder="Phone"
                required
              />
              {phoneError && <p className="text-red-600 text-sm">{phoneError}</p>}
            </div>

            {/* MESSAGE */}
            <div>
              <label className="font-medium text-black">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded-md p-2 h-28 text-black placeholder-gray-500 focus:outline-none focus:border-teal-700"
                placeholder="Message"
              ></textarea>
            </div>

            <motion.button
              ref={submitBtnRef}
              animate={tapControls}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-teal-700 text-white font-semibold py-2 rounded-md hover:bg-teal-800"
            >
              Send
            </motion.button>

          </div>
        </motion.form>

      </div>

      {/* BOTTOM TEAL STRIP */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute bottom-0 left-0 h-30 bg-teal-700 pointer-events-none z-0"
      ></motion.div>

    </div>
  );
}
