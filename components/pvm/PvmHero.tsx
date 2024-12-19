"use client";

import { Button } from "@nextui-org/button";

const PvmHero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/pvm/pvm_hero_img.webp"
          alt="Venue background image"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="mt-[81px] w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 relative z-30">
        <div className="px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto flex flex-col items-center justify-center py-20 lg:flex-row lg:items-start lg:justify-start">
          <div className="max-w-screen-xl mx-auto px-8 lg:mt-20 lg:w-3/5 lg:pr-8 space-y-4 text-center lg:text-left text-white z-40 relative lg:mx-0">
            {/* <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
              <img
                src="/images/pvm/pvm_hero_trusted_icon.webp"
                alt="Trusted Icon"
                className="w-6 h-6 hidden lg:inline"
              />
              <p className="text-white text-lg md:text-xl lg:text-2xl font-semibold">
                Trusted Since 2013
              </p>
            </div> */}

            <h1 className="text-3xl lg:text-5xl font-semibold">
            Increase revenue and elevate experiences
            </h1>
            <p className="text-white text-lg max-w-[60ch]">
            Transform your venue&apos;s potential with Venuerific&apos;s Private Venue Management service, driving increased revenue while delivering exceptional event experiences.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Button
                className="flex items-center bg-primary-600 hover:bg-primary-500 text-white px-6 py-3 rounded-md shadow-lg transition sm:w-auto"
                startContent={
                  <img
                    src="/images/pvm/calendar.webp"
                    alt="Chat Icon"
                    className="w-4 h-4"
                  />
                }
              >
                <span className="text-[16px]">Talk To Us</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PvmHero;
