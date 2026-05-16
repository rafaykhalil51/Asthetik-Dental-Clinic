import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Resets scroll to top on every route change.
 * Uses Lenis's own scrollTo() API (window.__lenis) when available,
 * because Lenis intercepts native window.scrollTo and manages its own position.
 */
export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    const lenis = (window as any).__lenis;

    if (lenis) {
      // Use Lenis API — immediate = no animation, just jump to top
      lenis.scrollTo(0, { immediate: true, force: true });
    } else {
      // Fallback for when Lenis hasn't initialized yet
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [location]);

  return null;
}
