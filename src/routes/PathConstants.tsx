import { TPathConstants } from "@src/routes/routes.types";

const PathConstants: TPathConstants = {
  home: {
    root: {
      path: "/",
      label: "home",
    },
  },
  about: {
    root: {
      path: "/about",
      relativePath: "/about",
      label: "about",
    },
    about: {
      path: "/about",
      relativePath: "/about1",
      label: "about",
    },
  },
  resources: {
    root: {
      path: "/resources",
      label: "resources",
    },
  },
};

export default PathConstants;
