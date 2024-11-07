import { detectIP } from "./apiFunctions";
import { makeRequest } from "./makeRequest";

import { getCurrentTimeInISOString } from "@/config/helperFunctions";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL;

const authCookieName =
  process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME || process.env.AUTH_COOKIE_NAME;

export const searchVenueList = async ({
  user_agent,
  referer,
  event_types_supported,
  event_types_supported_parent,
  venue_type,
  max_capacity,
  price_level,
  deals,
  packages,
  super_venue,
  cuisine_type,
  amenities,
  search_type,
  location,
  country,
  cookies,
  no_longtail,
  shouldDetectIP,
  page = 1,
}: {
  user_agent?: string;
  referer?: string;
  event_types_supported?: string;
  event_types_supported_parent?: string;
  venue_type?: string;
  max_capacity?: string;
  price_level?: any;
  deals?: boolean;
  packages?: boolean;
  super_venue?: boolean;
  cuisine_type?: string;
  amenities?: any;
  search_type?: string;
  location?: string;
  country?: string;
  cookies?: any;
  no_longtail?: boolean;
  shouldDetectIP?: boolean;
  page?: number;
}) => {
  const remote_ip = !shouldDetectIP ? "" : await detectIP();

  const authCookies =
    cookies && cookies.filter((cookie: any) => cookie.name === authCookieName);

  const data: any = {
    tracking: {
      user_agent: user_agent || "",
      remote_ip,
      referer: referer || "",
    },
    search: {
      event_types_supported: event_types_supported || "",
      event_types_supported_parent: event_types_supported_parent || "",
      venue_type: venue_type || "",
      max_capacity: max_capacity || "",
      price_level: price_level || "",
      location: location || "",
      country: country || "sg",
      deals: (deals && "Deals Only") || "",
      cuisine_type: cuisine_type || "",
      amenities: amenities || [],
      search_type: search_type || "",
      packages: (packages && "Package") || "",
      super_venue: (super_venue && "on") || "",
    },
    no_longtail: no_longtail || "",
    country: country || "sg",
    page,
  };

  let config = {
    method: "GET",
    maxBodyLength: Infinity,
    url: `${baseURL}/api/webapp/v1/search.json?country=${country || "sg"}`,
    params: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${(authCookies && Array.isArray(authCookies) && authCookies.length > 0 && authCookies[0] && authCookies[0].value) || ""}`,
    },
  };

  const res = await makeRequest(config);

  return res;
};

export const getVenueDetailInfo = async ({
  user_agent,
  referer,
  cookies,
  id, // venue_slug
  country,
}: {
  user_agent?: string;
  referer?: string;
  cookies?: any;
  id: string;
  country?: string;
}) => {
  const remote_ip = await detectIP();

  const authCookies =
    cookies && cookies.filter((cookie: any) => cookie.name === authCookieName);

  const data: any = {
    tracking: {
      user_agent: user_agent || "",
      remote_ip,
      referer: referer || "",
    },
    id,
  };

  let config = {
    method: "GET",
    maxBodyLength: Infinity,
    url: `${baseURL}/api/webapp/v1/venues/show.json?country=${country || "sg"}`,
    params: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${(authCookies && Array.isArray(authCookies) && authCookies.length > 0 && authCookies[0] && authCookies[0].value) || ""}`,
    },
  };

  const res = await makeRequest(config);

  return res;
};
export const getVenueDetailInfoMeta = async ({
  cookies,
  id, // venue_slug
  country,
}: {
  cookies?: any;
  id: string;
  country?: string;
}) => {
  const authCookies =
    cookies && cookies.filter((cookie: any) => cookie.name === authCookieName);

  const data: any = {
    id,
    section: "meta_tags",
  };

  let config = {
    method: "GET",
    maxBodyLength: Infinity,
    url: `${baseURL}/api/webapp/v1/venues/show.json?country=${country || "sg"}`,
    params: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${(authCookies && Array.isArray(authCookies) && authCookies.length > 0 && authCookies[0] && authCookies[0].value) || ""}`,
    },
  };

  const res = await makeRequest(config);

  return res;
};

export const toggleFavouriteVenue = async ({
  venue_id,
  cookies,
}: {
  venue_id: string;
  cookies?: any;
}) => {
  const authCookies =
    cookies && cookies.filter((cookie: any) => cookie.name === authCookieName);

  const data: any = {
    venue_id,
  };

  let config = {
    method: "POST",
    maxBodyLength: Infinity,
    url: `${baseURL}/api/webapp/v1/favorite_venues/toggle.json`,
    params: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${(authCookies && Array.isArray(authCookies) && authCookies.length > 0 && authCookies[0] && authCookies[0].value) || ""}`,
    },
  };

  const res = await makeRequest(config);

  return res;
};

export const getVenueCalendarInfo = async ({
  id,
  room_id = "",
  country = "sg",
  start = getCurrentTimeInISOString(),
  end,
  cookies,
}: {
  id: string;
  room_id?: string;
  country?: string;
  start?: string;
  end?: string;
  cookies?: any;
}) => {
  const authCookies =
    cookies && cookies.filter((cookie: any) => cookie.name === authCookieName);

  const data: any = {
    start,
    end,
  };

  let config = {
    method: "GET",
    maxBodyLength: Infinity,
    url: `${baseURL}/api/webapp/v1/venues/calendar.json?country=${country || "sg"}&id=${id}`,
    params: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${(authCookies && Array.isArray(authCookies) && authCookies.length > 0 && authCookies[0] && authCookies[0].value) || ""}`,
    },
  };

  const res = await makeRequest(config);

  return res;
};

export const submitVenueEnquiry = async ({
  id,
  country,
  cookies,
  package_id = "",
  promo_id = "",
  customer_get_in_touch = "Venuerific",
  room_id = "",
  start_date, // required
  start_time, // required
  duration, // required
  event_attendance, // required
  date_time_flexible = "0",
  event_type, // required
  venue_message = "",
  contact_name, // required
  contact_email, // required
  contact_phone_country_code, // required
  contact_phone, // required
  enquiry_form_type = "",
  name, // required (event name)
  // contact_whatsapp, // no need, default true in backend
  // enquiry_budget = "", // no need
  // budget_from, // no need
  // budget_to, // no need
  // budget, // no need
  // budget_type, // no need
}: {
  id: string;
  country?: string;
  cookies?: any;
  package_id?: string;
  promo_id?: string;
  customer_get_in_touch?: string;
  room_id?: string;
  start_date: string; // required
  start_time: string; // required
  duration: string; // required
  event_attendance: string; // required
  date_time_flexible?: string;
  event_type: string; // required
  venue_message?: string;
  contact_name: string; // required
  contact_email: string; // required
  contact_phone_country_code: string; // required
  contact_phone: string; // required
  enquiry_form_type?: string;
  name: string; // required (event name)
  // enquiry_budget?: string; // no need
  // contact_whatsapp?: string; // no need, default true in backend
  // budget_from?: string; // no need
  // budget_to?: string; // no need
  // budget?: string; // no need
  // budget_type?: string; // no need
}) => {
  const authCookies =
    cookies && cookies.filter((cookie: any) => cookie.name === authCookieName);

  const data: any = {
    event: {
      package_id,
      promo_id,
      customer_get_in_touch,
      room_id,
      start_date, // required
      start_time, // required
      duration, // required
      event_attendance, // required
      date_time_flexible,
      event_type, // required
      venue_message,
      contact_name, // required
      contact_email, // required
      contact_phone_country_code, // required
      contact_phone, // required
      enquiry_form_type,
      name,
      enquiry_budget: "", // no need
      contact_whatsapp: "on", // no need, default true in backend
      budget_from: "", // no need
      budget_to: "", // no need
      budget: "", // no need
      budget_type: "", // no need
    },
  };

  let config = {
    method: "POST",
    maxBodyLength: Infinity,
    url: `${baseURL}/api/webapp/v1/venues/submit_enquiry.json?country=${country || "sg"}&id=${id}`,
    params: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${(authCookies && Array.isArray(authCookies) && authCookies.length > 0 && authCookies[0] && authCookies[0].value) || ""}`,
    },
  };

  const res = await makeRequest(config);

  return res;
};

export const checkAvailability = async ({
  id,
  country,
  date,
  time,
  duration,
  room_id,
  package_id,
  cookies,
}: {
  id: string;
  country: string;
  date: string;
  time: string;
  duration: string;
  room_id: string;
  package_id: string;
  cookies: any;
}) => {
  const authCookies =
    cookies && cookies.filter((cookie: any) => cookie.name === authCookieName);

  const data: any = {
    date,
    time,
    duration,
    room_id,
    package_id,
  };

  let config = {
    method: "GET",
    maxBodyLength: Infinity,
    url: `${baseURL}/api/webapp/v1/venues/check_available_date.json?country=${country || "sg"}&id=${id}`,
    params: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${(authCookies && Array.isArray(authCookies) && authCookies.length > 0 && authCookies[0] && authCookies[0].value) || ""}`,
    },
  };

  const res = await makeRequest(config);

  return res;
};
