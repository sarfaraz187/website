import Footer from "@src/app/components/Footer";
import Header from "@src/app/components/Header";
import ScrollToTop from "@src/hooks/useScrollToTop";
import { Outlet } from "react-router";

const RootLayout = () => (
  <>
    <ScrollToTop />
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default RootLayout;
