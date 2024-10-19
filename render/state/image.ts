import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { ImageSuit, BeautyList } from '../../typings/interface';

interface ImageState {
  latest: ImageSuit[];
  beauty: BeautyList;
  lastUpdateTime: number;
  setData: (latest: ImageSuit[], beauty: BeautyList) => void;
  setLatest: (latest: ImageSuit[]) => void;
  setBeauty: (beauty: BeautyList) => void;
  setLastUpdateTime: (lastUpdateTime: number) => void;
}

export const useImageState = create<ImageState>()(
  persist(
    (set) => ({
      latest: [],
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
