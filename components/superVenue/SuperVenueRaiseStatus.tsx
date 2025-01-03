"use client";

const SuperVenueRaiseStatus = () => {
  return (
    <div className="mt-0 w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-6 lg:py-10 bg-primary-50 lg:bg-secondary-50">
      <div className="px-4 md:px-0 my-0 md:my-0 lg:my-10 md:mt-4 max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="flex-1 order-1 lg:order-none hidden lg:block">
          <img
            src="/images/super_venue/super_venue_raise_status_img.webp"
            alt="Super Venue Raise Status"
            className="w-[452px] h-[329px] mx-auto"
          />
        </div>

        <div className="flex-1 order-2 lg:order-none flex flex-col justify-center text-left">
          <h2 className="text-secondary-900 text-3xl lg:text-4xl font-bold">
            Earn Super Venue Status
          </h2>
          <div className="mt-4 lg:mt-10 grid grid-cols-3 gap-x-4 gap-y-6 items-center">
            <div>
              <span className="text-primary-600 text-2xl lg:text-5xl font-semibold">
                30%
              </span>
              <p className="text-secondary-900 text-sm lg:text-lg lg:font-semibold mt-2 lg:mt-6">
                Average enquiry/month
              </p>
            </div>
            <div>
              <span className="text-primary-600 text-2xl lg:text-5xl font-semibold">
                40%
              </span>
              <p className="text-secondary-900 text-sm lg:text-lg lg:font-semibold mt-2 lg:mt-6">
                Average traffic increase
              </p>
            </div>
            <div>
              <span className="text-primary-600 text-2xl lg:text-5xl font-semibold">
                35%
              </span>
              <p className="text-secondary-900 text-sm lg:text-lg lg:font-semibold mt-2 lg:mt-6">
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
