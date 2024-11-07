"use client";

import { Button } from "@nextui-org/button";
import { Envelope, Star } from "@phosphor-icons/react";
import dynamic from "next/dynamic";
import Image from "next/image";

import { LightLabelWithIcon } from "../atoms/LightLabelWithIcon";

const DynamicImageWithErrorHandle = dynamic(() =>
  import("@/components/molecules/ImageWithErrorHandle").then(
    (mod) => mod.ImageWithErrorHandle,
  ),
);
const Divider = dynamic(() =>
  import("@nextui-org/divider").then((mod) => mod.Divider),
);

interface VenueMarkerCardProps {
  // additional prop from frontend
  btnText?: string;

  // backend props
  super_venue_live?: boolean;
  is_new_venue?: boolean;
  venue_url?: string;
  photo?: string;
  name?: string;
  address?: string;
  reviews_score?: number;
  reviews_total?: number;
  venue_price?: string;
  max_no_of_guest_standing?: number;
  max_no_of_guest_sitting?: number;
}

export const VenueMarkerCard = ({
  // additional prop from frontend
  btnText = "Contact Now",

  // backend props
  super_venue_live,
  is_new_venue,
  venue_url,
  photo,
  name,
  address,
  reviews_score,
  reviews_total,
  venue_price,
  max_no_of_guest_standing,
  max_no_of_guest_sitting,
}: VenueMarkerCardProps) => {
  return (
    <div className="rounded-lg block">
      <div className="rounded-lg relative">
        {(super_venue_live && (
          <Image
            unoptimized
            alt="super_venue"
            className="w-auto object-cover h-[37px] absolute top-0 left-0 -translate-x-1 -translate-y-2 z-10 rounded-xl"
            height={37}
            loading="lazy"
            src="/images/icons/super_venue.webp"
            width={60}
          />
        )) ||
          (is_new_venue && (
            <Image
              unoptimized
              alt="new_venue"
              className="w-auto object-cover h-[37px] absolute top-0 left-0 -translate-x-1 -translate-y-2 z-10 rounded-xl"
              height={37}
              loading="lazy"
              src="/images/icons/new_venue.webp"
              width={60}
            />
          ))}

        <DynamicImageWithErrorHandle
          unoptimized
          alt="venue_marker_img"
          className="w-[203px] object-cover h-[150px] z-0 rounded-lg"
          height={260}
          loading="lazy"
          src={photo || ""}
          width={203}
        />
      </div>

      <div className="flex flex-col gap-y-2 my-2 w-[203px]">
        <span className="text-lg font-semibold leading-7 block w-full truncate">
          {name || ""}
        </span>

        <div className="flex items-center justify-between w-full">
          <span className="text-sm font-normal leading-5 block w-full text-secondary-400 truncate">
            {address || ""}
          </span>

          {!(reviews_total === 0 && reviews_score === 0) && (
            <LightLabelWithIcon
              customClasses="flex items-center gap-x-2.5 justify-between p-2 w-fit px-0 py-0"
              customLabel={
                <span className="text-sm font-normal leading-5 text-neutral text-nowrap">
                  {`${reviews_score || ""} (${reviews_total || ""})`}
                </span>
              }
              startIconNode={<Star color="#F8D830" size={14} weight="fill" />}
            />
          )}
        </div>
        {(venue_price ||
          max_no_of_guest_standing ||
          max_no_of_guest_sitting) && <Divider />}

        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold leading-5 text-[#232323]">
            {venue_price || ""}
          </span>

          <div className="flex items-center">
            <LightLabelWithIcon
              customClasses="flex items-center gap-x-2.5 justify-between p-2 gap-x-1 py-0"
              customLabel={
                <span className="text-sm font-normal leading-5 text-neutral">
                  {`${max_no_of_guest_standing || 0}`}
                </span>
              }
              startIconNode={
                <Image
                  alt="icon"
                  className="w-4 h-4 object-cover"
                  height={16}
                  loading="lazy"
                  src="/images/icons/people.svg"
                  width={16}
                />
              }
            />

            <LightLabelWithIcon
              customClasses="flex items-center gap-x-2.5 justify-between p-2 gap-x-1 py-0"
              customLabel={
                <span className="text-sm font-normal leading-5 text-neutral">
                  {`${max_no_of_guest_sitting || 0}`}
                </span>
              }
              startIconNode={
                <Image
                  alt="icon"
                  className="w-4 h-4 object-cover"
                  height={16}
                  loading="lazy"
                  src="/images/icons/seat.svg"
                  width={16}
                />
              }
            />
          </div>
        </div>
      </div>

      <a
        className="block w-full"
        href={venue_url || "#"}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Button
          className="rounded-lg p-0 flex w-full h-fit bg-white"
          variant="flat"
        >
          <LightLabelWithIcon
            customClasses="flex items-center gap-x-2.5 justify-center p-2 w-full py-1"
            customLabel={
              <span className="text-base font-semibold leading-6 text-primary-600">
                {btnText}
              </span>
            }
            startIconNode={<Envelope className="text-primary-600" size={18} />}
          />
        </Button>
      </a>
    </div>
  );
};
