"use client";
import Image from "next/image";

const VenueMonthlyRevenue = () => {
  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-16 bg-white">
    <div className="px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto">
      <div className="flex flex-col border-2 md:flex-row items-center rounded-lg bg-gradient-to-r from-[#9C3EF3] to-[#4E8CFF] overflow-hidden">
        <div className="w-full md:w-1/2 text-white px-6 md:px-16 py-4 md:py-8 pt-16 md:pt-24 pb-16 md:pb-24 text-center md:text-left">
          <h2 className="text-[24px] md:text-[36px] font-normal">
            Grow Your Monthly Revenue by 50%
          </h2>
          <p className="text-[14px] md:text-[20px] font-medium mt-4">
            We don&apos;t just help you to manage and market your venue, we help
            you transform your venue business by connecting you with thousands
            of new event organizers and the solutions you need to grow.
          </p>
          <p className="text-[12px] md:text-[16px] mt-6">
            Source: Venuerific customer data, 2022-present
          </p>
        </div>

        <Image
          src="/images/why_venue_list/venue_monthy_revenue_img.webp"
          alt="Venue Monthly Revenue"
          width={500}
          height={300}
          className="md:w-1/2 hidden md:block h-4/6 py-0 lg:py-6 xl:py-8 object-cover"
        />
      </div>
    </div>
    </div>
  );
};

export default VenueMonthlyRevenue;
