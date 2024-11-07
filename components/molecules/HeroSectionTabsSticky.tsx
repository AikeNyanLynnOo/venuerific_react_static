import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Select, SelectItem } from "@nextui-org/select";
import { Switch } from "@nextui-org/switch";
import { CaretDown, MagnifyingGlass } from "@phosphor-icons/react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const DynamicMuiAuto = dynamic(() =>
  import("@/components/molecules/MuiAuto").then((module) => module.MuiAuto),
);

import dynamic from "next/dynamic";
import { useParams, useRouter } from "next/navigation";

import { TYPES, TYPES_WITHOUT_VENDORS } from "@/config/constants";
import { useCommonStore } from "@/store/common-store";
import { searchVendor, searchVenue } from "@/utils/apiFunctions";

interface HeroSectionTabsStickyProps {
  cookies?: any;
  event_types_supported: any[];
  max_capacity: any[];
  location: any[];
  vendor_search?: boolean;
  vendor_services: any[];
  vendor_areas: any[];
}

export const HeroSectionTabsSticky = ({
  cookies,
  event_types_supported,
  max_capacity,
  location,
  vendor_search,
  vendor_services,
  vendor_areas,
}: HeroSectionTabsStickyProps) => {
  const params = useParams();
  const router = useRouter();

  // client side cookie parse (CANNOT PARSE HTTPONLY COOKIES)
  // const cookieStore = parseCookies();
  // const cookies = Object.entries(cookieStore).map(([key, value]) => ({
  //   name: key,
  //   value,
  // }));

  const [selected, setSelected] = useState("venues");
  const [sticky, setSticky] = useState(false);

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
    const { status, data } = await searchVenue({
      referer: window.location.href,
      user_agent: window.navigator.userAgent,
      // quickSearchCompleted,
      // longtailPath,
      // suggestType,
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

    if (data && data.redirect_to) {
      setIsLoading(false);
      // router.push(data.redirect_to);
      window.location.href = data.redirect_to;
    }
  };

  // suggest types
  // let suggestListVenue = useAsyncList({
  //   async load({ signal, filterText }) {
  //     // FETCH API
  //     const { status, data } = await getSuggestionsForEventType({
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
      setSticky(true);
    } else {
      setSticky(false);
    }
  }, []);

  const handleChangeType = (e: any) => {
    if (e.target.value) {
      setSelected(e.target.value);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { haveBanner, bannerHeight } = useCommonStore();
  const [top, setTop] = useState(81);

  useEffect(() => {
    setTop(haveBanner ? bannerHeight + 81 : 81);
  }, [haveBanner, bannerHeight]);

  return (
    <div
      className={`text-center z-20 bg-white shadow-md w-full fixed left-0 right-0 px-4 md:px-5 lg:px-12 xl:px-20 hidden ${sticky ? "md:block" : "hidden"}`}
      style={{
        top: `${top}px`,
      }}
    >
      {selected === "venues" && (
        <Card className="rounded-t-none rounded-b-lg md:rounded-lg m-0 p-3 md:py-1 shadow-none px-0">
          <CardBody className="px-0 max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Types */}
              <div className="w-full md:flex-1">
                <span className="text-sm font-medium leading-5 text-secondary-700 block mb-2 md:hidden">
                  Select Venues/Vendors
                </span>
                <Select
                  disableAnimation
                  aria-label="Select an item"
                  classNames={{
                    trigger: "h-[42px] min-h-10 rounded-lg border-1",
                  }}
                  placeholder="Select"
                  popoverProps={{
                    offset: 0,
                  }}
                  selectedKeys={[selected]}
                  selectorIcon={
                    <CaretDown
                      size={18}
                      style={{
                        minWidth: "15px",
                      }}
                    />
                  }
                  size="lg"
                  variant="bordered"
                  onChange={handleChangeType}
                >
                  {(vendor_search &&
                    TYPES.map(({ key, label }, index) => (
                      <SelectItem key={key} value={key}>
                        {label}
                      </SelectItem>
                    ))) ||
                    TYPES_WITHOUT_VENDORS.map(({ key, label }, index) => (
                      <SelectItem key={key} value={key}>
                        {label}
                      </SelectItem>
                    ))}
                </Select>
              </div>

              {/* Event Type */}
              <div className="w-full md:flex-1">
                <span className="text-sm font-medium leading-5 text-secondary-700 block md:hidden mb-2">
                  What type of event are you organizing
                </span>
                {/* <AutoCompleteWithIcon
                  items={EVENT_TYPES}
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
                    <MagnifyingGlass className="text-secondary-500" size={26} />
                  }
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
                <span className="text-sm font-medium leading-5 text-secondary-700 block mb-2 md:hidden">
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
              <div className="w-full md:flex-1">
                <span className="text-sm font-medium leading-5 text-secondary-700 block mb-2 md:hidden">
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
                      loading="lazy"
                      src="/images/icons/location.svg"
                      width={20}
                    />
                  }
                /> */}
                <DynamicMuiAuto
                  handleChange={handleLocationChange}
                  options={location || []}
                  placeholder="Search Location"
                  value={searchLocation}
                />
              </div>

              {/* Toggle Button */}
              <div className="flex w-full md:w-fit justify-start md:justify-center items-center justify-between lg:items-center mt-2 sm:mt-0">
                <Switch isSelected={deals} size="sm" onValueChange={setDeals}>
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
      )}
      {selected === "vendors" && (
        <Card className="rounded-t-none rounded-b-lg md:rounded-lg m-0 p-0 md:py-2 shadow-none px-0">
          <CardBody className="px-0">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Types */}
              <div className="w-full md:flex-1">
                <span className="text-sm font-medium leading-5 text-secondary-700 block mb-2 md:hidden">
                  Select Venues/Vendors
                </span>
                <Select
                  disableAnimation
                  aria-label="Select an item sm"
                  classNames={{
                    trigger: "h-[42px] min-h-10 rounded-lg border-1",
                  }}
                  placeholder="Select"
                  popoverProps={{
                    offset: 0,
                  }}
                  selectedKeys={[selected]}
                  selectorIcon={
                    <CaretDown
                      size={18}
                      style={{
                        minWidth: "15px",
                      }}
                    />
                  }
                  size="lg"
                  variant="bordered"
                  onChange={handleChangeType}
                >
                  {TYPES.map(({ key, label }, index) => (
                    <SelectItem key={key}>{label}</SelectItem>
                  ))}
                </Select>
              </div>

              {/* Service Type */}
              <div className="w-full md:flex-1">
                <span className="text-sm font-medium leading-5 text-secondary-700 block mb-2 md:hidden">
                  What type of vendor are you looking for
                </span>
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
                <span className="text-sm font-medium leading-5 text-secondary-700 block mb-2 md:hidden">
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
                      loading="lazy"
                      src="/images/icons/location.svg"
                      width={20}
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
              <div className="flex w-full md:w-fit justify-start md:justify-center items-center justify-between md:items-center mt-2 sm:mt-0">
                <Switch isSelected={deals} size="sm" onValueChange={setDeals}>
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
      )}
    </div>
  );
};
