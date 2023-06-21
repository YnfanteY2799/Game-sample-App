import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { ISessionStore, TTheme } from "@/types";

export const useSessionStore = create(
  persist<ISessionStore>(
    (set) => ({
      theme: "emerald",
      setTheme: (s: TTheme) => set((x) => ({ ...x, theme: s })),
    }),
    { name: "sessionState" }
  )
);
