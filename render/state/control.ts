import { persist } from 'zustand/middleware';
import { create } from 'zustand';

interface ControlState {
  interval: number;
  setInterval: (inverval: number) => void;
}

export const useControlState = create<ControlState>()(
  persist(
    (set) => ({
      interval: 3,
      setInterval: (interval) => set({ interval }),
    }),
    {
      name: 'control-storage',
    },
  ),
);
