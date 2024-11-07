import { create } from "zustand";

type Store = {
  // fields declaration
  country?: string;
  config?: any;
  legend?: any[];
  data?: any[];
  country_long?: string;
  current_user?: any;
  loading?: boolean;
  err?: any;

  // setters declaration
  setCountry: (country: string) => void;
  setConfig: (config: any) => void;
  setLegend: (legend: any[]) => void;
  setData: (data: any[]) => void;
  setCountryLong: (country_long: string) => void;
  setCurrentUser: (current_user: any) => void;
  setLoading: (loading: boolean) => void;
  setErr: (err: any) => void;
};

export const useVenueCalendarStore = create<Store>()((set) => ({
  // field default values
  country: "",
  config: null,
  legend: [],
  data: [],
  country_long: "",
  current_user: null,
  loading: false,
  err: null,

  // setters implementation
  setCountry: (country: string) => {
    set((state) => ({ ...state, country }));
  },
  setConfig: (config: any) => {
    set((state) => ({ ...state, config }));
  },
  setLegend: (legend: any[]) => {
    set((state) => ({ ...state, legend }));
  },
  setData: (data: any[]) => {
    set((state) => ({ ...state, data }));
  },
  setCountryLong: (country_long: any) => {
    set((state) => ({ ...state, country_long }));
  },
  setCurrentUser: (current_user: any) => {
    set((state) => ({ ...state, current_user }));
  },
  setLoading: (loading: boolean) => {
    set((state) => ({
      ...state,
      loading,
    }));
  },
  setErr: (err: any) => {
    set((state) => ({
      ...state,
      err,
    }));
  },
}));
