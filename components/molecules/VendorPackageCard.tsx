"use client";

import Image from "next/image";

import { LightLabelWithIcon } from "../atoms/LightLabelWithIcon";

import { ImageWithErrorHandle } from "./ImageWithErrorHandle";

interface VendorCardProps {
  // frontend additional props
  btnText?: string;

  // backend props
  name?: string;
  image_title?: string;
  image_alt?: string;
  area?: string;
  vendor_url?: string;
  active_vendor_award_nominee?: boolean;
  vendor_has_award?: boolean;
  image_url?: string;
  active_promotions?: boolean;
  services?: string[];
  price?: string;
  reviews_score?: number;
  reviews_total?: number;
}

export const VendorPackageCard = ({
  // additional prop from frontend
  btnText = "Contact Now",

  // backend props
  name,
  image_title,
  image_alt,
  area,
  vendor_url,
  active_vendor_award_nominee,
  vendor_has_award,
  image_url,
  active_promotions,
  services,
  price,
  reviews_score,
  reviews_total,
}: VendorCardProps) => {
  return (
    <a
      className="group/card rounded-lg border-none lg:hover:shadow-lg p-4 block"
      href={vendor_url || "#"}
    >
      <div className="rounded-lg relative">
        <ImageWithErrorHandle
          unoptimized
          alt={image_alt || "vendor image"}
          className="w-full object-cover h-[260px] z-0 rounded-xl"
          height={260}
          loading="lazy"
          src={image_url || "/images/venues/venue1.webp"}
          width={300}
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 w-full">
        <span className="text-md font-semibold leading-7 block w-full min-h-[28px] truncate">
          {name || ""}
        </span>
        <span className="text-sm font-normal leading-5 block w-full text-[#9FA9B4] min-h-[20px] truncate">
          Vendor Packages
        </span>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold leading-5 text-[#232323] min-h-[20px]">
            {`$250 / pax`}
          </span>
          <LightLabelWithIcon
            customClasses="flex gap-x-2 items-center"
            customLabel={
              <span className="text-sm font-semibold leading-5 text-neutral">
                Min. 100
              </span>
            }
            startIconNode={
              <Image
                alt="icon"
                className="h-5 w-5 object-contain"
                height={20}
                loading="lazy"
                src={`/images/icons/people.svg`}
                width={20}
              />
            }
          />
        </div>
      </div>
    </a>
  );
};
