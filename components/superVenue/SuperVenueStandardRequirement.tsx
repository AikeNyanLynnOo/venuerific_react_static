"use client";
import { STANDARD_REQUIREMENTS } from "@/config/constants/super-venue-constants";

const SuperVenueRequirementUpdate = () => {
  return (
    <div className="w-full mx-auto px-0 py-6 lg:py-10 md:px-5 lg:px-12 xl:px-20">
      <div className="px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto">
        <header className="text-left mb-12">
          <h1 className="text-primary-800 text-2xl md:text-4xl font-bold">
            Super Venue Standards and Requirements
          </h1>
          <p className="text-secondary-600 text-lg md:text-2xl mt-6">
            Quality is the Key to Standing Out and Getting Booked
          </p>
          <p className="text-secondary-600 text-base mt-6">
            At Venuerific, high-quality venues are essential for Venuerific
            event organizers.
            <br /> To be a Super Venue, your space must meet our quality
            standards to ensure it's perfectly suited for unique event
            experiences.
            <br />
            We evaluate each venue based on key performance metrics, including
            response rate, conversion rate, booking volume, timely replies, and
            customer ratings - ensuring your venue stands out as a top choice
            for event organizers.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STANDARD_REQUIREMENTS.slice(0, 3).map((req, index) => (
            <div
              key={index}
              className="bg-secondary-100 p-6 rounded-lg text-left"
            >
              <h2 className="text-primary-800 text-4xl font-semibold">
                {req.title}
              </h2>
              <p className="text-secondary-900 text-2xl font-semibold mt-4">
                {req.subtitle}
              </p>
              <p className="text-secondary-900 text-base mt-4">
                {req.description}
              </p>
            </div>
          ))}
        </div>

        {/* Centered Bottom Row */}
        <div className="mt-6 mx-auto max-w-screen-md grid grid-cols-1 md:grid-cols-2 gap-6">
          {STANDARD_REQUIREMENTS.slice(3).map((req, index) => (
            <div
              key={index}
              className="bg-secondary-100 p-6 rounded-lg text-left"
            >
              <h2 className="text-primary-800 text-4xl font-semibold">
                {req.title}
              </h2>
              <p className="text-secondary-900 text-2xl font-semibold mt-4">
                {req.subtitle}
              </p>
              <p className="text-secondary-900 text-base mt-4">
                {req.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuperVenueRequirementUpdate;
