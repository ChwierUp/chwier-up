"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "@/components/Button";
import GitHubIcon from "@/components/GithubIcon";
import LandingLight from "@/public/landing-light.png";
import LandingDark from "@/public/landing-dark.png";

export default function LandingSection() {
  const { theme } = useTheme();

  return (
    <>
      <div className="absolute right-0 top-10">
        <Image
          src={theme === "light" ? LandingLight : LandingDark}
          alt="landing-image"
          width={1200}
          height={500}
        />
      </div>
      <div className="flex w-2/3 items-center justify-between">
        <aside className="flex flex-col gap-3">
          <h1 className="text-7xl font-bold">취얼업</h1>
          <h2 className="text-sm font-semibold text-primary-100">
            <p>&quot;Cheer up + 취업&quot;</p>
            <p>너의 취업을 응원해</p>
          </h2>
        </aside>
        <aside>
          <Button className="flex items-center gap-2 shadow-md">
            <GitHubIcon className="h-6 w-6" />
            <span className="font-bold">GitHub 로그인</span>
          </Button>
        </aside>
      </div>
    </>
  );
}
