"use client";

const SuperVenueRaiseStatus = () => {
  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-10 bg-secondary-50">
      <div className="px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-28">
        <div className="flex-1 order-1 lg:order-none">
          <img
            src="/images/super_venue/super_venue_raise_status_img.webp"
            alt="Super Venue Raise Status"
            className="w-full h-auto"
            width="500"
            height="500"
          />
        </div>

        <div className="flex-1 order-2 lg:order-none text-center lg:text-left">
          <h2 className="text-secondary-900 text-3xl md:text-4xl font-bold">
            Raise Status as Super Venue
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-8 items-center">
            <div className="text-primary-600 text-5xl md:text-6xl font-bold">
              30%
              <p className="text-secondary-900 text-lg md:text-xl font-medium mt-2">
                Average enquiry/month
              </p>
            </div>
            <div className="text-primary-600 text-5xl md:text-6xl font-bold">
              40%
              <p className="text-secondary-900 text-lg md:text-xl font-medium mt-2">
                Average traffic increase
              </p>
            </div>
            <div className="text-primary-600 text-5xl md:text-6xl font-bold">
              35%
              <p className="text-secondary-900 text-lg md:text-xl font-medium mt-2">
                Average margin increase
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperVenueRaiseStatus;
