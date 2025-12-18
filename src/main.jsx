import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import Router from "./Router.jsx";
// import AnalyticsTracker from "./lib/utils/AnalyticsTracker.jsx";
//
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <AnalyticsTracker /> */}
      <Router />
    </BrowserRouter>
  </StrictMode>
);
