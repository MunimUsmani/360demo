import Image from "next/image";
export default function HeroBlogs() {
  return (
    <section className="relative flex flex-col items-center justify-center bg-[#181815] text-white px-4 sm:px-6 lg:px-8 mt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* <Image
          src="/wave2.png"
          alt="Wave background"
          layout="fill"
          objectFit="contain"
          objectPosition="bottom"
          className="bg-no-repeat"
        /> */}
      </div>
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="font-['Clash_Display'] font-medium text-5xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#999]">
          Excellence in Software
        </h1>
        <h1 className="font-['Clash_Display'] font-medium text-5xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#999]">
          Development
        </h1>
        <p
          className={`text-sm sm:text-base md:text-lg mb-12 text-gray-300 font-[Clash_Display]`}
        >
          Explore our finest projects that highlight 360XpertSolution's
          dedication to
          <br />
          quality, innovation, and technical excellence in software development
        </p>
      </div>
    </section>
  );
}
