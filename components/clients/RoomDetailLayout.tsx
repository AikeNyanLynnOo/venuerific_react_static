"use client";

// NextJS

// Components

// Constants
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { useDisclosure } from "@nextui-org/modal";
import { Heart, ShareNetwork, Star } from "@phosphor-icons/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { parseDate } from "@internationalized/date";

import { CustomBreadCrumbs } from "../atoms/CustomBreadcrumbs";
import { LightLabelWithIcon } from "../atoms/LightLabelWithIcon";
import { DetailPageMediaTabs } from "../molecules/DetailPageMediaTabs";
import { EnquiryChatForm } from "../molecules/EnquiryChatForm";
import Footer from "../molecules/Footer";
import { VenueCard } from "../molecules/VenueCard";
import { VenueEnquiryFormModal } from "../molecules/VenueEnquiryFormModal";
import { useDataSet } from "../hooks/useDataSet";
import { useFetchData } from "../hooks/useFetchData";
import { CalendarModal } from "../molecules/modals/CalendarModal";
import { VenueSocialShareModal } from "../molecules/modals/VenueSocialShareModal";

// third party

import { VenueWhatsAppStepperModal } from "../molecules/modals/VenueWhatsAppStepperModal";
import { useCurrentUrl } from "../hooks/useCurrentUrl";
import { useVenueRoomDetailSet } from "../hooks/useVenueRoomDetailSet";
import { VenueRoomDetailInfoTabs } from "../molecules/tabs/VenueRoomDetailInfoTabs";
import { Loading } from "../atoms/Loading";

import { useVenueRoomDetailStore } from "@/store/venue-room-detail-store";
import {
  getRoomDetailInfo,
  toggleFavouriteRoom,
} from "@/utils/venueRoomApiFunctions";
import {
  getDateFromDateValue,
  getTodayDateFormatted,
  isFutureDate,
} from "@/config/helperFunctions";
import { COLORS } from "@/styles/colors";
import {
  checkAvailability,
  getVenueCalendarInfo,
  submitVenueEnquiry,
} from "@/utils/venueApiFunctions";
import { useVenueCalendarStore } from "@/store/venue-calendar-store";
import { useVenueChatBotStore } from "@/store/venue-chat-bot-store";

interface RoomDetailLayoutProps {
  params?: any;
  headerFooterRes?: any;
  cookies?: any;
}

export const RoomDetailLayout = ({
  params,
  headerFooterRes,
  cookies,
}: RoomDetailLayoutProps) => {
  // client side cookie parse (CANNOT PARSE HTTPONLY COOKIES)
  // const cookieStore = parseCookies();
  // const cookies = Object.entries(cookieStore).map(([key, value]) => ({
  //   name: key,
  //   value,
  // }));

  const router = useRouter();

  const currentUrl = useCurrentUrl();

  // *** START store fields ***

  // use venue calendar store
  const venueCalendarStore = useVenueCalendarStore();

  // use venue detail store
  const {
    country,
    breadcrumb,
    venue_room,
    social_share,
    country_long,
    other_rooms,
    current_user,
    fast_enquiry,
    enquiry_options,
    setRoomFavourite,
  } = useVenueRoomDetailStore();

  const { attributes } = venue_room || {};
  const {
    preview,
    event_attendance_min_capacity,
    event_attendance_max_capacity,
    show_date_time_flexible,
    date_time_flexible_info,
    show_via_whatsapp,
    room_package,
    // package, cuz its a reserved keyword, try to get with enquiry_options.package
    duration,
    event_types_supported,
    contact, // contact_name, contact_email, contact_phone_country_code, contact_phone
    phone_country_code,
    promotion,
  } = enquiry_options || {};

  const { changeStep, addMessage } = useVenueChatBotStore();

  // *** END store fields ***

  // *** START fetching & client-side data set ***

  // setting client side data for header footer
  useDataSet(headerFooterRes);

  // fetching venue room detail info
  const { data, meta, loading, error } = useFetchData({
    fetcher: getRoomDetailInfo,
    args: {
      country: (params.country || "sg") as string,
      cookies,
      id: params.venue_slug,
      room_slug: params.room_slug,
    },
    deps: [],
  });

  // setting client side venue room detail info
  useVenueRoomDetailSet(data, meta, [loading]);

  // *** END fetching & client-side data set ***

  // *** START states ***

  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState("enquiry");
  const [whatsAppStep, setWhatsAppStep] = useState(3);

  // enquiry form modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // whatsapp modal
  const whatsAppModal = useDisclosure();

  // social share modal
  const socialModal = useDisclosure();

  // calendar modal
  const calendarModal = useDisclosure();

  // is call
  const [isCall, setIsCall] = useState(false);
  const [isFavLoading, setIsFavLoading] = useState(false);
  const [favErr, setFavErr] = useState(null);

  // fields
  const [enquiryFormType, setEnquiryFormType] = useState("");
  const [customerGetInTouch, setCustomerGetInTouch] = useState("Venuerific"); // Whatsapp, Direct Call
  // step 1
  const [roomId, setRoomId] = useState("");
  const [packageId, setPackageId] = useState(""); // room package
  const [startDate, setStartDate] = useState(
    parseDate(getTodayDateFormatted("YYYY-MM-DD")),
  ); // required
  const [startTime, setStartTime] = useState(""); // required
  const [enquiryDuration, setEnquiryDuration] = useState(""); // required
  const [eventAttendance, setEventAttendance] = useState(""); // required
  const [promo, setPromo] = useState<any>(null); // promo {name, value, valid_until, description, code, terms_and_conditions}
  const [promoCode, setPromoCode] = useState("");
  const [isPromoCodeValid, setIsPromoCodeValid] = useState(false);
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [dateTimeFlexible, setDateTimeFlexible] = useState(false);

  // step 2
  const [eventName, setEventName] = useState(""); // required
  const [eventType, setEventType] = useState("");
  const [venueMessage, setVenueMessage] = useState("");

  // step 3
  const [contactName, setContactName] = useState(""); // required
  const [contactEmail, setContactEmail] = useState(""); // required
  const [contactPhoneCountryCode, setContactPhoneCountryCode] = useState(""); // required
  const [contactPhone, setContactPhone] = useState(""); // required

  // dynamically updating fields
  const [packages, setPackages] = useState([]);
  const [minCapacity, setMinCapacity] = useState(0);
  const [maxCapacity, setMaxCapacity] = useState(0);
  const [minDuration, setMinDuration] = useState(1);
  const [maxDuration, setMaxDuration] = useState(12);

  // error feedbacks
  const [durationErr, setDurationErr] = useState("");
  const [capacityErr, setCapacityErr] = useState("");
  const [startDateErr, setStartDateErr] = useState("");
  const [startTimeErr, setStartTimeErr] = useState("");
  const [eventNameErr, setEventNameErr] = useState("");
  const [eventTypeErr, setEventTypeErr] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [phoneErr, setPhoneErr] = useState("");

  // form validation
  const [isStep1Valid, setIsStep1Valid] = useState(false);
  const [isStep2Valid, setIsStep2Valid] = useState(false);
  const [isStep3Valid, setIsStep3Valid] = useState(false);

  // loading
  const [isLoading, setIsLoading] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);

  // side bar ref
  const sideBarRef = useRef<any>(null);
  // right sticky section margin top
  const [rightStickyMt, setRightStickyMt] = useState(5);

  // enquiry success redirect url
  const [redirectUrl, setRedirectUrl] = useState("");

  // enquiry error
  const [enquiryErr, setEnquiryErr] = useState("");

  // *** END states ***

  // *** START handlers ***

  // handle click , call calendar
  const handleCalendar = async (start: string, end: string) => {
    venueCalendarStore.setLoading(true);

    try {
      const { status, statusText, success, message, data, meta } =
        await getVenueCalendarInfo({
          country: (params.country || "sg") as string,
          cookies,
          id: params.venue_slug,
          start,
          end,
        });

      if (!success && status === 401) {
        //401
        return router.push("/login");
      }

      if (data && data.redirect_to) {
        // redirect to
        return router.push(data.redirect_to);
      }

      if (!success) {
        throw new Error(message || "Failed to fetch data");
      }

      venueCalendarStore.setLoading(false);
      venueCalendarStore.setErr(null);

      const { country, config, legend, country_long, current_user } = {} as any;

      if (country) {
        venueCalendarStore.setCountry(country);
      }
      if (config && Object.keys(config).length > 0) {
        venueCalendarStore.setConfig(config);
      }
      if (legend && legend.length > 0) {
        venueCalendarStore.setLegend(legend);
      }
      if (data.data && data.data.length > 0) {
        venueCalendarStore.setData(data.data);
      }
      if (country_long) {
        venueCalendarStore.setCountryLong(country_long);
      }
      if (current_user) {
        venueCalendarStore.setCurrentUser(current_user);
      }
    } catch (error: any) {
      // err
      venueCalendarStore.setLoading(false);
      venueCalendarStore.setErr(error);
    }
  };

  // reset fields
  const resetFields = () => {
    // step 1
    setPackageId("");
    setStartDate(parseDate(getTodayDateFormatted("YYYY-MM-DD")));
    setStartTime("");
    setEnquiryDuration("");
    setEventAttendance("");
    setPromo("");
    setPromoCode("");
    setIsPromoCodeValid(false);
    setIsPromoApplied(false);
    setDateTimeFlexible(false);

    // step 2
    setEventName("");
    setEventType("");
    setVenueMessage("");

    // step 3
    if (contact && contact.contact_name) {
      setContactName(contact.contact_name);
    } else {
      setContactName("");
    }
    if (contact && contact.contact_email) {
      setContactEmail(contact.contact_email);
    } else {
      setContactEmail("");
    }
    if (contact && contact.contact_phone) {
      setContactPhone(contact.contact_phone);
    } else {
      setContactPhone("");
    }
    if (contact && contact.contact_phone_country_code) {
      setContactPhoneCountryCode(contact.contact_phone_country_code);
    } else {
      setContactPhoneCountryCode("");
    }

    // dynamically updating fields
    setPackages([]);
    if (event_attendance_min_capacity) {
      setMinCapacity(event_attendance_min_capacity);
    }
    if (event_attendance_max_capacity) {
      setMaxCapacity(event_attendance_max_capacity);
    }
    setMinDuration(1);
    setMaxDuration(12);

    // error feedbacks
    setDurationErr("");
    setCapacityErr("");
    setStartDateErr("");
    setStartTimeErr("");
  };

  // step change handler
  const handleChangeStep = (step: number, touch: string) => {
    if (touch === "Venuerific") {
      setStep(step);

      return;
    }
    setWhatsAppStep(step);
  };

  // handler when click favourite button
  const handleToggleFavourite = async () => {
    setIsFavLoading(true);
    try {
      const { status, statusText, success, message, data, meta } =
        await toggleFavouriteRoom({
          cookies,
          venue_id: params.venue_slug,
          room_id: params.room_slug,
        });

      if (!success && status === 401) {
        //401
        return router.push("/login");
      }

      if (data && data.redirect_to) {
        // redirect to
        return router.push(data.redirect_to);
      }

      if (!success) {
        throw new Error(message || "Failed to fetch data");
      }

      setIsFavLoading(false);
      setRoomFavourite(data.favorite);
    } catch (error: any) {
      setIsFavLoading(false);
      setFavErr(error);
    }
  };

  // room change handler with value (room_id)
  const handleRoomChangeWithValue = (value: any) => {
    const room = room_package.find((pkg: any) => `${pkg.value}` === `${value}`);

    if (room && room.value) {
      setRoomId(room.value);
    }
  };

  // package change handler
  const handlePackageChange = (e: any) => {
    setEnquiryDuration("");
    setEventAttendance("");
    if (e && e.target.value) {
      const selectedPackage: any = packages.find(
        (pkg: any) => `${pkg.value}` === `${e.target.value}`,
      );

      if (selectedPackage && selectedPackage.value) {
        setPackageId(selectedPackage.value);
      }
      if (selectedPackage && selectedPackage.min_capacity) {
        setMinCapacity(selectedPackage.min_capacity);
      }
      if (selectedPackage && selectedPackage.max_capacity) {
        setMaxCapacity(selectedPackage.max_capacity);
      }
      if (selectedPackage && selectedPackage.min_duration) {
        setMinDuration(selectedPackage.min_duration);
      } else {
        setMinDuration(1);
      }
      if (selectedPackage && selectedPackage.max_duration) {
        setMaxDuration(selectedPackage.max_duration);
      } else {
        setMaxDuration(12);
      }
    } else {
      setPackageId("");
      if (event_attendance_min_capacity) {
        setMinCapacity(event_attendance_min_capacity);
      }
      if (event_attendance_max_capacity) {
        setMaxCapacity(event_attendance_max_capacity);
      }
      setMinDuration(1);
      setMaxDuration(12);
    }
  };

  // date change handler
  const handleStartDateChange = (dateValue: any) => {
    if (dateValue) {
      const { day, month, year } = dateValue;

      if (isFutureDate(`${day}-${month}-${year}`)) {
        setStartDate(dateValue);
        setIsStep1Valid(true);

        return;
      }
      setIsStep1Valid(false);
    }
  };

  // start time change handler // next ui time input
  // const handleStartTimeChange = (timeValue: any) => {
  //   if (timeValue) {
  //     // const { hour, minute } = timeValue;
  //     setStartTime(timeValue);
  //     setIsStep1Valid(true);
  //     setStartTimeErr("");
  //     return;
  //   }
  //   setStartTimeErr("This field is required.");
  // };

  // time change handler // mui
  const handleStartTimeChange = (e: any) => {
    setStartTime(e.target.value);
    if (e && e.target.value) {
      setIsStep1Valid(true);
      setStartTimeErr("");

      return;
    }
    setStartTimeErr("This field is required.");
  };

  // duration change handler
  const handleDurationChange = (e: any) => {
    setEnquiryDuration(e.target.value);
    if (e && e.target.value) {
      if (e.target.value > maxDuration) {
        setDurationErr(`The maximum hour is ${maxDuration}`);

        return;
      }
      if (e.target.value < minDuration) {
        setDurationErr(`The minimum hour is ${minDuration}`);

        return;
      }
      setDurationErr("");

      return;
    }
    setDurationErr("This field is required.");
  };

  // guest change handler
  const handleChangeGuest = (e: any) => {
    setEventAttendance(e.target.value);
    if (e && e.target.value) {
      if (e.target.value > maxCapacity) {
        setCapacityErr(`The maximum capacity is ${maxCapacity}`);

        return;
      }
      if (e.target.value < minCapacity) {
        setCapacityErr(`The minimum capacity is ${minCapacity}`);

        return;
      }
      setCapacityErr("");

      return;
    }
    setCapacityErr("This field is required.");
  };

  // click apply promo handler
  const handleClickApplyPromo = (e: any) => {
    e.preventDefault();
    const promo =
      (promotion && promotion.find((promo: any) => promo.code === promoCode)) ||
      null;

    if (promo) {
      setIsPromoCodeValid(true);
      setPromo(promo);
      setIsPromoApplied(true);

      return;
    }
    setIsPromoCodeValid(false);
  };

  // promo input change handler
  const handleChangePromoInput = (e: any) => {
    if (e && e.target.value) {
      setPromoCode(e.target.value);
      const promo =
        (promotion &&
          promotion.find((promo: any) => promo.code === e.target.value)) ||
        null;

      if (promo) {
        setIsPromoCodeValid(true);
        setPromo(promo);

        return;
      }
      setIsPromoCodeValid(false);

      return;
    }
    setPromoCode("");
  };

  // event name change handler
  const handleEventNameChange = (e: any) => {
    setEventName(e.target.value);
    if (e.target.value) {
      setEventNameErr("");

      return;
    }
    setEventNameErr("This field is required.");
  };

  // event type change handler
  const handleEventTypeChange = (e: any) => {
    if (e && e.target.value) {
      const selectedEventType: any = event_types_supported.find(
        (eventType: any) => `${eventType.value}` === `${e.target.value}`,
      );

      if (selectedEventType && selectedEventType.value) {
        setEventType(selectedEventType.value);
        setEventTypeErr("");
      }

      return;
    }
    setEventType("");
    setEventTypeErr("This field is required.");
  };

  // contact name handler
  const handleContactNameChange = (e: any) => {
    setContactName(e.target.value);
    if (e.target.value) {
      setNameErr("");

      return;
    }
    setNameErr("This field is required.");
  };

  // contact email handler
  const handleContactEmailChange = (e: any) => {
    setContactEmail(e.target.value);
    if (e.target.value) {
      setEmailErr("");

      return;
    }
    setEmailErr("This field is required.");
  };

  // phone input change handler
  const handlePhoneInputChange = (
    value: string,
    country: string,
    e: any,
    formattedValue: string,
  ) => {
    if (formattedValue) {
      const [code, ...num] = formattedValue.split(" ");

      if (code && num && num.length > 0) {
        setContactPhoneCountryCode(code);
        setContactPhone(num.join("").replaceAll("-", ""));
        setPhoneErr("");

        return;
      }
      setPhoneErr("This field is required.");
    }
    setPhoneErr("This field is required.");
  };

  // enquiry submit handler
  const handleSubmitEnquiry = async (enquiryFtype?: string) => {
    setIsLoading(true);
    const data = {
      id: params.venue_slug,
      country: params.country || "sg",
      cookies,
      package_id: packageId || "",
      promo_id: (promo && isPromoApplied && promo.value) || "",
      customer_get_in_touch: customerGetInTouch,
      room_id: roomId || "",
      start_date:
        getDateFromDateValue({
          dateValue: startDate,
        }) || "",
      // start_date: "01-10-2024",
      // start_time:
      //   getHrMinFromTimeValue({
      //     timeValue: startTime,
      //   }) || "",
      start_time: startTime,
      duration: enquiryDuration || "",
      event_attendance: eventAttendance || "",
      date_time_flexible: dateTimeFlexible ? "1" : "0",
      event_type: eventType || "",
      venue_message: venueMessage || "",
      contact_name: contactName || "",
      contact_email: contactEmail || "",
      contact_phone_country_code: contactPhoneCountryCode || "",
      contact_phone: contactPhone || "",
      enquiry_form_type: enquiryFtype || "",
      name: eventName || "",
    };
    const submitEnquiryRes = await submitVenueEnquiry(data);

    if (submitEnquiryRes && submitEnquiryRes.status === 401) {
      router.push("/login");
    }

    setIsLoading(false);

    if (submitEnquiryRes && submitEnquiryRes.errors) {
      const err =
        (submitEnquiryRes.errors.length > 0 &&
          submitEnquiryRes.errors.map((err: any) => err.detail).join(", ")) ||
        "";

      setEnquiryErr(err);
      if (enquiryFtype === "chatbot") {
        changeStep(16);
        addMessage({
          sender: "bot",
          text: err,
          isError: true,
        });
      } else {
        handleChangeStep(3, customerGetInTouch);
      }

      return;
    }

    if (
      submitEnquiryRes &&
      submitEnquiryRes.data &&
      submitEnquiryRes.data.redirect_to
    ) {
      setEnquiryErr("");
      resetFields();
      handleChangeStep(3, customerGetInTouch);
      setRedirectUrl(submitEnquiryRes.data.redirect_to);

      // auto new window open if whatsapp
      if (
        customerGetInTouch === "Whatsapp" &&
        submitEnquiryRes.data.whatsapp_redirect_to
      ) {
        window.open(submitEnquiryRes.data.whatsapp_redirect_to, "_blank");
      }
    } else {
      setRedirectUrl("");
    }
  };

  // scroll handler
  const handleScroll = useCallback(() => {
    if (window.scrollY > 300) {
      setRightStickyMt(0);

      return;
    }
    setRightStickyMt(5);
  }, []);

  const validateStep1 = () => {
    // date will not be null
    if (!startTime) {
      setStartTimeErr("This field is required.");
    }
    if (!enquiryDuration) {
      setDurationErr("This field is required.");
    }
    if (!eventAttendance) {
      setCapacityErr("This field is required.");
    }
  };
  const validateStep2 = () => {
    if (!eventName) {
      setEventNameErr("This field is required.");
    }
    if (!eventType) {
      setEventTypeErr("This field is required.");
    }
  };
  const validateStep3 = () => {
    if (!contactName) {
      setNameErr("This field is required.");
    }
    if (!contactEmail) {
      setEmailErr("This field is required.");
    }
    if (!contactPhoneCountryCode || !contactPhone) {
      setPhoneErr("This field is required.");
    }
  };

  // click via whatsapp button handler
  const handleClickWhatsApp = () => {
    if (!isStep1Valid) {
      validateStep1();

      return;
    }
    setIsCall(false);
    setCustomerGetInTouch("Whatsapp");
    handleChangeStep(1, "Whatsapp");
    whatsAppModal.onOpen();
  };

  // *** END handlers ***

  // *** START useEffets ***

  // setting venue room id for the first time
  useEffect(() => {
    if (venue_room && venue_room.attributes && venue_room.attributes.id) {
      setRoomId(venue_room.attributes.id);
    }
  }, [venue_room]);

  // setting packages select box for the first time
  useEffect(() => {
    if (
      enquiry_options &&
      enquiry_options.package &&
      enquiry_options.package.length > 0
    ) {
      setPackages(enquiry_options.package);
    }
  }, [enquiry_options]);

  // populate contact info in form
  useEffect(() => {
    if (contact && contact.contact_name) {
      setContactName(contact.contact_name);
    }
    if (contact && contact.contact_email) {
      setContactEmail(contact.contact_email);
    }
    if (contact && contact.contact_phone) {
      setContactPhone(contact.contact_phone);
    }
    if (contact && contact.contact_phone_country_code) {
      setContactPhoneCountryCode(contact.contact_phone_country_code);
    }
  }, [contact]);

  // Check availability when date, time, duration, room, package changes
  useEffect(() => {
    if (startDate && startTime && enquiryDuration) {
      checkAvailability({
        id: params.venue_slug,
        country: params.country || "sg",
        cookies,
        package_id: packageId || "",
        room_id: roomId || "",
        date: getDateFromDateValue({
          dateValue: startDate,
        }),
        // time: getHrMinFromTimeValue({
        //   timeValue: startTime,
        // }),
        time: startTime,
        duration: enquiryDuration,
      }).then(({ status }) => setIsAvailable(status === 200 ? true : false));
    }
  }, [startDate, startTime, enquiryDuration, roomId, packageId, params]);

  // step 1 validation
  useEffect(() => {
    if (!enquiryDuration) {
      console.log("Enquiry duration empty");
      setIsStep1Valid(false);

      return;
    }
    if (durationErr) {
      console.log("Enquiry duration error");
      setIsStep1Valid(false);

      return;
    }
    if (!startTime) {
      console.log("Enquiry start time empty");
      setIsStep1Valid(false);

      return;
    }
    if (!eventAttendance) {
      console.log("Enquiry attendance empty");
      setIsStep1Valid(false);

      return;
    }
    if (capacityErr) {
      console.log("Enquiry capacity error");
      setIsStep1Valid(false);

      return;
    }
    if (promoCode && !isPromoCodeValid) {
      console.log("promo invalid");
      setIsStep1Valid(false);

      return;
    }
    if (!isAvailable) {
      console.log("Not Available on this date & time");
      setIsStep1Valid(false);

      return;
    }
    setIsStep1Valid(true);
  }, [
    // step 1
    startDate,
    startTime,
    enquiryDuration,
    durationErr,
    eventAttendance,
    capacityErr,
    promoCode,
    isPromoCodeValid,
  ]);

  // step 2 validation
  useEffect(() => {
    if (!eventName) {
      setIsStep2Valid(false);

      return;
    }
    if (!eventType) {
      setIsStep2Valid(false);

      return;
    }
    setIsStep2Valid(true);
  }, [
    // step 2
    eventName,
    eventType,
  ]);

  // step 3 validation
  useEffect(() => {
    if (!contactName) {
      setIsStep3Valid(false);

      return;
    }
    if (!contactEmail) {
      setIsStep3Valid(false);

      return;
    }
    if (!contactPhone || !contactPhoneCountryCode) {
      setIsStep3Valid(false);

      return;
    }
    setIsStep3Valid(true);
  }, [
    // step 3
    contactName,
    contactEmail,
    contactPhone,
    contactPhoneCountryCode,
  ]);

  // set min capacity for the first time
  useEffect(() => {
    if (event_attendance_min_capacity) {
      setMinCapacity(event_attendance_min_capacity);
    }
  }, [event_attendance_min_capacity]);

  // set max capacity for the first time
  useEffect(() => {
    if (event_attendance_max_capacity) {
      setMaxCapacity(event_attendance_max_capacity);
    }
  }, [event_attendance_max_capacity]);

  // room package change
  useEffect(() => {
    setEnquiryDuration("");
    setEventAttendance("");
    setCapacityErr("");
    setDurationErr("");

    const selectedPackage: any = packages.find(
      (pkg: any) => `${pkg.value}` === `${packageId}`,
    );

    if (selectedPackage && selectedPackage.min_capacity) {
      setMinCapacity(selectedPackage.min_capacity);
    }
    if (selectedPackage && selectedPackage.max_capacity) {
      setMaxCapacity(selectedPackage.max_capacity);
    }
    if (selectedPackage && selectedPackage.min_duration) {
      setMinDuration(selectedPackage.min_duration);
    }
    if (selectedPackage && selectedPackage.max_duration) {
      setMaxDuration(selectedPackage.max_duration);
    }
  }, [packageId]);

  // handle scroll event
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // *** END useEffects ***

  return (
    <section
      className={`${loading ? "min-h-screen flex items-center" : "mt-[81px]"}`}
    >
      {(loading && <Loading />) || (
        <>
          <div className="w-full mx-auto px-4 md:px-5 lg:px-12 xl:px-20 py-5">
            <div className="max-w-screen-2xl mx-auto">
              <CustomBreadCrumbs
                items={
                  (breadcrumb &&
                    breadcrumb.length > 0 &&
                    breadcrumb.map(({ title, link }, index) => ({
                      isIconOnly: index === 0 ? true : false,
                      iconSrc: index === 0 ? "/images/icons/home.svg" : "",
                      isActive: index === breadcrumb.length - 1 ? true : false,
                      href: link,
                      text: title,
                    }))) ||
                  []
                }
              />
              <DetailPageMediaTabs
                customClasses="mt-4"
                photos={
                  (attributes &&
                    attributes.photos &&
                    attributes.photos.length > 0 &&
                    attributes.photos.map(
                      ({
                        photo,
                        photo_title,
                        photo_alt,
                      }: {
                        photo: string;
                        photo_title: string;
                        photo_alt: string;
                      }) => ({
                        src: photo,
                        alt: photo_alt,
                        title: photo_title,
                      }),
                    )) ||
                  []
                }
                virtual_tour_url={
                  (attributes && attributes.virtual_tour_url) || ""
                }
                youtube_video_id={
                  (attributes && attributes.youtube_video_id) || ""
                }
              />
              <Divider className="w-full" />
              <div className="w-full ">
                {/* About Event Room Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main Content */}
                  <div className="mt-5 lg:col-span-2 space-y-6">
                    {/* Venue Header */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                      <div className="flex flex-col space-y-2">
                        <h1 className="text-2xl font-semibold leading-9">
                          {(attributes && attributes.name_seo) || ""}
                        </h1>
                        <div className="flex items-center gap-x-4">
                          {(current_user &&
                            Object.keys(current_user).length > 0 && (
                              <button onClick={handleToggleFavourite}>
                                <LightLabelWithIcon
                                  customClasses="flex items-center gap-x-2.5 justify-between justify-center w-fit"
                                  customLabel={
                                    <span className="text-base font-semibold leading-6 text-primary-600">
                                      Favourite
                                    </span>
                                  }
                                  startIconNode={
                                    <Heart
                                      color={COLORS.primary[600]}
                                      size={20}
                                      weight={
                                        (attributes &&
                                          attributes.favorite &&
                                          attributes.favorite.favorite &&
                                          "fill") ||
                                        "regular"
                                      }
                                    />
                                  }
                                />
                              </button>
                            )) || (
                            <a
                              href={
                                (attributes &&
                                  attributes.favorite &&
                                  attributes.favorite.link) ||
                                ""
                              }
                            >
                              <LightLabelWithIcon
                                customClasses="flex items-center gap-x-2.5 justify-between justify-center w-fit"
                                customLabel={
                                  <span className="text-base font-semibold leading-6 text-primary-600">
                                    Favourite
                                  </span>
                                }
                                startIconNode={
                                  <Heart
                                    color={COLORS.primary[600]}
                                    size={20}
                                  />
                                }
                              />
                            </a>
                          )}

                          <button onClick={socialModal.onOpen}>
                            <LightLabelWithIcon
                              customClasses="flex items-center gap-x-2.5 justify-between justify-center w-fit"
                              customLabel={
                                <span className="text-base font-semibold leading-6 text-primary-600">
                                  Share
                                </span>
                              }
                              startIconNode={
                                <ShareNetwork
                                  color={COLORS.primary[600]}
                                  size={20}
                                />
                              }
                            />
                          </button>
                        </div>
                        <p className="text-base font-normal leading-6">
                          {(attributes && attributes.venue_type_display) || ""}
                        </p>
                        <p className="text-base font-normal leading-6 text-secondary-400">
                          {(attributes && attributes.address) || ""}{" "}
                          {(attributes && attributes.address_area) || ""}
                        </p>
                        {attributes &&
                          attributes.reviews_score > 0 &&
                          attributes.reviews_total > 0 && (
                            <div className="flex items-center gap-x-2">
                              <LightLabelWithIcon
                                customClasses="flex items-center gap-x-2.5 justify-between justify-center w-fit"
                                customLabel={
                                  <span className="text-base font-medium leading-6">
                                    {(attributes && attributes.reviews_score) ||
                                      0}
                                  </span>
                                }
                                startIconNode={
                                  <Star
                                    color="#F8D830"
                                    size={20}
                                    weight="fill"
                                  />
                                }
                              />
                              <span className="text-secondary-300 font-bold text-lg">
                                •
                              </span>
                              <span className="text-base font-medium leading-6">
                                {(attributes && attributes.reviews_total) || 0}{" "}
                                Reviews
                              </span>
                            </div>
                          )}
                      </div>
                    </div>

                    <VenueRoomDetailInfoTabs
                      handleRoomChangeWithValue={handleRoomChangeWithValue}
                      roomId={roomId}
                      packageId={packageId}
                      // setters
                      setPackageId={setPackageId}
                    />
                  </div>

                  {/* Sidebar Section */}
                  <div
                    ref={sideBarRef}
                    className={`hidden mt-${rightStickyMt} lg:block lg:col-span-1 space-y-3 sticky top-[81px] h-fit w-full overflow-y-scroll hide-scrollbar max-h-[90vh]`}
                  >
                    {attributes &&
                      attributes.awards &&
                      attributes.awards.length > 0 &&
                      attributes.awards.map(
                        (
                          { video, title }: { video: string; title: string },
                          index: number,
                        ) => (
                          <div
                            key={index}
                            className="flex h-16 items-center gap-x-5"
                          >
                            <video
                              key={index}
                              autoPlay
                              loop
                              muted
                              className="h-full"
                              src={video}
                            >
                              Your browser does not support video tag
                            </video>
                            <span className="text-[#d1a84f] text-2xl font-black leading-normal">
                              {title}
                            </span>
                          </div>
                        ),
                      )}

                    <div className="border rounded-xl p-3">
                      <div className="flex items-center gap-x-3">
                        <img
                          alt="user_dummy"
                          className="h-[60px] w-[60px] rounded-full object-cover"
                          src={
                            (attributes && attributes.host_photo) ||
                            "/images/user_dummy.png"
                          }
                        />
                        <p className="flex flex-1 flex-col">
                          <span className="text-xs font-medium leading-4 text-secondary-400">
                            Host
                          </span>
                          <span className="text-base font-semibold leading-7">
                            {(attributes && attributes.host_name) || ""}
                          </span>
                        </p>
                        <p className="flex flex-col">
                          <span className="text-xs font-medium leading-4 text-secondary-400">
                            Average Response Time
                          </span>
                          <span className="text-base font-semibold leading-7">
                            {(attributes &&
                              attributes.host_average_response_time) ||
                              ""}
                          </span>
                        </p>
                      </div>
                      <Divider className="w-full my-3" />
                      <div className="flex justify-between items-center">
                        {(attributes && attributes.price && (
                          <p className="text-base font-normal leading-7">
                            Starts from
                            <span className="font-bold leading-7 ml-2">
                              {(attributes && attributes.price) || ""}
                            </span>
                          </p>
                        )) || (
                          <span className="text-base font-semibold leading-7">
                            Enquire for price
                          </span>
                        )}

                        <button onClick={calendarModal.onOpen}>
                          <span className="text-primary-600 text-sm font-semibold cursor-pointer">
                            Check Availability
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="border rounded-xl p-3 shadow-sm">
                      <EnquiryChatForm
                        capacityErr={capacityErr}
                        contactEmail={contactEmail}
                        contactName={contactName}
                        contactPhone={contactPhone}
                        contactPhoneCountryCode={contactPhoneCountryCode}
                        cookies={cookies}
                        venueName={
                          (venue_room &&
                            venue_room.attributes &&
                            venue_room.attributes.name) ||
                          ""
                        }
                        // form fields
                        country={country}
                        currentUser={current_user}
                        customerGetInTouch={customerGetInTouch}
                        dateTimeFlexible={dateTimeFlexible}
                        durationErr={durationErr}
                        emailErr={emailErr}
                        enquiryDuration={enquiryDuration}
                        enquiryFormType={enquiryFormType}
                        eventAttendance={eventAttendance}
                        eventName={eventName}
                        eventNameErr={eventNameErr}
                        eventType={eventType}
                        eventTypeErr={eventTypeErr}
                        handleChangeGuest={handleChangeGuest}
                        handleChangePromoInput={handleChangePromoInput}
                        handleClickApplyPromo={handleClickApplyPromo}
                        handleClickCall={() => {
                          setIsCall(true);
                          whatsAppModal.onOpen();
                        }}
                        handleClickWhatsApp={handleClickWhatsApp}
                        handleContactEmailChange={handleContactEmailChange}
                        handleContactNameChange={handleContactNameChange}
                        handleDurationChange={handleDurationChange}
                        handleEventNameChange={handleEventNameChange}
                        handleEventTypeChange={handleEventTypeChange}
                        handlePackageChange={handlePackageChange}
                        handlePhoneInputChange={handlePhoneInputChange}
                        handleStartDateChange={handleStartDateChange}
                        handleStartTimeChange={handleStartTimeChange}
                        handleSubmitEnquiry={handleSubmitEnquiry}
                        isAvailable={isAvailable}
                        isLoading={isLoading}
                        isPromoApplied={isPromoApplied}
                        isPromoCodeValid={isPromoCodeValid}
                        isStep1Valid={isStep1Valid}
                        isStep2Valid={isStep2Valid}
                        isStep3Valid={isStep3Valid}
                        maxCapacity={maxCapacity}
                        maxDuration={maxDuration}
                        minCapacity={minCapacity}
                        minDuration={minDuration}
                        nameErr={nameErr}
                        packageId={packageId}
                        packages={packages}
                        phoneErr={phoneErr}
                        promo={promo}
                        promoCode={promoCode}
                        redirectUrl={redirectUrl}
                        roomId={roomId}
                        selected={selected}
                        setContactEmail={setContactEmail}
                        setContactName={setContactName}
                        setEventName={setEventName}
                        setIsAvailable={setIsAvailable}
                        setIsPromoApplied={setIsPromoApplied}
                        setPromo={setPromo}
                        setVenueMessage={setVenueMessage}
                        showRoomSelect={false}
                        sideBarRef={sideBarRef}
                        startDate={startDate}
                        startDateErr={startDateErr}
                        startTime={startTime}
                        startTimeErr={startTimeErr}
                        step={step}
                        validateStep1={validateStep1}
                        enquiryErr={enquiryErr}
                        // setters
                        setDateTimeFlexible={setDateTimeFlexible}
                        handleChangeStep={handleChangeStep}
                        // resetters
                        resetFields={resetFields}
                        setSelected={setSelected}
                        // handlers
                        handleRoomChange={() => {}}
                        validateStep2={validateStep2}
                        // validators
                        venueMessage={venueMessage}
                        validateStep3={validateStep3}
                        // backend props
                        enquiry_options={enquiry_options}
                      />
                    </div>
                  </div>
                </div>

                <Divider className="my-6" />
                {/* Country's Venues You May Like */}
                <div>
                  <h2 className="text-xl font-semibold leading-8">
                    {country_long} Rooms You May Like
                  </h2>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {other_rooms &&
                      other_rooms.length > 0 &&
                      other_rooms
                        .slice(0, 4)
                        .map((venue, index) => (
                          <VenueCard key={index} {...venue} />
                        ))}
                  </div>
                </div>

                {/* Enquiry Form Modal */}
                <div className="flex justify-between items-center w-full lg:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl border p-4">
                  {(attributes && attributes.price && (
                    <p className="text-lg font-normal leading-7">
                      Starts from
                      <span className="text-lg font-bold leading-7 ml-2">
                        {(attributes && attributes.price) || ""}
                      </span>
                    </p>
                  )) || (
                    <span className="text-base font-semibold leading-7">
                      Enquire for price
                    </span>
                  )}

                  <Button
                    className="rounded-lg w-fit bg-primary-600 min-w-10 py-3 px-4"
                    color="primary"
                    variant="solid"
                    onClick={onOpen}
                  >
                    Enquire Now
                  </Button>

                  <VenueEnquiryFormModal
                    calendarModal={calendarModal}
                    capacityErr={capacityErr}
                    contactEmail={contactEmail}
                    contactName={contactName}
                    contactPhone={contactPhone}
                    contactPhoneCountryCode={contactPhoneCountryCode}
                    cookies={cookies}
                    venueName={
                      (venue_room &&
                        venue_room.attributes &&
                        venue_room.attributes.name) ||
                      ""
                    }
                    // form fields
                    country={country}
                    currentUser={current_user}
                    customerGetInTouch={customerGetInTouch}
                    dateTimeFlexible={dateTimeFlexible}
                    durationErr={durationErr}
                    emailErr={emailErr}
                    enquiryDuration={enquiryDuration}
                    enquiryFormType={enquiryFormType}
                    eventAttendance={eventAttendance}
                    eventName={eventName}
                    eventNameErr={eventNameErr}
                    eventType={eventType}
                    eventTypeErr={eventTypeErr}
                    handleChangeGuest={handleChangeGuest}
                    handleChangePromoInput={handleChangePromoInput}
                    handleChangeStep={handleChangeStep}
                    handleClickApplyPromo={handleClickApplyPromo}
                    handleClickCall={() => {
                      setIsCall(true);
                      whatsAppModal.onOpen();
                    }}
                    handleClickWhatsApp={handleClickWhatsApp}
                    handleContactEmailChange={handleContactEmailChange}
                    handleContactNameChange={handleContactNameChange}
                    handleDurationChange={handleDurationChange}
                    handleEventNameChange={handleEventNameChange}
                    handleEventTypeChange={handleEventTypeChange}
                    handlePackageChange={handlePackageChange}
                    handlePhoneInputChange={handlePhoneInputChange}
                    handleStartDateChange={handleStartDateChange}
                    handleStartTimeChange={handleStartTimeChange}
                    handleSubmitEnquiry={handleSubmitEnquiry}
                    isAvailable={isAvailable}
                    isLoading={isLoading}
                    isOpen={isOpen}
                    isPromoApplied={isPromoApplied}
                    isPromoCodeValid={isPromoCodeValid}
                    isStep1Valid={isStep1Valid}
                    isStep2Valid={isStep2Valid}
                    isStep3Valid={isStep3Valid}
                    maxCapacity={maxCapacity}
                    maxDuration={maxDuration}
                    minCapacity={minCapacity}
                    minDuration={minDuration}
                    nameErr={nameErr}
                    packageId={packageId}
                    packages={packages}
                    phoneErr={phoneErr}
                    placement={"bottom-center"}
                    promo={promo}
                    promoCode={promoCode}
                    roomId={roomId}
                    selected={selected}
                    setContactEmail={setContactEmail}
                    setContactName={setContactName}
                    setEventName={setEventName}
                    setIsAvailable={setIsAvailable}
                    setIsPromoApplied={setIsPromoApplied}
                    setPromo={setPromo}
                    setVenueMessage={setVenueMessage}
                    startDate={startDate}
                    startDateErr={startDateErr}
                    startTime={startTime}
                    startTimeErr={startTimeErr}
                    step={step}
                    validateStep2={validateStep2}
                    venueMessage={venueMessage}
                    onOpenChange={onOpenChange}
                    enquiryErr={enquiryErr}
                    // setters
                    setDateTimeFlexible={setDateTimeFlexible}
                    resetFields={resetFields}
                    // validators
                    validateStep1={validateStep1}
                    setSelected={setSelected}
                    // handlers
                    handleRoomChange={() => {}}
                    validateStep3={validateStep3}
                    // backend props
                    enquiry_options={enquiry_options}
                  />
                </div>

                {/* Whatsapp Enquiry Modal */}
                <VenueWhatsAppStepperModal
                  capacityErr={capacityErr}
                  contactEmail={contactEmail}
                  contactName={contactName}
                  contactPhone={contactPhone}
                  contactPhoneCountryCode={contactPhoneCountryCode}
                  country={country}
                  currentUser={current_user}
                  venueName={
                    (venue_room &&
                      venue_room.attributes &&
                      venue_room.attributes.name) ||
                    ""
                  }
                  // form fields
                  customerGetInTouch={customerGetInTouch}
                  dateTimeFlexible={dateTimeFlexible}
                  durationErr={durationErr}
                  emailErr={emailErr}
                  enquiryDuration={enquiryDuration}
                  enquiryFormType={enquiryFormType}
                  eventAttendance={eventAttendance}
                  eventName={eventName}
                  eventNameErr={eventNameErr}
                  eventType={eventType}
                  eventTypeErr={eventTypeErr}
                  handleChangeGuest={handleChangeGuest}
                  handleChangePromoInput={handleChangePromoInput}
                  handleChangeStep={handleChangeStep}
                  handleClickApplyPromo={handleClickApplyPromo}
                  handleContactEmailChange={handleContactEmailChange}
                  handleContactNameChange={handleContactNameChange}
                  handleDurationChange={handleDurationChange}
                  handleEventNameChange={handleEventNameChange}
                  handleEventTypeChange={handleEventTypeChange}
                  handlePackageChange={handlePackageChange}
                  handlePhoneInputChange={handlePhoneInputChange}
                  handleStartDateChange={handleStartDateChange}
                  handleStartTimeChange={handleStartTimeChange}
                  handleSubmitEnquiry={handleSubmitEnquiry}
                  isAvailable={isAvailable}
                  isLoading={isLoading}
                  isOpen={whatsAppModal.isOpen}
                  isPromoApplied={isPromoApplied}
                  isPromoCodeValid={isPromoCodeValid}
                  isStep1Valid={isStep1Valid}
                  isStep2Valid={isStep2Valid}
                  isStep3Valid={isStep3Valid}
                  maxCapacity={maxCapacity}
                  maxDuration={maxDuration}
                  minCapacity={minCapacity}
                  minDuration={minDuration}
                  nameErr={nameErr}
                  packageId={packageId}
                  packages={packages}
                  phoneErr={phoneErr}
                  placement={"bottom-center"}
                  promo={promo}
                  promoCode={promoCode}
                  redirectUrl={redirectUrl}
                  roomId={roomId}
                  selected={selected}
                  setContactEmail={setContactEmail}
                  setContactName={setContactName}
                  setEventName={setEventName}
                  setIsAvailable={setIsAvailable}
                  setIsPromoApplied={setIsPromoApplied}
                  setPromo={setPromo}
                  setVenueMessage={setVenueMessage}
                  startDate={startDate}
                  startDateErr={startDateErr}
                  startTime={startTime}
                  startTimeErr={startTimeErr}
                  step={whatsAppStep}
                  venueMessage={venueMessage}
                  onOpenChange={whatsAppModal.onOpenChange}
                  enquiryErr={enquiryErr}
                  // setters
                  setDateTimeFlexible={setDateTimeFlexible}
                  resetFields={resetFields}
                  // validators
                  validateStep2={validateStep2}
                  setSelected={setSelected}
                  // handlers
                  handleRoomChange={() => {}}
                  validateStep3={validateStep3}
                  // backend props
                  enquiry_options={enquiry_options}
                />

                {/* venue social share modal */}
                <VenueSocialShareModal
                  isOpen={socialModal.isOpen}
                  link={currentUrl}
                  name={(attributes && attributes.name) || ""}
                  photo={
                    (attributes &&
                      attributes.photos &&
                      attributes.photos.length > 0 &&
                      attributes.photos[0].photo) ||
                    ""
                  }
                  placement={"bottom-center"}
                  social_share={
                    (social_share && social_share.length > 0 && social_share) ||
                    []
                  }
                  onOpenChange={socialModal.onOpenChange}
                />

                {/* availability calendar modal */}
                <CalendarModal
                  data={venueCalendarStore.data}
                  err={venueCalendarStore.err}
                  handleCalendar={handleCalendar}
                  isOpen={calendarModal.isOpen}
                  legend={venueCalendarStore.legend}
                  loading={venueCalendarStore.loading}
                  placement={"bottom-center"}
                  onOpenChange={calendarModal.onOpenChange}
                />
              </div>
            </div>
          </div>

          {/* Footer  */}
          <div className="w-full mt-10 mx-auto px-5 md:px-5 lg:px-12 xl:px-20 block md:flex items-center justify-between w-full">
            <Footer headerFooterRes={headerFooterRes} />
          </div>
        </>
      )}
    </section>
  );
};
