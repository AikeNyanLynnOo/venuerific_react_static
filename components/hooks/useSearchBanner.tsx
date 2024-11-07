// import { searchVenue } from "@/utils/apiFunctions";
// import useSWR from "swr";

// export function useSearchBanner(
//   options: {
//     userAgent?: string;
//     referer?: string;
//     quickSearchCompleted?: string;
//     deals?: boolean;
//     maxCapacity?: string;
//     searchLocation?: string;
//     country?: string;
//     longtailPath: string;
//     suggestType?: string;
//   },
//   shouldFetch: boolean
// ) {
//   const { data, error, isLoading } = useSWR(
//     shouldFetch ? [options] : null, // Only fetch if shouldFetch is true
//     () => searchVenue(options), // Fetcher function
//     { revalidateOnFocus: false, revalidateOnReconnect: false } // SWR options
//   );

//   return {
//     data,
//     error,
//     isLoading,
//   };
// }
