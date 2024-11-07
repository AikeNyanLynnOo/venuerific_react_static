"use client";
import { Tab, Tabs } from "@nextui-org/tabs";
import { useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ArrowRight } from "@phosphor-icons/react";
import dynamic from "next/dynamic";

import { LightLabelWithIcon } from "../atoms/LightLabelWithIcon";

import { GridContainerWithTitle } from "./GridContainerWithTitle";
import { ResponsiveGrid } from "./ResponsiveGrid";

import { HOME_DATA } from "@/config/constants";

const DynamicVenueCard = dynamic(() =>
  import("@/components/molecules/VenueCard").then((mod) => mod.VenueCard),
);
const DynamicVendorCard = dynamic(() =>
  import("@/components/molecules/VendorCard").then((mod) => mod.VendorCard),
);

interface FeatureBusinessTabsProps {
  customClasses?: string;
  featured_venue_link?: string;
  featured_venues?: any[];
  featured_vendor_link?: string;
  featured_vendors?: any[];
  featured_vendor?: boolean;
  country?: string;
}

export const FeatureBusinessTabs = ({
  customClasses,
  featured_venue_link,
  featured_venues,
  featured_vendor_link,
  featured_vendors,
  featured_vendor,
  country,
}: FeatureBusinessTabsProps) => {
  const [selected, setSelected] = useState("venues");
  const tabsClasses = useMemo(
    () =>
      twMerge(
        "bg-white border-b px-0 rounded-t-lg w-full hidden md:block max-w-screen-2xl mx-auto",
        customClasses,
      ),
    [customClasses],
  );

  const { featuredVenue, featuredVendor } = HOME_DATA[`${country || "sg"}`];

  return (
    <Tabs
      aria-label="Options"
      className={tabsClasses}
      classNames={{
        tabList: "p-0 text-center flex gap-x-7 w-full md:w-fit",
        cursor: "w-full h-0.5 bg-primary-600",
        tab: "h-12 min-w-fit p-0",
        tabContent: "min-w-fit p-0",
      }}
      color="primary"
      selectedKey={selected}
      variant="underlined"
      onSelectionChange={(key) => setSelected(`${key}`)}
    >
      <Tab
        key="venues"
        className="p-0 flex hidden md:flex"
        title={
          <LightLabelWithIcon
            customClasses="px-0"
            customLabel={
              <span
                className={`text-base font-semibold leading-6 ${selected === "venues" ? "text-primary-700" : "text-secondary-500"}`}
              >
                Venues
              </span>
            }
          />
        }
      >
        <GridContainerWithTitle
          className="px-4 md:px-0 my-10 md:mt-4 md:mb-10 hidden md:block max-w-screen-2xl mx-auto"
          icon={{
            IconNode: <ArrowRight className="text-primary-700" size={20} />,
          }}
          linkHref={featured_venue_link || "#"}
          linkText={(featuredVenue && featuredVenue.linkText) || ""}
          text={(featuredVenue && featuredVenue.text) || ""}
          title={(featuredVenue && featuredVenue.title) || ""}
        >
          <ResponsiveGrid>
            {featured_venues &&
              featured_venues.length > 0 &&
              featured_venues.map((venue, index) => (
                <DynamicVenueCard key={index} {...venue} />
              ))}
          </ResponsiveGrid>
        </GridContainerWithTitle>
      </Tab>
      <Tab
        key="vendors"
        className="p-0 flex hidden md:flex"
        title={
          <LightLabelWithIcon
            customClasses="px-0"
            customLabel={
              <span
                className={`text-base font-semibold leading-6 ${selected === "vendors" ? "text-primary-700" : "text-secondary-500"}`}
              >
                Vendors
              </span>
            }
          />
        }
      >
        <GridContainerWithTitle
          className="px-4 md:px-0 my-10 md:mt-4 md:mb-10 hidden md:block max-w-screen-2xl mx-auto"
          icon={{
            IconNode: <ArrowRight className="text-primary-700" size={20} />,
          }}
          linkHref={featured_vendor_link || "#"}
          linkText={(featuredVendor && featuredVendor.linkText) || ""}
          text={(featuredVendor && featuredVendor.text) || ""}
          title={(featuredVendor && featuredVendor.title) || ""}
        >
          <ResponsiveGrid>
            {featured_vendors &&
              featured_vendors.length > 0 &&
              featured_vendors.map(({ id, type, attributes }, index) => (
                <DynamicVendorCard key={index} {...attributes} />
              ))}
          </ResponsiveGrid>
        </GridContainerWithTitle>
      </Tab>
    </Tabs>
  );
};
