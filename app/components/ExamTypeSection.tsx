import { ArrowRight } from "lucide-react";
export default function ExamTypeSection() {
  return (
    <section className="bg-white text-black py-10 px-5 lg:px-25" id="examTypes">
      <h1 className="text-4xl font-bold">Exam Types</h1>
      <p>
        The different disclipline available for licensure through the BEC Exam
        Program
      </p>

      <h2 className="text-2xl font-bold my-6">Civil Engineering</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div className="flex justify-center" key={index}>
            <div
              className={`text-black w-[300px] ${
                index == 1 || index == 3 ? "hidden" : ""
              }`}
            >
              <div className="border-2 border-black bg-white">
                <div className="p-6">
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                    Go around the world {item}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, praesentium voluptatem omnis atque culpa
                    repellendus.
                  </p>
                  <div>
                    <p className="mt-8 font-bold">Read more</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${
                index == 1 || index == 3 ? "" : "!hidden"
              } hidden lg:flex justify-center items-center`}
            >
              <ArrowRight />
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold my-6">Mechanical Engineering</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div className="flex justify-center" key={index}>
            <div
              className={`text-black w-[300px] ${
                index == 1 || index == 3 ? "hidden" : ""
              }`}
            >
              <div className="border-2 border-black bg-white">
                <div className="p-6">
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                    Go around the world {item}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, praesentium voluptatem omnis atque culpa
                    repellendus.
                  </p>
                  <div>
                    <p className="mt-8 font-bold">Read more</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${
                index == 1 || index == 3 ? "" : "!hidden"
              } hidden lg:flex justify-center items-center`}
            >
              <ArrowRight />
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold my-6">Electrical Engineering</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div className="flex justify-center" key={index}>
            <div
              className={`text-black w-[300px] ${
                index == 1 || index == 3 ? "hidden" : ""
              }`}
            >
              <div className="border-2 border-black bg-white">
                <div className="p-6">
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                    Go around the world {item}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, praesentium voluptatem omnis atque culpa
                    repellendus.
                  </p>
                  <div>
                    <p className="mt-8 font-bold">Read more</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${
                index == 1 || index == 3 ? "" : "!hidden"
              } hidden lg:flex justify-center items-center`}
            >
              <ArrowRight />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
