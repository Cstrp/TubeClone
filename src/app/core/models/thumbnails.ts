interface Thumbnails {
  default: Default;
  high: Default;
  medium: Default;
}

export type Default = {
  url: string;
  width: number;
  height: number;
};

export {Thumbnails};
