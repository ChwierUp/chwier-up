import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

interface ProfileProps {
  imageUrl: string;
  name?: string;
}
export default function Profile({ imageUrl, name }: ProfileProps) {
  return (
    <div className="flex items-center gap-5">
      <Avatar className="h-10 w-10 border-2 border-black dark:border-white">
        <AvatarImage src={imageUrl} alt="@shadcn" />
        <AvatarFallback>프로필</AvatarFallback>
      </Avatar>
      <p className="text-lg font-semibold">{name}</p>
    </div>
  );
}
