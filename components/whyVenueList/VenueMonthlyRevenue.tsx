"use client";
import Image from "next/image";
import React from "react";
import venueMonthlyRevenueImg from "../../public/images/why_venue_list/venue_monthy_revenue_img.png";

const VenueMonthlyRevenue = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-8 py-16 bg-white">
      <div className="flex flex-col md:flex-row items-center rounded-lg bg-gradient-to-r from-[#9C3EF3] to-[#4E8CFF] overflow-hidden">
        <div className="w-full md:w-1/2 text-white pl-8 pr-8 md:pl-20 py-4 md:py-8 pt-16 md:pt-24 pb-16 md:pb-24 text-center md:text-left">
          <h2 className="text-[24px] md:text-[36px] font-normal">
            Grow Your Monthly Revenue by 50%
          </h2>
          <p className="text-[14px] md:text-[20px] font-medium mt-4">
            We don't just help you to manage and market your venue, we help you
            transform your venue business by connecting you with thousands of
            new event organizers and the solutions you need to grow
          </p>
          <p className="text-[12px] md:text-[16px] mt-6">
            Source: Venuerific customer data, 2022-present
          </p>
        </div>

        <div className="w-full md:w-1/2 hidden md:block">
          <Image
            src={venueMonthlyRevenueImg}
            alt="Venue Monthly Revenue"
            layout="responsive"
            width={500}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default VenueMonthlyRevenue;
