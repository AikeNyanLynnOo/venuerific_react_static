"use client";
import { Tab, Tabs } from "@nextui-org/tabs";
import { useState, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import "react-phone-input-2/lib/style.css";
import { Button } from "@nextui-org/button";
import { ArrowRight } from "@phosphor-icons/react";
import Footer from "../molecules/Footer";
import { VNFNavbar } from "../molecules/VNFNavbar";

interface ContactUsSectionProps {
  headerFooterRes?: any;
}

interface FeatureBusinessTabsProps {
  customClasses?: string;
}

const tabsData = [
  {
    key: "event_planner",
    title: "Event Planner",
    heading: "Getting Started With Venuerific",
    images: [
      {
        src: "/images/help_center/help_center_event_planner_img.webp",
        title: "Planning Enquiries",
      },
      {
        src: "/images/help_center/help_center_booking_img.webp",
        title: "Booking Enquiries",
      },
      {
        src: "/images/help_center/help_center_forget_acc_img.webp",
        title: "Forget Venuerific Account Details",
      },
      {
        src: "/images/help_center/help_center_cancel_booking_img.webp",
        title: "Cancellation of Bookings",
      },
    ],
  },
  {
    key: "venues_owner",
    title: "Venues Owner",
    heading: "Resources for Venue Owners",
    images: [],
  },
];

export const HelpCenterLayout = ({
  customClasses,
}: FeatureBusinessTabsProps) => {
  const [selectedTab, setSelectedTab] = useState("event_planner");

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
    <div>
      <VNFNavbar className="px-4 md:px-5 lg:px-12 xl:px-20 items-center py-2 fixed" />
      <section className="mt-[81px]">
        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/images/help_center/help_center_hero.webp"
              alt="Venue background image"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 relative z-30">
            <div className="px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto flex flex-col items-center justify-center py-24 lg:flex-row lg:items-start lg:justify-start">
              <div className="lg:w-3/5 lg:pr-8 space-y-4 text-center lg:text-left text-white z-40 relative lg:mx-0">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                  <p className="text-white text-lg text-[16px] font-semibold">
                    Help Center
                  </p>
                </div>

                <h1 className="text-3xl lg:text-5xl font-semibold">
                  Hi there, how can we help? 👋
                </h1>

                <div className="relative px-4 md:px-0 max-w-screen-2xl mx-auto">
                  <div className="flex flex-col items-center lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mt-12">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full lg:w-[400px] px-4 py-2 border border-gray-300 focus:border-secondary-400 rounded-md text-black focus:outline-none"
                    />
                    <Button className="bg-primary-600 text-white px-6 py-2 lg:px-8 lg:py-2 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600">
                      Search
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Section */}
        <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20">
          <div className="px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto">
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
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
                    <h2 className="text-3xl font-semibold">
                      {currentTab.heading}
                    </h2>
                    <a
                      href="#"
                      className="mt-4 md:mt-0 md:ml-4 self-end md:self-center flex items-center text-primary-700 text-lg font-medium hover:underline"
                    >
                      Browse all topics
                      <ArrowRight className="ml-2" size={20} />
                    </a>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
                    {currentTab.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative overflow-hidden rounded-md"
                      >
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-50">
                          <h3 className="text-white text-lg sm:text-xl font-semibold text-center px-4 py-8">
                            {image.title}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Questions Section */}
        <div className="w-full px-0 md:px-5 lg:px-12 xl:px-20 py-10">
          <div className="bg-secondary-50 px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto text-center rounded-[16px] py-10">
            <div className="relative flex justify-center items-center mb-6">
              <div className="absolute left-[calc(50%-80px)] z-10">
                <img
                  src="/images/help_center/avatar1.webp"
                  alt="Support Team Member 1"
                  className="w-16 h-16 rounded-full border-4 border-white object-cover"
                />
              </div>
              <div className="z-20" style={{ transform: "translateY(-10px)" }}>
                <img
                  src="/images/help_center/avatar2.webp"
                  alt="Support Team Member 2"
                  className="w-20 h-20 rounded-full border-4 border-white object-cover"
                />
              </div>
              <div className="absolute right-[calc(50%-80px)] z-10">
                <img
                  src="/images/help_center/avatar3.webp"
                  alt="Support Team Member 3"
                  className="w-16 h-16 rounded-full border-4 border-white object-cover"
                />
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              Still have questions?
            </h3>
            <p className="text-lg text-secondary-600 mb-6">
              Can&apos;t find the answer you&apos;re looking for? Please chat to
              our friendly team.
            </p>
            <Button className="bg-primary-600 font-semibold text-white px-6 py-3 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600">
              Get in touch
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full mt-5 mx-auto px-5 md:px-5 lg:px-12 xl:px-20 block md:flex items-center justify-between">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default HelpCenterLayout;
