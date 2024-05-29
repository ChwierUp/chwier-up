import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";

interface CategorySelectorProps {
  defaultValue?: string;
}

export default function CategorySelector({
  defaultValue,
}: CategorySelectorProps) {
  return (
    <Select defaultValue={defaultValue}>
      <SelectTrigger className="w-28 dark:border-[#616161] dark:bg-[#464650]">
        <SelectValue placeholder="카테고리" />
      </SelectTrigger>
      <SelectContent className="dark:border-[#616161] dark:bg-[#464650]">
        <SelectItem value="개발">개발</SelectItem>
        <SelectItem value="자기계발">자기계발</SelectItem>
        <SelectItem value="스터디">스터디</SelectItem>
        <SelectItem value="면접/이력서">면접/이력서</SelectItem>
        <SelectItem value="기타">기타</SelectItem>
      </SelectContent>
    </Select>
  );
}
