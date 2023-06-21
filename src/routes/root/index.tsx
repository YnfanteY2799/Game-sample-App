import { type ReactElement } from "react";
import { PageWrapper } from "@/components";
import { useSessionStore } from "@/store";

export default function HomePage(): ReactElement {
  const { theme } = useSessionStore((s) => s);

  return <PageWrapper theme={theme}>/</PageWrapper>;
}
