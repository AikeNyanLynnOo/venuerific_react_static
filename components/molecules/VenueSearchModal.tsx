import { Button } from "@nextui-org/button";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";
import { Select, SelectItem } from "@nextui-org/select";
import { Switch } from "@nextui-org/switch";
import { CaretDown } from "@phosphor-icons/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const DynamicMuiAuto = dynamic(() =>
  import("@/components/molecules/MuiAuto").then((module) => module.MuiAuto),
);

import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useParams, useRouter } from "next/navigation";

import { fontVnf } from "@/config/fonts";
import { COLORS } from "@/styles/colors";
import { searchVenueList } from "@/utils/venueApiFunctions";
import { useVenueListStore } from "@/store/venue-list-store";

interface VenueSearchModalProps {
  cookies?: any;
  isOpen: boolean;
  placement: any;
  onOpenChange: any;
  venueTypes: any[];
  eventTypesSupported: any[];
  maxCapacities: any[];
  locations: any[];
  cuisineTypes: any[];
  amenities: any[];
  priceLevels: any[];
  searchTypes: any[];
}

export const VenueSearchModal = ({
  cookies,
  isOpen,
  placement,
  onOpenChange,
  eventTypesSupported,
  venueTypes,
  maxCapacities,
  locations,
  cuisineTypes,
  amenities,
  priceLevels,
  searchTypes,
}: VenueSearchModalProps) => {
  const {
    setCurrentPage,
    setTotalPages,
    setStoreVenues,
    setRandomPosition,

    // filter field handlers
    handleVenueTypeChange,
    handleEventTypeChange,
    handleChangeMaxCapacity,
    handleLocationChange,
    handleCuisineTypesChange,
    handleAmenitiesChange,
    handleSearchTypeChange,
    handleBudgetChange,

    // filter field setters
    setIsLoading,
    setVenueType,
    setEventType,
    setMaxCapacity,
    setLocation,
    setCuisineType,
    setSelectedAmenities,
    setSelectedBudget,
    setIsDeals,
    setIsPackages,
    setSearchType,
    setIsSuper,

    // filter fields
    isLoading,
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
  } = useVenueListStore();

  const params = useParams();
  const router = useRouter();

  // client side cookie parse (CANNOT PARSE HTTPONLY COOKIES)
  // const cookieStore = parseCookies();
  // const cookies = Object.entries(cookieStore).map(([key, value]) => ({
  //   name: key,
  //   value,
  // }));

  // const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // const [venueType, setVenueType] = useState("");
  // const [eventType, setEventType] = useState("");
  // const [maxCapacity, setMaxCapacity] = useState("");
  // const [location, setLocation] = useState("");

  // const [cuisineType, setCuisineType] = useState("");

  // const [selectedAmenities, setSelectedAmenities] = useState([]);
  // const [selectedBudget, setSelectedBudget] = useState([]);
  // const [searchType, setSearchType] = useState("");

  // const [isDeals, setIsDeals] = useState(false);
  // const [isPackages, setIsPackages] = useState(false);

  useEffect(() => {
    setSearchType(
      (searchTypes && searchTypes[0] && searchTypes[0].value) || "",
    );
  }, [searchTypes]);

  const handleClearAll = useCallback(() => {
    setVenueType("");
    setEventType("");
    setMaxCapacity("");
    setLocation("");
    setCuisineType("");
    setSelectedAmenities([]);
    setSelectedBudget([]);
    setSearchType("");
    setIsDeals(false);
    setIsPackages(false);
    setIsSuper(false);
  }, []);

  const applyFilters = async () => {
    // submit data
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
      onOpenChange(false);
    }
  };

  return (
    <Modal
      disableAnimation
      classNames={{
        wrapper: "sm:items-start sm:pt-2",
        base: "rounded-b-none !rounded-t-xl sm:!rounded-xl w-full sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[40%] 2xl:w-[710px] max-h-[99vh] sm:max-h-fit",
      }}
      isDismissable={false}
      isOpen={isOpen}
      placement={placement}
      size="full"
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col text-xl font-semibold">
              More Filters
            </ModalHeader>
            <ModalBody className="p-5 pt-0">
              <div className="w-full max-h-[90vh] overflow-y-scroll hide-scrollbar">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 lg:gap-y-2 mb-6 w-full">
                  <div className="w-full col-span-2">
                    <span className="text-secondary-700 block mb-2 text-sm font-medium leading-5">
                      Venue Type
                    </span>
                    <DynamicMuiAuto
                      handleChange={handleVenueTypeChange}
                      options={venueTypes || []}
                      placeholder="Select Venue Type"
                      startIconSrc="/images/icons/search.svg"
                      value={venueType}
                    />
                  </div>

                  <div className="w-full col-span-2 sm:col-span-1">
                    <span className="text-secondary-700 block mb-2 text-sm font-medium leading-5">
                      Event Type
                    </span>
                    <DynamicMuiAuto
                      handleChange={handleEventTypeChange}
                      options={eventTypesSupported || []}
                      placeholder="Select Event Type"
                      startIconSrc="/images/icons/search.svg"
                      value={eventType}
                    />
                  </div>
                  <div className="w-full col-span-2 sm:col-span-1 col-span-1">
                    <span className="text-secondary-700 block mb-2 text-sm font-medium leading-5">
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
                      {maxCapacities &&
                        maxCapacities.map((capacity, index) => (
                          <SelectItem key={capacity}>{capacity}</SelectItem>
                        ))}
                    </Select>
                  </div>

                  <div className="w-full col-span-2">
                    <span className="text-secondary-700 block mb-2 text-sm font-medium leading-5">
                      Location
                    </span>

                    <DynamicMuiAuto
                      handleChange={handleLocationChange}
                      options={locations || []}
                      placeholder="Search Location"
                      value={location}
                    />
                  </div>
                  <div className="w-full col-span-2">
                    <span className="text-secondary-700 block mb-2 text-sm font-medium leading-5">
                      Food & Beverages
                    </span>

                    <DynamicMuiAuto
                      handleChange={handleCuisineTypesChange}
                      options={cuisineTypes || []}
                      placeholder="Search Food"
                      startIconSrc="/images/icons/search.svg"
                      value={cuisineType}
                    />
                  </div>
                  <div className="w-full col-span-2">
                    <span className="text-secondary-700 block mb-2 text-sm font-medium leading-5">
                      Amenities
                    </span>

                    <DynamicMuiAuto
                      multiple
                      scrollTagsHorizontal
                      handleChange={handleAmenitiesChange}
                      options={amenities || []}
                      placeholder="Search Amenities"
                      startIconSrc="/images/icons/search.svg"
                      value={selectedAmenities}
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-secondary-700 block mb-2 text-sm font-medium leading-5">
                      Budget
                    </span>
                    <DynamicMuiAuto
                      multiple
                      scrollTagsHorizontal
                      handleChange={handleBudgetChange}
                      options={priceLevels || []}
                      placeholder="Select Budget"
                      startIconSrc="/images/icons/search.svg"
                      value={selectedBudget}
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-secondary-700 block mb-2 text-sm font-medium leading-5">
                      Search Type
                    </span>
                    <ToggleButtonGroup
                      exclusive
                      aria-label="Search Type"
                      size="small"
                      sx={{
                        "&.MuiToggleButtonGroup-root": {
                          borderRadius: 3,
                        },
                        "& .MuiToggleButtonGroup-grouped": {
                          backgroundColor: "#FFFFFF",
                          color: COLORS.secondary[700],
                          fontSize: 14,
                          px: 2,
                          border: "1px solid #DDDDDD",
                          fontFamily: fontVnf.style.fontFamily,
                          textTransform: "capitalize",
                        },
                        "& .MuiToggleButtonGroup-grouped.Mui-selected": {
                          backgroundColor: COLORS.primary[600],
                          color: "#FFFFFF",
                        },
                        "& .MuiToggleButtonGroup-grouped.Mui-selected:hover": {
                          backgroundColor: COLORS.primary[600],
                          color: "#FFFFFF",
                        },
                      }}
                      value={searchType}
                      onChange={handleSearchTypeChange}
                    >
                      <ToggleButton
                        sx={{
                          borderTopLeftRadius: "8px",
                          borderBottomLeftRadius: "8px",
                        }}
                        value={
                          searchTypes && searchTypes[0] && searchTypes[0].value
                        }
                      >
                        {searchTypes && searchTypes[0] && searchTypes[0].name}
                      </ToggleButton>
                      <ToggleButton
                        value={
                          searchTypes && searchTypes[1] && searchTypes[1].value
                        }
                      >
                        {searchTypes && searchTypes[1] && searchTypes[1].name}
                      </ToggleButton>
                      <ToggleButton
                        sx={{
                          borderTopRightRadius: "8px",
                          borderBottomRightRadius: "8px",
                        }}
                        value={
                          searchTypes && searchTypes[2] && searchTypes[2].value
                        }
                      >
                        {searchTypes && searchTypes[2] && searchTypes[2].name}
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>

                  <div className="col-span-2 sm:col-span-1 flex items-center gap-4">
                    <Switch
                      color="primary"
                      isSelected={isPackages}
                      size="sm"
                      onValueChange={setIsPackages}
                    >
                      <span className="text-secondary-700 text-sm font-medium leading-5">
                        Venue With Packages
                      </span>
                    </Switch>
                  </div>
                  <div className="col-span-2 sm:col-span-1 flex items-center gap-4">
                    <Switch
                      color="primary"
                      isSelected={isDeals}
                      size="sm"
                      onValueChange={setIsDeals}
                    >
                      <span className="text-secondary-700 text-sm font-medium leading-5">
                        Venue With Deals
                      </span>
                    </Switch>
                  </div>
                  <div className="col-span-2 flex items-center gap-4">
                    <Switch
                      color="primary"
                      isSelected={isSuper}
                      size="sm"
                      onValueChange={setIsSuper}
                    >
                      <span className="text-secondary-700 text-sm font-medium leading-5">
                        Only Super Venues
                      </span>
                    </Switch>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-x-2">
                  <Button
                    className="flex-1 md:flex-none"
                    color="default"
                    radius="sm"
                    variant="bordered"
                    onClick={handleClearAll}
                  >
                    Clear
                  </Button>
                  <Button
                    className="rounded-lg flex-1 md:w-full bg-primary-600 min-w-10 px-3"
                    color="primary"
                    isLoading={isLoading}
                    variant="solid"
                    onClick={applyFilters}
                  >
                    Show Venues
                  </Button>
                </div>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
