import { create } from "zustand";

export const useLightStore = create((set) => ({
  position: { x: 5, y: 5, z: 5 },

  setPosition: (newPos) => set((state) => ({
    position: { ...state.position, ...newPos},
  })),
}))
