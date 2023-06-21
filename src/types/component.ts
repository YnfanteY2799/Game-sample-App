import type { ReactNode } from "react";
import type { TTheme } from "./index";

export interface WrapperProps {
  children?: ReactNode;
  theme?: TTheme;
}

export interface GProps {
  theme?: TTheme;
}
