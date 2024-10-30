import { persist } from 'zustand/middleware';
import { create } from 'zustand';

interface ControlState {
  interval: number;
  showThumbnail: boolean;
  setInterval: (inverval: number) => void;
  setShowThumbnail: (showThumbnail: boolean) => void;
}

export const useControlState = create<ControlState>()(
  persist(
    (set) => ({
      interval: 3,
      showThumbnail: true,
      setInterval: (interval) => set({ interval }),
      setShowThumbnail: (showThumbnail) => set({ showThumbnail }),
    }),
    {
      name: 'control-storage',
    },
  ),
);
