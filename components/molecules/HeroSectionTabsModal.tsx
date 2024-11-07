import { Button } from "@nextui-org/button";
import { Modal, ModalBody, ModalContent } from "@nextui-org/modal";
import { Select, SelectItem } from "@nextui-org/select";
import { Switch } from "@nextui-org/switch";
import { Tab, Tabs } from "@nextui-org/tabs";
import { CaretDown, MagnifyingGlass } from "@phosphor-icons/react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DynamicLabelWithIcon = dynamic(() =>
  import("@/components/atoms/LabelWithIcon").then(
    (module) => module.LabelWithIcon,
  ),
);

const DynamicMuiAuto = dynamic(() =>
  import("@/components/molecules/MuiAuto").then((module) => module.MuiAuto),
);

import { useParams, useRouter } from "next/navigation";

import { searchVendor, searchVenue } from "@/utils/apiFunctions";

interface HeroSectionTabsModalProps {
  cookies?: any;
  isOpen: boolean;
  placement: any;
  onOpenChange: any;
  event_types_supported: any[];
  max_capacity: any[];
  location: any[];
  vendor_search?: boolean;
  vendor_services: any[];
  vendor_areas: any[];
}

export const HeroSectionTabsModal = ({
  cookies,
  isOpen,
  placement,
  onOpenChange,
  event_types_supported,
  max_capacity,
  location,
  vendor_search,
  vendor_services,
  vendor_areas,
}: HeroSectionTabsModalProps) => {
  const params = useParams();
  const router = useRouter();

  // client side cookie parse (CANNOT PARSE HTTPONLY COOKIES)
  // const cookieStore = parseCookies();
  // const cookies = Object.entries(cookieStore).map(([key, value]) => ({
  //   name: key,
  //   value,
  // }));

  const [selected, setSelected] = useState("venues");

  const [visible, setVisible] = useState(true);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const [inputValueVenue, setInputValueVenue] = useState("");
  const [inputValueVendor, setInputValueVendor] = useState("");
  const [debouncedInputVenue, setDebouncedInputVenue] =
    useState(inputValueVenue);
  const [debouncedInputVendor, setDebouncedInputVendor] =
    useState(inputValueVendor);

  const [suggestType, setSuggestType] = useState("");
  const [longtailPath, setLongtailPath] = useState("");
  const [eventType, setEventType] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [maxCapacity, setMaxCapacity] = useState("");
  const [deals, setDeals] = useState(false);
  const [quickSearchCompleted, setQuickSearchCompleted] = useState("");
  const [vendorService, setVendorService] = useState("");
  const [vendorArea, setVendorArea] = useState("");

  const [suggestVenue, setSuggestVenue] = useState(null);
  const [suggestVendor, setSuggestVendor] = useState(null);

  const handleChangeVendorService = (e: any) => {
    if (e.target.value) {
      setVendorService(e.target.value);
    }
  };

  const resetValues = useCallback(() => {
    setInputValueVenue("");
    setInputValueVendor("");
    setSuggestType("");
    setLongtailPath("");
    setEventType("");
    setSearchLocation("");
    setMaxCapacity("");
    setDeals(false);
    setQuickSearchCompleted("");
    setSuggestVenue(null);
    setSuggestVendor(null);
    setVendorService("");
    setVendorArea("");
  }, [selected]);

  useEffect(() => {
    resetValues();
  }, [selected]);

  //   const handleSearchTermChange = (e: any, v: any) => {
  //     if (v && v.link) {
  //       setLongtailPath(v.link);
  //     } else {
  //       setLongtailPath("");
  //     }
  //     if (v && v.value) {
  //       setQuickSearchCompleted(v.value);
  //     } else {
  //       setQuickSearchCompleted("");
  //     }
  //     if (v && v.type_label) {
  //       setSuggestType(v.type_label);
  //     } else {
  //       setSuggestType("");
  //     }
  //     if (selected === "venues") {
  //       setSuggestVenue(v);
  //     } else {
  //       setSuggestVendor(v);
  //     }
  //   };

  const handleLocationChange = (e: any, v: any) => {
    if (v && v.name) {
      setSearchLocation(v.name);

      return;
    }
    setSearchLocation(v || "");
  };
  const handleEventTypeChange = (e: any, v: any) => {
    if (v && v.value) {
      setEventType(v.value);

      return;
    }
    setEventType(v || "");
  };
  const handleVendorAreaChange = (e: any, v: any) => {
    if (v && v.name) {
      setVendorArea(v.name);

      return;
    }
    setVendorArea(v || "");
  };

  const handleChangeMaxCapacity = (e: any) => {
    if (e.target.value) {
      setMaxCapacity(e.target.value);
    }
  };

  const handleSubmitVenue = async () => {
    // submit data
    setIsLoading(true);
    const { status, data } = await searchVenue({
      referer: window.location.href,
      user_agent: window.navigator.userAgent,
      //   quickSearchCompleted,
      //   longtailPath,
      //   suggestType,
      event_types_supported: eventType,
      deals: deals,
      maxCapacity,
      searchLocation,
      country: (params.country || "sg") as string,
      cookies,
    });

    if (status === 401) {
      router.push("/login");
    }

    if (data && data.redirect_to) {
      setIsLoading(false);
      // router.push(data.redirect_to);
      window.location.href = data.redirect_to;
    }
  };
  const handleSubmitVendor = async () => {
    // submit data
    setIsLoading(true);
    const { status, data } = await searchVendor({
      user_agent: window.navigator.userAgent,
      referer: window.location.href,
      vendorService,
      vendorArea,
      deals: deals,
      country: (params.country || "sg") as string,
      cookies,
    });

    if (status === 401) {
      router.push("/login");
    }

    setIsLoading(false);
    if (data && data.redirect_to) {
      // router.push(data.redirect_to);
      window.location.href = data.redirect_to;
    }
  };

  // suggest types
  //   let suggestListVenue = useAsyncList({
  //     async load({ signal, filterText }) {
  //       // FETCH API
  //       const res = await getSuggestionsForEventType({
  //         search_banner: "venue",
  //         country: (params.country || "sg") as string,
  //         term: filterText || "",
  //       });
  //       return {
  //         items: (res && res.data && res.data.quick_search_completed) || [],
  //       };
  //     },
  //   });
  //   let suggestListVendor = useAsyncList({
  //     async load({ signal, filterText }) {
  //       // FETCH API
  //       const res = await getSuggestionsForEventType({
  //         search_banner: "vendor",
  //         country: (params.country || "sg") as string,
  //         term: filterText || "",
  //       });
  //       return {
  //         items: (res && res.data && res.data.quick_search_completed) || [],
  //       };
  //     },
  //   });

  // Debouncing effect
  //   useEffect(() => {
  //     const handler = setTimeout(() => {
  //       setDebouncedInputVenue(inputValueVenue);
  //     }, 800);

  //     return () => {
  //       clearTimeout(handler);
  //     };
  //   }, [inputValueVenue]);
  //   useEffect(() => {
  //     const handler = setTimeout(() => {
  //       setDebouncedInputVendor(inputValueVendor);
  //     }, 800);

  //     return () => {
  //       clearTimeout(handler); // Clear the timeout if inputValue changes
  //     };
  //   }, [inputValueVendor]);

  // Trigger the list loading based on debouncedInput
  //   useEffect(() => {
  //     if (debouncedInputVenue) {
  //       suggestListVenue.setFilterText(debouncedInputVenue);
  //     }
  //   }, [debouncedInputVenue]);
  //   useEffect(() => {
  //     if (debouncedInputVendor) {
  //       suggestListVendor.setFilterText(debouncedInputVendor);
  //     }
  //   }, [debouncedInputVendor]);

  const handleScroll = useCallback(() => {
    if (window.scrollY >= 374) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <Modal
      disableAnimation
      classNames={{
        base: "rounded-b-none sm:rounded-lg",
      }}
      isDismissable={false}
      isOpen={isOpen}
      placement={placement}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <ModalBody>
            <div className={`${visible ? "block" : "block md:hidden"}`}>
              <Tabs
                aria-label="Options"
                className={`bg-white rounded-t-lg w-fit`}
                classNames={{
                  tabList: "pb-0 py-0 text-center px-2 w-fit",
                  cursor: "w-full h-0.5 bg-primary-600",
                  tab: "h-fit py-0",
                }}
                color="primary"
                selectedKey={selected}
                variant="underlined"
                onSelectionChange={(key) => setSelected(`${key}`)}
              >
                <Tab
                  key="venues"
                  className="p-0"
                  title={
                    <DynamicLabelWithIcon
                      customIconClasses="w-5 h-5"
                      customLabelClasses={`${selected === "venues" ? "text-primary-700" : "text-secondary-500"}`}
                      label={{
                        text: "Venues",
                        variant: "textLgBold",
                      }}
                      startIcons={[
                        {
                          IconNode: (
                            <Image
                              alt="icon"
                              className="h-[20px] w-[20px]"
                              height={20}
                              loading="lazy"
                              src={`/images/icons/venues_tab_${selected === "venues" ? "active" : "default"}.svg`}
                              width={20}
                            />
                          ),
                        },
                      ]}
                    />
                  }
                >
                  <div className="mt-4 p-0 py-2 flex flex-col lg:flex-row gap-4 items-center">
                    {/* Event Type */}
                    <div className="w-full lg:flex-1">
                      <span className="text-secondary-700 block lg:hidden mb-2 text-sm font-medium leading-5">
                        What type of event are you organizing
                      </span>
                      {/* <AutoCompleteWithIcon
                        inputValue={inputValueVenue}
                        isLoading={suggestListVenue.isLoading}
                        items={suggestListVenue.items}
                        placeholder="Select Event Type"
                        selectorIcon={
                          <CaretDown
                            size={18}
                            style={{
                              minWidth: "15px",
                            }}
                          />
                        }
                        startContent={
                          <MagnifyingGlass
                            className="text-secondary-500"
                            size={26}
                          />
                        }
                        onInputChange={setInputValueVenue}
                      /> */}
                      {/* <DynamicMuiAuto
                        options={suggestListVenue.items.map((item: any) => ({
                          name: item.label,
                          link: item.link,
                          value: item.value,
                          type_label: item.type_label,
                        }))}
                        isLoading={suggestListVenue.isLoading}
                        value={suggestVenue}
                        onInputChange={(
                          e: React.SyntheticEvent,
                          value: string,
                          r: string
                        ) => setInputValueVenue(value)}
                        handleChange={handleSearchTermChange}
                        startIconSrc="/images/icons/search.svg"
                        placeholder="Select Event Type"
                      /> */}
                      <DynamicMuiAuto
                        handleChange={handleEventTypeChange}
                        options={event_types_supported || []}
                        placeholder="Select Event Type"
                        startIconSrc="/images/icons/search.svg"
                        value={eventType}
                      />
                    </div>

                    {/* Number of Pax */}
                    <div className="w-full lg:flex-1">
                      <span className="text-secondary-700 block mb-2 lg:hidden text-sm font-medium leading-5">
                        Total Guests
                      </span>
                      <Select
                        disableAnimation
                        aria-label="Select an item"
                        classNames={{
                          trigger: "h-[42px] min-h-10 rounded-lg border-1",
                        }}
                        placeholder="Number of Pax"
                        popoverProps={{
                          offset: 0,
                          classNames: {
                            base: "before:bg-default-200",
                            content:
                              "p-0 border-small border-divider bg-background max-h-[180px]",
                          },
                        }}
                        selectorIcon={
                          <CaretDown
                            size={18}
                            style={{
                              minWidth: "15px",
                            }}
                          />
                        }
                        size="lg"
                        startContent={
                          <Image
                            alt="icon"
                            className="w-[20px] h-[20px] object-cover mr-1"
                            height={20}
                            loading="lazy"
                            src="/images/icons/person.svg"
                            style={{
                              width: "auto",
                              height: "auto",
                            }}
                            width={20}
                          />
                        }
                        variant="bordered"
                        onChange={handleChangeMaxCapacity}
                      >
                        {max_capacity &&
                          max_capacity.map((capacity, index) => (
                            <SelectItem key={capacity}>{capacity}</SelectItem>
                          ))}
                      </Select>
                    </div>

                    {/* Location */}
                    <div className="w-full lg:flex-1">
                      <span className="text-secondary-700 block mb-2 lg:hidden text-sm font-medium leading-5">
                        Location
                      </span>

                      <DynamicMuiAuto
                        handleChange={handleLocationChange}
                        options={location || []}
                        placeholder="Search Location"
                        value={searchLocation}
                      />
                      {/* <AutoCompleteWithIcon
                        // inputValue={inputValueVenue}
                        // isLoading={suggestListVenue.isLoading}
                        items={location}
                        placeholder="Search Location"
                        selectorIcon={
                          <CaretDown
                            size={18}
                            style={{
                              minWidth: "15px",
                            }}
                          />
                        }
                        startContent={
                          <Image
                            alt="icon"
                            className="w-5 h-6 ml-1 object-cover"
                            height={18}
                            loading="lazy"
                            src={"/images/icons/location.svg"}
                            width={18}
                          />
                        }
                      /> */}
                    </div>

                    {/* Toggle Button */}
                    <div className="flex w-full lg:w-fit justify-start lg:justify-center items-center justify-between lg:items-center mt-2 sm:mt-0">
                      <Switch
                        color="primary"
                        isSelected={deals}
                        size="sm"
                        onValueChange={setDeals}
                      >
                        <span className="text-secondary-700 text-sm font-medium leading-5">
                          Venue With Packages
                        </span>
                      </Switch>
                    </div>

                    {/* Search Button */}
                    <div className="flex w-full lg:w-fit justify-end lg:justify-start mt-4 lg:mt-0">
                      <Button
                        className="rounded-lg w-full lg:w-auto bg-primary-600"
                        color="primary"
                        endContent={<MagnifyingGlass size={18} />}
                        isLoading={isLoading}
                        variant="solid"
                        onClick={handleSubmitVenue}
                      >
                        Search
                      </Button>
                    </div>
                  </div>
                </Tab>
                <Tab
                  key="vendors"
                  className="p-0"
                  title={
                    <DynamicLabelWithIcon
                      customIconClasses="w-5 h-5"
                      customLabelClasses={`${selected === "vendors" ? "text-primary-700" : "text-secondary-500"}`}
                      label={{
                        text: "Vendors",
                        variant: "textLgBold",
                      }}
                      startIcons={[
                        {
                          IconNode: (
                            <Image
                              alt="icon"
                              className="h-[20px] w-[20px]"
                              height={20}
                              loading="lazy"
                              src={`/images/icons/vendors_tab_${selected === "vendors" ? "active" : "default"}.svg`}
                              width={20}
                            />
                          ),
                        },
                      ]}
                    />
                  }
                >
                  <div className="mt-4 p-0 py-2 flex flex-col lg:flex-row gap-4 items-center">
                    {/* Service Type */}
                    <div className="w-full lg:flex-1">
                      <span className="text-sm font-medium leading-5 text-secondary-700 block mb-2 lg:hidden">
                        What type of vendor are you looking for
                      </span>
                      {/* <AutoCompleteWithIcon
                        inputValue={eventTypeList.filterText}
                        isLoading={eventTypeList.isLoading}
                        items={eventTypeList.items}
                        placeholder="Select Service Type"
                        selectorIcon={
                          <CaretDown
                            size={18}
                            style={{
                              minWidth: "15px",
                            }}
                          />
                        }
                        startContent={
                          <MagnifyingGlass
                            className="text-secondary-500"
                            size={26}
                          />
                        }
                        onInputChange={eventTypeList.setFilterText}
                      /> */}

                      <Select
                        disableAnimation
                        aria-label="Select an item"
                        classNames={{
                          trigger: "h-[42px] min-h-10 rounded-lg border-1",
                        }}
                        placeholder="Select Service Type"
                        popoverProps={{
                          offset: 0,
                          classNames: {
                            base: "before:bg-default-200",
                            content:
                              "p-0 border-small border-divider bg-background max-h-[180px]",
                          },
                        }}
                        selectorIcon={
                          <CaretDown
                            size={18}
                            style={{
                              minWidth: "15px",
                            }}
                          />
                        }
                        size="lg"
                        startContent={
                          <Image
                            alt="icon"
                            className="w-[20px] h-[20px] object-cover mr-1"
                            height={20}
                            loading="lazy"
                            src="/images/icons/search.svg"
                            style={{
                              width: "auto",
                              height: "auto",
                            }}
                            width={20}
                          />
                        }
                        variant="bordered"
                        onChange={handleChangeVendorService}
                      >
                        {vendor_services &&
                          vendor_services.map((service, index) => (
                            <SelectItem key={service.value}>
                              {service.label}
                            </SelectItem>
                          ))}
                      </Select>
                    </div>

                    {/* Location */}
                    <div className="w-full lg:flex-1">
                      <span className="text-secondary-700 block mb-2 lg:hidden text-sm font-medium leading-5">
                        Location
                      </span>

                      {/* <AutoCompleteWithIcon
                        items={LOCATIONS}
                        placeholder="Select location"
                        selectorIcon={
                          <CaretDown
                            size={18}
                            style={{
                              minWidth: "15px",
                            }}
                          />
                        }
                        startContent={
                          <Image
                            alt="icon"
                            className="w-5 h-5 object-cover"
                            height={20}
                            src="/images/icons/location.svg"
                            width={20}
                            loading="lazy"
                          />
                        }
                      /> */}
                      <DynamicMuiAuto
                        handleChange={handleVendorAreaChange}
                        options={vendor_areas || []}
                        placeholder="Search Location"
                        value={vendorArea}
                      />
                    </div>

                    {/* Toggle Button */}
                    <div className="flex w-full lg:w-fit justify-start lg:justify-center items-center justify-between lg:items-center mt-2 sm:mt-0">
                      <Switch
                        isSelected={deals}
                        size="sm"
                        onValueChange={setDeals}
                      >
                        <span className="text-secondary-700 text-sm font-medium leading-5">
                          Vendor With Packages
                        </span>
                      </Switch>
                    </div>

                    {/* Search Button */}
                    <div className="flex w-full lg:w-fit justify-end lg:justify-start mt-4 lg:mt-0">
                      <Button
                        className="rounded-lg w-full lg:w-auto bg-primary-600"
                        color="primary"
                        endContent={<MagnifyingGlass size={18} />}
                        isLoading={isLoading}
                        variant="solid"
                        onClick={handleSubmitVendor}
                      >
                        Search
                      </Button>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  );
};
