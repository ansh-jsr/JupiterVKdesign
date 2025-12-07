import React, {
  useState,
  useMemo,
  useCallback,
  useRef,
  useLayoutEffect,
  useEffect
} from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef(null);
  const navHeight = useRef(0);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    if (navRef.current) {
      navHeight.current = navRef.current.getBoundingClientRect().height;
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  const civilMenu = useMemo(
    () => [
      { label: "Interior Designing", path: "/Interior_designing" },
      { label: "Joinery", path: "/Joinery" },
      { label: "False Ceiling", path: "/False_ceiling" },
      { label: "Floor & Wall Tiling Works", path: "/Tiling_works" },
      { label: "Carpentry Works", path: "/Carpentry" }
    ],
    []
  );

  const mepMenu = useMemo(
    () => [
      { label: "Electrical Works", path: "/Electrical" },
      { label: "Plumbing Works", path: "/Plumbing" },
      { label: "HVAC & Ventilation", path: "/HVAC" }
    ],
    []
  );

  const handleNavigation = useCallback(
    (id) => {
      const scrollAction = () => {
        const section = document.getElementById(id);
        if (!section) return;

        const navEl = document.querySelector("nav");
        const navH = navEl ? navEl.getBoundingClientRect().height : 0;

        const targetY =
          section.getBoundingClientRect().top +
          window.pageYOffset -
          navH;

        window.scrollTo({
          top: Math.max(targetY, 0),
          behavior: "smooth"
        });
      };

      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(scrollAction, 350);
      } else {
        scrollAction();
      }

      setOpen(false);
    },
    [location.pathname, navigate]
  );

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 bg-teal-800 shadow-lg"
      style={{ isolation: "isolate" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleNavigation("home")}
        >
          <img src="/logovk.png" alt="Jupiter VK Design" className="h-16 w-auto absolute " />
        </div>

        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li onClick={() => handleNavigation("home")} className="hover:text-yellow-300 duration-200 cursor-pointer">
            HOME
          </li>

          <li onClick={() => handleNavigation("about")} className="hover:text-yellow-300 duration-200 cursor-pointer">
            ABOUT
          </li>

          <li className="relative group cursor-pointer">
            <span className="hover:text-yellow-300">CIVIL WORKS ▾</span>

            <div className="absolute left-0 top-full mt-2 w-56 bg-white text-teal-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-200 p-2 space-y-2 z-[9999]">
              <p onClick={() => navigate("/Interior_designing")} className="hover:bg-teal-100 px-3 py-2 rounded cursor-pointer">Interior Designing</p>
              <p onClick={() => navigate("/Joinery")} className="hover:bg-teal-100 px-3 py-2 rounded cursor-pointer">Joinery</p>
              <p onClick={() => navigate("/False_ceiling")} className="hover:bg-teal-100 px-3 py-2 rounded cursor-pointer">False Ceiling</p>
              <p onClick={() => navigate("/Tiling_works")} className="hover:bg-teal-100 px-3 py-2 rounded cursor-pointer">Floor & Wall Tiling Works</p>
              <p onClick={() => navigate("/Carpentry")} className="hover:bg-teal-100 px-3 py-2 rounded cursor-pointer">Carpentry Works</p>
            </div>
          </li>

          <li className="relative group cursor-pointer">
            <span className="hover:text-yellow-300">MEP ▾</span>

            <div className="absolute left-0 top-full mt-2 w-56 bg-white text-teal-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-200 p-2 space-y-2 z-[9999]">
              <p onClick={() => navigate("/Electrical")} className="hover:bg-teal-100 px-3 py-2 rounded cursor-pointer">Electrical Works</p>
              <p onClick={() => navigate("/Plumbing")} className="hover:bg-teal-100 px-3 py-2 rounded cursor-pointer">Plumbing Works</p>
              <p onClick={() => navigate("/HVAC")} className="hover:bg-teal-100 px-3 py-2 rounded cursor-pointer">HVAC & Ventilation</p>
            </div>
          </li>

          <li onClick={() => handleNavigation("contact")} className="hover:text-yellow-300 duration-200 cursor-pointer">
            CONTACT
          </li>
        </ul>

        <button onClick={() => handleNavigation("contact")} className="hidden md:block bg-yellow-400 hover:bg-yellow-500 text-teal-900 font-semibold px-6 py-2 rounded-full shadow-md duration-200 cursor-pointer">
          GET A QUOTE
        </button>

        <button ref={buttonRef} className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div ref={menuRef}>
          <div className="md:hidden bg-teal-900 text-white px-6 py-4 space-y-4 w-screen overflow-x-hidden max-w-full">

            <p onClick={() => handleNavigation("home")} className="hover:text-yellow-300 cursor-pointer">HOME</p>
            <p onClick={() => handleNavigation("about")} className="hover:text-yellow-300 cursor-pointer">ABOUT</p>

            <details className="text-white max-w-full">
              <summary className="cursor-pointer">CIVIL WORKS</summary>
              <div className="mt-2 space-y-2 pl-4 max-w-full">
                {civilMenu.map((item, i) => (
                  <p
                    key={i}
                    onClick={() => {
                      navigate(item.path);
                      setOpen(false);
                    }}
                    className="hover:text-yellow-300 cursor-pointer"
                  >
                    {item.label}
                  </p>
                ))}
              </div>
            </details>

            <details className="text-white max-w-full">
              <summary className="cursor-pointer">MEP</summary>
              <div className="mt-2 space-y-2 pl-4 max-w-full">
                {mepMenu.map((item, i) => (
                  <p
                    key={i}
                    onClick={() => {
                      navigate(item.path);
                      setOpen(false);
                    }}
                    className="hover:text-yellow-300 cursor-pointer"
                  >
                    {item.label}
                  </p>
                ))}
              </div>
            </details>

            <p onClick={() => handleNavigation("contact")} className="hover:text-yellow-300 cursor-pointer">CONTACT</p>

            <button
              onClick={() => handleNavigation("contact")}
              className="bg-yellow-400 text-teal-900 font-semibold px-5 py-2 rounded-full w-full"
            >
              GET A QUOTE
            </button>

          </div>
        </div>
      )}
    </nav>
  );
}
