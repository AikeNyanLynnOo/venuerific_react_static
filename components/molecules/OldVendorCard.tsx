"use client";

import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Envelope, Star } from "@phosphor-icons/react";

import { VNFTypo } from "../VNFTypography/Typo";
import { LabelWithIcon } from "../atoms/LabelWithIcon";

import ExpandableChipGroup from "./ChipGroup";
import { ImageWithErrorHandle } from "./ImageWithErrorHandle";

interface OldVendorCardProps {
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
export const OldVendorCard = ({
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
}: OldVendorCardProps) => {
  return (
    <div className="group/card rounded-lg border lg:border-none lg:hover:shadow-lg p-4 text-left sm:text-center">
      <div className="rounded-lg relative">
        {/* {active_promotions && (
          <Image
            alt="super_venue"
            className="w-auto object-cover h-[37px] absolute top-0 left-0 -translate-x-1 -translate-y-2 z-10 rounded-xl"
            height={37}
            loading="lazy"
            src="/images/icons/super_venue.webp"
            width={60}
          />
        )} */}

        <ImageWithErrorHandle
          alt={image_alt || "vendor image"}
          className="w-[180px] h-[180px] rounded-lg mx-auto object-cover z-0"
          height={180}
          loading="lazy"
          src={image_url || ""}
          width={180}
        />
      </div>
      <div className="flex flex-col gap-y-2 my-4 w-full">
        <VNFTypo
          className="block w-full min-h-[28px] truncate"
          text={name || ""}
          variant="textLgSemibold"
        />

        <VNFTypo
          className="block w-full text-neutral min-h-[20px] truncate"
          text={area || ""}
          variant="textSmRegular"
        />

        {(!(reviews_total === 0 && reviews_score === 0) && (
          <LabelWithIcon
            customClasses="w-fit px-0 py-0 min-h-[20px] mr-auto sm:mx-auto"
            customIconClasses="w-3 h-3"
            customLabelClasses="text-neutral"
            label={{
              text: `${reviews_score || ""} (${reviews_total || ""})`,
              variant: "textSmRegular",
            }}
            startIcons={[
              {
                IconNode: <Star color="#F8D830" size={14} weight="fill" />,
              },
            ]}
          />
        )) || <div className="min-h-[20px]" />}

        <Divider />

        <div className="flex flex-col gap-y-3 items-start sm:items-center justify-between">
          <VNFTypo
            className={`text-[#232323] min-h-[20px]`}
            text={price || ""}
            variant="textSmSemibold"
          />

          <div className="w-full min-h-[32px]">
            <ExpandableChipGroup chips={services || []} initiallyVisible={2} />
          </div>
        </div>
      </div>

      <div className="w-full min-h-[36px]">
        <a href={vendor_url || "#"}>
          <Button
            //   as={Link}
            className="rounded-lg p-0 border border-secondary-300 lg:hidden lg:group-hover/card:flex w-full h-fit hover:bg-primary-700 hover:bg-primary-600 bg-white border hover:border-1.5"
            //   href={vendor_url || "#"}
            variant="flat"
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
          <span className="sr-only"> Explore Vendors</span>
        </a>
      </div>
    </div>
  );
};
