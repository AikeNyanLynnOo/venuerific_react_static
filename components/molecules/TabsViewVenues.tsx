"use client";
import { Tab, Tabs } from "@nextui-org/tabs";
import { ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";

import { VenueCard } from "@/components/molecules/VenueCard";
import { HOME_DATA } from "@/config/constants";
import { useCommonStore } from "@/store/common-store";

const DynamicVendorCard = dynamic(() =>
  import("@/components/molecules/VendorCard").then((mod) => mod.VendorCard),
);

const DynamicLightGridContainerWithTitle = dynamic(() =>
  import("@/components/molecules/LightGridContainerWithTitle").then(
    (module) => module.LightGridContainerWithTitle,
  ),
);
const DynamicLightResponsiveGrid = dynamic(() =>
  import("@/components/molecules/LightResponsiveGrid").then(
    (module) => module.LightResponsiveGrid,
  ),
);

const DynamicLightLabelWithIcon = dynamic(() =>
  import("@/components/atoms/LightLabelWithIcon").then(
    (mod) => mod.LightLabelWithIcon,
  ),
);

interface TabsViewVenuesProps {
  featured_venue_link?: string;
  featured_venues?: any[];
  featured_vendor_link?: string;
  featured_vendors?: any;
  featured_vendor?: boolean;
  super_venues?: any[];
  super_venue?: boolean;
  super_venue_link?: string;
  newest_venues?: any[];
  newest_venue?: boolean;
  newest_venue_link?: string;
  package_venue_link?: string;
  package_venues?: any[];
  customClasses?: string;
  country?: string;
}

export const TabsViewVenues = ({
  // featured venue
  featured_venue_link,
  featured_venues,

  // featured vendor
  featured_vendor_link,
  featured_vendors,
  featured_vendor,
  // super venue
  super_venues,
  super_venue,
  super_venue_link,

  // newest venue
  newest_venues,
  newest_venue,
  newest_venue_link,

  // package venue
  package_venue_link,
  package_venues,
  customClasses,
  country,
}: TabsViewVenuesProps) => {
  const [selected, setSelected] = useState("featured_venue");
  const { haveBanner, bannerHeight } = useCommonStore();

  return (
    <Tabs
      aria-label="Options"
      className="bg-white rounded-t-lg w-full md:hidden"
      classNames={{
        base: `mt-8 sticky top-[${haveBanner ? bannerHeight + 81 : 81}px] z-20 bg-white`,
        tabList: "pb-0 text-center flex gap-x-7 w-full lg:w-fit",
        cursor: "w-full h-1 bg-primary-600",
        tab: "h-auto min-w-fit max-w-[148px]",
        tabContent: "min-w-fit pb-2",
      }}
      color="primary"
      selectedKey={selected}
      style={{
        top: `${haveBanner ? bannerHeight + 81 : 81}px`,
      }}
      variant="underlined"
      onSelectionChange={(key) => setSelected(`${key}`)}
    >
      {/* Featured Venue */}
      <Tab
        key="featured_venue"
        className="p-0 flex md:hidden"
        title={
          <DynamicLightLabelWithIcon
            customClasses="flex items-center gap-x-2.5 justify-between p-2 flex-col items-center gap-y-2"
            customLabel={
              <h4
                className={`text-lg font-bold leading-7 text-primary-700 ${selected === "featured_venue" ? "text-black" : "text-secondary-400"}`}
              >
                Featured Venues
              </h4>
            }
            startIconNode={
              <Image
                alt="icon"
                className="h-[28px] w-[28px]"
                height={28}
                loading="lazy"
                src={`/images/icons/venues_tab_${selected === "featured_venue" ? "active" : "default"}.svg`}
                width={28}
              />
            }
          />
        }
      >
        <DynamicLightGridContainerWithTitle
          className="px-4 md:px-0 my-10 md:mt-4 md:mb-10"
          icon={{
            IconNode: <ArrowRight className="text-primary-700" size={20} />,
          }}
          linkHref={featured_venue_link || "#"}
          linkText={HOME_DATA[`${country || "sg"}`].featuredVenue.linkText}
          text={HOME_DATA[`${country || "sg"}`].featuredVenue.text}
          title={HOME_DATA[`${country || "sg"}`].featuredVenue.title}
        >
          <DynamicLightResponsiveGrid>
            {featured_venues &&
              featured_venues.length > 0 &&
              featured_venues.map((venue, index) => (
                <VenueCard key={index} {...venue} />
              ))}
          </DynamicLightResponsiveGrid>
        </DynamicLightGridContainerWithTitle>
      </Tab>

      {/* Featured Vendor */}
      {featured_vendor && featured_vendors && (
        <Tab
          key="featured_vendor"
          className="p-0 flex md:hidden"
          title={
            <DynamicLightLabelWithIcon
              customClasses="flex items-center gap-x-2.5 justify-between p-2 flex-col items-center gap-y-2"
              customLabel={
                <span
                  className={`text-lg font-bold leading-7 ${selected === "featured_vendor" ? "text-black" : "text-secondary-400"}`}
                >
                  Featured Vendors
                </span>
              }
              startIconNode={
                <Image
                  alt="icon"
                  className="h-[28px] w-[28px]"
                  height={28}
                  loading="lazy"
                  src={`/images/icons/vendors_tab_${selected === "featured_vendor" ? "active" : "default"}.svg`}
                  width={28}
                />
              }
            />
          }
        >
          <DynamicLightGridContainerWithTitle
            className="px-4 md:px-0 my-10 md:mt-4 md:mb-10"
            icon={{
              IconNode: <ArrowRight className="text-primary-700" size={20} />,
            }}
            linkHref={featured_vendor_link}
            linkText={HOME_DATA[`${country || "sg"}`].featuredVendor.linkText}
            text={HOME_DATA[`${country || "sg"}`].featuredVendor.text}
            title={HOME_DATA[`${country || "sg"}`].featuredVendor.title}
          >
            <DynamicLightResponsiveGrid>
              {featured_vendors.map(
                (
                  {
                    id,
                    type,
                    attributes,
                  }: {
                    id: any;
                    type: any;
                    attributes: any;
                  },
                  index: any,
                ) => (
                  <DynamicVendorCard key={index} {...attributes} />
                ),
              )}
            </DynamicLightResponsiveGrid>
          </DynamicLightGridContainerWithTitle>
        </Tab>
      )}
      {/* Super Venue */}
      {super_venue && super_venues && (
        <Tab
          key="super"
          className="p-0 flex md:hidden"
          title={
            <DynamicLightLabelWithIcon
              customClasses="flex items-center gap-x-2.5 justify-between p-2 flex-col items-center gap-y-2"
              customLabel={
                <span
                  className={`text-lg font-bold leading-7 ${selected === "super" ? "text-black" : "text-secondary-400"}`}
                >
                  Super Venues
                </span>
              }
              startIconNode={
                <Image
                  alt="icon"
                  className="h-[28px] w-[28px]"
                  height={28}
                  loading="lazy"
                  src={`/images/icons/super_tab_${selected === "super" ? "active" : "default"}.svg`}
                  width={28}
                />
              }
            />
          }
        >
          <DynamicLightGridContainerWithTitle
            className="px-4 md:px-0 my-10 md:mt-4 md:mb-10"
            icon={{
              IconNode: <ArrowRight className="text-primary-700" size={20} />,
            }}
            linkHref={super_venue_link || "#"}
            linkText={HOME_DATA[`${country || "sg"}`].superVenue.linkText}
            text={HOME_DATA[`${country || "sg"}`].superVenue.text}
            title={HOME_DATA[`${country || "sg"}`].superVenue.title}
          >
            <DynamicLightResponsiveGrid>
              {super_venues.map((venue: any, index: number) => (
                <VenueCard key={index} {...venue} />
              ))}
            </DynamicLightResponsiveGrid>
          </DynamicLightGridContainerWithTitle>
        </Tab>
      )}

      {/* Newest Venue */}
      {newest_venue && newest_venues && (
        <Tab
          key="newest"
          className="p-0 flex md:hidden"
          title={
            <DynamicLightLabelWithIcon
              customClasses="flex items-center gap-x-2.5 justify-between p-2 flex-col items-center gap-y-2"
              customLabel={
                <span
                  className={`text-lg font-bold leading-7 ${selected === "newest" ? "text-black" : "text-secondary-400"}`}
                >
                  New Venues
                </span>
              }
              startIconNode={
                <Image
                  alt="icon"
                  className="h-[28px] w-[28px]"
                  height={28}
                  loading="lazy"
                  src={`/images/icons/newest_tab_${selected === "newest" ? "active" : "default"}.svg`}
                  width={28}
                />
              }
            />
          }
        >
          <DynamicLightGridContainerWithTitle
            className="px-4 md:px-0 my-10 md:mt-4 md:mb-10"
            icon={{
              IconNode: <ArrowRight className="text-primary-700" size={20} />,
            }}
            linkHref={newest_venue_link || "#"}
            linkText={HOME_DATA[`${country || "sg"}`].newestVenue.linkText}
            text={HOME_DATA[`${country || "sg"}`].newestVenue.text}
            title={HOME_DATA[`${country || "sg"}`].newestVenue.title}
          >
            <DynamicLightResponsiveGrid>
              {newest_venues.map((venue: any, index: number) => (
                <VenueCard key={index} {...venue} />
              ))}
            </DynamicLightResponsiveGrid>
          </DynamicLightGridContainerWithTitle>
        </Tab>
      )}

      {/* Package Venue */}
      {package_venues && (
        <Tab
          key="package"
          className="p-0 flex md:hidden"
          title={
            <DynamicLightLabelWithIcon
              customClasses="flex items-center gap-x-2.5 justify-between p-2 flex-col items-center gap-y-2"
              customLabel={
                <span
                  className={`text-lg font-bold leading-7 ${selected === "package" ? "text-black" : "text-secondary-400"}`}
                >
                  Featured Packages
                </span>
              }
              startIconNode={
                <Image
                  alt="icon"
                  className="h-[28px] w-[28px]"
                  height={28}
                  loading="lazy"
                  src={`/images/icons/package_tab_${selected === "package" ? "active" : "default"}.svg`}
                  width={28}
                />
              }
            />
          }
        >
          <DynamicLightGridContainerWithTitle
            className="px-4 md:px-0 my-10 md:mt-4 md:mb-10 md:hidden"
            icon={{
              IconNode: <ArrowRight className="text-primary-700" size={20} />,
            }}
            linkHref={package_venue_link || "#"}
            linkText={HOME_DATA[`${country || "sg"}`].venueWithPackage.linkText}
            text={HOME_DATA[`${country || "sg"}`].venueWithPackage.text}
            title={HOME_DATA[`${country || "sg"}`].venueWithPackage.title}
          >
            <DynamicLightResponsiveGrid>
              {package_venues.map((venue: any, index: number) => (
                <VenueCard key={index} {...venue} />
              ))}
            </DynamicLightResponsiveGrid>
          </DynamicLightGridContainerWithTitle>
        </Tab>
      )}
    </Tabs>
  );
};
