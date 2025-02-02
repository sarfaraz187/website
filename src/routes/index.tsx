import RootLayout from "@src/app/layout/RootLayout";
import About from "@src/app/pages/About";
import Experience from "@src/app/pages/Experience";
import Home from "@src/app/pages/Home";
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
    path: PathConstants.experience.root.path,
    element: <Experience />,
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
