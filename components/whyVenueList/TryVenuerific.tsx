"use client";

import { useState, useEffect } from "react";

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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-4 md:px-8 lg:px-12 xl:px-20 py-10 flex flex-col justify-center space-y-8">
        <h2 className="text-primary-700 text-[32px] sm:text-[40px] lg:text-[48px] font-bold sm:hidden text-left">
          Request a demo
        </h2>
        <p className="text-secondary-600 text-[14px] sm:text-[16px] md:text-[18px] sm:hidden text-left">
          Discover the Venue Management CRM system that not only generates a
          substantial return on investment but also comes at an incredibly
          affordable subscription fee. Invest just 5 minutes of your time now to
          unlock its full potential.
        </p>

        <h2 className="text-primary-700 text-[32px] sm:text-[40px] lg:text-4xl font-bold hidden sm:block">
          Ready to try Venuerific?
        </h2>
        <p className="text-secondary-600 text-[14px] sm:text-[16px] md:text-[18px] hidden sm:block">
          Integrate Venuerific easily into your venue sales and marketing
          operations
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0">
          <button className="border text-secondary-700 text-center border-secondary-300 px-8 py-2 text-lg rounded-md sm:hidden hover:bg-secondary-300 hover:text-white transition-colors font-semibold">
            See Demo
          </button>
          <button className="border text-secondary-700 border-secondary-300 px-8 py-2 text-lg rounded-md hidden sm:block hover:bg-secondary-300 hover:text-white transition-colors sm:mr-4 font-semibold">
            Schedule a demo
          </button>
          <button className="bg-primary-600 text-white px-8 py-2 text-lg rounded-md hidden sm:block hover:bg-primary-700 transition-colors font-semibold">
            Sign up for free
          </button>
        </div>
      </div>

      <img
        src={
          isMobile
            ? "/images/why_venue_list/try_venuerific_img_mobile.png"
            : "/images/why_venue_list/try_venuerific_img.png"
        }
        alt="Try Venuerific"
        className="rounded-md w-full h-[400px] sm:h-[555px] object-cover"
      />
    </div>
  );
};

export default TryVenuerific;
