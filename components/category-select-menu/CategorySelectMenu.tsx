import { RadioGroup } from "../radio-group";
import CategoryMenuItem from "./CategoryMenuItem";

export default function CategorySelectMenu({
  category,
  handleValueChange,
}: {
  category: string;
  handleValueChange: (value: string) => void;
}) {
  return (
    <>
      <p className="mb-3 text-xl font-bold">✍🏻 카테고리</p>
      <RadioGroup
        onValueChange={handleValueChange}
        defaultValue={category === "" ? "all" : category}
        className="flex w-fit gap-6 rounded-md px-6 py-3 dark:bg-[#333340]"
      >
        <CategoryMenuItem value="all" id="all" labelText="전체" />
        <CategoryMenuItem value="develop" id="develop" labelText="개발" />
        <CategoryMenuItem
          value="self-development"
          id="self-development"
          labelText="자기계발"
        />
        <CategoryMenuItem
          value="recruitment"
          id="recruitment"
          labelText="면접/이력서"
        />
        <CategoryMenuItem value="etc" id="etc" labelText="기타" />
      </RadioGroup>
    </>
  );
}
