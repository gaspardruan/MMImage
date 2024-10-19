import { create } from 'zustand';
import { Section } from '../../typings/interface';

interface NavigationState {
  activeSection: Section;
  setSection: (s: Section) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  activeSection: Section.Explore,
  setSection: (s) => set({ activeSection: s }),
}));
