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
          className="rounded-full bg-subbg shadow-lg hover:bg-slate-100 dark:bg-subbg dark:hover:bg-subbg/95"
        >
          <PlusIcon className="text-black dark:text-white" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-96 rounded-3xl border-none bg-subbg shadow-lg dark:bg-subbg sm:rounded-3xl">
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
            className="bg-active hover:bg-active dark:bg-active dark:text-white dark:hover:bg-active"
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
