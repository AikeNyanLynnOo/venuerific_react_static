"use client";

import { Button } from "@nextui-org/button";
import { Envelope, Star } from "@phosphor-icons/react";
import dynamic from "next/dynamic";
import Image from "next/image";

import { LightLabelWithIcon } from "../atoms/LightLabelWithIcon";

import { ImageWithErrorHandle } from "./ImageWithErrorHandle";
import ExpandableChipGroup from "./ChipGroup";

const Divider = dynamic(() =>
  import("@nextui-org/divider").then((mod) => mod.Divider),
);

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
  showChips?: boolean;
  showGoogleIcon?: boolean;
}

export const VendorCard = ({
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
  showChips = false,
  showGoogleIcon = false,
}: VendorCardProps) => {
  return (
    <a
      className="group/card rounded-lg border lg:border-none lg:hover:shadow-lg p-4 block"
      href={vendor_url || "#"}
      rel="noopener noreferrer"
      target="_blank"
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
      <div className="flex flex-col gap-y-2 my-4 w-full">
        <span className="text-lg font-semibold leading-7 block w-full min-h-[28px] truncate">
          {name || ""}
        </span>
        <span className="text-sm font-normal leading-5 block w-full text-neutral min-h-[20px] truncate">
          {area || ""}
        </span>

        {(!(reviews_total === 0 && reviews_score === 0) && (
          <LightLabelWithIcon
            customClasses="flex items-center gap-x-2.5 justify-between p-2 w-fit px-0 py-0 min-h-[20px]"
            customLabel={
              <span className="text-sm font-normal leading-5 text-neutral">
                {`${reviews_score || ""} (${reviews_total || ""})`}
              </span>
            }
            startIconNode={
              <div className="flex gap-x-1">
                {(showGoogleIcon && (
                  <>
                    <Image
                      alt="icon"
                      className="h-3 w-3 object-contain"
                      height={12}
                      loading="lazy"
                      src={`/images/icons/google.svg`}
                      width={12}
                    />
                    <Star color="#F8D830" size={14} weight="fill" />
                  </>
                )) || <Star color="#F8D830" size={14} weight="fill" />}
              </div>
            }
          />
        )) || <div className="min-h-[20px]" />}
        {price && <Divider />}

        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold leading-5 text-[#232323] min-h-[20px]">
            {price || ""}
          </span>
        </div>
        {showChips && (
          <div className="w-full min-h-[32px]">
            <ExpandableChipGroup chips={services || []} initiallyVisible={2} />
          </div>
        )}
      </div>

      <div className="w-full min-h-[36px]">
        <Button
          className="rounded-lg p-0 border border-secondary-300 lg:hidden lg:group-hover/card:flex w-full h-fit hover:bg-primary-700 hover:bg-primary-600 bg-white border hover:border-1.5"
          variant="flat"
        >
          <LightLabelWithIcon
            customClasses="flex items-center gap-x-2.5 justify-center p-2 w-full py-1 group/label"
            customLabel={
              <span className="text-base font-semibold leading-6 text-secondary-700 group-hover/label:text-white">
                {btnText}
              </span>
            }
            startIconNode={
              <Envelope
                className="text-secondary-700 group-hover/label:text-white"
                size={20}
              />
            }
          />
        </Button>
        <span className="sr-only"> Explore about vendor</span>
      </div>
    </a>
  );
};
