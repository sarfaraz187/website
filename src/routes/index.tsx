import RootLayout from "@src/app/layout/RootLayout";
import About from "@src/app/pages/About";
import Home from "@src/app/pages/Home";
import Resources from "@src/app/pages/Resources";
import PathConstants from "@src/routes/PathConstants";
import { createBrowserRouter, RouteObject } from "react-router";

// Not needed keeping for reference
//   {
//     path: PathConstants.home.root.path,
//     element: <Navigate to={PathConstants.home.root.path} replace />,
//   },

const routes: RouteObject[] = [
  {
    index: true,
    path: PathConstants.home.root.path,
    element: <Home />,
  },
  {
    index: true,
    path: PathConstants.about.root.path,
    element: <About />,
  },
  {
    index: true,
    path: PathConstants.resources.root.path,
    element: <Resources />,
  },
];

const router = createBrowserRouter([
  {
    path: PathConstants.home.root.path,
    element: <RootLayout />,
    children: routes,
  },
]);

export default router;
