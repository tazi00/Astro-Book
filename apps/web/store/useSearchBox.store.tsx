import { create } from "zustand";

type SearchBoxState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

export const useSearchBoxStore = create<SearchBoxState>((set: any) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () =>
    set((state: any) => ({
      isOpen: !state.isOpen,
    })),
}));
