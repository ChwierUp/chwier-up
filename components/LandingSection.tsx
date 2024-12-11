import React from "react";
import Link from "next/link";

import LandingLogo from "./LandingLogo";
import LoginButton from "./LoginButton";

export default function LandingSection() {
  return (
    <section className="relative flex h-full w-full items-center justify-center">
      <div className="absolute right-0 top-10">
        <LandingLogo />
      </div>
      <div className="flex w-2/3 items-center justify-between">
        <aside className="flex flex-col gap-3">
          <h1 className="text-7xl font-bold">취얼업</h1>
          <h2 className="pl-1 text-sm font-semibold text-active">
            <p>&quot;Cheer up + 취업&quot;</p>
            <p>너의 취업을 응원해</p>
          </h2>
        </aside>
        <aside className="flex flex-col items-center gap-2">
          <LoginButton />
          <Link href="/todo" className="text-xs text-subgray underline">
            비회원으로 둘러보기
          </Link>
        </aside>
      </div>
    </section>
  );
}
