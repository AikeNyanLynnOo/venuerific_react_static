import { Divider } from "@nextui-org/divider";
import { Tab, Tabs } from "@nextui-org/tabs";
import Image from "next/image";
import { useRef, useState } from "react";
import { Chip } from "@nextui-org/chip";

import { CustomAccordion } from "../atoms/CustomAccordion";
import { LightLabelWithIcon } from "../atoms/LightLabelWithIcon";

import { VendorPackageCard } from "./VendorPackageCard";

import { DUMMY_FAQS } from "@/config/constants";

export const VendorDetailInfoTabs = () => {
  const [selected, setSelected] = useState("about");
  const [showEventVenueDetails, setShowEventVenueDetails] = useState(true);
  const [showMoreReviews, setShowMoreReviews] = useState(false);

  const packagesRef = useRef<any>(null);
  const faqRef = useRef<any>(null);

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
            case "packages":
              {
                setTimeout(() => {
                  packagesRef &&
                    packagesRef.current &&
                    packagesRef.current.scrollIntoView({
                      behavior: "smooth",
                    });
                }, 50);
              }
              break;
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
              <h2 className="text-xl font-semibold leading-8">About Vendor</h2>
              <p className="text-base font-normal leading-6 text-secondary-600">
                Private Venue Management (PVM) is Venuerific&apos;s exclusive
                venue and event management arm in Singapore. With a decade of
                experience, PVM has successfully managed nearly 10,000 events,
                including corporate training, seminars, and various corporate
                occasions for over 500 clients.
              </p>
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
                Vendor Services
              </h2>
              <div className="flex w-full flex-wrap gap-2">
                {[
                  "Photography",
                  "Catering",
                  "Event Management",
                  "Signage & Branding",
                ].map((chip, index) => (
                  <Chip
                    key={index}
                    className="bg-inherit bg-primary-50 py-4 text-primary-700"
                    radius="sm"
                    variant="light"
                  >
                    <span className="text-sm font-semibold leading-5 text-primary-700">
                      {chip}
                    </span>
                  </Chip>
                ))}
              </div>
            </div>
            <Divider className="my-6" />
            <div className="w-full">
              <h2 className="text-xl font-semibold leading-8">
                Vendor Packages
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-x-0 md:gap-3">
                {/* vendor package cards */}
                <VendorPackageCard name="Corporate Event" />
                <VendorPackageCard name="Weekend Special (+Photo Booth Add-On Service)" />
              </div>
            </div>
            <Divider className="my-6" />
            {/* Location */}
            <div>
              <h2 className="text-xl font-semibold leading-8">Location</h2>
              <div className="w-full bg-secondary-200 h-[350px] mt-4 flex items-center justify-center">
                Map Placeholder
              </div>
            </div>

            <Divider className="my-6" />
            {/* FAQ */}
            <div>
              <h2 className="text-xl font-semibold leading-8">
                Frequently Asked Questions
              </h2>
              <div className="mt-4 px-0">
                <CustomAccordion faqs={DUMMY_FAQS} />
              </div>
            </div>

            <Divider className="my-6" />
          </div>
        </Tab>
        <Tab
          key="packages"
          className="p-0 flex"
          title={
            <LightLabelWithIcon
              customClasses="px-0"
              customLabel={
                <span
                  className={`text-base font-semibold leading-6 ${selected === "packages" ? "text-primary-700" : "text-secondary-500"}`}
                >
                  Packages
                </span>
              }
            />
          }
        >
          {/* Packages */}
          <div className="py-4 w-full">
            <div className="flex flex-col gap-y-4">
              <h2 className="text-xl font-semibold leading-8">About Vendor</h2>
              <p className="text-base font-normal leading-6 text-secondary-600">
                Private Venue Management (PVM) is Venuerific&apos;s exclusive
                venue and event management arm in Singapore. With a decade of
                experience, PVM has successfully managed nearly 10,000 events,
                including corporate training, seminars, and various corporate
                occasions for over 500 clients.
              </p>
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
                Vendor Services
              </h2>
              <div className="flex w-full flex-wrap gap-2">
                {[
                  "Photography",
                  "Catering",
                  "Event Management",
                  "Signage & Branding",
                ].map((chip, index) => (
                  <Chip
                    key={index}
                    className="bg-inherit bg-primary-50 py-4 text-primary-700"
                    radius="sm"
                    variant="light"
                  >
                    <span className="text-sm font-semibold leading-5 text-primary-700">
                      {chip}
                    </span>
                  </Chip>
                ))}
              </div>
            </div>
            <Divider className="my-6" />
            <div ref={packagesRef} className="w-full scroll-mt-24">
              <h2 className="text-xl font-semibold leading-8">
                Vendor Packages
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-x-0 md:gap-3">
                {/* vendor package cards */}
                <VendorPackageCard name="Corporate Event" />
                <VendorPackageCard name="Weekend Special (+Photo Booth Add-On Service)" />
              </div>
            </div>
            <Divider className="my-6" />
            {/* Location */}
            <div>
              <h2 className="text-xl font-semibold leading-8">Location</h2>
              <div className="w-full bg-secondary-200 h-[350px] mt-4 flex items-center justify-center">
                Map Placeholder
              </div>
            </div>

            <Divider className="my-6" />
            {/* FAQ */}
            <div>
              <h2 className="text-xl font-semibold leading-8">
                Frequently Asked Questions
              </h2>
              <div className="mt-4 px-0">
                <CustomAccordion faqs={DUMMY_FAQS} />
              </div>
            </div>

            <Divider className="my-6" />
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
          {/* FAQ */}
          <div className="py-4 w-full">
            <div className="flex flex-col gap-y-4">
              <h2 className="text-xl font-semibold leading-8">About Vendor</h2>
              <p className="text-base font-normal leading-6 text-secondary-600">
                Private Venue Management (PVM) is Venuerific&apos;s exclusive
                venue and event management arm in Singapore. With a decade of
                experience, PVM has successfully managed nearly 10,000 events,
                including corporate training, seminars, and various corporate
                occasions for over 500 clients.
              </p>
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
                Vendor Services
              </h2>
              <div className="flex w-full flex-wrap gap-2">
                {[
                  "Photography",
                  "Catering",
                  "Event Management",
                  "Signage & Branding",
                ].map((chip, index) => (
                  <Chip
                    key={index}
                    className="bg-inherit bg-primary-50 py-4 text-primary-700"
                    radius="sm"
                    variant="light"
                  >
                    <span className="text-sm font-semibold leading-5 text-primary-700">
                      {chip}
                    </span>
                  </Chip>
                ))}
              </div>
            </div>
            <Divider className="my-6" />
            <div>
              <h2 className="text-xl font-semibold leading-8">
                Vendor Packages
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-x-0 md:gap-3">
                {/* vendor package cards */}
                <VendorPackageCard name="Corporate Event" />
                <VendorPackageCard name="Weekend Special (+Photo Booth Add-On Service)" />
              </div>
            </div>
            <Divider className="my-6" />
            {/* Location */}
            <div>
              <h2 className="text-xl font-semibold leading-8">Location</h2>
              <div className="w-full bg-secondary-200 h-[350px] mt-4 flex items-center justify-center">
                Map Placeholder
              </div>
            </div>

            <Divider className="my-6" />
            {/* FAQ */}
            <div ref={faqRef} className="scroll-mt-24">
              <h2 className="text-xl font-semibold leading-8">
                Frequently Asked Questions
              </h2>
              <div className="mt-4 px-0">
                <CustomAccordion faqs={DUMMY_FAQS} />
              </div>
            </div>

            <Divider className="my-6" />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};
