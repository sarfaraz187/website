type TPath = {
  [key: string]: {
    path: string;
    label: TIntlMsgId;
  };
};

type TPathNames = "root" | "about";

// This was used in voyage plan
type TChildPaths = {
  [key in TPathNames]: {
    path: string;
    relativePath: string;
    label: TIntlMsgId;
  };
};

export type TPathConstants = {
  home: TPath;
  about: TChildPaths;
  myWork: TPath;
};
