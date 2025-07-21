import type { Metadata } from 'next'
import CalendarContent from "./CalendarContent";
export const metadata: Metadata = {
  title: 'Register for Exam',
}
export default function registerExam() {
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
        <CalendarContent />
      </div>
    </div>
  );
}
