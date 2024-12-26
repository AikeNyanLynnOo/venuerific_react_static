"use client";
import Image from "next/image";

const SuperVenueHero = () => {
  return (
    <div className="mt-[81px] w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-20 lg:py-28 bg-white">
      <div className="px-4 md:px-0 my-10 md:mt-6 max-w-screen-2xl mx-auto text-center">
        <p className="text-primary-600 text-base font-semibold mb-2">
          New Feature
        </p>

        <h1 className="text-secondary-900 text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
          Super Venue Program is Now Live!
        </h1>

        <p className="text-secondary-600 text-lg md:text-xl max-w-2xl mx-auto">
          The Venuerific Super Venue program is a special status earned by our
          platform&apos;s best performing venues, packed with benefits that
          bring quality bookings.
        </p>
      </div>
    </div>
  );
};

export default SuperVenueHero;
