"use client";

import React, { MutableRefObject } from "react";
import {
  CircleMinusIcon,
  DownloadIcon,
  SettingsIcon,
  Undo2Icon,
} from "lucide-react";

import { useHover } from "@/hooks/useHover";
import { cn } from "@/lib/utils";
import { useHandleTodo } from "@/hooks/useHandleTodo";

import { Card, CardContent } from "../card";
import { Button } from "../button";
import { Input } from "../input";

import TodoCompleteButton from "./TodoCompleteButton";

import CategorySelector from "./CategorySelector";

export default function TodoItem() {
  const { ref, isHover } = useHover();
  const { isCompleted, isEditing, handleToggleComplete, handleToggleEdit } =
    useHandleTodo();

  return (
    <section
      className="flex items-center justify-between gap-3"
      ref={ref as MutableRefObject<HTMLDivElement>}
    >
      <Card className="flex w-80 max-w-80 grow cursor-pointer flex-row-reverse items-center justify-between shadow-md dark:border-[#616161] dark:bg-[#464650] ">
        <CardContent className="grow p-4">
          {!isEditing ? (
            <div className="flex flex-row-reverse items-center justify-between gap-5">
              <aside className={cn("grow", isCompleted && "line-through")}>
                <h1 className="max-w-60 truncate text-base font-normal">
                  전시회 예매하기
                </h1>
                <p className="text-xs">기타</p>
              </aside>
              <TodoCompleteButton onClick={handleToggleComplete} />
            </div>
          ) : (
            <aside className="flex grow flex-col gap-2">
              <Input
                type="text"
                defaultValue="전시회 예매하기"
                className="dark:border-[#616161] dark:bg-[#464650] dark:placeholder:text-[#C1C1C1]"
              />
              <CategorySelector defaultValue="기타" />
            </aside>
          )}
        </CardContent>
      </Card>
      <aside
        className={cn(
          "flex gap-2 transition-all duration-200",
          !isEditing && "opacity-0",
          isHover && "opacity-100",
        )}
      >
        <Button
          className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-slate-100"
          size="icon"
        >
          {!isEditing ? (
            <CircleMinusIcon className="text-[#FF0505]" />
          ) : (
            <DownloadIcon className="h-5 w-5 text-[#000000]" />
          )}
        </Button>
        <Button
          className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-slate-100"
          size="icon"
          onClick={handleToggleEdit}
        >
          {!isEditing ? (
            <SettingsIcon className="text-[#000000]" />
          ) : (
            <Undo2Icon className="h-5 w-5 text-[#000000]" />
          )}
        </Button>
      </aside>
    </section>
  );
}
