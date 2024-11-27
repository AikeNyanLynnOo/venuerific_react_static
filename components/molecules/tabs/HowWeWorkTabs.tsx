"use client";

import { Tab, Tabs } from "@nextui-org/tabs";
import { useState, useMemo } from "react";
import { twMerge } from "tailwind-merge";

const tabsData = [
  {
    key: "event_organisers",
    title: "For Events Organisers",
    icon: "./images/how_we_work/event_organiser_icon.webp",
    heading: "For Event Organisers",
    text: "Venuerific simplifies finding, comparing, and booking event venues for all your events. From trendy restaurants to private islands, we have you covered with a selection of the best event space rentals in Southeast Asia.",
  },
  {
    key: "venue_owners",
    title: "For Venue Owners",
    icon: "./images/how_we_work/venue_owner_icon.webp",
    heading: "For Venue Owners",
    text: "Showcase your listing to thousands of quality leads on our platform. List bars, boats, yachts, galleries, museums, apartments, lofts, hotels, and other event space rentals in Singapore.",
  },
  {
    key: "vendors",
    title: "For Vendors",
    icon: "./images/how_we_work/for_vendor_icon.webp",
    heading: "For Vendors",
    text: "Directly showcase your products and services to event planners through our Vendor Listing platform. List catering, floral arrangements, event planning, and more.",
  },
];

interface FeatureBusinessTabsProps {
  customClasses?: string;
}

export const HowWeWorkTabs = ({ customClasses }: FeatureBusinessTabsProps) => {
  const [selectedTab, setSelectedTab] = useState("event_organisers");
  const tabsClasses = useMemo(
    () =>
      twMerge(
        "bg-white border-b px-0 rounded-t-lg w-full max-w-screen-2xl mx-auto font-bold",
        customClasses
      ),
    [customClasses]
  );

  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20">
      <div className="px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto">
        <Tabs
          aria-label="How We Work Tabs"
          selectedKey={selectedTab}
          color="primary"
          onSelectionChange={(key) => setSelectedTab(key.toString())}
          variant="underlined"
          className={tabsClasses}
          //   className="bg-white border-b px-0 max-w-screen-2xl mx-auto"
          classNames={{
            tabList: "p-0 text-left flex gap-x-7 w-full md:w-fit",
            cursor: "w-full h-0.5 bg-primary-600",
            tab: "h-12 min-w-fit p-0",
            tabContent: "min-w-fit p-0",
          }}
        >
          {tabsData.map((tab) => (
            <Tab key={tab.key} title={tab.title}></Tab>
          ))}
        </Tabs>

        <div className="text-center md:text-center lg:text-left mt-14">
          {tabsData.map(
            (tab) =>
              selectedTab === tab.key && (
                <div
                  key={tab.key}
                  className="flex flex-col items-center md:items-center lg:items-start"
                >
                  <img
                    src={tab.icon}
                    alt={tab.heading}
                    className="mb-6"
                    width={64}
                    height={64}
                  />
                  <h2 className="text-3xl font-semibold text-primary-700 mb-6">
                    {tab.heading}
                  </h2>
                  <p className="text-1xl text-secondary-600">{tab.text}</p>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};
