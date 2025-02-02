import { useEffect } from "react";
import ReactGA from "react-ga4";
import { useLocation } from "react-router";

const isProduction = window.location.hostname !== "localhost";

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (isProduction) {
      ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID);
      console.log("GA initialized in production environment");
    } else {
      console.log("GA disabled in development environment");
    }
  }, []);

  useEffect(() => {
    if (isProduction)
      ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null;
};

export default AnalyticsTracker;
