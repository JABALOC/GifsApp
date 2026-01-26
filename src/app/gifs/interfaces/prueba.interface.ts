export interface KiplyResponse {
  result: boolean;
  data:   Data;
}

export interface Data {
  data:         Datum[];
  current_page: number;
  per_page:     number;
  has_next:     boolean;
  meta:         Meta;
}

export interface Datum {
  id:           number;
  slug:         string;
  title:        string;
  file:         File;
  tags:         any[];
  type:         Type;
  blur_preview: string;
}

export interface File {
  hd: { [key: string]: HD };
  md: { [key: string]: HD };
  sm: { [key: string]: HD };
  xs: { [key: string]: HD };
}

export interface HD {
  url:    string;
  width:  number;
  height: number;
  size:   number;
}

export enum Type {
  GIF = "gif",
}

export interface Meta {
  item_min_width:        number;
  ad_max_resize_percent: number;
}
