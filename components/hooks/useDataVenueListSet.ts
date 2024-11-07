import { useEffect } from "react";

import { useVenueListStore } from "@/store/venue-list-store";

// React

export const useDataVenueListSet = (listPageData: any, deps: any[]) => {
  const {
    setCurrentPage,
    setTotalPages,
    setStoreVenues,
    setRandomPosition,
    setEventTypes,
    setEventTypesSupported,
    setVenueTypes,
    setMaxCapacities,
    setPriceLevels,
    setLocations,
    setCuisineTypes,
    setAmenities,
    setSearchTypes,
  } = useVenueListStore();

  const {
    country,
    page,
    total_pages,
    venue_random_lat,
    venue_random_lng,
    venues,
    search_options,
    event_types_bar,
    country_long,
    current_user,
  } = listPageData || {};

  useEffect(() => {
    if (page) {
      setCurrentPage(page);
    }
    if (total_pages) {
      setTotalPages(total_pages);
    }
    setStoreVenues(venues || []);
  }, [page, total_pages, venues, ...deps]);

  useEffect(() => {
    if (event_types_bar && event_types_bar.length > 0) {
      setEventTypes(event_types_bar);
    }
  }, [event_types_bar, ...deps]);

  useEffect(() => {
    if (venue_random_lat && venue_random_lng) {
      setRandomPosition({
        lat: venue_random_lat,
        lng: venue_random_lng,
      });
    }
  }, [venue_random_lat, venue_random_lng, ...deps]);

  useEffect(() => {
    const {
      event_types_supported,
      venue_type,
      max_capacity,
      price_level,
      location,
      cuisine_type,
      amenities,
      search_type,
    } = search_options || {};

    if (event_types_supported && event_types_supported.length > 0) {
      setEventTypesSupported(event_types_supported);
    }
    if (venue_type && venue_type.length > 0) {
      setVenueTypes(venue_type);
    }
    if (max_capacity && max_capacity.length > 0) {
      setMaxCapacities(max_capacity);
    }
    if (price_level && price_level.length > 0) {
      setPriceLevels(price_level);
    }
    if (location && location.length > 0) {
      setLocations(location);
    }
    if (cuisine_type && cuisine_type.length > 0) {
      setCuisineTypes(cuisine_type);
    }
    if (amenities && amenities.length > 0) {
      setAmenities(amenities);
    }
    if (search_type && search_type.length > 0) {
      setSearchTypes(search_type);
    }
  }, [search_options]);
};
