import { useEffect } from "react";

import { useVenueCalendarStore } from "@/store/venue-calendar-store";

// React

export const useVenueCalendarSet = (
  calendarData: any,
  meta: any,
  deps: any[],
) => {
  const {
    // setters
    setCountry,
    setConfig,
    setLegend,
    setData,
    setCountryLong,
    setCurrentUser,
  } = useVenueCalendarStore();

  const {
    //
    country,
    config,
    legend,
    data,
    country_long,
    current_user,
  } = calendarData || {};

  const { breadcrumb } = meta || {};

  useEffect(() => {
    if (country) {
      setCountry(country);
    }
    if (config && Object.keys(config).length > 0) {
      setConfig(config);
    }
    if (legend && legend.length > 0) {
      setLegend(legend);
    }
    if (data && data.length > 0) {
      setData(data);
    }
    if (country_long) {
      setCountryLong(country_long);
    }
    if (current_user) {
      setCurrentUser(current_user);
    }
  }, [country, config, legend, data, country_long, current_user, ...deps]);
};
