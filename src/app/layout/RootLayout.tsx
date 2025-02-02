import Footer from "@src/app/components/Footer";
import Header from "@src/app/components/Header";
import NavigationButton from "@src/app/components/ScrollNavigation";
import ScrollToTop from "@src/hooks/useScrollToTop";
import AnalyticsTracker from "@src/routes/AnalyticsTracker";
import { Outlet } from "react-router";

const RootLayout = () => (
  <>
    <AnalyticsTracker />
    <NavigationButton />
    <ScrollToTop />
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default RootLayout;
