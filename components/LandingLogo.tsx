"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import LandingLight from "@/public/landing-light.png";
import LandingDark from "@/public/landing-dark.png";

export default function LandingLogo() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Image
      src={theme === "light" ? LandingLight : LandingDark}
      alt="landing-image"
      width={1200}
      height={500}
    />
  );
}
