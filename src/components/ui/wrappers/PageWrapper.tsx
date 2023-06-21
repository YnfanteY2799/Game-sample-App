import { type ReactElement } from "react";
import { Footer, Navbar } from "../common";
import type { WrapperProps } from "@/types";

export default function PageWrapper({ children, theme }: WrapperProps): ReactElement {
  return (
    <div className="flex flex-col min-h-screen" data-theme={theme}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
