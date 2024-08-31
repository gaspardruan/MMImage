import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DefaultThemes } from '../../typings/themes-defaults';

interface GlobalState {
  theme: string;
  isUsingSystemTheme: boolean;
  setTheme: (theme: string) => void;
  setIsUsingSystemTheme: (isUsingSystemTheme: boolean) => void;
}

export const useGlobalStore = create<GlobalState>()(
  persist(
    (set) => ({
      theme: DefaultThemes.DARK,
      isUsingSystemTheme: true,
      setTheme: (theme) => set({ theme }),
      setIsUsingSystemTheme: (isUsingSystemTheme) =>
        set({ isUsingSystemTheme }),
    }),
    {
      name: 'global-storage',
    },
  ),
);
