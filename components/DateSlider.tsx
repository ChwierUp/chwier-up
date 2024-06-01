import React, { useEffect, useMemo, useRef, useState } from "react";
import { getDaysInMonth } from "date-fns";
import {
  KeenSliderOptions,
  KeenSliderPlugin,
  useKeenSlider,
} from "keen-slider/react";
import { cn } from "@/lib/utils";

import { CalendarDate } from "@/types/calendarDate";
import { Button } from "./button";

import "keen-slider/keen-slider.min.css";

interface DateSliderProps {
  currentDate: CalendarDate;
  onChangeDate: (day: number) => void;
}

export default function DateSlider({
  currentDate,
  onChangeDate,
}: DateSliderProps) {
  const {
    year: currentYear,
    month: currentMonth,
    day: currentDay,
  } = currentDate;
  const [daysInMonth, setDaysInMonth] = useState<number>(() =>
    getDaysInMonth(new Date(currentYear, currentMonth)),
  );

  const sliderItem = useMemo(
    () => Array.from({ length: daysInMonth }, (_, index) => index + 1),
    [daysInMonth],
  );

  const options = useRef<KeenSliderOptions>({
    slides: {
      number: daysInMonth,
      perView: "auto",
      spacing: 10,
    },
    loop: false,
    mode: "free-snap",
    initial: currentDay - 1,
  });

  const [sliderRef] = useKeenSlider<HTMLDivElement>(options.current, [
    SlideControlPlugin,
  ]);

  useEffect(() => {
    setDaysInMonth(getDaysInMonth(new Date(currentYear, currentMonth)));
  }, [currentYear, currentMonth]);

  return (
    <div className="keen-slider" ref={sliderRef}>
      {sliderItem.map((day) => (
        <Button
          key={day}
          variant="ghost"
          className={cn(
            "keen-slider__slide w-8 max-w-8 rounded-full p-5 text-lg font-black text-text-200",
            currentDay === day && "bg-primary-100 text-[#fff]",
          )}
          onClick={() => onChangeDate(day)}
        >
          <span>{day}</span>
        </Button>
      ))}
    </div>
  );
}

const SlideControlPlugin: KeenSliderPlugin = (slider) => {
  let touchTimeout: ReturnType<typeof setTimeout>;
  let position: {
    x: number;
    y: number;
  };
  let wheelActive: boolean;

  const dispatch = (e: WheelEvent, name: string) => {
    position.x -= e.deltaX;
    position.y -= e.deltaY;
    slider.container.dispatchEvent(
      new CustomEvent(name, {
        detail: {
          x: position.x,
          y: position.y,
        },
      }),
    );
  };

  const wheelStart = (e: WheelEvent) => {
    position = {
      x: e.pageX,
      y: e.pageY,
    };
    dispatch(e, "ksDragStart");
  };

  const wheel = (e: WheelEvent) => {
    dispatch(e, "ksDrag");
  };

  const wheelEnd = (e: WheelEvent) => {
    dispatch(e, "ksDragEnd");
  };

  const eventWheel = (e: WheelEvent) => {
    e.preventDefault();
    if (!wheelActive) {
      wheelStart(e);
      wheelActive = true;
    }
    wheel(e);
    clearTimeout(touchTimeout);
    touchTimeout = setTimeout(() => {
      wheelActive = false;
      wheelEnd(e);
    }, 50);
  };

  slider.on("created", () => {
    slider.container.addEventListener("wheel", eventWheel, {
      passive: false,
    });
  });
};
