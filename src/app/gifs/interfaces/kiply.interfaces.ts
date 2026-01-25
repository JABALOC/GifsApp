export interface KlipyGif {
  title: string;
  url: string;
}

export interface KlipyResponse {
  data: {
    data: Array<{
      title: string;
      file: {
        md: {
          gif: { url: string };
        };
      };
    }>;
  };
}
