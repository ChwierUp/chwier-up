"use client";

import { useCallback, useState } from "react";
import { RadioGroup } from "../radio-group";
import CategoryMenuItem from "./CategoryMenuItem";

export default function CategorySelectMenu() {
  const [category, setCategory] = useState("develop");
  const handleValueChange = useCallback((value: string) => {
    setCategory(value);
  }, []);

  return (
    <>
      <p className="mb-3 text-xl font-bold">✍🏻 카테고리</p>
      <RadioGroup
        onValueChange={handleValueChange}
        defaultValue={category}
        className="flex w-fit gap-6 rounded-md px-6 py-3 dark:bg-[#333340]"
      >
        <CategoryMenuItem value="develop" id="develop" labelText="개발" />
        <CategoryMenuItem
          value="selfDevelop"
          id="selfDevelop"
          labelText="자기계발"
        />
        <CategoryMenuItem
          value="interview"
          id="interview"
          labelText="면접/이력서"
        />
        <CategoryMenuItem value="etc" id="etc" labelText="기타" />
      </RadioGroup>
    </>
  );
}
