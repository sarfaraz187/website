import Footer from "@src/app/components/Footer";
import Header from "@src/app/components/Header";
import { Outlet } from "react-router";

const RootLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default RootLayout;
