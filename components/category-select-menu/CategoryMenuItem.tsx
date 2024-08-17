import { Label } from "../label";
import { RadioGroupItem } from "../radio-group";

interface CategoryMenuItem {
  value: string;
  id: string;
  labelText: string;
}

export default function CategoryMenuItem({
  value,
  id,
  labelText,
}: CategoryMenuItem) {
  return (
    <div className="relative m-0">
      <RadioGroupItem
        className="peer absolute opacity-0"
        value={value}
        id={id}
      ></RadioGroupItem>
      <Label
        htmlFor={value}
        className="cursor-pointer font-medium text-[#B7B7B7] peer-aria-checked:text-white"
      >
        {labelText}
      </Label>
    </div>
  );
}
