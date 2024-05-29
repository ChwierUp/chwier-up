import React from "react";
import { PlusIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../card";
import Profile from "../profile/Profile";
import { Button } from "../button";
import TodoCard from "./TodoCard";

export default function TodoSection() {
  return (
    <Card className="w-[768px] overflow-hidden shadow-md dark:border-[#616161]">
      <CardHeader className="bg-bg-100 dark:bg-bg-100">
        <CardTitle>2024.04</CardTitle>
        <CardDescription>여기는 캘린더입니다.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5 bg-white pt-6 dark:bg-bg-200">
        <header className="space-y-3">
          <h1 className="text-xl font-semibold">오늘의 참여자</h1>
          <section className="flex">
            <Profile imageUrl={"https://github.com/shadcn.png"} />
            <Profile imageUrl={"https://github.com/shadcn.png"} />
            <Profile imageUrl={"https://github.com/shadcn.png"} />
          </section>
        </header>
        <aside>
          <Button className="w-full space-x-1 rounded-xl bg-bg-100 py-10 font-medium text-text-200 shadow-md hover:bg-bg-200 dark:bg-bg-100 dark:text-text-200 dark:hover:bg-[#21212b]">
            <PlusIcon className="h-4 w-4" />
            <span className="text-sm">스터디 참여하기</span>
          </Button>
        </aside>
        <main>
          <TodoCard />
        </main>
      </CardContent>
    </Card>
  );
}
