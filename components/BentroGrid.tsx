import Image from "next/image";

export default function BentoGrid() {
  return (
    <section className="w-full px-4 md:px-10 space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="group relative aspect-square rounded-2xl overflow-hidden p-4 bg-zinc-800"
          >
            <div>
              <h1 className="group-hover:translate-x-1 transition-all duration-700 text-xl text-white font-semibold">
                Exciting New Cards that matter
              </h1>
              <h3 className="text-zinc-400 text-md mt-1 group-hover:translate-x-3 transition-all duration-700">
                Our team discovers insights and trends of new cards for you.
              </h3>
            </div>
            <div className="absolute -bottom-5 left-10 w-[calc(100%-2.5rem)] h-[60%] bg-white rounded-2xl p-3 transition-transform duration-700 group-hover:scale-105 z-[1] overflow-hidden">
              <Image
                src={`/images/image${i}.jpg`}
                alt={`image${i}`}
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 w-[90%] h-[90%] bg-cyan-500 blur-[13px] m-auto z-[-1]" />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="group relative lg:col-span-2 h-[300px] sm:h-[400px] rounded-2xl overflow-hidden p-4 bg-zinc-800">
          <div>
            <h1 className="group-hover:translate-x-1 transition-all duration-700 text-xl text-white font-semibold">
              Exciting New Cards that matter
            </h1>
            <h3 className="text-zinc-400 text-md mt-1 group-hover:translate-x-3 transition-all duration-700">
              Our team discovers insights and trends of new cards for you.
            </h3>
          </div>
          <div className="absolute -bottom-5 left-10 w-[calc(100%-2.5rem)] h-[60%] bg-cyan-100 rounded-2xl p-3 transition-transform duration-700 group-hover:scale-105 z-[1] overflow-hidden">
            <Image
              src="/images/image5.jpg"
              alt="image5"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 w-[90%] h-[90%] bg-cyan-500 blur-[13px] m-auto z-[-1]" />
          </div>
        </div>

        <div className="group relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden p-4 bg-zinc-800">
          <div>
            <h1 className="group-hover:translate-x-1 transition-all duration-700 text-xl text-white font-semibold">
              Exciting New Cards that matter
            </h1>
            <h3 className="text-zinc-400 text-md mt-1 group-hover:translate-x-3 transition-all duration-700">
              Our team discovers insights and trends of new cards for you.
            </h3>
          </div>
          <div className="absolute -bottom-5 left-10 w-[calc(100%-2.5rem)] h-[60%] bg-cyan-100 rounded-2xl p-3 transition-transform duration-700 group-hover:scale-105 z-[1] overflow-hidden">
            <Image
              src="/images/image4.jpg"
              alt="image4"
              width={400}
              height={400}
              style={{ objectPosition: "left top" }}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 w-[90%] h-[90%] bg-cyan-500 blur-[13px] m-auto z-[-1]" />
          </div>
        </div>
      </div>
    </section>
  );
}
