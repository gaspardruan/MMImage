export enum Section {
  Explore = '探索',
  Beauty = '模特',
  Collection = '收藏',
  Settings = '设置',
}

export const LIST_STEP = 24;

export interface ImageSuit {
  id: number;
  name: string;
  count: number;
  prefix: string;
  time: Date;
}

export interface ImageCollection {
  num: number;
  images: ImageSuit[];
}

export interface BeautySuit {
  names: Record<string, string[]>;
  images: Record<string, ImageCollection>;
}

export interface ImageAndBeauty {
  latest: ImageSuit[];
  beauty: BeautySuit;
}

export interface ImageShow {
  original: string;
  thumbnail: string;
}
