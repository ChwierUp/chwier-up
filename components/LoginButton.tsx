import React from "react";
import { signIn } from "@/auth";
import { Button } from "./Button";
import GitHubIcon from "./GithubIcon";

export default function LoginButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <Button type="submit" className="flex items-center gap-2 shadow-md">
        <GitHubIcon className="h-6 w-6" />
        <span className="font-bold">GitHub 로그인</span>
      </Button>
    </form>
  );
}
