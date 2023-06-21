export * from "./component";

export type TTheme = "black" | "emerald";

export interface ISessionStore {
  theme: TTheme;
  setTheme: (s: TTheme) => void;
}
