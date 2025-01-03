"use client";

import { Tab, Tabs } from "@nextui-org/tabs";
import { useState, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import HowWeWorkThreeSimpleSteps from "../../howWeWork/HowWeWorkThreeSimpleSteps";
import { TAB_DATA } from "@/config/constants/how-we-work-constants";
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

  const currentTab = TAB_DATA.find((tab) => tab.key === selectedTab);

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
          {TAB_DATA.map((tab) => (
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
