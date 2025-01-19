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
  myWork: {
    root: {
      path: "/my-work",
      label: "My Work",
    },
  },
};

export default PathConstants;
