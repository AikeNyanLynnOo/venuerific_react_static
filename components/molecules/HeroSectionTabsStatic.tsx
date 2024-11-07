import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Select, SelectItem } from "@nextui-org/select";
import { Switch } from "@nextui-org/switch";
import { Tab, Tabs } from "@nextui-org/tabs";
import { CaretDown, MagnifyingGlass } from "@phosphor-icons/react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

// const DynamicLabelWithIcon = dynamic(() =>
//   import("@/components/atoms/LabelWithIcon").then(
//     (module) => module.LabelWithIcon
//   )
// );

const DynamicMuiAuto = dynamic(() =>
  import("@/components/molecules/MuiAuto").then((module) => module.MuiAuto),
);

import dynamic from "next/dynamic";
import { useParams, useRouter } from "next/navigation";

import { LabelWithIcon } from "@/components/atoms/LabelWithIcon";
import { searchVendor, searchVenue } from "@/utils/apiFunctions";
interface HeroSectionTabsStaticProps {
  cookies?: any;
  event_types_supported: any[];
  max_capacity: any[];
  location: any[];
  vendor_search?: boolean;
  vendor_services: any[];
  vendor_areas: any[];
}

export const HeroSectionTabsStatic = ({
  cookies,
  event_types_supported,
  max_capacity,
  location,
  vendor_search,
  vendor_services,
  vendor_areas,
}: HeroSectionTabsStaticProps) => {
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
  // const [debouncedInputVenue, setDebouncedInputVenue] =
  //   useState(inputValueVenue);
  // const [debouncedInputVendor, setDebouncedInputVendor] =
  //   useState(inputValueVendor);

  // const [suggestType, setSuggestType] = useState("");
  // const [longtailPath, setLongtailPath] = useState("");
  const [eventType, setEventType] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [maxCapacity, setMaxCapacity] = useState("");
  const [deals, setDeals] = useState(false);
  // const [quickSearchCompleted, setQuickSearchCompleted] = useState("");
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
    setEventType("");
    setSearchLocation("");
    setMaxCapacity("");
    setDeals(false);
    setSuggestVenue(null);
    setSuggestVendor(null);
    setVendorService("");
    setVendorArea("");
  }, [selected]);

  useEffect(() => {
    resetValues();
  }, [selected]);

  // const handleSearchTermChange = (e: any, v: any) => {
  //   if (v && v.link) {
  //     setLongtailPath(v.link);
  //   } else {
  //     setLongtailPath("");
  //   }
  //   if (v && v.value) {
  //     setQuickSearchCompleted(v.value);
  //   } else {
  //     setQuickSearchCompleted("");
  //   }
  //   if (v && v.type_label) {
  //     setSuggestType(v.type_label);
  //   } else {
  //     setSuggestType("");
  //   }
  //   if (selected === "venues") {
  //     setSuggestVenue(v);
  //   } else {
  //     setSuggestVendor(v);
  //   }
  // };

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

    setIsLoading(false);
    if (data && data.redirect_to) {
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
  // let suggestListVenue = useAsyncList({
  //   async load({ signal, filterText }) {
  //     // FETCH API
  //     const { data, status } = await getSuggestionsForEventType({
  //       search_banner: "venue",
  //       country: (params.country || "sg") as string,
  //       term: filterText || "",
  //       cookies,
  //     });
  //     if (status === 401) {
  //       router.push("/login");
  //     }
  //     return {
  //       items: (data && data.quick_search_completed) || [],
  //     };
  //   },
  // });
  // let suggestListVendor = useAsyncList({
  //   async load({ signal, filterText }) {
  //     // FETCH API
  //     const { status, data } = await getSuggestionsForEventType({
  //       search_banner: "vendor",
  //       country: (params.country || "sg") as string,
  //       term: filterText || "",
  //       cookies,
  //     });
  //     if (status === 401) {
  //       router.push("/login");
  //     }
  //     return {
  //       items: (data && data.quick_search_completed) || [],
  //     };
  //   },
  // });

  // Debouncing effect
  // useEffect(() => {
  //   const handler = setTimeout(() => {
  //     setDebouncedInputVenue(inputValueVenue);
  //   }, 800);

  //   return () => {
  //     clearTimeout(handler);
  //   };
  // }, [inputValueVenue]);
  // useEffect(() => {
  //   const handler = setTimeout(() => {
  //     setDebouncedInputVendor(inputValueVendor);
  //   }, 800);

  //   return () => {
  //     clearTimeout(handler); // Clear the timeout if inputValue changes
  //   };
  // }, [inputValueVendor]);

  // Trigger the list loading based on debouncedInput
  // useEffect(() => {
  //   if (debouncedInputVenue) {
  //     suggestListVenue.setFilterText(debouncedInputVenue);
  //   }
  // }, [debouncedInputVenue]);
  // useEffect(() => {
  //   if (debouncedInputVendor) {
  //     suggestListVendor.setFilterText(debouncedInputVendor);
  //   }
  // }, [debouncedInputVendor]);

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
  }, []);

  return (
    <div
      className={`text-center ${visible ? "hidden md:block max-w-screen-2xl mx-auto" : "hidden"}`}
    >
      <Tabs
        aria-label="Options"
        className={`bg-white rounded-t-xl w-full md:w-fit`}
        classNames={{
          tabList: "pb-0 text-center px-2 lg:px-7 w-full lg:w-fit",
          cursor: "w-full h-0.5 bg-primary-600",
          tab: "h-12",
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
            <LabelWithIcon
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
          <Card className="rounded-t-none rounded-b-xl md:rounded-xl m-0 p-0 p-2 md:px-3 md:py-1">
            <CardBody>
              <div className="flex flex-col md:flex-row gap-4 items-center lg:items-end">
                {/* Event Type */}
                <div className="w-full md:flex-1">
                  {/* md:hidden */}
                  <span className="text-sm font-medium leading-5 text-secondary-700 hidden lg:block mb-2">
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
                <div className="w-full md:flex-1">
                  {/* md:hidden */}
                  <span className="text-sm font-medium leading-5 text-secondary-700 hidden lg:block mb-2">
                    Total Guests
                  </span>
                  <Select
                    disableAnimation
                    aria-label="Select an item"
                    classNames={{
                      trigger: "h-[42px] min-h-10  rounded-lg border-1",
                    }}
                    placeholder="Number of Pax"
                    popoverProps={{
                      placement: "bottom",
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
                  {/* <MuiSelect
                    value={""}
                    handleChange={handleChangeMaxCapacity}
                    startAdornment={
                      <Image
                        alt="icon"
                        className="w-5 h-5 ml-1 -mt-0.5 object-contain absolute top-1/2 -translate-y-1/2 left-2"
                        height={16}
                        width={16}
                        loading="lazy"
                        src="/images/icons/person.svg"
                      />
                    }
                    items={max_capacity}
                    label="Number of Pax"
                  /> */}
                </div>

                {/* Location */}
                <div className="w-full md:flex-1">
                  {/* md:hidden */}
                  <span className="text-sm font-medium leading-5 text-secondary-700 hidden lg:block mb-2">
                    Location
                  </span>

                  <DynamicMuiAuto
                    handleChange={handleLocationChange}
                    options={location || []}
                    placeholder="Search Location"
                    value={searchLocation}
                  />
                </div>

                {/* Toggle Button */}
                <div className="flex w-full min-h-10 md:w-fit justify-start md:justify-center items-center justify-between md:items-center mt-2 sm:mt-0">
                  <Switch
                    color="primary"
                    isSelected={deals}
                    size="sm"
                    onValueChange={setDeals}
                  >
                    <span className="text-sm font-medium leading-5 text-secondary-700">
                      Venue With Packages
                    </span>
                  </Switch>
                </div>

                {/* Search Button */}
                <div className="flex w-full md:w-fit justify-end md:justify-start mt-4 md:mt-0">
                  <Button
                    className="rounded-lg w-full md:w-auto bg-primary-600"
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
            </CardBody>
          </Card>
        </Tab>
        {vendor_search && (
          <Tab
            key="vendors"
            className="p-0"
            title={
              <LabelWithIcon
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
            <Card className="rounded-t-none rounded-b-xl md:rounded-xl m-0 p-0 p-2 md:px-3 md:py-1">
              <CardBody>
                <div className="flex flex-col md:flex-row gap-4 items-center lg:items-end">
                  {/* Service Type */}
                  <div className="w-full md:flex-1">
                    <span className="text-secondary-700 hidden lg:block mb-2 text-sm font-medium leading-5">
                      What type of vendor are you looking for
                    </span>
                    {/* <AutoCompleteWithIcon
                    inputValue={inputValueVendor}
                    isLoading={suggestListVendor.isLoading}
                    items={suggestListVendor.items}
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
                    onInputChange={setInputValueVendor}
                  /> */}

                    {/* <DynamicMuiAuto
                      options={suggestListVendor.items.map((item: any) => ({
                        name: item.label,
                        link: item.link,
                        value: item.value,
                        type_label: item.type_label,
                      }))}
                      isLoading={suggestListVendor.isLoading}
                      value={suggestVendor}
                      onInputChange={(
                        e: React.SyntheticEvent,
                        value: string,
                        r: string
                      ) => setInputValueVendor(value)}
                      handleChange={handleSearchTermChange}
                      startIconSrc="/images/icons/search.svg"
                      placeholder="Select Service Type"
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
                  <div className="w-full md:flex-1">
                    <span className="text-secondary-700 hidden lg:block mb-2 text-sm font-medium leading-5">
                      Location
                    </span>
                    <DynamicMuiAuto
                      handleChange={handleVendorAreaChange}
                      options={vendor_areas || []}
                      placeholder="Search Location"
                      value={vendorArea}
                    />
                  </div>

                  {/* Toggle Button */}
                  <div className="flex w-full min-h-10 md:w-fit justify-start md:justify-center items-center justify-between md:items-center mt-2 sm:mt-0">
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
                  <div className="flex w-full md:w-fit justify-end md:justify-start mt-4 md:mt-0">
                    <Button
                      className="rounded-lg w-full md:w-auto bg-primary-600"
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
              </CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
    </div>
  );
};
