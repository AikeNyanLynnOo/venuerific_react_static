import { makeRequest } from "./makeRequest";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL;
const ipDetectAPI =
  process.env.NEXT_PUBLIC_IP_DETECT_URL || process.env.IP_DETECT_URL;
const authCookieName =
  process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME || process.env.AUTH_COOKIE_NAME;

export const getHomePageDataAll = async ({
  country,
  section,
  cookies,
  shouldDetectIP = false,
}: {
  country?: string;
  section?: string;
  cookies?: any;
  shouldDetectIP?: boolean;
}): Promise<any> => {
  const authCookies =
    cookies && cookies.filter((cookie: any) => cookie.name === authCookieName);
  const authToken =
    (authCookies &&
      Array.isArray(authCookies) &&
      authCookies.length > 0 &&
      authCookies[0]?.value) ||
    "";

  const remote_ip = !shouldDetectIP ? "" : await detectIP();

  let config = {
    method: "GET",
    maxBodyLength: Infinity,
    url: `${baseURL}/api/webapp/v1/home.json`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    params: {
      remote_ip: remote_ip || "",
      country: country || "",
      section: section || "",
    },
  };
  const res = await makeRequest(config);

  return res;
};

export const getSuggestionsForEventType = async ({
  search_banner,
  term,
  country,
  cookies,
}: {
  search_banner: string;
  term: string;
  country?: string;
  cookies?: any;
}): Promise<any> => {
  const authCookies =
    cookies && cookies.filter((cookie: any) => cookie.name === authCookieName);
  let config = {
    method: "GET",
    maxBodyLength: Infinity,
    url: `${baseURL}/api/webapp/v1/pages/search_suggest.json`,
    params: {
      country,
      search_banner,
      term,
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${(authCookies && Array.isArray(authCookies) && authCookies.length > 0 && authCookies[0] && authCookies[0].value) || ""}`,
    },
  };

  const res = await makeRequest(config);

  return res;
};

// export const detectIP = async () => {
//   try {
//     const response = await fetch(`${ipDetectAPI}?format=json`);
//     const data = await response.json();

//     return data.ip;
//   } catch (error) {
//     // console.log("Error fetching the IP address: ", error);
//     return null;
//   }
// };

export const detectIP = async () => {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Request timed out")), 2000),
  );

  try {
    const response: any = await Promise.race([
      fetch(`${ipDetectAPI}?format=json`),
      timeout,
    ]);

    const data = await response.json();

    return data.ip;
  } catch (error) {
    // Return an empty string if there's an error or timeout
    return "";
  }
};

export const searchVenue = async ({
  user_agent,
  referer,
  event_types_supported,
  deals,
  maxCapacity,
  searchLocation,
  country,
  cookies,
  banner_search = true,
  section,
  no_longtail,
  shouldDetectIP,
  page = 1,
}: {
  user_agent?: string;
  referer?: string;
  event_types_supported?: string;
  deals?: boolean;
  maxCapacity?: string;
  searchLocation?: string;
  country?: string;
  cookies?: any;
  banner_search?: boolean;
  section?: string;
  no_longtail?: boolean;
  shouldDetectIP?: boolean;
  page?: number;
}) => {
  const remote_ip = !shouldDetectIP ? "" : await detectIP();

  const authCookies =
    cookies && cookies.filter((cookie: any) => cookie.name === authCookieName);

  const data: any = {
    search: {
      event_types_supported: event_types_supported || "",
      deals: (deals && "on") || "",
      max_capacity: maxCapacity || "",
      location: searchLocation || "",
      country: section === "meta_tags" ? "" : country || "sg",
    },
    no_longtail: no_longtail || "",
    country: country || "sg",
    section: section || "",
  };

  if (banner_search) {
    data.banner_search = true;
  }
  if (!banner_search) {
    data.page = page;
    data.tracking = {
      user_agent: user_agent || "",
      remote_ip,
      referer: referer || "",
    };
  }

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

export const searchVendor = async ({
  user_agent,
  referer,
  vendorService,
  vendorArea,
  deals,
  country,
  cookies,
}: {
  user_agent?: string;
  referer?: string;
  vendorService?: string;
  vendorArea?: string;
  deals?: boolean;
  country?: string;
  cookies?: any;
}) => {
  let remote_ip = await detectIP();

  const authCookies =
    cookies && cookies.filter((cookie: any) => cookie.name === authCookieName);

  const data = {
    tracking: {
      user_agent: user_agent || "",
      remote_ip: remote_ip,
      referer: referer || "",
    },
    vendor_search: {
      service: vendorService || "",
      area: vendorArea || "",
      by_package: (deals && "on") || "",
    },
    country: country || "",
    banner_search: true,
  };

  let config = {
    method: "GET",
    maxBodyLength: Infinity,
    url: `${baseURL}/api/webapp/v1/vendors/banner_search.json`,
    params: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${(authCookies && Array.isArray(authCookies) && authCookies.length > 0 && authCookies[0] && authCookies[0].value) || ""}`,
    },
  };
  const res = await makeRequest(config);

  return res;
};

export const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  let data = JSON.stringify({
    user: {
      email: email || "julius@venuerific.com",
      password: password || "Passw0rd!",
    },
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${baseURL}/api/webapp/v1/users/login.json`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const res = await makeRequest(config);

  return res;
};

export const getHeaderFooter = async ({
  cookies,
  country,
}: {
  country?: string;
  cookies?: any;
}) => {
  const authCookies =
    cookies && cookies.filter((cookie: any) => cookie.name === authCookieName);

  let config = {
    method: "GET",
    maxBodyLength: Infinity,
    url: `${baseURL}/api/webapp/v1/pages/header_footer.json`,
    params: {
      country,
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${(authCookies && Array.isArray(authCookies) && authCookies.length > 0 && authCookies[0] && authCookies[0].value) || ""}`,
    },
  };

  const res = await makeRequest(config);

  return res;
};

export const logoutUser = async ({ cookie }: { cookie?: string }) => {
  // const authCookies =
  //   cookies && cookies.filter((cookie: any) => cookie.name === authCookieName);

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${baseURL}/api/webapp/v1/users/logout.json`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookie}`,
    },
  };

  const res = await makeRequest(config);

  return res;
};
