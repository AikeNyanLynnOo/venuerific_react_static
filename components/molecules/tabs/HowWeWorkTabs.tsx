"use client";

import { Tab, Tabs } from "@nextui-org/tabs";
import { useState, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import HowWeWorkThreeSimpleSteps from "../../howWeWork/HowWeWorkThreeSimpleSteps";

const tabsData = [
  {
    key: "event_organisers",
    title: "For Event Organisers",
    icon: "./images/how_we_work/event_organiser_icon.webp",
    heading: "For Event Organisers",
    text: "Venuerific simplifies finding, comparing, and booking event venues for all your events. From trendy restaurants to private islands, we have you covered with a selection of the best event space rentals in Southeast Asia.",
    steps: [
      {
        title: "Discover Your Perfect Space",
        text: "Explore Venuerific to discover the ideal event space rentals and event services for your upcoming event.",
      },
      {
        title: "Send Enquiry",
        text: "When you find the right event space or service, submit your enquiry for FREE through form, chat, WhatsApp or call.",
      },
      {
        title: "Celebrate Your Event",
        text: "The venue owner will contact you directly. Let's make your event happen and #CelebrateAnywhere with us!",
      },
    ],
  },
  {
    key: "venue_owners",
    title: "For Venue Owners",
    icon: "./images/how_we_work/venue_owner_icon.webp",
    heading: "For Venue Owners",
    text: "Showcase your listing to thousands of quality leads on our platform. List bars, boats, yachts, galleries, museums, apartments, lofts, hotels, and other event space rentals in Singapore.",
    steps: [
      {
        title: "List Your Venue",
        text: "Click on the 'List Venue' button and enter all the details of your space.",
      },
      {
        title: "Receive Event Leads",
        text: "Receive enquiries immediately from interested event organisers and increase your revenue.",
      },
      {
        title: "Access Venue Management System",
        text: "Manage your event enquiries under one system with simple-to-use event data management software!",
      },
    ],
  },
  {
    key: "vendors",
    title: "For Vendors",
    icon: "./images/how_we_work/for_vendor_icon.webp",
    heading: "For Vendors",
    text: "Directly showcase your products and services to event planners through our Vendor Listing platform. List catering, floral arrangements, event planning, and more.",
    steps: [
      {
        title: "List Your Service",
        text: "Click 'List Vendor', enter your details, and let us review your listing.",
      },
      {
        title: "Receive Event Leads",
        text: "Highlight your business on your profile page, attract enquiries from event organisers, and boost your revenue.",
      },
      {
        title: "Use our Vendor Management System",
        text: "Get instant enquiries from event organisers and manage all enquiries in one easy-to-use event data management software.",
      },
    ],
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
        "bg-white border-b px-5 sm:px-0 rounded-t-lg w-full max-w-screen-2xl mx-auto font-bold",
        customClasses
      ),
    [customClasses]
  );

  const currentTab = tabsData.find((tab) => tab.key === selectedTab);

  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20">
      <div className="md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto">
        <Tabs
          aria-label="How We Work Tabs"
          selectedKey={selectedTab}
          color="primary"
          onSelectionChange={(key) => setSelectedTab(key.toString())}
          variant="underlined"
          className={tabsClasses}
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
          {currentTab && (
            <div>
              <div className="flex flex-col items-center md:items-center lg:items-start">
                <img
                  src={currentTab.icon}
                  alt={currentTab.heading}
                  className="mb-6"
                  width={64}
                  height={64}
                />
                <h2 className="text-3xl font-semibold text-primary-700 mb-6">
                  {currentTab.heading}
                </h2>
                <p className="text-1xl text-secondary-600 px-5 md:px-8 lg:px-0">
                  {currentTab.text}
                </p>
              </div>

              {currentTab.steps && (
                <HowWeWorkThreeSimpleSteps stepsData={currentTab.steps} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
