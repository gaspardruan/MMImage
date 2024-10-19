export enum Section {
  Explore = '探索',
  Beauty = '模特',
  Collection = '收藏',
  Settings = '设置',
}

export interface ImageSuit {
  id: number;
  name: string;
  count: number;
  prefix: string;
  time: Date;
}

export interface ImageSuitSortByName {
  [key: string]: { images: ImageSuit[]; num: number };
}

export interface NameList {
  [key: string]: string[];
}

export interface BeautyList {
  names: NameList;
  images: ImageSuitSortByName;
}

export interface ImageAndBeauty {
  latest: ImageSuit[];
  beauty: BeautyList;
}
