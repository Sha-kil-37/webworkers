import { useEffect } from "react";
import { useLocation } from "react-router";
// Google Analytics Measurement ID from environment variables
const GA_ID = import.meta.env.VITE_MEASUREMENT_ID;
// Component to track page views with Google Analytics
export default function AnalyticsTracker() {
  const location = useLocation();
  //
  useEffect(() => {
    if (!window.gtag || !GA_ID) return;

    window.gtag("config", GA_ID, {
      page_path: location.pathname + location.search,
    });
  }, [location]);
}
