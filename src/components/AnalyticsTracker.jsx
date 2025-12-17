import { useEffect } from "react";
import { useLocation } from "react-router";
const MEASUREMENT_ID = import.meta.env.VITE_MEASUREMENT_ID;
//
export default function AnalyticsTracker() {
  const location = useLocation();
  //
  useEffect(() => {
    window.gtag("config", MEASUREMENT_ID, {
      page_path: location.pathname,
    });
  }, [location]);
  //
  return null;
}
