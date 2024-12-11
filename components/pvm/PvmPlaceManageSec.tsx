"use client";
import Image from "next/image";

const PvmPlaceManageSec = () => {
  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20">
      <div className="px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto py-18 lg:py-10 flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-[60px]">
        <div className="flex-1 space-y-8 text-center lg:text-left lg:mx-auto flex lg:items-center">
          <div>
            <p className="text-secondary-900 text-2xl md:text-3xl leading-relaxed">
              Venuerific&apos;s Private Venue Management is proud of its
              management of over 20+ unique venues around Singapore, with each
              providing unique spaces for birthdays, corporate events, weddings,
              meetings, and other celebrations.
            </p>
            <p className="mt-8 text-secondary-600 text-lg md:text-xl leading-relaxed">
              Our Private Venue Management system takes your venue marketing,
              enquiries management, and event execution to new heights. We are
              proud of our expert management of spaces around Singapore, home to
              any and all celebrations.
            </p>
            <div className="mt-10 flex flex-col items-center lg:items-start space-y-1">
              <span className="text-primary-600 text-[60px] font-semibold">
                +20
              </span>
              <span className="text-secondary-500 text-2xl">
                Places managed by us
              </span>
            </div>
          </div>
        </div>

        <div className="hidden lg:block flex-shrink-0 w-full lg:w-auto">
          <Image
            src="/images/pvm/pvm_place_manage_sec_img.webp"
            alt="Venue Management"
            width={524}
            height={538}
            className="w-full h-[538px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PvmPlaceManageSec;
