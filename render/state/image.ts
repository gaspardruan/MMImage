import { create } from 'zustand';
import { persist, PersistStorage } from 'zustand/middleware';
import superjson from 'superjson';

import { ImageSuit, BeautySuit, ImageLiked } from '../../typings/interface';
import { getId } from '../utils';

interface ImageState {
  latest: ImageSuit[];
  collection: ImageLiked;
  beauty: BeautySuit;
  lastUpdateTime: number;
  setData: (latest: ImageSuit[], beauty: BeautySuit) => void;
  setLatest: (latest: ImageSuit[]) => void;
  setBeauty: (beauty: BeautySuit) => void;
  setLastUpdateTime: (lastUpdateTime: number) => void;
  like: (suit: ImageSuit) => void;
  dislike: (suit: ImageSuit) => void;
}

const storage: PersistStorage<ImageState> = {
  getItem: (name) => {
    const str = localStorage.getItem(name);
    if (!str) return null;
    return superjson.parse(str);
  },
  setItem: (name, value) => {
    localStorage.setItem(name, superjson.stringify(value));
  },
  removeItem: (name) => localStorage.removeItem(name),
};

export const useImageState = create<ImageState>()(
  persist(
    (set) => ({
      latest: [],
      collection: new Map(),
      beauty: { names: {}, images: {} },
      lastUpdateTime: 0,
      setData: (latest, beauty) => set({ latest, beauty }),
      setLatest: (latest) => set({ latest }),
      setBeauty: (beauty) => set({ beauty }),
      setLastUpdateTime: (lastUpdateTime) => set({ lastUpdateTime }),
      like: (suit) =>
        set((prev) => ({
          collection: new Map(prev.collection).set(getId(suit), suit),
        })),
      dislike: (suit) =>
        set((prev) => {
          const id = getId(suit);
          if (prev.collection.has(id)) {
            const map = new Map(prev.collection);
            map.delete(id);
            return { collection: map };
          }
          return prev;
        }),
    }),
    {
      name: 'image-storage',
      storage,
    },
  ),
);
