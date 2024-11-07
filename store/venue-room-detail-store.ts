import { create } from "zustand";

type Store = {
  // fields declaration
  country?: string;
  social_share?: any[];
  other_rooms?: any[];
  venue_room: any;
  fast_enquiry?: any;
  enquiry_options?: any;
  country_long?: string;
  current_user?: any;
  breadcrumb?: any[];

  // setters declaration
  setCountry: (country: string) => void;
  setSocialShare: (social_share: any[]) => void;
  setOtherRooms: (other_rooms: any[]) => void;
  setVenueRoom: (venue: any) => void;
  setFastEnquiry: (fast_enquiry: any) => void;
  setEnquiryOptions: (enquiry_options: any) => void;
  setCountryLong: (country_long: string) => void;
  setCurrentUser: (current_user: any) => void;
  setBreadCrumb: (breadcrumb: any[]) => void;
  setRoomFavourite: (favourite: boolean) => void;
};

export const useVenueRoomDetailStore = create<Store>()((set) => ({
  // field default values
  country: "",
  social_share: [],
  other_rooms: [],
  venue_room: null,
  fast_enquiry: null,
  enquiry_options: null,
  country_long: "",
  current_user: null,
  breadcrumb: [],

  // setters implementation
  setCountry: (country: string) => {
    set((state) => ({ ...state, country }));
  },
  setSocialShare: (social_share: any[]) => {
    set((state) => ({ ...state, social_share }));
  },
  setOtherRooms: (other_rooms: any[]) => {
    set((state) => ({ ...state, other_rooms }));
  },
  setVenueRoom: (venue_room: any) => {
    set((state) => ({ ...state, venue_room }));
  },
  setFastEnquiry: (fast_enquiry: any) => {
    set((state) => ({ ...state, fast_enquiry }));
  },
  setEnquiryOptions: (enquiry_options) => {
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
  setRoomFavourite: (favorite: boolean) => {
    set((state) => ({
      ...state,
      venue_room: {
        ...state.venue_room,
        attributes: {
          ...state.venue_room.attributes,
          favorite: {
            ...state.venue_room.attributes.favorite,
            favorite,
          },
        },
      },
    }));
  },
}));
