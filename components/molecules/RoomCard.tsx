import Image from "next/image";
import { Chip } from "@nextui-org/chip";
import { useState } from "react";
import { CaretDown, CaretUp } from "@phosphor-icons/react";

import { LightLabelWithIcon } from "../atoms/LightLabelWithIcon";

import { ImageWithErrorHandle } from "./ImageWithErrorHandle";
import { VenueCardImgCarousel } from "./carousels/VenueCardImgCarousel";

import { COLORS } from "@/styles/colors";

interface RoomCardProps {
  id: number;
  photos?: any[];
  name?: string;
  type?: string;
  min_capacity?: number;
  max_capacity?: number;
  price_class?: string;
  price_text?: string;
  price_minimum_spend?: string;
  price_currency_minimum_spend?: string;
  price_discount_up_to?: string;
  link?: string;
  packages: any;
  handleSelectPackage: any;
  handleSelectRoom: any;
  roomId: number;
  packageId: number;
}

export const RoomCard = ({
  id,
  photos,
  name,
  type,
  min_capacity,
  max_capacity,
  price_class,
  price_text,
  price_minimum_spend,
  price_currency_minimum_spend,
  price_discount_up_to,
  link,
  packages,
  handleSelectPackage,
  handleSelectRoom,
  roomId,
  packageId,
}: RoomCardProps) => {
  const [isPackageOpen, setIsPackageOpen] = useState(false);

  return (
    <div className="border rounded-xl p-3">
      <div className="w-full flex flex-col md:flex-row gap-3">
        <div className="w-full md:w-5/12 lg:w-3/6 xl:w-2/6 rounded-xl">
          {(photos && photos.length > 1 && (
            <VenueCardImgCarousel>
              {photos.map(({ photo_url }, index) => (
                <ImageWithErrorHandle
                  key={index}
                  unoptimized
                  alt="room_img_alt"
                  className="w-full object-cover h-[200px] z-0 rounded-xl"
                  height={260}
                  loading="lazy"
                  src={photo_url || "/images/venues/venue1.webp"}
                  width={200}
                />
              ))}
            </VenueCardImgCarousel>
          )) || (
            <ImageWithErrorHandle
              unoptimized
              alt="room_img_alt"
              className="w-full object-cover h-[200px] z-0 rounded-xl"
              height={260}
              loading="lazy"
              src={(photos && photos[0].photo_url) || ""}
              width={300}
            />
          )}
        </div>
        <div className="flex flex-col justify-between flex-1">
          <div>
            <div className="text-lg font-semibold leading-8">{name || ""}</div>
            <div className="flex items-center space-x-2 my-2">
              <LightLabelWithIcon
                customClasses="flex items-center gap-x-2.5 "
                customLabel={
                  <span className="text-sm font-normal leading-5">
                    {`${min_capacity} - ${max_capacity}` || ""}
                  </span>
                }
                startIconNode={
                  <Image
                    alt="icon"
                    className="h-[18px] w-[18px] mt-0.5 object-contain"
                    height={24}
                    loading="lazy"
                    src={`/images/icons/people.svg`}
                    width={24}
                  />
                }
              />
              <span className="text-lg text-secondary-300 font-bold">•</span>
              <span className="text-sm font-normal leading-5">
                {type || ""}
              </span>
            </div>
          </div>
          <div>
            {price_discount_up_to && (
              <Chip
                classNames={{
                  base: "border bg-[#FDF4FF] border-[#BA24D5] p-2",
                  content: "text-[#BA24D5] text-base font-medium leading-6",
                }}
                color="secondary"
                startContent={
                  <Image
                    alt="icon"
                    className="h-[18px] w-[18px] mt-0.5"
                    height={24}
                    loading="lazy"
                    src="/images/icons/discount_percent.svg"
                    width={24}
                  />
                }
                variant="flat"
              >
                <span>Save Up To {price_discount_up_to}</span>
              </Chip>
            )}

            <div className="text-sm font-semibold leading-5 mt-1">
              Starts from {price_text || 0}
            </div>

            {/* <div className="text-sm font-normal leading-5 text-secondary-500 mb-4">
                  Minimum spend starts from {price_currency_minimum_spend}
                  {price_minimum_spend || 0}.
                </div> */}
            <div className="flex justify-between items-center space-x-2 mt-4">
              <a
                className="w-full text-center bg-primary-600 text-white py-2 px-4 rounded-lg text-sm font-semibold leading-5"
                href={link || ""}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="hidden md:inline mr-1">See</span>Details
              </a>
              {(`${roomId || ""}` === `${id || ""}` && (
                <button className="w-full text-center py-2 px-4 rounded-lg bg-primary-200 text-sm font-semibold leading-6 text-primary-600">
                  Selected
                </button>
              )) || (
                <button
                  className="w-full border border-secondary-200 text-secondary-700 py-2 px-4 rounded-lg text-sm font-semibold leading-5"
                  onClick={() => handleSelectRoom(id)}
                >
                  <span className="hidden md:inline">Enquire Now</span>
                  <span className="inline md:hidden">Enquire</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {packages && packages.length > 0 && (
        <>
          <button
            className="w-full"
            onClick={() => setIsPackageOpen(!isPackageOpen)}
          >
            <div className="w-full flex justify-between items-center mt-3">
              <span className="text-sm font-semibold leading-5">
                Packages Available ({packages.length})
              </span>
              {(isPackageOpen && (
                <CaretUp color={COLORS.primary[600]} size={20} weight="bold" />
              )) || (
                <CaretDown
                  color={COLORS.primary[600]}
                  size={20}
                  weight="bold"
                />
              )}
            </div>
          </button>
          {isPackageOpen && (
            <div className="w-full flex flex-col gap-y-4 mt-4">
              {packages.map((pkg: any, index: number) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 flex flex-col md:flex-row justify-between items-center md:items-start"
                >
                  <div className="flex flex-col space-y-2 w-full md:w-3/4">
                    <h2 className="text-lg font-semibold">{pkg.name || ""}</h2>
                    <div className="flex items-center gap-x-7 mt-1">
                      <span className="text-sm font-semibold leading-5 text-[#232323] min-h-[20px]">
                        {pkg.price || ""}
                      </span>

                      <div className="flex items-center min-h-[20px]">
                        <LightLabelWithIcon
                          customClasses="flex items-center gap-x-2.5 justify-between p-2 gap-x-1 py-0"
                          customLabel={
                            <span className="text-sm font-normal leading-5 text-neutral">
                              {`${pkg.min_capacity || 0} - ${pkg.max_capacity || 0}`}
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
                    <p className="text-base font-normal leading-6 text-secondary-600 max-h-[120px] overflow-y-scroll custom-scrollbar">
                      {pkg.description || ""}
                    </p>
                  </div>
                  {(`${roomId || ""}` === `${pkg.room_id || ""}` &&
                    `${packageId || ""}` === `${pkg.id || ""}` && (
                      <button className="w-full mt-4 md:mt-0 md:w-fit text-center py-2 px-4 rounded-lg bg-primary-200 text-sm font-semibold leading-6 text-primary-600">
                        Selected
                      </button>
                    )) || (
                    <button
                      className="w-full mt-4 md:mt-0 md:w-fit text-center bg-primary-600 text-white py-2 px-4 rounded-lg text-sm font-semibold leading-5"
                      onClick={() =>
                        handleSelectPackage({
                          roomId: pkg.room_id,
                          packageId: pkg.id,
                        })
                      }
                    >
                      Select Package
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};
