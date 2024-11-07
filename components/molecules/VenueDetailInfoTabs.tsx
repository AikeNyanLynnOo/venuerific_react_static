import { Divider } from "@nextui-org/divider";
import { Tab, Tabs } from "@nextui-org/tabs";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import Image from "next/image";
import { Fragment, useMemo, useRef, useState } from "react";

import { CustomAccordion } from "../atoms/CustomAccordion";
import { LightLabelWithIcon } from "../atoms/LightLabelWithIcon";
import { MapIframe } from "../maps/MapIframe";

import { RoomCard } from "./RoomCard";
import { VenuePackageCard } from "./cards/VenuePackageCard";
import { ReviewTabs } from "./tabs/ReviewTabs";

import { useVenueDetailStore } from "@/store/venue-detail-store";
import { COLORS } from "@/styles/colors";

interface VenueDetailInfoTabsProps {
  roomId: any;
  packageId: any;
  setRoomId: any;
  setPackageId: any;
  handleRoomChangeWithValue: (roomId: any) => void;
}

export const VenueDetailInfoTabs = ({
  roomId,
  packageId,
  setRoomId,
  setPackageId,
  handleRoomChangeWithValue,
}: VenueDetailInfoTabsProps) => {
  const [selected, setSelected] = useState("about");
  const [showEventVenueDetails, setShowEventVenueDetails] = useState(true);
  const [showMoreReviews, setShowMoreReviews] = useState(false);
  const roomsRef = useRef<any>(null);
  const reviewsRef = useRef<any>(null);

  const { breadcrumb, venue, current_user, setVenueFavourite } =
    useVenueDetailStore();
  const { attributes } = venue || {};

  const visibleReviews = useMemo(() => {
    if (showMoreReviews) {
      return (attributes && attributes.reviews) || [];
    } else {
      return (
        (attributes && attributes.reviews && attributes.reviews.slice(0, 4)) ||
        []
      );
    }
  }, [showMoreReviews, attributes]);

  // When user click select this package || Select Package from room card
  const handleSelectPackage = ({
    roomId,
    packageId,
  }: {
    roomId: string;
    packageId: string;
  }) => {
    handleRoomChangeWithValue(roomId);
    setPackageId(packageId);
  };

  // When user click Enquire now
  const handleSelectRoom = (roomId: any) => {
    handleRoomChangeWithValue(roomId);
  };

  return (
    <Tabs
      aria-label="Options"
      // sticky top-[81px] z-20
      className="bg-white border-b px-0 w-full block max-w-screen-2xl mx-auto"
      classNames={{
        tabList: "p-0 flex gap-x-7 w-fit",
        cursor: "w-full h-0.5 bg-primary-600",
        tab: "h-12 min-w-fit p-0",
        tabContent: "min-w-fit p-0",
      }}
      color="primary"
      selectedKey={selected}
      variant="underlined"
      onSelectionChange={(key) => {
        setSelected(`${key}`);
        switch (key) {
          case "rooms":
            {
              setTimeout(() => {
                roomsRef &&
                  roomsRef.current &&
                  roomsRef.current.scrollIntoView({
                    behavior: "smooth",
                  });
              }, 50);
            }
            break;
          case "reviews":
            {
              setTimeout(() => {
                reviewsRef &&
                  reviewsRef.current &&
                  reviewsRef.current.scrollIntoView({
                    behavior: "smooth",
                  });
              }, 50);
            }
            break;
          default:
        }
      }}
    >
      <Tab
        key="about"
        className="p-0 flex"
        title={
          <LightLabelWithIcon
            customClasses="px-0"
            customLabel={
              <span
                className={`text-base font-semibold leading-6 ${selected === "about" ? "text-primary-700" : "text-secondary-500"}`}
              >
                About
              </span>
            }
          />
        }
      >
        {/* About */}
        <div className="py-4">
          <div>
            <h2 className="text-xl font-semibold leading-8">
              About Event Venue
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 my-4">
              {attributes &&
                attributes.about_icon &&
                attributes.about_icon.length > 0 &&
                attributes.about_icon.map(
                  (
                    {
                      name,
                      icon,
                      description,
                    }: {
                      name: string;
                      icon: string;
                      description: string;
                    },
                    index: number,
                  ) => (
                    <div key={index} className="flex items-start gap-x-2">
                      <Image
                        alt="icon"
                        className="h-[18px] w-[18px] mt-1"
                        height={24}
                        loading="lazy"
                        src={icon}
                        width={24}
                      />

                      <div>
                        <p className="font-semibold">{name}</p>
                        <p>{description}</p>
                      </div>
                    </div>
                  ),
                )}
            </div>
          </div>
          <Divider className="my-6" />
          <div className="p-4 bg-secondary-100 rounded-xl">
            <h2 className="text-xl font-semibold leading-8">
              What This Venue Offers
            </h2>
            {showEventVenueDetails && (
              <>
                {attributes &&
                  attributes.amenities &&
                  attributes.amenities.length > 0 && (
                    <div className="my-4">
                      {/* title */}
                      <h3 className="text-lg font-semibold leading-7">
                        Amenities
                      </h3>

                      {/* grid items */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-2">
                        {attributes.amenities.map(
                          (
                            { name, icon }: { name: string; icon: string },
                            index: number,
                          ) => (
                            <LightLabelWithIcon
                              key={index}
                              customClasses="px-0 flex items-center gap-x-2"
                              customLabel={
                                <span className="text-base font-normal leading-6 text-secondary-600">
                                  {name}
                                </span>
                              }
                              startIconNode={
                                <Image
                                  alt="icon"
                                  className="h-[18px] w-[18px] mt-0.5"
                                  height={24}
                                  loading="lazy"
                                  src={icon}
                                  width={24}
                                />
                              }
                            />
                          ),
                        )}
                      </div>
                    </div>
                  )}

                {attributes &&
                  attributes.accessibility_display &&
                  attributes.accessibility_display.length > 0 && (
                    <div className="my-4">
                      {/* title */}
                      <h3 className="text-lg font-semibold leading-7">
                        Accessibility
                      </h3>

                      {/* grid items */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-2">
                        {attributes.accessibility_display.map(
                          (
                            { name, icon }: { name: string; icon: string },
                            index: number,
                          ) => (
                            <LightLabelWithIcon
                              key={index}
                              customClasses="px-0 flex items-center gap-x-2"
                              customLabel={
                                <span className="text-base font-normal leading-6 text-secondary-600">
                                  {name}
                                </span>
                              }
                              startIconNode={
                                <Image
                                  alt="icon"
                                  className="h-[18px] w-[18px] mt-0.5"
                                  height={24}
                                  loading="lazy"
                                  src={icon}
                                  width={24}
                                />
                              }
                            />
                          ),
                        )}
                      </div>
                    </div>
                  )}

                {attributes &&
                  attributes.other_accessibilities &&
                  attributes.other_accessibilities.length > 0 && (
                    <div className="my-4">
                      {/* title */}
                      <h3 className="text-lg font-semibold leading-7">
                        Other Accessibilities
                      </h3>

                      {/* grid items */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-2">
                        {attributes.other_accessibilities.map(
                          (
                            { name, icon }: { name: string; icon: string },
                            index: number,
                          ) => (
                            <LightLabelWithIcon
                              key={index}
                              customClasses="px-0 flex items-center gap-x-2"
                              customLabel={
                                <span className="text-base font-normal leading-6 text-secondary-600">
                                  {name}
                                </span>
                              }
                              startIconNode={
                                <Image
                                  alt="icon"
                                  className="h-[18px] w-[18px] mt-0.5"
                                  height={24}
                                  loading="lazy"
                                  src={icon}
                                  width={24}
                                />
                              }
                            />
                          ),
                        )}
                      </div>
                    </div>
                  )}

                {attributes &&
                  attributes.cuisine_type &&
                  attributes.cuisine_type.length > 0 && (
                    <div className="my-4">
                      {/* title */}
                      <h3 className="text-lg font-semibold leading-7">
                        Food and Beverages
                      </h3>

                      {/* grid items */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-2">
                        {attributes.cuisine_type.map(
                          (
                            { name, icon }: { name: string; icon: string },
                            index: number,
                          ) => (
                            <LightLabelWithIcon
                              key={index}
                              customClasses="px-0 flex items-center gap-x-2"
                              customLabel={
                                <span className="text-base font-normal leading-6 text-secondary-600">
                                  {name}
                                </span>
                              }
                              startIconNode={
                                <Image
                                  alt="icon"
                                  className="h-[18px] w-[18px] mt-0.5"
                                  height={24}
                                  loading="lazy"
                                  src={icon}
                                  width={24}
                                />
                              }
                            />
                          ),
                        )}
                      </div>
                    </div>
                  )}
              </>
            )}

            <LightLabelWithIcon
              customClasses="px-0 flex items-center gap-x-2 cursor-pointer mt-4"
              customLabel={
                <span className="text-primary-700 text-sm font-semibold leading-5">
                  See {(showEventVenueDetails && "Less") || "More"}
                </span>
              }
              endIconNode={
                (showEventVenueDetails && (
                  <CaretUp color={COLORS.primary[600]} size={20} />
                )) || <CaretDown color={COLORS.primary[700]} size={20} />
              }
              onClick={() => setShowEventVenueDetails(!showEventVenueDetails)}
            />
          </div>
          {attributes && attributes.rules && attributes.rules.length > 0 && (
            <div className="mt-5">
              <h2 className="text-xl font-semibold leading-8">Rules</h2>
              {attributes.rules.map(
                (
                  { name, icon }: { name: string; icon: string },
                  index: number,
                ) => (
                  <LightLabelWithIcon
                    key={index}
                    customClasses="px-0 flex items-center gap-x-2"
                    customLabel={
                      <span className="text-base font-normal leading-6 text-secondary-600">
                        {name}
                      </span>
                    }
                    startIconNode={
                      <Image
                        alt="icon"
                        className="h-[18px] w-[18px] mt-0.5"
                        height={24}
                        loading="lazy"
                        src={icon}
                        width={24}
                      />
                    }
                  />
                ),
              )}
            </div>
          )}

          {attributes &&
            attributes.availability &&
            attributes.availability.length > 0 && (
              <div className="mt-5">
                <h2 className="text-xl font-semibold leading-8">
                  Availability
                </h2>

                {attributes.availability.map(
                  (
                    { name, icon }: { name: string; icon: string },
                    index: number,
                  ) => (
                    <LightLabelWithIcon
                      key={index}
                      customClasses="px-0 flex items-center gap-x-2 mt-3"
                      customLabel={
                        <span className="text-base font-normal leading-6 text-secondary-600">
                          {name}
                        </span>
                      }
                      startIconNode={
                        <Image
                          alt="icon"
                          className="h-[18px] w-[18px] mt-0.5"
                          height={24}
                          loading="lazy"
                          src={icon}
                          width={24}
                        />
                      }
                    />
                  ),
                )}
              </div>
            )}

          {attributes && attributes.description && (
            <Fragment>
              <Divider className="my-6" />
              <div className="mt-5">
                <h2 className="text-xl font-semibold leading-8">Description</h2>

                <div
                  dangerouslySetInnerHTML={{
                    __html: (attributes && attributes.description) || "",
                  }}
                  className="text-secondary-600 text-base font-normal leading-6 mt-3"
                />
              </div>
            </Fragment>
          )}
          {attributes && attributes.price_info && (
            <Fragment>
              <Divider className="my-6" />
              <div className="mt-5">
                <h2 className="text-xl font-semibold leading-8">
                  Price Information
                </h2>

                <div
                  dangerouslySetInnerHTML={{
                    __html: (attributes && attributes.price_info) || "",
                  }}
                  className="text-secondary-600 text-base font-normal leading-6 mt-3"
                />
              </div>
            </Fragment>
          )}
          {attributes && attributes.additional_information_on_price && (
            <Fragment>
              <Divider className="my-6" />
              <div className="mt-5">
                <h2 className="text-xl font-semibold leading-8">
                  Additional Information On Price
                </h2>

                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      (attributes &&
                        attributes.additional_information_on_price) ||
                      "",
                  }}
                  className="text-secondary-600 text-base font-normal leading-6 mt-3"
                />
              </div>
            </Fragment>
          )}
          {attributes && attributes.cancellation_policy && (
            <Fragment>
              <Divider className="my-6" />
              <div className="mt-5">
                <h2 className="text-xl font-semibold leading-8">
                  Cancellation Policy
                </h2>

                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      (attributes && attributes.cancellation_policy) || "",
                  }}
                  className="text-secondary-600 text-base font-normal leading-6 mt-3"
                />
              </div>
            </Fragment>
          )}

          {attributes &&
            attributes.venue_all_packages &&
            attributes.venue_all_packages.length > 0 && (
              <Fragment>
                <Divider className="my-6" />
                {/* Venue packages */}
                <div>
                  <h2 className="text-xl font-semibold leading-8">
                    Venue Packages
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-4">
                    {attributes.venue_all_packages.map(
                      (venue: any, index: number) => (
                        <VenuePackageCard
                          key={index}
                          {...venue}
                          handleSelectPackage={handleSelectPackage}
                          packageId={packageId}
                          roomId={roomId}
                        />
                      ),
                    )}
                  </div>
                </div>
              </Fragment>
            )}

          {/* Rooms */}
          {attributes && attributes.rooms && attributes.rooms.length > 0 && (
            <div className="mt-5">
              <h2 className="text-xl font-semibold leading-8">Rooms</h2>
              <div className="my-4 flex flex-col gap-y-3">
                {attributes.rooms.map((room: any, index: number) => (
                  <RoomCard
                    key={index}
                    {...room}
                    handleSelectPackage={handleSelectPackage}
                    handleSelectRoom={handleSelectRoom}
                    packageId={packageId}
                    roomId={roomId}
                  />
                ))}
              </div>
            </div>
          )}

          {attributes &&
            attributes.documents &&
            attributes.documents.length > 0 && (
              <Fragment>
                <Divider className="my-6" />
                {/* Promo, Menu and Floor Plan */}
                <div>
                  <h2 className="text-xl font-semibold leading-8">
                    Promo, Menu and Floor Plan
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                    {attributes.documents.map(
                      (
                        {
                          link,
                          thumbnail,
                          filename,
                          filesize,
                        }: {
                          link: string;
                          thumbnail: string;
                          filename: string;
                          filesize: string;
                        },
                        index: number,
                      ) => (
                        <a
                          key={index}
                          className="w-full border flex gap-x-3 rounded-lg p-2 cursor-pointer"
                          href={link}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                            <Image
                              alt="icon"
                              className="h-6 w-6 object-contain"
                              height={24}
                              loading="lazy"
                              src={thumbnail}
                              width={24}
                            />
                          </div>
                          <div className="flex-1 flex flex-col justify-center">
                            <span className="text-sm font-semibold leading-5">
                              {filename}
                            </span>
                            <span className="text-sm font-normal leading-5 text-secondary-400">
                              {filesize}
                            </span>
                          </div>
                        </a>
                      ),
                    )}
                  </div>
                </div>
              </Fragment>
            )}

          {attributes &&
            attributes.location_details &&
            attributes.location_details.iframe_src && (
              <Fragment>
                <Divider className="my-6" />
                {/* Location */}
                <div>
                  <h2 className="text-xl font-semibold leading-8">Location</h2>
                  <MapIframe
                    iframe_src={attributes.location_details.iframe_src}
                    iframe_title={
                      attributes.location_details.iframe_title || ""
                    }
                  />
                </div>
              </Fragment>
            )}

          {attributes &&
            attributes.faqs &&
            Object.keys(attributes.faqs).length > 0 && (
              <Fragment>
                <Divider className="my-6" />
                {/* FAQ */}
                <div>
                  <h2 className="text-xl font-semibold leading-8">
                    Frequently Asked Questions
                  </h2>

                  <div className="mt-4 px-0">
                    <CustomAccordion faqs={attributes.faqs} />
                  </div>
                </div>
              </Fragment>
            )}

          <Fragment>
            <Divider className="my-6" />
            {/* Reviews */}
            <div>
              <ReviewTabs
                google_place_id={
                  (attributes && attributes.google_place_id) || ""
                }
                google_reviews={(attributes && attributes.google_reviews) || []}
                reviews={(attributes && attributes.reviews) || []}
                setShowMoreReviews={setShowMoreReviews}
                showMoreReviews={showMoreReviews}
                visibleReviews={visibleReviews}
              />
            </div>
          </Fragment>
        </div>
      </Tab>
      {attributes && attributes.rooms && attributes.rooms.length > 0 && (
        <Tab
          key="rooms"
          className="p-0 flex"
          title={
            <LightLabelWithIcon
              customClasses="px-0"
              customLabel={
                <span
                  className={`text-base font-semibold leading-6 ${selected === "rooms" ? "text-primary-700" : "text-secondary-500"}`}
                >
                  Rooms
                </span>
              }
            />
          }
        >
          {/* Rooms */}
          <div className="py-4">
            <div>
              <h2 className="text-xl font-semibold leading-8">
                About Event Venue
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 my-4">
                {attributes &&
                  attributes.about_icon &&
                  attributes.about_icon.length > 0 &&
                  attributes.about_icon.map(
                    (
                      {
                        name,
                        icon,
                        description,
                      }: {
                        name: string;
                        icon: string;
                        description: string;
                      },
                      index: number,
                    ) => (
                      <div key={index} className="flex items-start gap-x-2">
                        <Image
                          alt="icon"
                          className="h-[18px] w-[18px] mt-1"
                          height={24}
                          loading="lazy"
                          src={icon}
                          width={24}
                        />

                        <div>
                          <p className="font-semibold">{name}</p>
                          <p>{description}</p>
                        </div>
                      </div>
                    ),
                  )}
              </div>
            </div>
            <Divider className="my-6" />
            <div>
              <h2 className="text-xl font-semibold leading-8">
                What This Venue Offers
              </h2>
              {showEventVenueDetails && (
                <>
                  {attributes &&
                    attributes.amenities &&
                    attributes.amenities.length > 0 && (
                      <div className="my-4">
                        {/* title */}
                        <h3 className="text-lg font-semibold leading-7">
                          Amenities
                        </h3>
                        {/* grid items */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-2">
                          {attributes.amenities.map(
                            (
                              { name, icon }: { name: string; icon: string },
                              index: number,
                            ) => (
                              <LightLabelWithIcon
                                key={index}
                                customClasses="px-0 flex items-center gap-x-2"
                                customLabel={
                                  <span className="text-base font-normal leading-6 text-secondary-600">
                                    {name}
                                  </span>
                                }
                                startIconNode={
                                  <Image
                                    alt="icon"
                                    className="h-[18px] w-[18px] mt-0.5"
                                    height={24}
                                    loading="lazy"
                                    src={icon}
                                    width={24}
                                  />
                                }
                              />
                            ),
                          )}
                        </div>
                      </div>
                    )}

                  {attributes &&
                    attributes.accessibility_display &&
                    attributes.accessibility_display.length > 0 && (
                      <div className="my-4">
                        {/* title */}
                        <h3 className="text-lg font-semibold leading-7">
                          Accessibility
                        </h3>
                        {/* grid items */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-2">
                          {attributes.accessibility_display.map(
                            (
                              { name, icon }: { name: string; icon: string },
                              index: number,
                            ) => (
                              <LightLabelWithIcon
                                key={index}
                                customClasses="px-0 flex items-center gap-x-2"
                                customLabel={
                                  <span className="text-base font-normal leading-6 text-secondary-600">
                                    {name}
                                  </span>
                                }
                                startIconNode={
                                  <Image
                                    alt="icon"
                                    className="h-[18px] w-[18px] mt-0.5"
                                    height={24}
                                    loading="lazy"
                                    src={icon}
                                    width={24}
                                  />
                                }
                              />
                            ),
                          )}
                        </div>
                      </div>
                    )}

                  {attributes &&
                    attributes.other_accessibilities &&
                    attributes.other_accessibilities.length > 0 && (
                      <div className="my-4">
                        {/* title */}
                        <h3 className="text-lg font-semibold leading-7">
                          Other Accessibilities
                        </h3>

                        {/* grid items */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-2">
                          {attributes.other_accessibilities.map(
                            (
                              { name, icon }: { name: string; icon: string },
                              index: number,
                            ) => (
                              <LightLabelWithIcon
                                key={index}
                                customClasses="px-0 flex items-center gap-x-2"
                                customLabel={
                                  <span className="text-base font-normal leading-6 text-secondary-600">
                                    {name}
                                  </span>
                                }
                                startIconNode={
                                  <Image
                                    alt="icon"
                                    className="h-[18px] w-[18px] mt-0.5"
                                    height={24}
                                    loading="lazy"
                                    src={icon}
                                    width={24}
                                  />
                                }
                              />
                            ),
                          )}
                        </div>
                      </div>
                    )}
                  {attributes &&
                    attributes.cuisine_type &&
                    attributes.cuisine_type.length > 0 && (
                      <div className="my-4">
                        {/* title */}

                        <h3 className="text-lg font-semibold leading-7">
                          Food and Beverages
                        </h3>

                        {/* grid items */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-2">
                          {attributes.cuisine_type.map(
                            (
                              { name, icon }: { name: string; icon: string },
                              index: number,
                            ) => (
                              <LightLabelWithIcon
                                key={index}
                                customClasses="px-0 flex items-center gap-x-2"
                                customLabel={
                                  <span className="text-base font-normal leading-6 text-secondary-600">
                                    {name}
                                  </span>
                                }
                                startIconNode={
                                  <Image
                                    alt="icon"
                                    className="h-[18px] w-[18px] mt-0.5"
                                    height={24}
                                    loading="lazy"
                                    src={icon}
                                    width={24}
                                  />
                                }
                              />
                            ),
                          )}
                        </div>
                      </div>
                    )}
                </>
              )}

              <LightLabelWithIcon
                customClasses="px-0 flex items-center gap-x-2 cursor-pointer mt-4"
                customLabel={
                  <span className="text-primary-700 text-sm font-semibold leading-5">
                    See {(showEventVenueDetails && "Less") || "More"}
                  </span>
                }
                endIconNode={
                  (showEventVenueDetails && (
                    <CaretUp color={COLORS.primary[600]} size={20} />
                  )) || <CaretDown color={COLORS.primary[700]} size={20} />
                }
                onClick={() => setShowEventVenueDetails(!showEventVenueDetails)}
              />
            </div>
            {attributes && attributes.rules && attributes.rules.length > 0 && (
              <div className="mt-5">
                <h2 className="text-xl font-semibold leading-8">Rules</h2>

                {attributes.rules.map(
                  (
                    { name, icon }: { name: string; icon: string },
                    index: number,
                  ) => (
                    <LightLabelWithIcon
                      key={index}
                      customClasses="px-0 flex items-center gap-x-2"
                      customLabel={
                        <span className="text-base font-normal leading-6 text-secondary-600">
                          {name}
                        </span>
                      }
                      startIconNode={
                        <Image
                          alt="icon"
                          className="h-[18px] w-[18px] mt-0.5"
                          height={24}
                          loading="lazy"
                          src={icon}
                          width={24}
                        />
                      }
                    />
                  ),
                )}
              </div>
            )}

            {attributes &&
              attributes.availability &&
              attributes.availability.length > 0 && (
                <div className="mt-5">
                  <h2 className="text-xl font-semibold leading-8">
                    Availability
                  </h2>

                  {attributes.availability.map(
                    (
                      { name, icon }: { name: string; icon: string },
                      index: number,
                    ) => (
                      <LightLabelWithIcon
                        key={index}
                        customClasses="px-0 flex items-center gap-x-2 mt-3"
                        customLabel={
                          <span className="text-base font-normal leading-6 text-secondary-600">
                            {name}
                          </span>
                        }
                        startIconNode={
                          <Image
                            alt="icon"
                            className="h-[18px] w-[18px] mt-0.5"
                            height={24}
                            loading="lazy"
                            src={icon}
                            width={24}
                          />
                        }
                      />
                    ),
                  )}
                </div>
              )}

            {attributes && attributes.description && (
              <Fragment>
                <Divider className="my-6" />
                <div className="mt-5">
                  <h2 className="text-xl font-semibold leading-8">
                    Description
                  </h2>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: (attributes && attributes.description) || "",
                    }}
                    className="text-secondary-600 text-base font-normal leading-6 mt-3"
                  />
                </div>
              </Fragment>
            )}
            {attributes && attributes.price_info && (
              <Fragment>
                <Divider className="my-6" />
                <div className="mt-5">
                  <h2 className="text-xl font-semibold leading-8">
                    Price Information
                  </h2>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: (attributes && attributes.price_info) || "",
                    }}
                    className="text-secondary-600 text-base font-normal leading-6 mt-3"
                  />
                </div>
              </Fragment>
            )}
            {attributes && attributes.additional_information_on_price && (
              <Fragment>
                <Divider className="my-6" />
                <div className="mt-5">
                  <h2 className="text-xl font-semibold leading-8">
                    Additional Information On Price
                  </h2>

                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        (attributes &&
                          attributes.additional_information_on_price) ||
                        "",
                    }}
                    className="text-secondary-600 text-base font-normal leading-6 mt-3"
                  />
                </div>
              </Fragment>
            )}
            {attributes && attributes.cancellation_policy && (
              <Fragment>
                <Divider className="my-6" />
                <div className="mt-5">
                  <h2 className="text-xl font-semibold leading-8">
                    Cancellation Policy
                  </h2>

                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        (attributes && attributes.cancellation_policy) || "",
                    }}
                    className="text-secondary-600 text-base font-normal leading-6 mt-3"
                  />
                </div>
              </Fragment>
            )}

            {attributes &&
              attributes.venue_all_packages &&
              attributes.venue_all_packages.length > 0 && (
                <Fragment>
                  <Divider className="my-6" />
                  {/* Venue packages */}
                  <div>
                    <h2 className="text-xl font-semibold leading-8">
                      Venue Packages
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-4">
                      {attributes.venue_all_packages.map(
                        (venue: any, index: number) => (
                          <VenuePackageCard
                            key={index}
                            {...venue}
                            handleSelectPackage={handleSelectPackage}
                            packageId={packageId}
                            roomId={roomId}
                          />
                        ),
                      )}
                    </div>
                  </div>
                </Fragment>
              )}

            {/* Rooms */}
            {attributes && attributes.rooms && attributes.rooms.length > 0 && (
              <div ref={roomsRef} className="scroll-mt-24 mt-5">
                <h2 className="text-xl font-semibold leading-8">Rooms</h2>
                <div className="my-4 flex flex-col gap-y-3">
                  {attributes.rooms.map((room: any, index: number) => (
                    <RoomCard
                      key={index}
                      {...room}
                      handleSelectPackage={handleSelectPackage}
                      handleSelectRoom={handleSelectRoom}
                      packageId={packageId}
                      roomId={roomId}
                    />
                  ))}
                </div>
              </div>
            )}

            {attributes &&
              attributes.documents &&
              attributes.documents.length > 0 && (
                <Fragment>
                  <Divider className="my-6" />
                  {/* Promo, Menu and Floor Plan */}
                  <div>
                    <h2 className="text-xl font-semibold leading-8">
                      Promo, Menu and Floor Plan
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                      {attributes.documents.map(
                        (
                          {
                            link,
                            thumbnail,
                            filename,
                            filesize,
                          }: {
                            link: string;
                            thumbnail: string;
                            filename: string;
                            filesize: string;
                          },
                          index: number,
                        ) => (
                          <a
                            key={index}
                            className="w-full border flex gap-x-3 rounded-lg p-2 cursor-pointer"
                            href={link}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                              <Image
                                alt="icon"
                                className="h-6 w-6 object-contain"
                                height={24}
                                loading="lazy"
                                src={thumbnail}
                                width={24}
                              />
                            </div>
                            <div className="flex-1 flex flex-col justify-center">
                              <span className="text-sm font-semibold leading-5">
                                {filename}
                              </span>
                              <span className="text-sm font-normal leading-5 text-secondary-400">
                                {filesize}
                              </span>
                            </div>
                          </a>
                        ),
                      )}
                    </div>
                  </div>
                </Fragment>
              )}

            {attributes &&
              attributes.location_details &&
              attributes.location_details.iframe_src && (
                <Fragment>
                  <Divider className="my-6" />
                  {/* Location */}
                  <div>
                    <h2 className="text-xl font-semibold leading-8">
                      Location
                    </h2>

                    <MapIframe
                      iframe_src={attributes.location_details.iframe_src}
                      iframe_title={
                        attributes.location_details.iframe_title || ""
                      }
                    />
                  </div>
                </Fragment>
              )}

            {attributes &&
              attributes.faqs &&
              Object.keys(attributes.faqs).length > 0 && (
                <Fragment>
                  <Divider className="my-6" />
                  {/* FAQ */}
                  <div>
                    <h2 className="text-xl font-semibold leading-8">
                      Frequently Asked Questions
                    </h2>

                    <div className="mt-4 px-0">
                      <CustomAccordion faqs={attributes.faqs} />
                    </div>
                  </div>
                </Fragment>
              )}

            <Fragment>
              <Divider className="my-6" />
              {/* Reviews */}
              <div>
                <ReviewTabs
                  google_place_id={
                    (attributes && attributes.google_place_id) || ""
                  }
                  google_reviews={
                    (attributes && attributes.google_reviews) || []
                  }
                  reviews={(attributes && attributes.reviews) || []}
                  setShowMoreReviews={setShowMoreReviews}
                  showMoreReviews={showMoreReviews}
                  visibleReviews={visibleReviews}
                />
              </div>
            </Fragment>
          </div>
        </Tab>
      )}

      {attributes &&
        ((attributes.reviews && attributes.reviews.length > 0) ||
          (attributes.google_reviews &&
            attributes.google_reviews.length > 0)) && (
          <Tab
            key="reviews"
            className="p-0 flex"
            title={
              <LightLabelWithIcon
                customClasses="px-0"
                customLabel={
                  <span
                    className={`text-base font-semibold leading-6 ${selected === "reviews" ? "text-primary-700" : "text-secondary-500"}`}
                  >
                    Reviews
                  </span>
                }
              />
            }
          >
            {/* Reviews */}
            <div className="py-4">
              <div>
                <h2 className="text-xl font-semibold leading-8">
                  About Event Venue
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 my-4">
                  {attributes &&
                    attributes.about_icon &&
                    attributes.about_icon.length > 0 &&
                    attributes.about_icon.map(
                      (
                        {
                          name,
                          icon,
                          description,
                        }: {
                          name: string;
                          icon: string;
                          description: string;
                        },
                        index: number,
                      ) => (
                        <div key={index} className="flex items-start gap-x-2">
                          <Image
                            alt="icon"
                            className="h-[18px] w-[18px] mt-1"
                            height={24}
                            loading="lazy"
                            src={icon}
                            width={24}
                          />

                          <div>
                            <p className="font-semibold">{name}</p>
                            <p>{description}</p>
                          </div>
                        </div>
                      ),
                    )}
                </div>
              </div>
              <Divider className="my-6" />
              <div>
                <h2 className="text-xl font-semibold leading-8">
                  What This Venue Offers
                </h2>
                {showEventVenueDetails && (
                  <>
                    {attributes &&
                      attributes.amenities &&
                      attributes.amenities.length > 0 && (
                        <div className="my-4">
                          {/* title */}
                          <h3 className="text-lg font-semibold leading-7">
                            Amenities
                          </h3>

                          {/* grid items */}
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-2">
                            {attributes.amenities.map(
                              (
                                { name, icon }: { name: string; icon: string },
                                index: number,
                              ) => (
                                <LightLabelWithIcon
                                  key={index}
                                  customClasses="px-0 flex items-center gap-x-2"
                                  customLabel={
                                    <span className="text-base font-normal leading-6 text-secondary-600">
                                      {name}
                                    </span>
                                  }
                                  startIconNode={
                                    <Image
                                      alt="icon"
                                      className="h-[18px] w-[18px] mt-0.5"
                                      height={24}
                                      loading="lazy"
                                      src={icon}
                                      width={24}
                                    />
                                  }
                                />
                              ),
                            )}
                          </div>
                        </div>
                      )}

                    {attributes &&
                      attributes.accessibility_display &&
                      attributes.accessibility_display.length > 0 && (
                        <div className="my-4">
                          {/* title */}
                          <h3 className="text-lg font-semibold leading-7">
                            Accessibility
                          </h3>

                          {/* grid items */}
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-2">
                            {attributes.accessibility_display.map(
                              (
                                { name, icon }: { name: string; icon: string },
                                index: number,
                              ) => (
                                <LightLabelWithIcon
                                  key={index}
                                  customClasses="px-0 flex items-center gap-x-2"
                                  customLabel={
                                    <span className="text-base font-normal leading-6 text-secondary-600">
                                      {name}
                                    </span>
                                  }
                                  startIconNode={
                                    <Image
                                      alt="icon"
                                      className="h-[18px] w-[18px] mt-0.5"
                                      height={24}
                                      loading="lazy"
                                      src={icon}
                                      width={24}
                                    />
                                  }
                                />
                              ),
                            )}
                          </div>
                        </div>
                      )}

                    {attributes &&
                      attributes.other_accessibilities &&
                      attributes.other_accessibilities.length > 0 && (
                        <div className="my-4">
                          {/* title */}
                          <h3 className="text-lg font-semibold leading-7">
                            Other Accessibilities
                          </h3>

                          {/* grid items */}
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-2">
                            {attributes.other_accessibilities.map(
                              (
                                { name, icon }: { name: string; icon: string },
                                index: number,
                              ) => (
                                <LightLabelWithIcon
                                  key={index}
                                  customClasses="px-0 flex items-center gap-x-2"
                                  customLabel={
                                    <span className="text-base font-normal leading-6 text-secondary-600">
                                      {name}
                                    </span>
                                  }
                                  startIconNode={
                                    <Image
                                      alt="icon"
                                      className="h-[18px] w-[18px] mt-0.5"
                                      height={24}
                                      loading="lazy"
                                      src={icon}
                                      width={24}
                                    />
                                  }
                                />
                              ),
                            )}
                          </div>
                        </div>
                      )}

                    {attributes &&
                      attributes.cuisine_type &&
                      attributes.cuisine_type.length > 0 && (
                        <div className="my-4">
                          {/* title */}
                          <h3 className="text-lg font-semibold leading-7">
                            Food and Beverages
                          </h3>

                          {/* grid items */}
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-2">
                            {attributes.cuisine_type.map(
                              (
                                { name, icon }: { name: string; icon: string },
                                index: number,
                              ) => (
                                <LightLabelWithIcon
                                  key={index}
                                  customClasses="px-0 flex items-center gap-x-2"
                                  customLabel={
                                    <span className="text-base font-normal leading-6 text-secondary-600">
                                      {name}
                                    </span>
                                  }
                                  startIconNode={
                                    <Image
                                      alt="icon"
                                      className="h-[18px] w-[18px] mt-0.5"
                                      height={24}
                                      loading="lazy"
                                      src={icon}
                                      width={24}
                                    />
                                  }
                                />
                              ),
                            )}
                          </div>
                        </div>
                      )}
                  </>
                )}

                <LightLabelWithIcon
                  customClasses="px-0 flex items-center gap-x-2 cursor-pointer mt-4"
                  customLabel={
                    <span className="text-primary-700 text-sm font-semibold leading-5">
                      See {(showEventVenueDetails && "Less") || "More"}
                    </span>
                  }
                  endIconNode={
                    (showEventVenueDetails && (
                      <CaretUp color={COLORS.primary[600]} size={20} />
                    )) || <CaretDown color={COLORS.primary[700]} size={20} />
                  }
                  onClick={() =>
                    setShowEventVenueDetails(!showEventVenueDetails)
                  }
                />
              </div>
              {attributes &&
                attributes.rules &&
                attributes.rules.length > 0 && (
                  <div className="mt-5">
                    <h2 className="text-xl font-semibold leading-8">Rules</h2>
                    {attributes.rules.map(
                      (
                        { name, icon }: { name: string; icon: string },
                        index: number,
                      ) => (
                        <LightLabelWithIcon
                          key={index}
                          customClasses="px-0 flex items-center gap-x-2"
                          customLabel={
                            <span className="text-base font-normal leading-6 text-secondary-600">
                              {name}
                            </span>
                          }
                          startIconNode={
                            <Image
                              alt="icon"
                              className="h-[18px] w-[18px] mt-0.5"
                              height={24}
                              loading="lazy"
                              src={icon}
                              width={24}
                            />
                          }
                        />
                      ),
                    )}
                  </div>
                )}

              {attributes &&
                attributes.availability &&
                attributes.availability.length > 0 && (
                  <div className="mt-5">
                    <h2 className="text-xl font-semibold leading-8">
                      Availability
                    </h2>
                    {attributes.availability.map(
                      (
                        { name, icon }: { name: string; icon: string },
                        index: number,
                      ) => (
                        <LightLabelWithIcon
                          key={index}
                          customClasses="px-0 flex items-center gap-x-2 mt-3"
                          customLabel={
                            <span className="text-base font-normal leading-6 text-secondary-600">
                              {name}
                            </span>
                          }
                          startIconNode={
                            <Image
                              alt="icon"
                              className="h-[18px] w-[18px] mt-0.5"
                              height={24}
                              loading="lazy"
                              src={icon}
                              width={24}
                            />
                          }
                        />
                      ),
                    )}
                  </div>
                )}

              {attributes && attributes.description && (
                <Fragment>
                  <Divider className="my-6" />
                  <div className="mt-5">
                    <h2 className="text-xl font-semibold leading-8">
                      Description
                    </h2>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: (attributes && attributes.description) || "",
                      }}
                      className="text-secondary-600 text-base font-normal leading-6 mt-3"
                    />
                  </div>
                </Fragment>
              )}
              {attributes && attributes.price_info && (
                <Fragment>
                  <Divider className="my-6" />
                  <div className="mt-5">
                    <h2 className="text-xl font-semibold leading-8">
                      Price Information
                    </h2>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: (attributes && attributes.price_info) || "",
                      }}
                      className="text-secondary-600 text-base font-normal leading-6 mt-3"
                    />
                  </div>
                </Fragment>
              )}
              {attributes && attributes.additional_information_on_price && (
                <Fragment>
                  <Divider className="my-6" />
                  <div className="mt-5">
                    <h2 className="text-xl font-semibold leading-8">
                      Additional Information On Price
                    </h2>

                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          (attributes &&
                            attributes.additional_information_on_price) ||
                          "",
                      }}
                      className="text-secondary-600 text-base font-normal leading-6 mt-3"
                    />
                  </div>
                </Fragment>
              )}
              {attributes && attributes.cancellation_policy && (
                <Fragment>
                  <Divider className="my-6" />
                  <div className="mt-5">
                    <h2 className="text-xl font-semibold leading-8">
                      Cancellation Policy
                    </h2>

                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          (attributes && attributes.cancellation_policy) || "",
                      }}
                      className="text-secondary-600 text-base font-normal leading-6 mt-3"
                    />
                  </div>
                </Fragment>
              )}

              {attributes &&
                attributes.venue_all_packages &&
                attributes.venue_all_packages.length > 0 && (
                  <Fragment>
                    <Divider className="my-6" />
                    {/* Venue packages */}
                    <div>
                      <h2 className="text-xl font-semibold leading-8">
                        Venue Packages
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-4">
                        {attributes.venue_all_packages.map(
                          (venue: any, index: number) => (
                            <VenuePackageCard
                              key={index}
                              {...venue}
                              handleSelectPackage={handleSelectPackage}
                              packageId={packageId}
                              roomId={roomId}
                            />
                          ),
                        )}
                      </div>
                    </div>
                  </Fragment>
                )}
              {/* Rooms */}
              {attributes &&
                attributes.rooms &&
                attributes.rooms.length > 0 && (
                  <div className="mt-5">
                    <h2 className="text-xl font-semibold leading-8">Rooms</h2>
                    <div className="my-4 flex flex-col gap-y-3">
                      {attributes.rooms.map((room: any, index: number) => (
                        <RoomCard
                          key={index}
                          {...room}
                          handleSelectPackage={handleSelectPackage}
                          handleSelectRoom={handleSelectRoom}
                          packageId={packageId}
                          roomId={roomId}
                        />
                      ))}
                    </div>
                  </div>
                )}

              {attributes &&
                attributes.documents &&
                attributes.documents.length > 0 && (
                  <Fragment>
                    <Divider className="my-6" />
                    {/* Promo, Menu and Floor Plan */}
                    <div>
                      <h2 className="text-xl font-semibold leading-8">
                        Promo, Menu and Floor Plan
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                        {attributes.documents.map(
                          (
                            {
                              link,
                              thumbnail,
                              filename,
                              filesize,
                            }: {
                              link: string;
                              thumbnail: string;
                              filename: string;
                              filesize: string;
                            },
                            index: number,
                          ) => (
                            <a
                              key={index}
                              className="w-full border flex gap-x-3 rounded-lg p-2 cursor-pointer"
                              href={link}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                                <Image
                                  alt="icon"
                                  className="h-6 w-6 object-contain"
                                  height={24}
                                  loading="lazy"
                                  src={thumbnail}
                                  width={24}
                                />
                              </div>
                              <div className="flex-1 flex flex-col justify-center">
                                <span className="text-sm font-semibold leading-5">
                                  {filename}
                                </span>
                                <span className="text-sm font-normal leading-5 text-secondary-400">
                                  {filesize}
                                </span>
                              </div>
                            </a>
                          ),
                        )}
                      </div>
                    </div>
                  </Fragment>
                )}

              {attributes &&
                attributes.location_details &&
                attributes.location_details.iframe_src && (
                  <Fragment>
                    <Divider className="my-6" />
                    {/* Location */}
                    <div>
                      <h2 className="text-xl font-semibold leading-8">
                        Location
                      </h2>

                      <MapIframe
                        iframe_src={attributes.location_details.iframe_src}
                        iframe_title={
                          attributes.location_details.iframe_title || ""
                        }
                      />
                    </div>
                  </Fragment>
                )}

              {attributes &&
                attributes.faqs &&
                Object.keys(attributes.faqs).length > 0 && (
                  <Fragment>
                    <Divider className="my-6" />
                    {/* FAQ */}
                    <div>
                      <h2 className="text-xl font-semibold leading-8">
                        Frequently Asked Questions
                      </h2>

                      <div className="mt-4 px-0">
                        <CustomAccordion faqs={attributes.faqs} />
                      </div>
                    </div>
                  </Fragment>
                )}

              <Fragment>
                <Divider className="my-6" />
                {/* Reviews */}
                <div ref={reviewsRef} className="scroll-mt-24">
                  <ReviewTabs
                    google_place_id={
                      (attributes && attributes.google_place_id) || ""
                    }
                    google_reviews={
                      (attributes && attributes.google_reviews) || []
                    }
                    reviews={(attributes && attributes.reviews) || []}
                    setShowMoreReviews={setShowMoreReviews}
                    showMoreReviews={showMoreReviews}
                    visibleReviews={visibleReviews}
                  />
                </div>
              </Fragment>
            </div>
          </Tab>
        )}
    </Tabs>
  );
};
