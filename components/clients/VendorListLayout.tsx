"use client";

// NextJS
import dynamic from "next/dynamic";

// Components

// Constants
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";
import {
  FunnelSimple,
  MagnifyingGlass,
  MapTrifold,
} from "@phosphor-icons/react";
import { useState } from "react";
import { Switch } from "@nextui-org/switch";

import { BottomNavs } from "../atoms/BottomNavs";
import { ListPageTabs, Tab } from "../atoms/ListPageTabs";
import { VendorCard } from "../molecules/VendorCard";

import { DUMMY_VENDORS } from "@/config/constants";
import { getUniqueArray } from "@/config/helperFunctions";

const DynamicMuiAuto = dynamic(() =>
  import("@/components/molecules/MuiAuto").then((module) => module.MuiAuto),
);

const DynamicVendorSearchModal = dynamic(() =>
  import("@/components/molecules/VendorSearchModal").then(
    (module) => module.VendorSearchModal,
  ),
);
// Search Bar Component
const SearchBar = ({
  isMapOpen,
  setIsMapOpen,
  isModalOpen,
  onModalOpen,
}: {
  isMapOpen?: boolean;
  setIsMapOpen?: any;
  isModalOpen?: boolean;
  onModalOpen?: any;
}) => {
  const [serviceType, setServiceType] = useState("");
  const [areaCity, setAreaCity] = useState("");

  const [deals, setDeals] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleServiceTypeChange = (e: any, values: any) => {
    // console.log("Value>>", values);
    setServiceType(getUniqueArray(values));
  };

  return (
    <div className="flex gap-2 md:gap-4 mb-4 sticky top-0 z-20 bg-white px-3 py-4 items-center border-b">
      <DynamicMuiAuto
        customStyles={{
          flex: 1,
        }}
        handleChange={() => {}}
        options={[]}
        placeholder="Find Services"
        startIconSrc="/images/icons/search.svg"
        value={serviceType}
      />

      <div className={`hidden flex-1 ${isMapOpen ? "lg:block" : "sm:block"}`}>
        <DynamicMuiAuto
          handleChange={() => {}}
          options={[]}
          placeholder="Area City"
          value={areaCity}
        />
      </div>

      <div
        className={`w-fit hidden items-center max-w-[150px] ${isMapOpen ? "lg:flex" : "md:flex"}`}
      >
        <Switch isSelected={deals} size="sm" onValueChange={setDeals}>
          <span className="text-secondary-700 text-sm font-medium leading-5">
            Vendor With Packages
          </span>
        </Switch>
      </div>
      <div className="flex w-fit">
        <Button
          className="rounded-lg w-full md:w-auto bg-primary-600 min-w-10 px-2 lg:px-3"
          color="primary"
          isLoading={isLoading}
          startContent={<MagnifyingGlass size={18} />}
          variant="solid"
          onClick={() => {}}
        >
          Search
        </Button>
      </div>
      <div className={`flex w-fit ${isMapOpen ? "lg:hidden" : "md:hidden"}`}>
        <Button
          className="rounded-lg w-full md:w-auto bg-white min-w-10 px-2 lg:px-3"
          color="default"
          isLoading={isLoading}
          startContent={<FunnelSimple size={18} />}
          variant="bordered"
          onClick={onModalOpen}
        />
      </div>
      {!isMapOpen && (
        <div className="hidden md:flex w-fit">
          <Button
            className="rounded-lg w-full md:w-auto bg-white min-w-10 px-2 lg:px-3"
            color="default"
            isLoading={isLoading}
            startContent={<MapTrifold size={18} />}
            variant="bordered"
            onClick={() => setIsMapOpen(!isMapOpen)}
          >
            <span className="hidden lg:flex">Open Map</span>
          </Button>
        </div>
      )}
    </div>
  );
};

// Vendor List Component
const VendorList = ({ isMapOpen }: { isMapOpen?: boolean }) => {
  return (
    <div className="p-3 pb-36">
      <h5 className="mb-2 text-secondary-400">24 Vendors in the area</h5>
      <div
        className={`grid grid-cols-1 ${isMapOpen ? "lg:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4"} gap-4`}
      >
        {DUMMY_VENDORS.map((vendor, index) => (
          <VendorCard key={index} {...vendor} showChips showGoogleIcon />
        ))}
      </div>

      <div className="w-full flex flex-col gap-y-3 items-center justify-center mt-5 py-5">
        <Button
          className="rounded-lg w-fit bg-primary-600 min-w-10 px-3"
          color="primary"
          variant="solid"
          onClick={() => {}}
        >
          Load More Vendors
        </Button>
        <p className="text-center text-base font-normal leading-6">
          You can try to{" "}
          <span className="text-primary-600 underline underline-offset-4">
            zoom out
          </span>{" "}
          on the map, change some filters, or{" "}
          <span className="text-primary-600 underline underline-offset-4">
            clear all filters
          </span>
        </p>
      </div>
    </div>
  );
};

interface VendorListLayoutProps {
  params?: any;
  headerFooterRes?: any;
  shouldDetectIP?: boolean;
}

const vendorTabs: Tab[] = [
  {
    title: "All Vendors",
    link: "/all-vendors",
    icon_name: "all_venues",
    isActive: true,
    divider: true,
  },
  {
    title: "Birthday Party",
    link: "/birthday-party",
    icon_name: "birthday",
  },
  {
    title: "Kids Birthday Party",
    link: "/kids-birthday-party",
    icon_name: "kids_birthday",
  },
  { title: "Wedding", link: "/wedding", icon_name: "wedding" },
];

export const VendorListLayout = ({
  params,
  headerFooterRes,
  shouldDetectIP,
}: VendorListLayoutProps) => {
  const [isMapOpen, setIsMapOpen] = useState(false);
  // modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <section className="mt-[81px]">
      <ListPageTabs tabs={vendorTabs} />
      <div className="flex flex-col sm:flex-row">
        {/* Left Section: Vendor List */}
        <div
          className={`w-full ${isMapOpen ? "sm:w-1/2 lg:w-2/3" : ""} h-custom-h-full max-h-custom-h-full overflow-y-scroll custom-scrollbar sticky top-0`}
        >
          <SearchBar
            isMapOpen={isMapOpen}
            isModalOpen={isOpen}
            setIsMapOpen={setIsMapOpen}
            onModalOpen={onOpen}
          />
          <VendorList isMapOpen={isMapOpen} />
        </div>

        {/* Right Section: Map */}
        {isMapOpen && (
          <div className="block w-full absolute sm:sticky sm:top-0 sm:w-1/2 lg:w-1/3 bg-gray-200 h-fit ">
            <div className="w-full h-custom-h-full bg-gray-300 flex flex-col items-center justify-center">
              <h4>Map Placeholder</h4>
              <Button onClick={() => setIsMapOpen(!isMapOpen)}>Close</Button>
            </div>
          </div>
        )}
      </div>

      {!isMapOpen && (
        <div className="block md:hidden w-fit absolute bottom-20 left-1/2 -translate-x-1/2 z-20">
          <Button
            className="rounded-lg w-fit bg-white min-w-10 px-2 lg:px-3 border shadow-lg"
            color="default"
            startContent={<MapTrifold size={18} />}
            variant="flat"
            onClick={() => setIsMapOpen(!isMapOpen)}
          >
            Open Map
          </Button>
        </div>
      )}

      <DynamicVendorSearchModal
        isOpen={isOpen}
        placement={"bottom-center"}
        onOpenChange={onOpenChange}
      />

      <BottomNavs />
    </section>
  );
};
