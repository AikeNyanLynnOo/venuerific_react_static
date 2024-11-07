"use client";

import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Envelope, Star } from "@phosphor-icons/react";
import Image from "next/image";

import { VNFTypo } from "../VNFTypography/Typo";
import { LabelWithIcon } from "../atoms/LabelWithIcon";

import { VenueCardImgCarousel } from "./carousels/VenueCardImgCarousel";

interface EventPackageCardProps {
  isImgCarousel?: boolean;
  btnText?: string;
  isSuper?: boolean;
  src?: string;
  title?: string;
  address?: string;
  secondaryTitle?: string;
  secondaryText?: string;
  rating?: number;
  ratedBy?: number;
  price?: string;
  person?: number;
  seat?: number;

  // additional prop from frontend
  // isImgCarousel?: boolean;
  // btnText?: string;

  // backend props
  // super_venue_live?: boolean;
  // photos?: any[];
  // name?: string;
  // address?: string;
  // reviews_score?: number;
  // reviews_total?: number;
  // venue_price?: string;
  // max_no_of_guest_standing?: number;
  // max_no_of_guest_sitting?: number;
}

export const EventPackageCard = ({
  isSuper,
  src,
  title,
  address,
  secondaryTitle,
  secondaryText,
  rating,
  ratedBy,
  price,
  person,
  seat,
  isImgCarousel = true,
  btnText,
}: EventPackageCardProps) => {
  return (
    <div className="group/card rounded-lg border lg:border-none lg:hover:shadow-lg p-4">
      <div className="rounded-lg relative">
        {isSuper && (
          <Image
            unoptimized
            alt="event_img"
            className="w-auto object-cover h-[37px] absolute top-0 left-0 -translate-x-1 -translate-y-2 z-10 rounded-xl"
            height={37}
            loading="lazy"
            src="/images/icons/super_venue.webp"
            width={60}
          />
        )}
        {(isImgCarousel && (
          <VenueCardImgCarousel>
            <Image
              alt={src || ""}
              className="w-full object-cover h-[260px] z-0 rounded-xl"
              height={260}
              loading="lazy"
              src={src || ""}
              width="300"
            />
            <Image
              alt={src || ""}
              className="w-full object-cover h-[260px] z-0 rounded-xl"
              height={260}
              loading="lazy"
              src={src || ""}
              width="300"
            />
            <Image
              alt={src || ""}
              className="w-full object-cover h-[260px] z-0 rounded-xl"
              height={260}
              loading="lazy"
              src={src || ""}
              width="300"
            />
          </VenueCardImgCarousel>
        )) || (
          <Image
            alt={src || ""}
            className="w-full object-cover h-[260px] z-0 rounded-xl"
            height={260}
            loading="lazy"
            src={src || ""}
            width="300"
          />
        )}
      </div>
      <div className="flex flex-col gap-y-2 my-4">
        {title && (
          <VNFTypo
            className="block w-full"
            text={title}
            variant="textLgSemibold"
          />
        )}
        {address && (
          <VNFTypo
            className="block w-full text-neutral"
            text={address}
            variant="textSmRegular"
          />
        )}

        <div className="flex items-center justify-between">
          {price && (
            <VNFTypo
              className={`text-[#232323]`}
              text={price}
              variant="textSmSemibold"
            />
          )}

          <div className="flex items-center">
            {person && (
              <LabelWithIcon
                customClasses="gap-x-1 py-0"
                customIconClasses="w-4 h-4"
                customLabelClasses="text-neutral"
                label={{
                  text: `${person}`,
                  variant: "textSmRegular",
                }}
                startIcons={[
                  {
                    filePath: "/images/icons/people.svg",
                  },
                ]}
              />
            )}
            {seat && (
              <LabelWithIcon
                customClasses="gap-x-1 py-0"
                customIconClasses="w-4 h-4"
                customLabelClasses="text-neutral"
                label={{
                  text: `${seat}`,
                  variant: "textSmRegular",
                }}
                startIcons={[
                  {
                    filePath: "/images/icons/seat.svg",
                  },
                ]}
              />
            )}
          </div>
        </div>
        <Divider />
        <div className="flex justify-between items-start">
          <div className="w-8/12 flex flex-col gap-y-2">
            {secondaryTitle && (
              <VNFTypo
                className="truncate block w-full"
                text={secondaryTitle}
                variant="textLgSemibold"
              />
            )}
            {secondaryText && (
              <VNFTypo
                className="block w-full text-neutral"
                text={secondaryText}
                variant="textSmRegular"
              />
            )}
          </div>
          {rating && ratedBy && (
            <LabelWithIcon
              customClasses="w-fit px-0 py-0 flex-1 justify-end pt-1"
              customIconClasses="w-3 h-3"
              customLabelClasses="text-neutral"
              label={{
                text: `${rating} (${ratedBy})`,
                variant: "textSmRegular",
              }}
              startIcons={[
                {
                  IconNode: <Star color="#F8D830" size={14} weight="fill" />,
                },
              ]}
            />
          )}
        </div>
      </div>
      <div className="w-full min-h-[36px]">
        <Button
          // as={Link}
          className="rounded-lg p-0 border border-secondary-300 lg:hidden lg:group-hover/card:flex w-full h-fit hover:bg-primary-700 hover:bg-primary-600 bg-white border hover:border-1.5"
          // href={"#"}
        >
          <LabelWithIcon
            customClasses="w-full justify-center py-1 group/label"
            customIconClasses="w-5 h-5"
            customLabelClasses="text-secondary-700 group-hover/label:text-white"
            label={{
              text: btnText,
              variant: "textMdSemibold",
            }}
            startIcons={[
              {
                IconNode: (
                  <Envelope
                    className="text-secondary-700 group-hover/label:text-white"
                    size={20}
                  />
                ),
              },
            ]}
          />
        </Button>
      </div>
    </div>
  );
};
