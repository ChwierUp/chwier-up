import React from "react";
import { Card, CardContent, CardHeader } from "../card";
import Profile from "../profile/Profile";

import { Input } from "../input";
import { Button } from "../button";

import CategorySelector from "./CategorySelector";
import TodoItem from "./TodoItem";
import ProgressBar from "./ProgressBar";

export default function TodoCard() {
  return (
    <Card className="overflow-hidden shadow-md dark:border-bg-300">
      <CardHeader className="bg-white dark:bg-bg-100">
        <Profile imageUrl={"https://github.com/shadcn.png"} name="문휘식" />
      </CardHeader>
      <CardContent className="flex justify-between gap-10 bg-white dark:bg-bg-100">
        <aside className="flex flex-col gap-3">
          <header className="flex gap-3">
            <CategorySelector />
            <div className="flex gap-3">
              <Input
                type="text"
                placeholder="어떤 걸 할 예정인가요?"
                className="dark:border-[#616161] dark:bg-[#464650] dark:placeholder:text-[#C1C1C1]"
              />
              <Button className="bg-primary text-base font-medium dark:bg-primary-100 dark:text-white dark:hover:bg-primary-200">
                추가
              </Button>
            </div>
          </header>
          <main className="flex flex-col gap-2">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
          </main>
        </aside>
        <div className="w-[1px] bg-slate-200 dark:bg-[#616161]" />
        <aside className="flex grow items-center justify-center">
          <ProgressBar />
        </aside>
      </CardContent>
    </Card>
  );
}
