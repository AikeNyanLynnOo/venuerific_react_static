"use client";

import { Button } from "@nextui-org/button";
import { Envelope, Star } from "@phosphor-icons/react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useDisclosure } from "@nextui-org/modal";
import { useState } from "react";

import { LightLabelWithIcon } from "../atoms/LightLabelWithIcon";

import { VenueInstantBookingForm } from "./forms/VenueInstantBookingForm";
import { CommonModal } from "./CommonModal";

import { VenueCardImgCarousel } from "@/components/molecules/carousels/VenueCardImgCarousel";

const DynamicImageWithErrorHandle = dynamic(() =>
  import("@/components/molecules/ImageWithErrorHandle").then(
    (mod) => mod.ImageWithErrorHandle,
  ),
);
const Divider = dynamic(() =>
  import("@nextui-org/divider").then((mod) => mod.Divider),
);

interface VenueCardProps {
  // additional prop from frontend
  isImgCarousel?: boolean;
  btnText?: string;
  canGoInstantBooking?: boolean;

  // backend props
  super_venue_live?: boolean;
  is_new_venue?: boolean;
  venue_url?: string;
  photos?: any[];
  name?: string;
  address?: string;
  reviews_score?: number;
  reviews_total?: number;
  venue_price?: string;
  max_no_of_guest_standing?: number;
  max_no_of_guest_sitting?: number;
}

export const VenueCard = ({
  // additional prop from frontend
  isImgCarousel = true,
  btnText = "Contact Now",
  canGoInstantBooking = false,

  // backend props
  super_venue_live,
  is_new_venue,
  venue_url,
  photos,
  name,
  address,
  reviews_score,
  reviews_total,
  venue_price,
  max_no_of_guest_standing,
  max_no_of_guest_sitting,
}: VenueCardProps) => {
  // modal
  const venueInstantBookingFormModal = useDisclosure();
  // whatsapp modal
  const whatsAppModal = useDisclosure();

  // is call
  const [isCall, setIsCall] = useState(false);

  return (
    <a
      className="group/card rounded-lg border lg:border-none lg:hover:shadow-lg p-4 block"
      href={venue_url || "#"}
      rel="noopener noreferrer"
      target="_blank"
    >
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

        {(photos && photos.length > 1 && (
          <VenueCardImgCarousel>
            {photos.map(({ id, image_url, image_title, image_alt }, index) => (
              <DynamicImageWithErrorHandle
                key={index}
                unoptimized
                alt={image_alt}
                className="w-full object-cover h-[260px] z-0 rounded-xl"
                height={260}
                loading="lazy"
                src={image_url || "/images/venues/venue1.webp"}
                width={300}
              />
            ))}
          </VenueCardImgCarousel>
        )) || (
          <DynamicImageWithErrorHandle
            unoptimized
            alt={(photos && photos[0] && photos[0].image_alt) || "carousel_img"}
            className="w-full object-cover h-[260px] z-0 rounded-xl"
            height={260}
            loading="lazy"
            src={photos && photos[0] && photos[0].image_url}
            width={300}
          />
        )}
      </div>

      <div className="flex flex-col gap-y-2 my-4 w-full">
        <span className="text-lg font-semibold leading-7 block w-full min-h-[28px] truncate">
          {name || ""}
        </span>

        <span className="text-sm font-normal leading-5 block w-full text-neutral min-h-[20px] truncate">
          {address || ""}
        </span>
        {(!(reviews_total === 0 && reviews_score === 0) && (
          <LightLabelWithIcon
            customClasses="flex items-center gap-x-2.5 justify-between p-2 w-fit px-0 py-0 min-h-[20px]"
            customLabel={
              <span className="text-sm font-normal leading-5 text-neutral">
                {`${reviews_score || ""} (${reviews_total || ""})`}
              </span>
            }
            startIconNode={<Star color="#F8D830" size={14} weight="fill" />}
          />
        )) || <div className="min-h-[20px]" />}

        {(venue_price ||
          max_no_of_guest_standing ||
          max_no_of_guest_sitting) && <Divider />}

        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold leading-5 text-[#232323] min-h-[20px]">
            {venue_price || ""}
          </span>

          <div className="flex items-center min-h-[20px]">
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

      <div className="w-full min-h-[36px]">
        <Button
          className="rounded-lg p-0 border border-secondary-300 lg:hidden lg:group-hover/card:flex w-full h-fit hover:bg-primary-700 hover:bg-primary-600 bg-white border hover:border-1.5"
          variant="flat"
          onClick={(e) => {
            if (canGoInstantBooking) {
              e.preventDefault();
              venueInstantBookingFormModal.onOpen();
            }
          }}
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
      </div>

      <CommonModal
        isOpen={venueInstantBookingFormModal.isOpen}
        placement={"bottom-center"}
        title="Instant Booking Enquiry"
        onOpenChange={venueInstantBookingFormModal.onOpenChange}
      >
        <div className="flex gap-x-3">
          <Image
            alt="room_img_alt"
            className="w-[74px] h-[74px] object-cover rounded-lg"
            height={260}
            loading="lazy"
            src="/images/venues/venue4.webp"
            width={300}
          />
          <div className="flex flex-col gap-y-1">
            <span className="text-base font-bold leading-6">
              Grand Park City Hall Singapore
            </span>
            <span className="text-secondary-400 text-sm font-medium leading-5">
              Little India, River Valey
            </span>
            <span className="text-sm font-normal leading-5">From $250</span>
            <span className="text-primary-600 text-sm font-semibold cursor-pointer mt-1 underline underline-offset-4">
              Check Availability
            </span>
          </div>
        </div>
        <Divider className="my-1" />
        {/* venue instant booking form */}
        <VenueInstantBookingForm
          closeModal={venueInstantBookingFormModal.onClose}
          handleClickCall={() => {
            setIsCall(true);
            whatsAppModal.onOpen();
          }}
          handleClickWhatsApp={() => {
            setIsCall(false);
            whatsAppModal.onOpen();
          }}
        />
      </CommonModal>
    </a>
  );
};
