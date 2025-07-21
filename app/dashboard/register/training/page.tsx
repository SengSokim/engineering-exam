"use client";
import { Calendar } from '@/components/ui/calendar'
import { useState } from 'react'
import { Input } from '@/components/ui/input'

export default function registerTraining() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="flex flex-col lg:flex-row m-4 gap-4">
      <div className="w-full lg:w-lg bg-zinc-100 text-black p-4 rounded">
        <div className="mt-5">
          <h4 className="text-2xl font-bold text-center">Exam Schedule</h4>
          <div className="my-5">
            <h6 className="font-bold">Date</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ut
              fugiat rerum doloremque assumenda dicta repellat temporibus
              cupiditate odio quos.
            </p>
          </div>
          <div className="my-5">
            <h6 className="font-bold">Location</h6>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
              tempore blanditiis repellendus nisi in soluta maiores perferendis
              porro molestiae similique?
            </p>
          </div>
          <div className="my-5">
            <h6 className="font-bold">AAET Secretariat</h6>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-4">
        <div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md shadow-sm w-lg"
            captionLayout="dropdown"
          />
        </div>
        <div>
          <p className="my-3">Please select an available date from the calendar or type in the date below</p>
          <Input className="bg-zinc-100" placeholder="Date" />
        </div>
      </div>
    </div>
  );
}
