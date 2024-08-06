import React from "react";

import { CircleCheckIcon } from "lucide-react";
import { Button } from "../button";

interface TodoButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function TodoCompleteButton({ ...props }: TodoButtonProps) {
  return (
    <Button
      size="icon"
      className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-slate-100"
      {...props}
    >
      <CircleCheckIcon className="text-[#26D963]" />
    </Button>
  );
}
