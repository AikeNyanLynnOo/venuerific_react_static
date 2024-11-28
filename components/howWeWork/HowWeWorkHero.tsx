"use client";
import Image from "next/image";

const HowWeWorkHero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 w-full h-[400px] md:h-[500px]">
        <Image
          src="/images/how_we_work/how_we_work_hero_img.webp"
          alt="How We Work Hero"
          className="h-full w-full object-cover object-center"
          priority
          height={500}
          width={1500}
        />
      </div>

      <div className="mt-[81px] w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 relative z-30">
        <div className="px-4 md:px-0 max-w-screen-2xl mx-auto flex flex-col items-center justify-center h-[400px] md:h-[500px] py-10 lg:flex-row lg:items-center lg:justify-start">
          <div className="max-w-screen-xl mx-auto lg:w-3/5 lg:pr-8 space-y-4 text-center lg:text-left text-white z-40 relative lg:mx-0">
            <h1 className="text-3xl lg:text-5xl font-semibold">How We Work</h1>
            <p className="text-white text-lg max-w-[60ch]">
              Get ahead of the competition, be first in joining our vendor
              listing waiting list!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWorkHero;
