import { create } from "zustand";

import { getUniqueArray } from "@/config/helperFunctions";

type Store = {
  loading: boolean;
  error: any;

  randomPosition: any;
  currentPage: number;
  totalPages: number;
  storeVenues: any[];
  eventTypes: any[];

  // search options
  venueTypes: any[];
  eventTypesSupported: any[];
  maxCapacities: any[];
  priceLevels: any[];
  locations: any[];
  cuisineTypes: any[];
  amenities: any[];
  searchTypes: any[];

  // filter fields
  isLoading: boolean;
  venueType: string;
  eventType: string;
  maxCapacity: string;
  location: string;
  cuisineType: string;
  selectedAmenities: any;
  selectedBudget: any;
  searchType: string;
  isDeals: boolean;
  isPackages: boolean;
  isSuper: boolean;

  // filter field handlers
  handleVenueTypeChange: (e: any, v: any) => void;
  handleEventTypeChange: (e: any, v: any) => void;
  handleChangeMaxCapacity: (e: any) => void;
  handleLocationChange: (e: any, v: any) => void;
  handleCuisineTypesChange: (e: any, v: any) => void;
  handleAmenitiesChange: (e: any, values: any) => void;
  handleBudgetChange: (e: any, values: any) => void;
  handleSearchTypeChange: (e: any, type: any) => void;

  // filter fields setters
  setSearchType: (type: string) => void;
  setIsLoading: (isLoading: boolean) => void;
  setVenueType: (type: string) => void;
  setEventType: (type: string) => void;
  setMaxCapacity: (value: string) => void;
  setLocation: (value: string) => void;
  setCuisineType: (value: string) => void;
  setSelectedAmenities: (value: any) => void;
  setSelectedBudget: (value: any) => void;
  setIsDeals: (isDeals: boolean) => void;
  setIsPackages: (isPackages: boolean) => void;
  setIsSuper: (isSuper: boolean) => void;

  // setters
  setRandomPosition: (position: any) => void;
  setCurrentPage: (page: number) => void;
  setTotalPages: (totalPages: number) => void;
  setStoreVenues: (countryLinks: any[], replace?: boolean) => void;
  setEventTypes: (eventTypes: any[]) => void;
  resetStoreVenues: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: any) => void;

  // set search options
  setVenueTypes: (venueTypes: any[]) => void;
  setEventTypesSupported: (eventTypesSupported: any[]) => void;
  setMaxCapacities: (maxCapacities: any[]) => void;
  setPriceLevels: (priceLevels: any[]) => void;
  setLocations: (locations: any[]) => void;
  setCuisineTypes: (cuisineTypes: any[]) => void;
  setAmenities: (amenities: any[]) => void;
  setSearchTypes: (searchTypes: any[]) => void;
};

export const useVenueListStore = create<Store>()((set) => ({
  loading: false,
  error: null,

  randomPosition: {
    lat: 0,
    lng: 0,
  },
  currentPage: 1,
  totalPages: 1,
  storeVenues: [],
  eventTypes: [],

  // search options
  venueTypes: [],
  eventTypesSupported: [],
  maxCapacities: [],
  priceLevels: [],
  locations: [],
  cuisineTypes: [],
  amenities: [],
  searchTypes: [],

  // filter fields
  isLoading: false,
  venueType: "",
  eventType: "",
  maxCapacity: "",
  location: "",
  cuisineType: "",
  selectedAmenities: [],
  selectedBudget: [],
  searchType: "",
  isDeals: false,
  isPackages: false,
  isSuper: false,

  // setters
  setRandomPosition: (randomPosition: any) => {
    set((state) => ({ ...state, randomPosition }));
  },

  setCurrentPage: (currentPage: number) => {
    set((state) => ({ ...state, currentPage }));
  },

  setTotalPages: (totalPages: number) => {
    set((state) => ({
      ...state,
      totalPages,
    }));
  },
  setStoreVenues: (storeVenues: any[], replace?: boolean) => {
    if (!replace) {
      set((state) => ({
        ...state,
        storeVenues: [...state.storeVenues, ...storeVenues],
      }));

      return;
    }
    set((state) => ({
      ...state,
      storeVenues: storeVenues,
    }));
  },

  setEventTypes: (eventTypes: any[]) => {
    set((state) => ({
      ...state,
      eventTypes,
    }));
  },

  resetStoreVenues: () => {
    set((state) => ({
      ...state,
      storeVenues: [],
    }));
  },
  setLoading: (loading: boolean) => {
    set((state) => ({
      ...state,
      loading,
    }));
  },
  setError: (error: boolean) => {
    set((state) => ({
      ...state,
      error,
    }));
  },

  // set search options
  setVenueTypes: (venueTypes: any[]) => {
    set((state) => ({ ...state, venueTypes }));
  },
  setEventTypesSupported: (eventTypesSupported: any[]) => {
    set((state) => ({ ...state, eventTypesSupported }));
  },
  setMaxCapacities: (maxCapacities: any[]) => {
    set((state) => ({ ...state, maxCapacities }));
  },
  setPriceLevels: (priceLevels: any[]) => {
    set((state) => ({ ...state, priceLevels }));
  },
  setLocations: (locations: any[]) => {
    set((state) => ({ ...state, locations }));
  },
  setCuisineTypes: (cuisineTypes: any[]) => {
    set((state) => ({ ...state, cuisineTypes }));
  },
  setAmenities: (amenities: any[]) => {
    set((state) => ({ ...state, amenities }));
  },
  setSearchTypes: (searchTypes: any[]) => {
    set((state) => ({ ...state, searchTypes }));
  },

  // filter field setters
  setSearchType: (searchType: string) => {
    set((state) => ({ ...state, searchType }));
  },
  setIsLoading: (isLoading: boolean) => {
    set((state) => ({ ...state, isLoading }));
  },
  setVenueType: (type: string) => {
    set((state) => ({ ...state, venueType: type }));
  },
  setEventType: (type: string) => {
    set((state) => ({ ...state, eventType: type }));
  },
  setMaxCapacity: (value: string) => {
    set((state) => ({ ...state, maxCapacity: value }));
  },
  setLocation: (value: string) => {
    set((state) => ({ ...state, location: value }));
  },
  setCuisineType: (value: string) => {
    set((state) => ({ ...state, cuisineType: value }));
  },
  setSelectedAmenities: (value: any) => {
    set((state) => ({ ...state, selectedAmenities: value }));
  },
  setSelectedBudget: (value: any) => {
    set((state) => ({ ...state, selectedBudget: value }));
  },
  setIsDeals: (isDeals: boolean) => {
    set((state) => ({ ...state, isDeals }));
  },
  setIsPackages: (isPackages: boolean) => {
    set((state) => ({ ...state, isPackages }));
  },
  setIsSuper: (isSuper: boolean) => {
    set((state) => ({ ...state, isSuper }));
  },

  // filter field handlers
  handleVenueTypeChange: (e: any, v: any) => {
    if (v && v.value) {
      set((state) => ({ ...state, venueType: v.value }));

      return;
    }
    set((state) => ({ ...state, venueType: v || "" }));
  },
  handleEventTypeChange: (e: any, v: any) => {
    if (v && v.value) {
      set((state) => ({ ...state, eventType: v.value }));

      return;
    }
    set((state) => ({ ...state, eventType: v || "" }));
  },
  handleChangeMaxCapacity: (e: any) => {
    if (e.target.value) {
      set((state) => ({ ...state, maxCapacity: e.target.value }));
    }
  },
  handleLocationChange: (e: any, v: any) => {
    if (v && v.name) {
      set((state) => ({ ...state, location: v.name }));

      return;
    }
    set((state) => ({ ...state, location: v || "" }));
  },
  handleCuisineTypesChange: (e: any, v: any) => {
    if (v && v.value) {
      set((state) => ({ ...state, cuisineType: v.value }));

      return;
    }
    set((state) => ({ ...state, cuisineType: v || "" }));
  },
  handleAmenitiesChange: (e: any, values: any) => {
    set((state) => ({ ...state, selectedAmenities: getUniqueArray(values) }));
  },
  handleSearchTypeChange: (e: any, type: any) => {
    set((state) => ({ ...state, searchType: type }));
  },
  handleBudgetChange: (e: any, values: any) => {
    set((state) => ({ ...state, selectedBudget: getUniqueArray(values) }));
  },
}));
