"use client";

import { useState, useEffect } from "react";
import { Button } from "@nextui-org/button";

const TryVenuerific = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full mx-auto max-w-screen-2xl mt-16 md:mt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-8 px-4 md:px-8 lg:px-20">
          <h2 className="text-primary-700 text-[32px] sm:text-[40px] lg:text-[48px] font-bold sm:hidden text-left">
            Request a demo
          </h2>
          <p className="text-secondary-600 text-[14px] sm:text-[16px] md:text-[18px] sm:hidden text-left">
            Discover the Venue Management CRM system that not only generates a
            substantial return on investment but also comes at an incredibly
            affordable subscription fee.
            <span className="block mt-4">
              Invest just 5 minutes of your time now to unlock its full
              potential.
            </span>
          </p>

          <h2 className="text-primary-700 text-[32px] sm:text-[40px] lg:text-4xl font-bold hidden sm:block">
            Ready to try Venuerific?
          </h2>
          <p className="text-secondary-600 text-[14px] sm:text-[16px] md:text-[18px] hidden sm:block">
            Integrate Venuerific easily into your venue sales and marketing
            operations
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0">
            <Button
              className="border text-secondary-700 text-center border-secondary-300 p-6 text-lg rounded-lg sm:hidden hover:text-black transition-colors"
              variant="bordered"
            >
              See Demo
            </Button>

            <Button
              className="border text-secondary-700 text-center border-secondary-300 p-6 text-lg rounded-lg hidden sm:inline-flex hover:text-black transition-colors sm:mr-4"
              variant="bordered"
            >
              Schedule a Demo
            </Button>

            <Button
              className="bg-primary-600 text-center text-white p-6 text-lg rounded-lg hidden sm:inline-flex transition-colors hover:bg-primary-500"
              variant="solid"
            >
              Sign up for free
            </Button>
          </div>
        </div>

        <div className="w-full">
          <img
            src={
              isMobile
                ? "/images/why_venue_list/try_venuerific_img_mobile.png"
                : "/images/why_venue_list/try_venuerific_img.png"
            }
            alt="Try Venuerific"
            className="rounded-md w-full h-[400px] object-contain sm:object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TryVenuerific;
