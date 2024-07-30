import React from "react";
import { Label } from "./label";
import { Input } from "./input";

export default function ArticleLinkInput() {
  return (
    <div className="space-y-2">
      <Label htmlFor="link">링크</Label>
      <Input
        id="link"
        placeholder="링크를 삽입해 주세요."
        className="dark:border-outline dark:bg-box dark:placeholder:text-subgray"
      />
    </div>
  );
}
