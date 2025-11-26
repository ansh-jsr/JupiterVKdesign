// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser automatic scroll restoring
    window.history.scrollRestoration = "manual";

    // Ensure browser does NOT auto-jump on refresh
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 150); // wait for the page to render

  }, [pathname]);

  return null;
}
