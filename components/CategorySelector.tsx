import React from "react";
import { Label } from "./label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

const CATEGORY_LIST = ["개발", "자기계발", "면접/이력서", "기타"];

export default function CategorySelector() {
  return (
    <div className="space-y-2">
      <Label htmlFor="category">카테고리</Label>
      <Select>
        <SelectTrigger className="w-24 dark:border-outline dark:bg-box">
          <SelectValue id="category" placeholder="카테고리" />
        </SelectTrigger>
        <SelectContent className="dark:border-outline dark:bg-box">
          {CATEGORY_LIST.map((category) => (
            <SelectItem
              key={category}
              value={category}
              className="dark:focus:bg-[#313138]"
            >
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
