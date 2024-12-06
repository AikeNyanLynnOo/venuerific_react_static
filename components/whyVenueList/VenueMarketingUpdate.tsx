"use client";
import { Tab, Tabs } from "@nextui-org/tabs";
import { useState, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

const sections = [
  {
    key: "attract_capture",
    title: "Attract & Capture",
    icon: "/images/why_venue_list/venue_marketing_img1.webp",
    inactiveIcon: "/images/why_venue_list/venue_marketing_img1.webp",
    content: [
      {
        heading: "Rank Higher on Google",
        text: "Boost your online visibility and attract a world of new event organizers by getting listed on Venuerific.",
      },
      {
        heading: "Generate More Leads",
        text: "Increase venue bookings through specialized venue marketing strategies.",
      },
    ],
    rightImage: "/images/why_venue_list/1-attract-capture.webp",
    textStyle: "text-primary-600",
  },
  {
    key: "manage_automate",
    title: "Manage & Automate",
    icon: "/images/why_venue_list/venue_marketing_img2.webp",
    inactiveIcon: "/images/why_venue_list/venue_marketing_icon_inactive_2.webp",
    content: [
      {
        heading: "Easily Manage Leads and Bookings",
        text: "Track all your leads and manage bookings easily in one platform. Automate the entire venue sales process so you can focus what truly matters - growing your venue business.",
      },
      {
        heading: "Manage Your Schedule with Ease",
        text: "Stay organized from the comfort of our CRM! Our calendar sync feature allows you to integrate your venue’s calendar to Venuerific, enabling you to check event availability and upcoming bookings. Keep your venue management seamless and efficient!",
      },
      {
        heading: "Instant Venue Insights",
        text: "Save time preparing for meetings with analytics that automatically update in real-time, delivering key insights on your venue's performance, including conversion rates and listing views.",
      },
    ],
    rightImage: "/images/why_venue_list/2-manage-automate.webp",
    textStyle: "text-[#A261FD]",
  },
  {
    key: "convert_nurture",
    title: "Convert & Nurture",
    icon: "/images/why_venue_list/venue_marketing_img3.webp",
    inactiveIcon: "/images/why_venue_list/venue_marketing_icon_inactive_3.webp",
    content: [
      {
        heading: "Instant Quotation Generation",
        text: "Quickly generate and send quotations to clients, complete with detailed descriptions and price via email or WhatsApp.",
      },
      {
        heading: "Seamless and Secure Transactions with Venuerific Payment",
        text: "With Venuerific Payment, receive payment safely and quickly for any bookings you get.",
      },
      {
        heading:
          "Grow Revenue through WhatsApp and email campaigns for your venue",
        text: "Harness the power of WhatsApp and email campaigns on Venuerific to promote your venue and nurture customer relationships, positioning your venue for long-term growth.",
      },
    ],
    rightImage: "/images/why_venue_list/3-convert-nurture.webp",
    textStyle: "text-[#0D6EFD]",
  },
];

const VenueMarketingUpdate = () => {
  const [selectedTab, setSelectedTab] = useState("attract_capture");

  const tabsClasses = useMemo(
    () =>
      twMerge(
        "mt-8 border-b-4 px-5 sm:px-0 rounded-t-lg w-full max-w-screen-2xl mx-auto font-bold"
      ),
    []
  );

  const currentTab = sections.find((tab) => tab.key === selectedTab);

  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-20 bg-primary-50">
      <div className="px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto">
        <h1 className="hidden md:block text-black text-2xl font-semibold">
          The #1 Venue Marketing Platform in Asia
        </h1>

        <h2 className="text-primary-700 text-3xl font-bold mt-0 md:mt-4">
          Venue Management & Marketing Lifecycle
        </h2>
        <Tabs
          aria-label="Venue Marketing Sections"
          selectedKey={selectedTab}
          color="primary"
          onSelectionChange={(key) => setSelectedTab(key.toString())}
          variant="underlined"
          className={tabsClasses}
          classNames={{
            tabList:
              "mt-6 p-0 text-left flex gap-x-7 w-full md:w-full justify-start",
            cursor: "w-full h-1 bg-primary-600",
            tab: "h-12 min-w-fit p-0 flex items-center justify-start text-xl font-semibold",
            tabContent: "min-w-fit p-0",
          }}
        >
          {sections.map((section) => (
            <Tab
              key={section.key}
              title={
                <div
                  className={`flex items-center gap-2 ${
                    selectedTab === section.key
                      ? section.textStyle
                      : "text-[#98A2B3]"
                  } text-[24px] font-semibold`}
                >
                  <Image
                    src={
                      selectedTab === section.key
                        ? section.icon
                        : section.inactiveIcon
                    }
                    alt={section.title}
                    width={44}
                    height={44}
                  />
                  <span>{section.title}</span>
                </div>
              }
            />
          ))}
        </Tabs>

        <div className="text-left mt-14">
          {currentTab && (
            <div className="flex flex-col lg:flex-row gap-32 items-center">
              <div className="flex-1 lg:mr-12">
                <div className="flex flex-col items-left">
                  {currentTab.content.map((item, index) => (
                    <div key={index} className="mb-12">
                      <h3 className="text-[20px] font-semibold text-black mb-2">
                        {item.heading}
                      </h3>
                      <p className="text-xl text-secondary-600 lg:px-0">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 lg:mt-0 lg:flex-none lg:h-full flex items-end">
                <Image
                  src={currentTab.rightImage}
                  alt={`${currentTab.title} Image`}
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VenueMarketingUpdate;
