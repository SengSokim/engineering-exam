import type { Metadata } from 'next'
import { Button } from "@/components/ui/button";
export const metadata: Metadata = {
  title: 'History',
}

export default function history() {
  return (
    <div className="flex flex-col lg:flex-row m-4 gap-4">
      <div className="w-full lg:w-lg bg-zinc-100 text-black p-4 rounded">
        <div className="mt-5">
          <h4 className="text-2xl font-bold text-center">
            Account Information
          </h4>
          <div className="my-5">
            <h6 className="font-bold">USERNAME</h6>
            <p>example@user</p>
          </div>
          <div className="my-5">
            <h6 className="font-bold">NAME</h6>
            <p>John ode</p>
          </div>
          <div className="my-5">
            <h6 className="font-bold">EMAIL</h6>
            <p>example@user.com</p>
          </div>
          <div className="my-5">
            <h6 className="font-bold">DATE OF BIRTH</h6>
            <p>20/12/1990</p>
          </div>
          <div className="my-5">
            <h6 className="font-bold">BEC ID</h6>
            <p>1234567890</p>
          </div>
          <div className="my-5">
            <h6 className="font-bold">ENGINEER ID</h6>
            <p>1234567890</p>
          </div>
          <div className="my-5">
            <h6 className="font-bold">LICENSE NUMBER</h6>
            <p>None</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="p-6 bg-white border border-gray-200 shadow-sm">
          <h5 className="mb-2 text-2xl font-bold tracking-tight uppercase">
            Exam Registration
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Please complete the following requirements to complete registration
            for the exam:
          </p>
          <div className="mt-4 flex flex-col gap-4">
            <div>
              <Button className="float-right p-3 rounded">Complete Registration</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
