"use client";

import { Button } from "@nextui-org/button";
import { Envelope } from "@phosphor-icons/react";

import { LightLabelWithIcon } from "../atoms/LightLabelWithIcon";

import { ImageWithErrorHandle } from "./ImageWithErrorHandle";

interface ContentServiceCardProps {
  btnText?: string;
  // backend props

  image_url?: string;
  image_alt?: string;
  image_title?: string;
  description?: string;
  title?: string;
  link?: string;
  click_track_link?: string;
  analytics?: any;
}

export const ContentServiceCard = ({
  // additional prop from frontend
  btnText = "Explore Vendors",
  // backend props
  image_url,
  image_alt,
  image_title,
  description,
  title,
  link,
  click_track_link,
  analytics,
}: ContentServiceCardProps) => {
  return (
    <div className="group/card rounded-lg border lg:border-none lg:hover:shadow-lg p-4">
      <div className="rounded-lg relative">
        <ImageWithErrorHandle
          unoptimized
          alt={image_alt || "service type image"}
          className="w-full object-cover h-[260px] z-0 rounded-lg"
          height={260}
          loading="lazy"
          src={image_url || ""}
          width={500}
        />
      </div>
      <div className="flex flex-col gap-y-2 my-4 w-full">
        <span className="block w-full min-h-[28px] truncate text-lg font-semibold leading-7">
          {title || ""}
        </span>
        <span className="block w-full text-secondary-700 min-h-[28px] text-sm font-normal leading-5">
          {description || ""}
        </span>
      </div>

      <div className="w-full min-h-[36px]">
        <a href={link || "#"}>
          <Button
            className="rounded-lg p-0 border border-secondary-300 lg:hidden lg:group-hover/card:flex w-full h-fit hover:bg-primary-700 hover:bg-primary-600 bg-white border hover:border-1.5 group/label"
            variant="flat"
          >
            <LightLabelWithIcon
              customClasses="flex items-center gap-x-2.5 justify-between p-2 w-fit justify-center py-1 group/label"
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
          <span className="sr-only"> Explore about service</span>
        </a>
      </div>
    </div>
  );
};
