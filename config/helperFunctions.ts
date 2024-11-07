import { setCookie } from "nookies";

const countryCookieName =
  process.env.NEXT_PUBLIC_COUNTRY_COOKIE_NAME || "country";

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getCountryNameFromCode = (code: string): string => {
  const countryMap: Record<string, string> = {
    sg: "Singapore",
    hk: "Hong Kong",
    id: "Indonesia",
    ph: "Philippines",
    my: "Malaysia",
  };

  return countryMap[code.toLowerCase()] || "Unknown country code";
};

export const getCountryCodeFromName = (name: string): string => {
  const countryMap: Record<string, string> = {
    Singapore: "sg",
    "Hong Kong": "hk",
    Indonesia: "id",
    Philippines: "ph",
    Malaysia: "my",
  };

  return countryMap[name] || "Unknown country name";
};

// export const getUniqueArray = (arr: any) => {
//   const uniqueArray = arr.filter((item: any, index: any, self: any) => {
//     return self.findIndex((i: any) => i.value === item.value) === index;
//   });

//   return uniqueArray;
// };

export const getUniqueArray = (arr: any) => {
  const uniqueArray = arr.filter((item: any, index: any, self: any) => {
    if (typeof item === "object" && item !== null) {
      // For object arrays
      return (
        self.findIndex(
          (i: any) => JSON.stringify(i) === JSON.stringify(item),
        ) === index
      );
    } else {
      // For primitive arrays (string, number, etc.)
      return self.indexOf(item) === index;
    }
  });

  return uniqueArray;
};

export const countNonEmptyFields = (fields: any[]) => {
  let count = 0;

  fields.forEach((field) => {
    // For arrays: Check if they are non-empty
    if (Array.isArray(field)) {
      if (field.length > 0) count++;
    }
    // For strings: Check if they are non-empty
    else if (typeof field === "string") {
      if (field.trim() !== "") count++;
    }
    // For booleans: Only 'true' is considered non-empty
    else if (typeof field === "boolean") {
      if (field) count++;
    }
    // For other types, just increment if it has a value
    else if (field) {
      count++;
    }
  });

  return count;
};

export const getPathNameFromUrl = (url: string) => {
  const newUrl = new URL(url);

  return newUrl.pathname || "";
};

export const getTodayDateFormatted = (format = "DD-MM-YYYY") => {
  const today = new Date();

  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); // January is 0
  const year = today.getFullYear();

  if (format === "DD-MM-YYYY") {
    return `${day}-${month}-${year}`;
  } else if (format === "YYYY-MM-DD") {
    return `${year}-${month}-${day}`;
  } else {
    throw new Error(
      "Unsupported date format. Use 'DD-MM-YYYY' or 'YYYY-MM-DD'.",
    );
  }
};
export const getDateFromDateValue = ({
  dateValue,
  format = "DD-MM-YYYY",
}: {
  dateValue?: any;
  format?: string;
}) => {
  const { day, month, year } = dateValue || {};

  if (format === "DD-MM-YYYY") {
    return `${day || ""}-${month || ""}-${year || ""}`;
  } else if (format === "YYYY-MM-DD") {
    return `${year || ""}-${month || ""}-${day || ""}`;
  } else {
    throw new Error(
      "Unsupported date format. Use 'DD-MM-YYYY' or 'YYYY-MM-DD'.",
    );
  }
};
export const getDateFromDateStr = ({
  dateStr,
  format = "DD-MM-YYYY",
}: {
  dateStr?: any;
  format?: string;
}) => {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-indexed
  const year = date.getFullYear();

  if (format === "DD-MM-YYYY") {
    return `${day || ""}-${month || ""}-${year || ""}`;
  } else if (format === "YYYY-MM-DD") {
    return `${year || ""}-${month || ""}-${day || ""}`;
  } else {
    throw new Error(
      "Unsupported date format. Use 'DD-MM-YYYY' or 'YYYY-MM-DD'.",
    );
  }
};
export const getHrMinFromTimeValue = ({ timeValue }: { timeValue?: any }) => {
  const { hour, minute } = timeValue || {};

  return `${hour || "00"}:${minute || "00"}`;
};

export const isFutureDate = (argDate: string) => {
  const today = new Date();

  // Get today's date at midnight for comparison
  const todayAtMidnight = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );

  // Parse the argument date (expected format DD-MM-YYYY)
  const [day, month, year] = argDate.split("-").map(Number);

  // Create a Date object from the argument date
  const argDateObj = new Date(year, month - 1, day); // month is zero-indexed

  // Compare the two dates
  return argDateObj > todayAtMidnight;
};

export const getCurrentTimeInISOString = (): string => {
  const date = new Date();

  return date.toISOString();
};

export const getCurrentTimeFormatted = () => {
  const today = new Date();

  // Get the day of the week
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = days[today.getDay()];

  // Get the hours and determine AM/PM
  let hours = today.getHours();
  const ampm = hours >= 12 ? "pm" : "am";

  hours = hours % 12 || 12; // Convert to 12-hour format

  // Get the minutes
  const minutes = String(today.getMinutes()).padStart(2, "0");

  // Combine day, time, and AM/PM
  return `${dayOfWeek} ${hours}:${minutes}${ampm}`;
};

export const isObjectArray = (arr: any[]): boolean => {
  return arr && arr.length > 0 && typeof arr[0] === "object";
};

export const setCountryCookie = (country: string) => {
  setCookie(null, countryCookieName, country, {
    path: "/",
    secure: true, // Ensures the cookie is sent over HTTPS
  });
};
