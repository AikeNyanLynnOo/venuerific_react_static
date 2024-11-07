import { useEffect } from "react";

import { useVenueDetailStore } from "@/store/venue-detail-store";

// React

export const useVenueDetailSet = (data: any, meta: any, deps: any[]) => {
  const {
    // setters
    setCountry,
    setSocialShare,
    setSimilarVenues,
    setVenue,
    setFastEnquiry,
    setEnquiryOptions,
    setCountryLong,
    setCurrentUser,
    setBreadCrumb,
  } = useVenueDetailStore();

  const {
    //
    country,
    similar_venues,
    social_share,
    venue,
    fast_enquiry,
    enquiry_options,
    country_long,
    current_user,
  } = data || {};

  const { breadcrumb } = meta || {};

  useEffect(() => {
    if (country) {
      setCountry(country);
    }
    if (social_share && social_share.length > 0) {
      setSocialShare(social_share);
    }
    if (similar_venues && similar_venues.length > 0) {
      setSimilarVenues(similar_venues);
    }
    if (venue) {
      setVenue(venue);
    }
    if (fast_enquiry) {
      setFastEnquiry(fast_enquiry);
    }
    if (enquiry_options && Object.keys(enquiry_options).length > 0) {
      setEnquiryOptions(enquiry_options);
    }
    if (country_long) {
      setCountryLong(country_long);
    }
    if (current_user) {
      console.log("setting current user>>", current_user);
      setCurrentUser(current_user);
    }
    if (breadcrumb && breadcrumb.length > 0) {
      setBreadCrumb(breadcrumb);
    }
  }, [
    country,
    social_share,
    similar_venues,
    venue,
    fast_enquiry,
    enquiry_options,
    country_long,
    current_user,
    breadcrumb,
    ...deps,
  ]);
};
