"use client";

import { Button } from "@nextui-org/button";
import { ArrowRight } from "@phosphor-icons/react";
import { Fragment } from "react";

import { HOME_DATA } from "@/config/constants";

interface WantToGrowProps {
  headerFooterRes?: any;
  vendor_search?: boolean;
  country?: string;
}

export const WantToGrow = ({
  headerFooterRes,
  vendor_search,
  country,
}: WantToGrowProps) => {
  const { data } = headerFooterRes;
  const { why_list_menus } = data;

  return (
    <Fragment>
      <div className="w-full mx-auto py-10 px-4 md:px-5 lg:px-12 2xl:px-0 max-w-screen-2xl hidden md:block">
        <h3 className="text-3xl font-semibold leading-10">
          {HOME_DATA[`${country || "sg"}`].wantToGrow.title}
        </h3>
      </div>
      {/* bg-want-to-grow bg-no-repeat bg-cover */}
      <div className="w-full mx-auto hidden md:block min-h-[360px] max-w-screen-2xl mx-auto">
        <div className="w-full flex">
          <div className="bg-venue-bg bg-no-repeat bg-cover flex-1 p-4 flex flex-col justify-end gap-y-5 group min-h-[360px] p-4 md:p-5 lg:p-12">
            <img
              alt="icon"
              className="h-[25px] w-[25px]"
              src={`/images/icons/venue_white.svg`}
            />
            <p className="text-3xl font-semibold leading-normal text-white">
              {HOME_DATA[`${country || "sg"}`].wantToGrow.venueTitle}
            </p>
            <p className="text-lg font-medium leading-7 text-white">
              {HOME_DATA[`${country || "sg"}`].wantToGrow.venueText}
            </p>
            <a href={why_list_menus[0].link}>
              <Button
                aria-label="Learn more about our venues"
                className="rounded-lg bg-white text-black w-fit hidden group-hover:flex"
                color="primary"
                endContent={<ArrowRight size={18} />}
                variant="solid"
              >
                Learn More
              </Button>
              <span className="sr-only"> about our venues</span>
            </a>
          </div>
          <div className="bg-vendor-bg bg-no-repeat bg-cover flex-1 p-4 flex flex-col justify-end gap-y-5 group min-h-[360px] p-4 md:p-5 lg:p-12">
            <img
              alt="icon"
              className="h-[25px] w-[25px]"
              src={`/images/icons/vendor_white.svg`}
            />
            <p className="text-3xl font-semibold leading-normal text-white">
              {HOME_DATA[`${country || "sg"}`].wantToGrow.vendorTitle}
            </p>
            <p className="text-lg font-medium leading-7 text-white">
              {HOME_DATA[`${country || "sg"}`].wantToGrow.vendorText}
            </p>
            <a href={why_list_menus[1].link}>
              <Button
                aria-label="Learn more about our vendors"
                className="rounded-lg bg-white text-black w-fit hidden group-hover:flex"
                color="primary"
                endContent={<ArrowRight size={18} />}
                variant="solid"
              >
                Learn More
              </Button>
              <span className="sr-only"> about our vendors</span>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
