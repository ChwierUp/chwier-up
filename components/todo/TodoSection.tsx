import React from "react";
import { PlusIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "../card";
import Profile from "../Profile";
import { Button } from "../Button";
import { DatePicker } from "../DatePicker";
import TodoCard from "./TodoCard";

export default function TodoSection() {
  return (
    <Card className="dark:border-outline w-[768px] overflow-hidden shadow-md">
      <CardHeader className="bg-subbox">
        <DatePicker />
      </CardHeader>
      <CardContent className="bg-subbg flex flex-col gap-5 pt-5">
        <header className="space-y-3">
          <h1 className="text-xl font-semibold">오늘의 참여자</h1>
          <section className="flex">
            <Profile imageUrl={"https://github.com/shadcn.png"} />
            <Profile imageUrl={"https://github.com/shadcn.png"} />
            <Profile imageUrl={"https://github.com/shadcn.png"} />
          </section>
        </header>
        <aside>
          <Button
            variant="ghost"
            className="bg-subbox hover:bg-subbox/80 dark:hover:bg-subbox/80 w-full space-x-1 rounded-xl py-10 font-medium text-text-200 shadow-md dark:text-text-200"
          >
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
