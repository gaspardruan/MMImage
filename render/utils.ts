import { ImageSuit, ImageShow } from './../typings/interface';

export const BASE_URL = 'http://newxiuren.com/uploadfiles/';

export function getYearFromId(id: number): string {
  // 获取数字前4位
  return String(id).slice(0, 4);
}

export function getCoverURL(id: number, prefix: string): string {
  return `${BASE_URL}${prefix}/${getYearFromId(id)}/${id}/cover.jpg`;
}

export function getImageURLs(suit: ImageSuit) {
  return Array.from(
    { length: suit.count },
    (_, i) =>
      `${BASE_URL}${suit.prefix}/${getYearFromId(suit.id)}/${suit.id}/${
        suit.id * 100 + i + 1
      }.jpg`,
  );
}

export function getImages(suit: ImageSuit): ImageShow[] {
  return Array.from({ length: suit.count }, (_, i) => {
    const url = `${BASE_URL}${suit.prefix}/${getYearFromId(suit.id)}/${
      suit.id
    }/${suit.id * 100 + i + 1}.jpg`;

    return {
      original: url,
      thumbnail: url,
    };
  });
}

export function hitBottom(el: HTMLDivElement) {
  // return el.scrollTop === el.scrollHeight - el.offsetHeight;
  // fix: 1 rounded value possibly leads to 0.5px difference, so use 2px
  return Math.abs(el.scrollHeight - el.scrollTop - el.offsetHeight) <= 2;
}

export function getId(suit: ImageSuit) {
  return `${suit.prefix}-${suit.id}`;
}
