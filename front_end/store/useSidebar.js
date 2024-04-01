import { create } from "zustand";

const useSideBar = create((set) => ({
  sideBar: "user",
  setSideBar: (sideBar) => set({ sideBar }),
}));

export { useSideBar };
