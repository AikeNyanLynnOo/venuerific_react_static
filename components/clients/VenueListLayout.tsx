"use client";

// NextJS
import dynamic from "next/dynamic";

// Components

// Constants
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";
import { Select, SelectItem } from "@nextui-org/select";
import {
  CaretDown,
  FunnelSimple,
  MagnifyingGlass,
  MapTrifold,
} from "@phosphor-icons/react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Switch } from "@nextui-org/switch";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useMediaQuery } from "react-responsive";

import { VenueCard } from "../molecules/VenueCard";
import { ListPageTabs } from "../atoms/ListPageTabs";
import { Loading } from "../atoms/Loading";
import { useDataSet } from "../hooks/useDataSet";
import { useDataVenueListSet } from "../hooks/useDataVenueListSet";
import { useFetchData } from "../hooks/useFetchData";
import { NewVenueMapWithMarkers } from "../maps/NewVenueMapWithMarker";

import { searchVenueList } from "@/utils/venueApiFunctions";
import { searchVenue } from "@/utils/apiFunctions";
import {
  countNonEmptyFields,
  getPathNameFromUrl,
} from "@/config/helperFunctions";
import { useVenueListStore } from "@/store/venue-list-store";
const DynamicMuiAuto = dynamic(() =>
  import("@/components/molecules/MuiAuto").then((module) => module.MuiAuto),
);

const DynamicVenueSearchModal = dynamic(() =>
  import("@/components/molecules/VenueSearchModal").then(
    (module) => module.VenueSearchModal,
  ),
);
// Search Bar Component
const SearchBar = ({
  isMapOpen,
  setIsMapOpen,
  isModalOpen,
  onModalOpen,
  cookies,
}: {
  isMapOpen?: boolean;
  setIsMapOpen?: any;
  isModalOpen?: boolean;
  onModalOpen?: any;
  cookies?: any;
}) => {
  const params = useParams();
  const router = useRouter();
  // client side cookie parse (CANNOT PARSE HTTPONLY COOKIES)
  // const cookieStore = parseCookies();
  // const cookies = Object.entries(cookieStore).map(([key, value]) => ({
  //   name: key,
  //   value,
  // }));
  const {
    venueTypes,
    eventTypesSupported,
    maxCapacities,
    priceLevels,
    locations,

    // filter fields
    venueType,
    eventType,
    maxCapacity,
    location,
    cuisineType,
    selectedAmenities,
    selectedBudget,
    searchType,
    isDeals,
    isPackages,
    isSuper,

    isLoading,
    setIsLoading,
    // filter field setters
    setVenueType,
    setEventType,
    setMaxCapacity,
    setLocation,
    setIsDeals,
    setIsPackages,
    setIsSuper,

    // filter field handlers
    handleVenueTypeChange,
    handleEventTypeChange,
    handleChangeMaxCapacity,
    handleLocationChange,

    // setters
    setCurrentPage,
    setTotalPages,
    setStoreVenues,
    setRandomPosition,
  } = useVenueListStore();

  const filterFieldCount = useMemo(() => {
    return countNonEmptyFields([
      venueType,
      eventType,
      maxCapacity,
      location,
      cuisineType,
      selectedAmenities,
      selectedBudget,
      // searchType,
      isDeals,
      isPackages,
      isSuper,
    ]);
  }, [
    venueType,
    eventType,
    maxCapacity,
    location,
    cuisineType,
    selectedAmenities,
    selectedBudget,
    // searchType,
    isDeals,
    isPackages,
    isSuper,
  ]);

  const handleSearch = async () => {
    setIsLoading(true);

    const reqData = {
      user_agent: window.navigator.userAgent,
      referer: window.location.href,
      event_types_supported: eventType,
      venue_type: venueType,
      max_capacity: maxCapacity,
      price_level:
        (selectedBudget &&
          selectedBudget.length > 0 &&
          selectedBudget.map((price: any) => price.value)) ||
        [],
      deals: isDeals,
      packages: isPackages,
      super_venue: isSuper,
      cuisine_type: cuisineType,
      amenities: selectedAmenities,
      search_type: searchType,
      location,
      country: (params.country || "sg") as string,
      cookies,
      no_longtail: true,
      shouldDetectIP: true,
    };

    const { status, data } = await searchVenueList(reqData);

    if (status === 401) {
      router.push("/login");
    }

    if (data) {
      setIsLoading(false);
      const { page, total_pages, venue_random_lat, venue_random_lng, venues } =
        data;

      if (page) {
        setCurrentPage(page);
      }
      if (total_pages) {
        setTotalPages(total_pages);
      }
      setStoreVenues(venues || [], true);
      if (venue_random_lat && venue_random_lng) {
        setRandomPosition({
          lat: venue_random_lat,
          lng: venue_random_lng,
        });
      }
    }
  };

  return (
    <div className="flex gap-2 md:gap-4 sticky top-0 z-20 bg-white px-3 py-4 items-center border-b">
      <DynamicMuiAuto
        customStyles={{
          flex: 1,
        }}
        handleChange={handleVenueTypeChange}
        options={venueTypes || []}
        placeholder="Venue Type"
        startIconSrc="/images/icons/search.svg"
        value={venueType}
      />
      <div className={`flex-1 hidden ${isMapOpen ? "xl:block" : "sm:block"}`}>
        <DynamicMuiAuto
          customStyles={{
            flex: 1,
          }}
          handleChange={handleEventTypeChange}
          options={eventTypesSupported || []}
          placeholder="Event Type"
          startIconSrc="/images/icons/search.svg"
          value={eventType}
        />
      </div>
      <div className={`flex-1 hidden ${isMapOpen ? "xl:block" : "md:block"}`}>
        <DynamicMuiAuto
          customStyles={{
            flex: 1,
          }}
          handleChange={handleLocationChange}
          options={locations || []}
          placeholder="Area City"
          value={location}
        />
      </div>

      {!isMapOpen && (
        <Select
          disableAnimation
          aria-label="Select an item"
          className="flex-1 hidden xl:block"
          classNames={{
            trigger: "h-[42px] min-h-10  rounded-lg border-1",
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
          {maxCapacities &&
            maxCapacities.map((capacity, index) => (
              <SelectItem key={capacity}>{capacity}</SelectItem>
            ))}
        </Select>
      )}

      <div
        className={`w-fit mr-3 hidden items-center max-w-[150px] ${isMapOpen ? "xl:flex" : "lg:flex"}`}
      >
        <Switch isSelected={isSuper} size="sm" onValueChange={setIsSuper}>
          <span className="text-secondary-700 text-sm text-nowrap font-medium leading-5">
            Only Super Venues
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
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
      <div className="flex w-fit">
        <Button
          className="rounded-lg w-full md:w-auto bg-white min-w-10 px-2 lg:px-3"
          color="default"
          startContent={<FunnelSimple size={18} />}
          variant="bordered"
          onClick={onModalOpen}
        >
          {filterFieldCount > 0 && (
            <span className="text-xs font-medium leading-4 text-primary-700 rounded-full bg-primary-100 p-3 h-4 w-4 flex items-center justify-center">
              {filterFieldCount}
            </span>
          )}
        </Button>
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

// Venue List Component
const VenueList = ({
  isMapOpen,
  venues,
  params,
  cookies,
  shouldDetectIP,
}: {
  isMapOpen?: boolean;
  venues: any[];
  params?: any;
  cookies?: any;
  shouldDetectIP?: boolean;
}) => {
  const {
    currentPage,
    setCurrentPage,
    totalPages,
    storeVenues,

    // search options
    venueTypes,
    eventTypesSupported,
    maxCapacities,
    priceLevels,
    locations,

    loading,
    setLoading,
    setError,
    setStoreVenues,
  } = useVenueListStore();

  const router = useRouter();

  const loadMore = async () => {
    setLoading(true);
    try {
      const { status, statusText, success, message, data, meta } =
        await searchVenue({
          country: (params.country || "sg") as string,
          cookies,
          banner_search: false,
          shouldDetectIP,
          no_longtail: true,
          page: currentPage + 1,
          referer: window.location.href,
          user_agent: window.navigator.userAgent,
        });

      if (!success && status === 401) {
        //401
        return router.push("/login");
      }

      if (data && data.redirect_to) {
        // redirect to
        return router.push(data.redirect_to);
      }

      if (!success) {
        throw new Error(message || "Failed to fetch data");
      }

      setLoading(false);
      if (data && data.venues) {
        setStoreVenues(data.venues);
      }
      if (data && data.page) {
        setCurrentPage(data.page);
      }
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };

  return (
    <div className="p-3 pb-36">
      {/* <h5 className="mb-2 text-secondary-400">
        {storeVenues.length} Venues Found
      </h5> */}
      <div
        className={`grid grid-cols-1 ${isMapOpen ? "lg:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4"} gap-4`}
      >
        {venues.map((venue, index) => (
          <VenueCard
            key={index}
            {...venue}
            // canGoInstantBooking
            venue_url={getPathNameFromUrl(venue.venue_url)}
          />
        ))}
      </div>

      <div className="w-full flex flex-col gap-y-3 items-center justify-center mt-5 py-5">
        <Button
          className={`rounded-lg w-fit bg-primary-600 min-w-10 px-3 ${currentPage === totalPages ? "cursor-not-allowed" : ""}`}
          color="primary"
          disabled={currentPage === totalPages}
          isLoading={loading}
          variant="solid"
          onClick={loadMore}
        >
          Load More Venues
        </Button>
        {/* <p className="text-center text-base font-normal leading-6">
          You can try to{" "}
          <span className="text-primary-600 underline underline-offset-4">
            zoom out
          </span>{" "}
          on the map, change some filters, or{" "}
          <span className="text-primary-600 underline underline-offset-4">
            clear all filters
          </span>
        </p> */}
      </div>
    </div>
  );
};

interface VenueListLayoutProps {
  params?: any;
  headerFooterRes?: any;
  shouldDetectIP?: boolean;
  cookies?: any;
}

export const VenueListLayout = ({
  params,
  headerFooterRes,
  shouldDetectIP,
  cookies,
}: VenueListLayoutProps) => {
  // client side cookie parse (CANNOT PARSE HTTPONLY COOKIES)
  // const cookieStore = parseCookies();
  // const cookies = Object.entries(cookieStore).map(([key, value]) => ({
  //   name: key,
  //   value,
  // }));

  const pathName = usePathname();
  const searchParams = useSearchParams();
  const paramsObject = Object.fromEntries(searchParams.entries());

  // console.log("Params object>>", paramsObject);
  // console.log(
  //   "event types supported>>",
  //   paramsObject["search[event_types_supported][]"]
  // );
  // console.log(
  //   "event types supported parent>>",
  //   paramsObject["search[event_types_supported_parent]"]
  // );

  const {
    currentPage,
    totalPages,
    storeVenues,
    setCurrentPage,
    setTotalPages,
    setStoreVenues,
  } = useVenueListStore();

  const [isMapOpen, setIsMapOpen] = useState(true);
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  useEffect(() => {
    setIsMapOpen(isMobile ? false : true);
  }, [isMobile]);

  // modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // setting client side data
  useDataSet(headerFooterRes);

  const { data, loading, error } = useFetchData({
    fetcher: searchVenueList,
    args: {
      country: (params.country || "sg") as string,
      cookies,
      shouldDetectIP,
      no_longtail: true,
      page: currentPage,
      event_types_supported:
        paramsObject["search[event_types_supported][]"] || "",
      event_types_supported_parent:
        paramsObject["search[event_types_supported_parent]"] || "",
    },
    deps: [],
  });

  // setting client side venue list data
  useDataVenueListSet(data, [loading]);

  const {
    eventTypes,
    randomPosition,
    eventTypesSupported,
    maxCapacities,
    venueTypes,
    locations,
    cuisineTypes,
    amenities,
    priceLevels,
    searchTypes,
  } = useVenueListStore();

  return (
    <section
      className={`${loading ? "h-screen flex items-center" : "mt-[81px]"}`}
    >
      {(loading && <Loading />) || (
        <>
          <ListPageTabs
            currentTab={(paramsObject && paramsObject.tab) || "all_venues"}
            tabs={[
              {
                title: "All Venues",
                link: pathName,
                icon_name: "all_venues",
                divider: true,
              },
              ...eventTypes,
            ]}
          />
          <div className="flex flex-col sm:flex-row">
            {/* Left Section: Venue List */}
            <div
              className={`w-full ${isMapOpen ? "lg:w-1/2 xl:w-2/3" : ""} h-custom-h-full max-h-custom-h-full overflow-y-scroll custom-scrollbar sticky top-0`}
            >
              <SearchBar
                cookies={cookies}
                isMapOpen={isMapOpen}
                isModalOpen={isOpen}
                setIsMapOpen={setIsMapOpen}
                onModalOpen={onOpen}
              />
              <VenueList
                cookies={cookies}
                isMapOpen={isMapOpen}
                params={params}
                shouldDetectIP={shouldDetectIP}
                venues={
                  (storeVenues && storeVenues.length > 0 && storeVenues) || []
                }
              />
            </div>

            {/* Right Section: Map */}
            {isMapOpen && (
              <div className="block w-full absolute sm:sticky sm:top-0 lg:w-1/2 xl:w-1/3 bg-gray-200 h-custom-h-full ">
                <NewVenueMapWithMarkers
                  data={storeVenues.filter(
                    (venue: any, index: number) =>
                      venue.place_location_lat && venue.place_location_lng,
                  )}
                  handleCloseMap={() => setIsMapOpen(false)}
                  venue_random_lat={Number(randomPosition.lat)}
                  venue_random_lng={Number(randomPosition.lng)}
                />
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

          <DynamicVenueSearchModal
            amenities={amenities}
            cookies={cookies}
            cuisineTypes={cuisineTypes}
            eventTypesSupported={eventTypesSupported}
            isOpen={isOpen}
            locations={locations}
            maxCapacities={maxCapacities}
            placement={"bottom-center"}
            priceLevels={priceLevels}
            searchTypes={searchTypes}
            venueTypes={venueTypes}
            onOpenChange={onOpenChange}
          />

          {/* <BottomNavs /> */}
        </>
      )}
    </section>
  );
};
