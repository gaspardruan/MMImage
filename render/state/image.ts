import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { ImageSuit, BeautySuit } from '../../typings/interface';

interface ImageState {
  latest: ImageSuit[];
  collection: ImageSuit[];
  beauty: BeautySuit;
  lastUpdateTime: number;
  setData: (latest: ImageSuit[], beauty: BeautySuit) => void;
  setLatest: (latest: ImageSuit[]) => void;
  setBeauty: (beauty: BeautySuit) => void;
  setLastUpdateTime: (lastUpdateTime: number) => void;
}

export const useImageState = create<ImageState>()(
  persist(
    (set) => ({
      latest: [],
      collection: [],
      beauty: { names: {}, images: {} },
      lastUpdateTime: 0,
      setData: (latest, beauty) => set({ latest, beauty }),
      setLatest: (latest) => set({ latest }),
      setBeauty: (beauty) => set({ beauty }),
      setLastUpdateTime: (lastUpdateTime) => set({ lastUpdateTime }),
    }),
    {
      name: 'image-storage',
    },
  ),
);
