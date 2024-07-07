"use client";

import { Switch } from "../switch";

interface MyArticleSwitchProps {
  onCheckedChange?: (checked: boolean) => void;
}

export default function MyArticleSwitch({
  onCheckedChange,
}: MyArticleSwitchProps) {
  return (
    <div className="flex gap-2">
      <Switch onCheckedChange={onCheckedChange} />
      <p>내 글만 보기</p>
    </div>
  );
}
