"use client";
import { VENUES } from "@/config/constants/pvm-constants";

const PvmVenueManagementUpdate = () => {
  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 pt-1 pb-10 lg:pt-10 lg:pb-10">
      <div className="px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap gap-12 max-w-screen-2xl mx-auto">
          <div className="flex flex-col gap-8 w-full lg:w-1/2">
            <div className="mb-4">
              <h1 className="text-primary-800 text-3xl lg:text-4xl font-semibold mb-4">
                With Years of Experience, We&apos;re Your Go-To Place for Venue
                Management
              </h1>
              <p className="text-secondary-500 text-base">
                Venue management can be a challenge, but our Private Venue
                Management services will transform how you run things—managing
                everything from inquiries to post-event follow-up.
              </p>
            </div>
            {VENUES.map((venue, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <img src={venue.icon} alt={venue.alt} className="w-12 h-12" />
                  <div>
                    <h3 className="text-lg font-semibold">{venue.title}</h3>
                    {/* <p className="text-sm text-gray-600">{venue.description}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex w-full lg:w-1/2 justify-end">
            <img
              src="/images/pvm/pvm_venue_management.webp"
              alt="Venue Management"
              className="w-[543px] h-[664px] object-cover rounded-lg"
              style={{ height: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PvmVenueManagementUpdate;
