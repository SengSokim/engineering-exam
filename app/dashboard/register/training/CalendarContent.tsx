"use client";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";

export default function CalendarContent() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="w-full lg:flex gap-4">
      <div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md shadow-sm w-full lg:w-lg"
          captionLayout="dropdown"
        />
      </div>
      <div>
        <p className="my-3">
          Please select an available date from the calendar or type in the date
          below
        </p>
        <Input className="bg-zinc-100" placeholder="Date" defaultValue={date?.toDateString()} />
      </div>
    </div>
  );
}
