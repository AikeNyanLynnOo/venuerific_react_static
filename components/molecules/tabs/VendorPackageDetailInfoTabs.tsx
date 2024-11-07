import { Divider } from "@nextui-org/divider";
import { Tab, Tabs } from "@nextui-org/tabs";
import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { Heart, ShareNetwork } from "@phosphor-icons/react";

import { ImageWithErrorHandle } from "../ImageWithErrorHandle";

import { CustomAccordion } from "@/components/atoms/CustomAccordion";
import { LightLabelWithIcon } from "@/components/atoms/LightLabelWithIcon";
import { DUMMY_FAQS, DUMMY_PROMOTEXTS } from "@/config/constants";
import { COLORS } from "@/styles/colors";

export const VendorPackageDetailInfoTabs = () => {
  const [selected, setSelected] = useState("about");
  const [showEventVenueDetails, setShowEventVenueDetails] = useState(true);
  const [showMoreReviews, setShowMoreReviews] = useState(false);
  const faqRef = useRef<any>(null);
  const vendorRef = useRef<any>(null);

  const visibleReviews = useMemo(() => {
    if (showMoreReviews) {
      return DUMMY_PROMOTEXTS;
    } else {
      return DUMMY_PROMOTEXTS.slice(0, 4);
    }
  }, [showMoreReviews]);

  return (
    <div>
      <Tabs
        aria-label="Options"
        // sticky top-[81px] z-20
        className="bg-white border-b px-0 rounded-t-lg w-full block mx-auto"
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
            case "faq":
              {
                setTimeout(() => {
                  faqRef &&
                    faqRef.current &&
                    faqRef.current.scrollIntoView({
                      behavior: "smooth",
                    });
                }, 50);
              }
              break;
            case "vendor":
              {
                setTimeout(() => {
                  vendorRef &&
                    vendorRef.current &&
                    vendorRef.current.scrollIntoView({
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
          <div className="py-4 w-full">
            <div className="flex flex-col gap-y-4">
              <div className="w-full rounded-lg flex flex-col md:flex-row gap-5">
                <div className="w-full md:w-5/12 lg:w-3/6 xl:w-2/6 rounded-xl">
                  <ImageWithErrorHandle
                    unoptimized
                    alt="room_img_alt"
                    className="w-full h-auto object-cover rounded-xl"
                    height={260}
                    loading="lazy"
                    src="/images/venues/venue4.webp"
                    width={300}
                  />
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <div className="flex flex-col">
                    {/* title */}
                    <span className="text-xl font-semibold leading-8">
                      Weekend Special (+Photo Booth Add-On)
                    </span>
                    {/* by */}
                    <p className="text-base font-semibold leading-6">
                      By
                      <span className="text-primary-600 ml-1">
                        Private Venue Management (PVM)
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-x-5 mt-5 md:mt-0">
                    <LightLabelWithIcon
                      customClasses="flex gap-x-2 items-center w-fit cursor-pointer"
                      customLabel={
                        <span className="text-base font-semibold leading-6 text-primary-600">
                          Favourite
                        </span>
                      }
                      startIconNode={
                        <Heart color={COLORS.primary[600]} size={20} />
                      }
                    />
                    <LightLabelWithIcon
                      customClasses="flex gap-x-2 items-center w-fit cursor-pointer"
                      customLabel={
                        <span className="text-base font-semibold leading-6 text-primary-600">
                          Share
                        </span>
                      }
                      startIconNode={
                        <ShareNetwork color={COLORS.primary[600]} size={20} />
                      }
                    />
                  </div>
                </div>
              </div>

              <div
                className="rounded-xl shadow-sm px-5 py-3 flex gap-x-3 items-center"
                style={{
                  background:
                    "linear-gradient(92deg, #F9E3FF 16.24%, #E3F5FF 74.52%)",
                }}
              >
                <Image
                  alt="icon"
                  className="h-8 w-8 object-contain"
                  height={32}
                  loading="lazy"
                  src={`/images/icons/standard_schedule.png`}
                  width={32}
                />
                <div>
                  <span className="text-base font-semibold leading-6 block">
                    Standard Schedule
                  </span>
                  <span className="text-sm font-normal leading-6 block">
                    Customers can cancel until 30 days before the booking and
                    with a 50% refund.
                  </span>
                </div>
              </div>
              <div
                className="rounded-xl shadow-sm px-5 py-3 flex gap-x-3 items-center"
                style={{
                  background:
                    "linear-gradient(92deg, #E3F5FF 37.79%, #F9E3FF 74.52%), #FAE3FF",
                }}
              >
                <Image
                  alt="icon"
                  className="h-8 w-8 object-contain"
                  height={32}
                  loading="lazy"
                  src={`/images/icons/standard_cancellation.png`}
                  width={32}
                />
                <div>
                  <span className="text-base font-semibold leading-6 block">
                    Standard Cancellation
                  </span>
                  <span className="text-sm font-normal leading-6 block">
                    Customers can cancel until 30 days before the booking and
                    with a 50% refund.
                  </span>
                </div>
              </div>
            </div>
            <Divider className="my-6" />
            <div className="flex flex-col gap-y-4">
              <h2 className="text-xl font-semibold leading-8">
                Package Detail
              </h2>
              <p className="w-full text-secondary-600 text-base font-normal leading-6">
                Host Unforgettable Events at the Tanglin Gin Jungle!
                <br />
                <br />
                If you&apos;re looking for a unique event space surrounded by
                nature....look no further! Host your next extraordinary
                gathering at Tanglin Gin, Singapore&apos;s first Gin Distillery,
                nestled in the heart of Dempsey Hill.
                <br />
                <br />
                From Corporate Events, Team Bonding Activities, Intimate
                Weddings, Birthday Parties and Celebrations, we can do it all!
                <br />
                <br />
                Step into a world where nature&apos;s beauty and the art of Gin
                making collide to create an extraordinary experience for your
                event. Whether you prefer the allure of the great outdoors or
                the cosy ambience of our indoor haven, you&apos;ll be surrounded
                by nothing but lush greenery, making every moment truly
                memorable.
                <br />
                <br />
                Enjoy some of the best cocktails and bites, or add on some of
                our exciting activities to spruce up your event and to keep your
                guests entertained!
              </p>
            </div>
            <Divider className="my-6" />
            <div>
              <h2 className="text-xl font-semibold leading-8">Rules</h2>
              <div className="mt-4 px-0">
                <CustomAccordion faqs={DUMMY_FAQS} />
              </div>
            </div>

            <Divider className="my-6" />
            {/* Location */}
            <div>
              <div className="flex gap-x-3">
                <Image
                  alt="room_img_alt"
                  className="w-[88px] h-[54px] object-cover rounded-lg"
                  height={260}
                  loading="lazy"
                  src="/images/venues/venue4.webp"
                  width={300}
                />
                <div className="flex flex-col gap-y-3">
                  <span className="text-secondary-500 text-xs font-normal leading-4">
                    Vendor name
                  </span>
                  <span className="text-primary-600 text-lg font-semibold leading-4">
                    Private Venue Management (PVM)
                  </span>
                </div>
              </div>
              <Divider className="my-3" />
              <div className="w-full bg-secondary-200 h-[350px] mt-4 flex items-center justify-center">
                Map Placeholder
              </div>
            </div>
          </div>
        </Tab>
        <Tab
          key="faq"
          className="p-0 flex"
          title={
            <LightLabelWithIcon
              customClasses="px-0"
              customLabel={
                <span
                  className={`text-base font-semibold leading-6 ${selected === "faq" ? "text-primary-700" : "text-secondary-500"}`}
                >
                  FAQ
                </span>
              }
            />
          }
        >
          {/* FAQs */}
          <div className="py-4 w-full">
            <div className="flex flex-col gap-y-4">
              <div className="w-full rounded-lg flex flex-col md:flex-row gap-5">
                <div className="w-full md:w-5/12 lg:w-3/6 xl:w-2/6 rounded-xl">
                  <ImageWithErrorHandle
                    unoptimized
                    alt="room_img_alt"
                    className="w-full h-auto object-cover rounded-xl"
                    height={260}
                    loading="lazy"
                    src="/images/venues/venue4.webp"
                    width={300}
                  />
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <div className="flex flex-col">
                    {/* title */}
                    <span className="text-xl font-semibold leading-8">
                      Weekend Special (+Photo Booth Add-On)
                    </span>
                    {/* by */}
                    <p className="text-base font-semibold leading-6">
                      By
                      <span className="text-primary-600 ml-1">
                        Private Venue Management (PVM)
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-x-5 mt-5 md:mt-0">
                    <LightLabelWithIcon
                      customClasses="flex gap-x-2 items-center w-fit cursor-pointer"
                      customLabel={
                        <span className="text-base font-semibold leading-6 text-primary-600">
                          Favourite
                        </span>
                      }
                      startIconNode={
                        <Heart color={COLORS.primary[600]} size={20} />
                      }
                    />
                    <LightLabelWithIcon
                      customClasses="flex gap-x-2 items-center w-fit cursor-pointer"
                      customLabel={
                        <span className="text-base font-semibold leading-6 text-primary-600">
                          Share
                        </span>
                      }
                      startIconNode={
                        <ShareNetwork color={COLORS.primary[600]} size={20} />
                      }
                    />
                  </div>
                </div>
              </div>

              <div
                className="rounded-xl shadow-sm px-5 py-3 flex gap-x-3 items-center"
                style={{
                  background:
                    "linear-gradient(92deg, #F9E3FF 16.24%, #E3F5FF 74.52%)",
                }}
              >
                <Image
                  alt="icon"
                  className="h-8 w-8 object-contain"
                  height={32}
                  loading="lazy"
                  src={`/images/icons/standard_schedule.png`}
                  width={32}
                />
                <div>
                  <span className="text-base font-semibold leading-6 block">
                    Standard Schedule
                  </span>
                  <span className="text-sm font-normal leading-6 block">
                    Customers can cancel until 30 days before the booking and
                    with a 50% refund.
                  </span>
                </div>
              </div>
              <div
                className="rounded-xl shadow-sm px-5 py-3 flex gap-x-3 items-center"
                style={{
                  background:
                    "linear-gradient(92deg, #E3F5FF 37.79%, #F9E3FF 74.52%), #FAE3FF",
                }}
              >
                <Image
                  alt="icon"
                  className="h-8 w-8 object-contain"
                  height={32}
                  loading="lazy"
                  src={`/images/icons/standard_cancellation.png`}
                  width={32}
                />
                <div>
                  <span className="text-base font-semibold leading-6 block">
                    Standard Cancellation
                  </span>
                  <span className="text-sm font-normal leading-6 block">
                    Customers can cancel until 30 days before the booking and
                    with a 50% refund.
                  </span>
                </div>
              </div>
            </div>
            <Divider className="my-6" />
            <div className="flex flex-col gap-y-4">
              <h2 className="text-xl font-semibold leading-8">
                Package Detail
              </h2>
              <p className="w-full text-secondary-600 text-base font-normal leading-6">
                Host Unforgettable Events at the Tanglin Gin Jungle!
                <br />
                <br />
                If you&apos;re looking for a unique event space surrounded by
                nature....look no further! Host your next extraordinary
                gathering at Tanglin Gin, Singapore&apos;s first Gin Distillery,
                nestled in the heart of Dempsey Hill.
                <br />
                <br />
                From Corporate Events, Team Bonding Activities, Intimate
                Weddings, Birthday Parties and Celebrations, we can do it all!
                <br />
                <br />
                Step into a world where nature&apos;s beauty and the art of Gin
                making collide to create an extraordinary experience for your
                event. Whether you prefer the allure of the great outdoors or
                the cosy ambience of our indoor haven, you&apos;ll be surrounded
                by nothing but lush greenery, making every moment truly
                memorable.
                <br />
                <br />
                Enjoy some of the best cocktails and bites, or add on some of
                our exciting activities to spruce up your event and to keep your
                guests entertained!
              </p>
            </div>
            <Divider className="my-6" />
            <div ref={faqRef} className="scroll-mt-24">
              <h2 className="text-xl font-semibold leading-8">Rules</h2>
              <div className="mt-4 px-0">
                <CustomAccordion faqs={DUMMY_FAQS} />
              </div>
            </div>

            <Divider className="my-6" />
            {/* Location */}
            <div>
              <div className="flex gap-x-3">
                <Image
                  alt="room_img_alt"
                  className="w-[88px] h-[54px] object-cover rounded-lg"
                  height={260}
                  loading="lazy"
                  src="/images/venues/venue4.webp"
                  width={300}
                />
                <div className="flex flex-col gap-y-3">
                  <span className="text-secondary-500 text-xs font-normal leading-4">
                    Vendor name
                  </span>
                  <span className="text-primary-600 text-lg font-semibold leading-4">
                    Private Venue Management (PVM)
                  </span>
                </div>
              </div>
              <Divider className="my-3" />
              <div className="w-full bg-secondary-200 h-[350px] mt-4 flex items-center justify-center">
                Map Placeholder
              </div>
            </div>
          </div>
        </Tab>
        <Tab
          key="vendor"
          className="p-0 flex"
          title={
            <LightLabelWithIcon
              customClasses="px-0"
              customLabel={
                <span
                  className={`text-base font-semibold leading-6 ${selected === "vendor" ? "text-primary-700" : "text-secondary-500"}`}
                >
                  Vendor
                </span>
              }
            />
          }
        >
          {/* Vendor */}
          <div className="py-4 w-full">
            <div className="flex flex-col gap-y-4">
              <div className="w-full rounded-lg flex flex-col md:flex-row gap-5">
                <div className="w-full md:w-5/12 lg:w-3/6 xl:w-2/6 rounded-xl">
                  <ImageWithErrorHandle
                    unoptimized
                    alt="room_img_alt"
                    className="w-full h-auto object-cover rounded-xl"
                    height={260}
                    loading="lazy"
                    src="/images/venues/venue4.webp"
                    width={300}
                  />
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <div className="flex flex-col">
                    {/* title */}
                    <span className="text-xl font-semibold leading-8">
                      Weekend Special (+Photo Booth Add-On)
                    </span>
                    {/* by */}
                    <p className="text-base font-semibold leading-6">
                      By
                      <span className="text-primary-600 ml-1">
                        Private Venue Management (PVM)
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-x-5 mt-5 md:mt-0">
                    <LightLabelWithIcon
                      customClasses="flex gap-x-2 items-center w-fit cursor-pointer"
                      customLabel={
                        <span className="text-base font-semibold leading-6 text-primary-600">
                          Favourite
                        </span>
                      }
                      startIconNode={
                        <Heart color={COLORS.primary[600]} size={20} />
                      }
                    />
                    <LightLabelWithIcon
                      customClasses="flex gap-x-2 items-center w-fit cursor-pointer"
                      customLabel={
                        <span className="text-base font-semibold leading-6 text-primary-600">
                          Share
                        </span>
                      }
                      startIconNode={
                        <ShareNetwork color={COLORS.primary[600]} size={20} />
                      }
                    />
                  </div>
                </div>
              </div>

              <div
                className="rounded-xl shadow-sm px-5 py-3 flex gap-x-3 items-center"
                style={{
                  background:
                    "linear-gradient(92deg, #F9E3FF 16.24%, #E3F5FF 74.52%)",
                }}
              >
                <Image
                  alt="icon"
                  className="h-8 w-8 object-contain"
                  height={32}
                  loading="lazy"
                  src={`/images/icons/standard_schedule.png`}
                  width={32}
                />
                <div>
                  <span className="text-base font-semibold leading-6 block">
                    Standard Schedule
                  </span>
                  <span className="text-sm font-normal leading-6 block">
                    Customers can cancel until 30 days before the booking and
                    with a 50% refund.
                  </span>
                </div>
              </div>
              <div
                className="rounded-xl shadow-sm px-5 py-3 flex gap-x-3 items-center"
                style={{
                  background:
                    "linear-gradient(92deg, #E3F5FF 37.79%, #F9E3FF 74.52%), #FAE3FF",
                }}
              >
                <Image
                  alt="icon"
                  className="h-8 w-8 object-contain"
                  height={32}
                  loading="lazy"
                  src={`/images/icons/standard_cancellation.png`}
                  width={32}
                />
                <div>
                  <span className="text-base font-semibold leading-6 block">
                    Standard Cancellation
                  </span>
                  <span className="text-sm font-normal leading-6 block">
                    Customers can cancel until 30 days before the booking and
                    with a 50% refund.
                  </span>
                </div>
              </div>
            </div>
            <Divider className="my-6" />
            <div className="flex flex-col gap-y-4">
              <h2 className="text-xl font-semibold leading-8">
                Package Detail
              </h2>
              <p className="w-full text-secondary-600 text-base font-normal leading-6">
                Host Unforgettable Events at the Tanglin Gin Jungle!
                <br />
                <br />
                If you&apos;re looking for a unique event space surrounded by
                nature....look no further! Host your next extraordinary
                gathering at Tanglin Gin, Singapore&apos;s first Gin Distillery,
                nestled in the heart of Dempsey Hill.
                <br />
                <br />
                From Corporate Events, Team Bonding Activities, Intimate
                Weddings, Birthday Parties and Celebrations, we can do it all!
                <br />
                <br />
                Step into a world where nature&apos;s beauty and the art of Gin
                making collide to create an extraordinary experience for your
                event. Whether you prefer the allure of the great outdoors or
                the cosy ambience of our indoor haven, you&apos;ll be surrounded
                by nothing but lush greenery, making every moment truly
                memorable.
                <br />
                <br />
                Enjoy some of the best cocktails and bites, or add on some of
                our exciting activities to spruce up your event and to keep your
                guests entertained!
              </p>
            </div>
            <Divider className="my-6" />
            <div>
              <h2 className="text-xl font-semibold leading-8">Rules</h2>
              <div className="mt-4 px-0">
                <CustomAccordion faqs={DUMMY_FAQS} />
              </div>
            </div>

            <Divider className="my-6" />
            {/* Location */}
            <div ref={vendorRef} className="scroll-mt-24">
              <div className="flex gap-x-3">
                <Image
                  alt="room_img_alt"
                  className="w-[88px] h-[54px] object-cover rounded-lg"
                  height={260}
                  loading="lazy"
                  src="/images/venues/venue4.webp"
                  width={300}
                />
                <div className="flex flex-col gap-y-3">
                  <span className="text-secondary-500 text-xs font-normal leading-4">
                    Vendor name
                  </span>
                  <span className="text-primary-600 text-lg font-semibold leading-4">
                    Private Venue Management (PVM)
                  </span>
                </div>
              </div>
              <Divider className="my-3" />
              <div className="w-full bg-secondary-200 h-[350px] mt-4 flex items-center justify-center">
                Map Placeholder
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};
