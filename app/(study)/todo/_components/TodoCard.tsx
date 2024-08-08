import React from "react";
import { Card, CardContent, CardHeader } from "@/components/card";
import Profile from "@/components/Profile";

import { Input } from "@/components/input";
import { Button } from "@/components/Button";

import CategorySelector from "./CategorySelector";
import TodoItem from "./TodoItem";
import ProgressBar from "./ProgressBar";

export default function TodoCard() {
  return (
    <Card className="overflow-hidden shadow-md dark:border-bg-300">
      <CardHeader className="bg-subbox">
        <Profile imageUrl={"https://github.com/shadcn.png"} name="문휘식" />
      </CardHeader>
      <CardContent className="flex justify-between gap-10 bg-subbox">
        <aside className="flex flex-col gap-3">
          <header className="flex gap-3">
            <CategorySelector />
            <div className="flex gap-3">
              <Input
                type="text"
                placeholder="어떤 걸 할 예정인가요?"
                className="bg-subbg dark:border-outline dark:bg-subbg dark:placeholder:text-[#C1C1C1]"
              />
              <Button
                variant="ghost"
                className="bg-active text-base font-medium text-white hover:bg-[#ff7d27] hover:text-white dark:hover:bg-[#ff7d27]"
              >
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
        <div className="w-[1px] bg-slate-200 dark:bg-outline" />
        <aside className="flex grow items-center justify-center">
          <ProgressBar />
        </aside>
      </CardContent>
    </Card>
  );
}
