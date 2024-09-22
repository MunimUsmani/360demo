import Image from "next/image";
export default function HeroCareers() {
  return (
    <section className="relative flex flex-col items-center justify-center bg-[#181815] text-white overflow-hidden px-4 sm:px-6 lg:px-8 mt-20">
      <div className="absolute inset-0 z-0 w-full h-full bg-cover bg-center opacity-50">
        <Image
          src="/Waveform.png"
          alt="Wave background"
          fill
          style={{ objectFit: "contain", objectPosition: "bottom" }}
          className="bg-no-repeat"
        />
      </div>
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="font-['Clash_Display'] font-medium text-5xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#999]">
          Explore Career
        </h1>
        <h1 className="font-['Clash_Display'] font-medium text-5xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#999]">
          Opportunities With Us
        </h1>
        <p className="text-sm sm:text-base md:text-lg mb-12 text-gray-300 font-['Clash_Display']">
          We're always eager to connect with talented individuals.
          <br />
          Share your resume with us and we'll be in touch!
        </p>
      </div>
    </section>
  );
}
