import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (id) => {
    const scrollAction = () => {
      const section = document.getElementById(id);
      if (!section) return;

      const navEl = document.querySelector("nav");
      const navHeight = navEl ? navEl.getBoundingClientRect().height : 0;

      const targetY =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        navHeight;

      window.scrollTo({
        top: Math.max(targetY, 0),
        behavior: "smooth",
      });
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollAction, 350);
    } else {
      scrollAction();
    }

    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-teal-800 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleNavigation("home")}
        >
          <img src="/logo.png" alt="Jupiter VK Design" className="h-12" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">

          <li
            onClick={() => handleNavigation("home")}
            className="hover:text-yellow-300 duration-200 cursor-pointer"
          >
            HOME
          </li>

          <li
            onClick={() => handleNavigation("about")}
            className="hover:text-yellow-300 duration-200 cursor-pointer"
          >
            ABOUT
          </li>

          {/* ======== CIVIL WORKS DROPDOWN ======== */}
          <li className="relative group cursor-pointer">
            <span className="hover:text-yellow-300">CIVIL WORKS ▾</span>

            <div className="absolute left-0 top-full mt-2 w-56 bg-white text-teal-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-200 p-2 space-y-2">

              <p onClick={() => navigate("/Interior_designing")} className="hover:bg-teal-100 px-3 py-2 rounded cursor-pointer">
                Interior Designing
              </p>

              <p onClick={() => navigate("/Joinery")} className="hover:bg-teal-100 px-3 py-2 rounded cursor-pointer">
                Joinery
              </p>

              <p onClick={() => navigate("/False_ceiling")} className="hover:bg-teal-100 px-3 py-2 rounded cursor-pointer">
                False Ceiling
              </p>

              {/* <p onClick={() => navigate("/Tiling_works")} className="hover:bg-teal-100 px-3 py-2 rounded cursor-pointer">
                Light Partitions
              </p> */}

              <p onClick={() => navigate("/Tiling_works")} className="hover:bg-teal-100 px-3 py-2 rounded cursor-pointer">
                Floor & Wall Tiling Works
              </p>

              <p onClick={() => navigate("/Carpentry")} className="hover:bg-teal-100 px-3 py-2 rounded cursor-pointer">
                Carpentry Works
              </p>
            </div>
          </li>

          {/* ======== MEP DROPDOWN ======== */}
          <li className="relative group cursor-pointer">
            <span className="hover:text-yellow-300">MEP ▾</span>

            <div className="absolute left-0 top-full mt-2 w-56 bg-white text-teal-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-200 p-2 space-y-2">
              <p onClick={() => navigate("/Electrical")} className="hover:bg-teal-100 px-3 py-2 rounded cursor-pointer">
                Electrical Works
              </p>

              <p onClick={() => navigate("/Plumbing")} className="hover:bg-teal-100 px-3 py-2 rounded cursor-pointer">
                Plumbing Works
              </p>

              <p onClick={() => navigate("/HVAC")} className="hover:bg-teal-100 px-3 py-2 rounded cursor-pointer">
                HVAC & Ventilation
              </p>
            </div>
          </li>

          <li
            onClick={() => handleNavigation("contact")}
            className="hover:text-yellow-300 duration-200 cursor-pointer"
          >
            CONTACT
          </li>
        </ul>

        {/* CTA Button */}
        <button
          onClick={() => handleNavigation("contact")}
          className="hidden md:block bg-yellow-400 hover:bg-yellow-500 text-teal-900 font-semibold px-6 py-2 rounded-full shadow-md duration-200 cursor-pointer"
        >
          GET A QUOTE
        </button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-teal-900 text-white px-6 py-4 space-y-4">
          <p className="hover:text-yellow-300" onClick={() => handleNavigation("home")}>
            HOME
          </p>

          <p className="hover:text-yellow-300" onClick={() => handleNavigation("about")}>
            ABOUT
          </p>

          {/* MOBILE Civil Works (simple list) */}
          <details className="text-white">
            <summary className="cursor-pointer">CIVIL WORKS</summary>
            <div className="mt-2 space-y-2 pl-4">
              <p onClick={() => navigate("/Interior_designing")} className="hover:text-yellow-300 cursor-pointer">Interior Designing</p>
              <p onClick={() => navigate("/Joinery")} className="hover:text-yellow-300 cursor-pointer">Joinery</p>
              <p onClick={() => navigate("/False_ceiling")} className="hover:text-yellow-300 cursor-pointer">False Ceiling</p>
              {/* <p onClick={() => navigate("/light-partitions")} className="hover:text-yellow-300 cursor-pointer">Light Partitions</p> */}
              <p onClick={() => navigate("/Tiling_works")} className="hover:text-yellow-300 cursor-pointer">Floor & Wall Tiling</p>
              <p onClick={() => navigate("/Carpentry")} className="hover:text-yellow-300 cursor-pointer">Carpentry Works</p>
            </div>
          </details>

          {/* MOBILE MEP */}
          <details className="text-white">
            <summary className="cursor-pointer">MEP</summary>
            <div className="mt-2 space-y-2 pl-4">
              <p onClick={() => navigate("/electrical")} className="hover:text-yellow-300 cursor-pointer">Electrical Works</p>
              <p onClick={() => navigate("/plumbing")} className="hover:text-yellow-300 cursor-pointer">Plumbing Works</p>
              <p onClick={() => navigate("/hvac")} className="hover:text-yellow-300 cursor-pointer">HVAC</p>
            </div>
          </details>

          <p className="hover:text-yellow-300" onClick={() => handleNavigation("contact")}>
            CONTACT
          </p>

          <button className="bg-yellow-400 text-teal-900 font-semibold px-5 py-2 rounded-full w-full">
            GET A QUOTE
          </button>
        </div>
      )}
    </nav>
  );
}
