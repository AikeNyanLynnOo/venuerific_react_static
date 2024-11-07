import { useEffect } from "react";

import { useVenueRoomDetailStore } from "@/store/venue-room-detail-store";

// React
export const useVenueRoomDetailSet = (data: any, meta: any, deps: any[]) => {
  const {
    // setters
    setCountry,
    setSocialShare,
    setOtherRooms,
    setVenueRoom,
    setFastEnquiry,
    setEnquiryOptions,
    setCountryLong,
    setCurrentUser,
    setBreadCrumb,
  } = useVenueRoomDetailStore();

  const {
    //
    country,
    social_share,
    other_rooms,
    venue_room,
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
    if (other_rooms && other_rooms.length > 0) {
      setOtherRooms(other_rooms);
    }
    if (venue_room) {
      setVenueRoom(venue_room);
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
      setCurrentUser(current_user);
    }
    if (breadcrumb && breadcrumb.length > 0) {
      setBreadCrumb(breadcrumb);
    }
  }, [
    country,
    social_share,
    other_rooms,
    venue_room,
    fast_enquiry,
    enquiry_options,
    country_long,
    current_user,
    ...deps,
  ]);
};
