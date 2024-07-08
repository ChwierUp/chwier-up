import React from "react";
import { PlusIcon } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Button } from "./button";
import CategorySelector from "./CategorySelector";
import ArticleLinkInput from "./ArticleLinkInput";

export default function ShareArticleModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="icon"
          className="rounded-full shadow-lg dark:bg-bg-200 dark:hover:bg-bg-300"
        >
          <PlusIcon className="dark:text-white" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-96 rounded-3xl border-none shadow-lg dark:bg-bg-100 sm:rounded-3xl">
        <DialogHeader>
          <DialogTitle className="font-bold">아티클 공유하기</DialogTitle>
        </DialogHeader>
        <section className="flex flex-col gap-5">
          <ArticleLinkInput />
          <CategorySelector />
        </section>
        <DialogFooter>
          <Button
            type="submit"
            className="dark:bg-primary-100 dark:text-white dark:hover:bg-primary-200"
          >
            등록
          </Button>
          <DialogClose asChild>
            <Button type="button">취소</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
