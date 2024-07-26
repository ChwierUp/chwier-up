import { Fragment, ReactNode } from "react";
import Header from "@/components/Header";

export default function StudyLayout({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
}
