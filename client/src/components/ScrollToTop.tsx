import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Resets scroll position to the top whenever the route changes.
 * Works with both native scroll and Lenis smooth scroll.
 */
export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Native scroll reset (works even if Lenis is not active)
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Also reset Lenis if it's running
    // Lenis attaches itself to document.documentElement
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location]);

  return null;
}
