import { ImageSuit } from './../typings/interface';

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

export function getImages(suit: ImageSuit) {
  return Array.from({ length: suit.count }, async (_, i) => {
    const url = `${BASE_URL}${suit.prefix}/${getYearFromId(suit.id)}/${
      suit.id
    }/${suit.id * 100 + i + 1}.jpg`;
    const img = new Image();
    img.src = url;
    await img.decode();
    return img;
  });
}

export function hitBottom(el: HTMLDivElement) {
  return el.scrollTop === el.scrollHeight - el.offsetHeight;
}