import { detectIP } from "./apiFunctions";
import { makeRequest } from "./makeRequest";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL;
const ipDetectAPI =
  process.env.NEXT_PUBLIC_IP_DETECT_URL || process.env.IP_DETECT_URL;
const authCookieName =
  process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME || process.env.AUTH_COOKIE_NAME;

export const getRoomDetailInfo = async ({
  user_agent,
  referer,
  cookies,
  id, // venue_slug
  room_slug, // venue_room_slug
  country,
}: {
  user_agent?: string;
  referer?: string;
  cookies?: any;
  id: string;
  room_slug: string;
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
    room_slug,
  };

  let config = {
    method: "GET",
    maxBodyLength: Infinity,
    url: `${baseURL}/api/webapp/v1/venues/rooms.json?country=${country || "sg"}`,
    params: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${(authCookies && Array.isArray(authCookies) && authCookies.length > 0 && authCookies[0] && authCookies[0].value) || ""}`,
    },
  };

  const res = await makeRequest(config);

  return res;
};
export const getRoomDetailInfoMeta = async ({
  cookies,
  id, // venue_slug
  room_slug, // venue_room_slug
  country,
}: {
  cookies?: any;
  id: string;
  room_slug: string;
  country?: string;
}) => {
  const authCookies =
    cookies && cookies.filter((cookie: any) => cookie.name === authCookieName);

  const data: any = {
    id,
    room_slug,
    section: "meta_tags",
  };

  let config = {
    method: "GET",
    maxBodyLength: Infinity,
    url: `${baseURL}/api/webapp/v1/venues/rooms.json?country=${country || "sg"}`,
    params: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${(authCookies && Array.isArray(authCookies) && authCookies.length > 0 && authCookies[0] && authCookies[0].value) || ""}`,
    },
  };

  const res = await makeRequest(config);

  return res;
};

export const toggleFavouriteRoom = async ({
  venue_id,
  room_id,
  cookies,
}: {
  venue_id: string;
  room_id?: string;
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
