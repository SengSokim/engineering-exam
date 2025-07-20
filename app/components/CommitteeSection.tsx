export default function CommitteeSection() {
  return (
    <section className="bg-white text-black py-10 px-5 lg:px-25" id="committee">
      <h1 className="text-4xl font-bold">AAET Committee</h1>
      <div className="grid grid-cols-1 gap-4">
        {[1, 2, 3].map((item, index) => (
          <div className="lg:flex justify-between" key={index}>
            <div>image</div>
            <div className="ml-3">
              <h3 className="mt-4 text-xl font-medium sm:text-2xl">Director</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reiciendis, nisi. Repellendus, voluptatibus excepturi!
                Praesentium ducimus, soluta officiis asperiores, velit ipsa
                tempore excepturi suscipit vel minima fugit nemo dignissimos
                obcaecati doloribus? Veritatis omnis consequatur id officia
                temporibus labore, excepturi eaque minima voluptas vel ea?
                Asperiores repellat eius saepe ut, dolor esse.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
