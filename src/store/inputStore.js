// 🟦 This store keeps the search input value (what user types)

// import from zustand
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export const useInputStore = create(
  devtools(
    persist(
      (set) => ({
        inputValue: "",

        setInputValue: (newValue) => set({ inputValue: newValue }),
      }),
      {
        name: "input-storage",
      }
    )
  )
);
