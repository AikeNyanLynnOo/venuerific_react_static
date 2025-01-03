"use client";
import { Tab, Tabs } from "@nextui-org/tabs";
import { useState, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { MARKETING_LIFECYCLE } from "../../config/constants/why-venue-list-constants";

const VenueMarketingUpdate = () => {
  const [selectedTab, setSelectedTab] = useState("attract_capture");

  const tabsClasses = useMemo(
    () =>
      twMerge(
        "mt-8 px-5 sm:px-0 rounded-t-lg w-full max-w-screen-2xl mx-auto font-bold"
      ),
    []
  );

  const currentTab = MARKETING_LIFECYCLE.find((tab) => tab.key === selectedTab);

  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-10 md:py-20 bg-primary-50">
      <div className="px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto">
        <h1 className="hidden md:block text-black text-2xl font-semibold">
          The #1 Venue Marketing Platform in Asia
        </h1>

        <h2 className="text-primary-700 text-3xl font-bold mt-0 md:mt-4">
          Venue Management & Marketing Lifecycle
        </h2>

        <div className="hidden lg:block">
          <Tabs
            aria-label="Venue Marketing Sections"
            selectedKey={selectedTab}
            color="primary"
            onSelectionChange={(key) => setSelectedTab(key.toString())}
            variant="underlined"
            className={tabsClasses}
            classNames={{
              tabList:
                "mt-6 p-0 text-left flex gap-x-7 w-full md:w-full justify-start border-b-4 overflow-visible",
              cursor: "w-full h-1 bg-primary-600 absolute -bottom-1",
              tab: "h-auto min-w-fit p-0 flex items-center justify-start text-xl font-semibold py-2 relative",
              tabContent: "min-w-fit p-0",
            }}
          >
            {MARKETING_LIFECYCLE.map((section) => (
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
                    <img
                      src={
                        selectedTab === section.key
                          ? section.icon
                          : section.inactiveIcon
                      }
                      alt={section.title}
                      width="44"
                      height="44"
                    />
                    <span>{section.title}</span>
                  </div>
                }
              />
            ))}
          </Tabs>

          <div className="text-left mt-14">
            {currentTab && (
              <div className="flex flex-col lg:flex-row gap-32 items-start">
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
                  <img
                    src={currentTab.rightImage}
                    alt={`${currentTab.title} Image`}
                    width="600"
                    height="600"
                    className="object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile & Tablet View */}
        <div className="lg:hidden">
          {MARKETING_LIFECYCLE.map((section, sectionIndex) => (
            <div key={section.key} className="mb-10">
              <div className="flex flex-col items-start gap-2">
                {sectionIndex === 0 && (
                  <div className="w-full h-1.5 mt-12 mb-3 bg-gradient-to-r from-[#428EFE] to-[#A261FD]"></div>
                )}
                {sectionIndex === 1 && (
                  <div className="w-full h-1.5 mt-6 mb-3 bg-[#A261FD]"></div>
                )}

                {sectionIndex === 2 && (
                  <div className="w-full h-1.5 mt-6 mb-3 bg-gradient-to-r from-[#EE46BC] to-[#A261FD]"></div>
                )}

                <div className="flex items-center gap-4">
                  <img
                    src={section.icon}
                    alt={section.title}
                    width="44"
                    height="44"
                  />
                  <p className="text-primary-600 text-xl font-semibold">
                    {section.title}
                  </p>
                </div>

                {section.content.map((item, index) => {
                  let updatedText = item.text;
                  let updatedHeading = item.heading;

                  if (
                    section.key === "convert_nurture" &&
                    item.heading ===
                      "Grow Revenue through WhatsApp and email campaigns for your venue"
                  ) {
                    updatedHeading =
                      "Boost Customer Conversions with Targeted Campaigns";
                    updatedText =
                      "Convert more customers by nurturing them through targeted email and WhatsApp campaigns.";
                  }

                  if (
                    section.key === "attract_capture" &&
                    item.heading === "Generate More Leads"
                  ) {
                    updatedText =
                      "Increase inquiries and bookings through specialized venue marketing strategies.";
                  } else if (
                    section.key === "manage_automate" &&
                    item.heading === "Easily Manage Leads and Bookings"
                  ) {
                    updatedText =
                      "Organize inquiries from Venuerific in one place so you can track your inquiries and manage bookings easily in one platform. Automate the entire venue sales process so you can focus on what truly matters - growing your venue business.";
                  } else if (
                    section.key === "convert_nurture" &&
                    item.heading ===
                      "Seamless and Secure Transactions with Venuerific Payment"
                  ) {
                    updatedText =
                      "With Venuerific Payment, receive payment safely and quickly with our focus on nurturing relationships and converting leads into long-term clients.";
                  } else if (
                    section.key === "convert_nurture" &&
                    item.heading ===
                      "Grow Revenue through WhatsApp and email campaigns for your venue"
                  ) {
                    updatedText =
                      "Convert more customers by nurturing them through targeted email and WhatsApp campaigns.";
                  }

                  return (
                    <div key={index} className="mt-4">
                      <h3 className="text-lg font-bold mb-3">
                        {updatedHeading}
                      </h3>
                      <p className="text-sm text-secondary-500">
                        {updatedText}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VenueMarketingUpdate;
