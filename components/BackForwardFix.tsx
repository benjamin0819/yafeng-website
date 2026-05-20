"use client";

import { useEffect } from "react";

export default function BackForwardFix() {
  useEffect(() => {
    function reloadPage() {
      setTimeout(() => {
        window.location.reload();
      }, 0);
    }

    function handlePageShow(event: PageTransitionEvent) {
      if (event.persisted) {
        reloadPage();
        return;
      }

      const navigation = performance.getEntriesByType(
        "navigation"
      )[0] as PerformanceNavigationTiming | undefined;

      if (navigation?.type === "back_forward") {
        reloadPage();
      }
    }

    function handlePopState() {
      reloadPage();
    }

    window.addEventListener("pageshow", handlePageShow);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return null;
}