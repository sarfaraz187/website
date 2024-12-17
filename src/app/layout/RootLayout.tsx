import { Outlet } from "react-router";

const RootLayout = () => (
  <>
    <div>Header</div>
    <Outlet />
    <div>Footer</div>
  </>
);

export default RootLayout;
