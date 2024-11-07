"use client";

import { Button } from "@nextui-org/button";
import { Envelope } from "@phosphor-icons/react";
import dynamic from "next/dynamic";
import Image from "next/image";

import { LightLabelWithIcon } from "@/components/atoms/LightLabelWithIcon";

const DynamicImageWithErrorHandle = dynamic(() =>
  import("@/components/molecules/ImageWithErrorHandle").then(
    (mod) => mod.ImageWithErrorHandle,
  ),
);
const Divider = dynamic(() =>
  import("@nextui-org/divider").then((mod) => mod.Divider),
);

interface VenuePackageCardProps {
  // backend props
  id: string;
  room_id: string;
  photo_url?: string;
  name?: string;
  labels_text?: string;
  description?: string;
  price_text?: string;
  min_capacity?: number;
  max_capacity?: number;
  roomId: number;
  packageId: number;
  handleSelectPackage: any;
}

export const VenuePackageCard = ({
  // backend props
  id,
  room_id,
  photo_url,
  name,
  labels_text,
  description,
  price_text,
  min_capacity,
  max_capacity,
  roomId,
  packageId,
  handleSelectPackage,
}: VenuePackageCardProps) => {
  return (
    <div className="group/card rounded-lg border lg:border-none lg:hover:shadow-lg p-4 block">
      <div className="rounded-lg relative">
        <DynamicImageWithErrorHandle
          unoptimized
          alt={"venue package card"}
          className="w-full object-cover h-[260px] z-0 rounded-xl"
          height={260}
          loading="lazy"
          src={photo_url || ""}
          width={300}
        />
      </div>

      <div className="flex flex-col gap-y-2 mt-4 w-full">
        <span className="text-lg font-semibold leading-7 block w-full min-h-[28px] truncate">
          {name || ""}
        </span>

        <span className="text-base font-normal leading-6 w-full text-secondary-600 min-h-[60px] max-h-[120px] overflow-y-scroll custom-scrollbar">
          {description || ""}
        </span>

        <div className="flex items-center justify-between mt-1">
          <span className="text-sm font-semibold leading-5 text-[#232323] min-h-[20px]">
            {price_text || ""}
          </span>

          <div className="flex items-center min-h-[20px]">
            <LightLabelWithIcon
              customClasses="flex items-center gap-x-2.5 justify-between p-2 gap-x-1 py-0"
              customLabel={
                <span className="text-sm font-normal leading-5 text-neutral">
                  {`${min_capacity || 0} - ${max_capacity || 0}`}
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
          </div>
        </div>
        <div className="w-full min-h-[36px] mt-3">
          {(`${roomId || ""}` === `${room_id || ""}` &&
            `${packageId || ""}` === `${id || ""}` && (
              <Button
                className="rounded-lg p-0 w-full h-fit bg-primary-200"
                variant="flat"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <LightLabelWithIcon
                  customClasses="flex items-center gap-x-2.5 justify-center p-2 w-full py-1 group/label"
                  customLabel={
                    <span className="text-sm font-semibold leading-6 text-primary-600">
                      Selected
                    </span>
                  }
                />
              </Button>
            )) || (
            <Button
              className="rounded-lg p-0 border border-secondary-300 lg:hidden lg:group-hover/card:flex w-full h-fit hover:bg-primary-700 hover:bg-primary-600 bg-white border hover:border-1.5"
              variant="flat"
              onClick={(e) => {
                e.preventDefault();
                handleSelectPackage({
                  roomId: room_id,
                  packageId: id,
                });
              }}
            >
              <LightLabelWithIcon
                customClasses="flex items-center gap-x-2.5 justify-center p-2 w-full py-1 group/label"
                customLabel={
                  <span className="text-sm font-semibold leading-6 text-secondary-700 group-hover/label:text-white">
                    Select This Package
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
          )}
        </div>
      </div>
    </div>
  );
};
