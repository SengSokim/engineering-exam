"use client";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";

export default function CalendarContent() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="w-full flex flex-col lg:flex-row lg:gap-4">
      <div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md shadow-sm w-full lg:w-lg h-[400px] lg:h-full"
          captionLayout="dropdown"
        />
      </div>
      <div className="my-3">
        <p >
          Please select an available date from the calendar or type in the date
          below
        </p>
        <Input className="bg-zinc-100" placeholder="Date" defaultValue={date?.toDateString()} />
      </div>
    </div>
  );
}
