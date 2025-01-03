"use client";
import { CARD_DATA } from "@/config/constants/super-venue-constants";

const WhatIsSuperVenue = () => {
  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-0 md:py-0 lg:py-10 mt-14">
      <div className="px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto">
        <div className="text-left lg:text-center">
          <h1 className="text-primary-800 text-2xl md:text-3xl font-bold">
            What is a Super Venue?
          </h1>

          <p className="text-secondary-500 text-base md:text-xl mt-4">
            A Super Venue is recognized for its exceptional performance based on
            criterias such as high conversion rates, fast response times, large
            booking volume, and excellent customer ratings on Venuerific.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6 mt-10 md:mt-16">
          {CARD_DATA.map((card, index) => (
            <div
              key={index}
              className="border border-secondary200 rounded-lg p-4 flex flex-col items-start text-left"
            >
              <div className="w-full flex justify-start">
                <img
                  src={card.image}
                  alt={card.alt}
                  width="50"
                  height="50"
                  className="mb-4"
                />
              </div>
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-secondary-600 mt-2">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIsSuperVenue;
