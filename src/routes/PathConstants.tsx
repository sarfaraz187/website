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
  education: {
    root: {
      path: "/education",
      label: "Hof University of Applied Sciences",
    },
    hof: {
      path: "/education/hof-university",
      label: "Hof University of Applied Sciences",
    },
    aiht: {
      path: "/education/anand-institute",
      label: "Anand Institute of Higher Technology",
    },
  },
  experience: {
    root: {
      path: "/experience",
      label: "Experience",
    },
  },
};

export default PathConstants;
