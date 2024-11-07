import { create } from "zustand";

type Store = {
  // fields declaration
  country?: string;
  social_share?: any[];
  similar_venues?: any[];
  venue: any;
  fast_enquiry?: any;
  enquiry_options?: any;
  country_long?: string;
  current_user?: any;
  breadcrumb: any[];

  // setters declaration
  setCountry: (country: string) => void;
  setSocialShare: (social_share: any[]) => void;
  setSimilarVenues: (similar_venues: any[]) => void;
  setVenue: (venue: any) => void;
  setFastEnquiry: (fast_enquiry: any) => void;
  setEnquiryOptions: (enquiry_options: any) => void;
  setCountryLong: (country_long: string) => void;
  setCurrentUser: (current_user: any) => void;
  setBreadCrumb: (breadcrumb: any[]) => void;
  setVenueFavourite: (favourite: boolean) => void;
};

export const useVenueDetailStore = create<Store>()((set) => ({
  // field default values
  country: "",
  social_share: [],
  similar_venues: [],
  venue: null,
  fast_enquiry: null,
  enquiry_options: null,
  country_long: "",
  current_user: null,
  breadcrumb: [],

  // setters implementation
  setCountry: (country: string) => {
    set((state) => ({ ...state, country }));
  },
  setSimilarVenues: (similar_venues: any[]) => {
    set((state) => ({ ...state, similar_venues }));
  },
  setSocialShare: (social_share: any[]) => {
    set((state) => ({ ...state, social_share }));
  },
  setVenue: (venue: any) => {
    set((state) => ({ ...state, venue }));
  },
  setFastEnquiry: (fast_enquiry: any) => {
    set((state) => ({ ...state, fast_enquiry }));
  },
  setEnquiryOptions: (enquiry_options: any) => {
    set((state) => ({ ...state, enquiry_options }));
  },
  setCountryLong: (country_long: string) => {
    set((state) => ({ ...state, country_long }));
  },
  setCurrentUser: (current_user: any) => {
    set((state) => ({ ...state, current_user }));
  },
  setBreadCrumb: (breadcrumb: any[]) => {
    set((state) => ({ ...state, breadcrumb }));
  },
  setVenueFavourite: (favorite: boolean) => {
    set((state) => ({
      ...state,
      venue: {
        ...state.venue,
        attributes: {
          ...state.venue.attributes,
          favorite: {
            ...state.venue.attributes.favorite,
            favorite,
          },
        },
      },
    }));
  },
}));
