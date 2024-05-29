"use client";

import { useState } from "react";
import { format } from "date-fns";
import { ChevronDown as ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/button";
import { Calendar } from "@/components/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover";

import { DateForCalendar } from "@/types/dateForCalendar";
import { cn } from "@/lib/utils";
import DateSlider from "./DateSlider";

export function DatePicker() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const dateForSlider: DateForCalendar = {
    year: date!.getFullYear(),
    month: date!.getMonth(),
    day: date!.getDate(),
  };

  const handleChangeDate = (day: number) => {
    const year = date!.getFullYear();
    const month = date!.getMonth();

    setDate(new Date(year, month, day));
  };

  return (
    <main className="flex h-full flex-col gap-3">
      <header className="flex flex-col justify-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-fit items-center justify-start rounded-xl border-none text-left text-3xl font-semibold",
                !date && "text-muted-foreground",
              )}
            >
              {date ? format(date, "yyyy.MM") : <span>Pick a date</span>}
              <ChevronDownIcon className="ml-2 h-8 w-6 font-semibold" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <div className="px-4 text-lg text-[#808080]">
          <p>{date ? format(date, "MMMM dd, yyyy") : "No date selected"}</p>
        </div>
      </header>
      <section className="relative mx-4">
        <DateSlider
          currentDate={dateForSlider}
          onChangeDate={handleChangeDate}
        />
      </section>
    </main>
  );
}
