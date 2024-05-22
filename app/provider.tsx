"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

interface Props {
  children: React.ReactNode;
}
export default function Provider({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider attribute="class" defaultTheme="system">
        {children}
      </NextThemesProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}
