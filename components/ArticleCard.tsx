import React from "react";
import { format } from "date-fns";

import { Card, CardContent, CardFooter, CardHeader } from "./card";
import { Skeleton } from "./skeleton";
import { Avatar, AvatarImage } from "./avatar";
import { Separator } from "./separator";

interface ArticleCardProps {
  profileImage: string;
  userName: string;
  createdAt: Date;
  title: string;
  content: string;
  category: string;
}

export default function ArticleCard({
  profileImage,
  userName,
  createdAt,
  title,
  content,
  category,
}: ArticleCardProps) {
  return (
    <Card className="w-72 overflow-hidden rounded-2xl border-none">
      <CardHeader className="bg-mainbg p-0">
        <Skeleton className="aspect-video h-40 w-full rounded-2xl dark:bg-[#C4C4C4]" />
      </CardHeader>
      <CardContent className="flex flex-col gap-4 bg-mainbg p-0 py-5">
        <section className="flex flex-col gap-3">
          <header className="flex items-center gap-3">
            <h1 className="flex items-center gap-3">
              <Avatar className="h-7 w-7 border border-black dark:border-white">
                <AvatarImage src={profileImage} alt="profile" />
              </Avatar>
              <span className="text-base font-extralight">{userName}</span>
            </h1>
            <Separator orientation="vertical" className="h-4 bg-subgray" />
            <aside className="text-xs">{format(createdAt, "yyyy.LL.dd")}</aside>
          </header>
          <main className="w-full space-y-2">
            <h1 className="truncate text-lg">{title}</h1>
            <h2 className="truncate text-xs text-subgray">{content}</h2>
          </main>
        </section>
      </CardContent>
      <CardFooter className="flex-row-reverse bg-mainbg px-0 text-xs text-active">
        {category}
      </CardFooter>
    </Card>
  );
}
