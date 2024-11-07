import { Button } from "@nextui-org/button";
import Image from "next/image";
// import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";
import { Select, SelectItem } from "@nextui-org/select";
import { CaretDown } from "@phosphor-icons/react";
import { DatePicker } from "@nextui-org/date-picker";
import { getLocalTimeZone, today } from "@internationalized/date";
import PhoneInput from "react-phone-input-2";
import { useParams } from "next/navigation";

import { MuiSelect } from "../molecules/MuiSelect";
import { VNFTypo } from "../VNFTypography/Typo";

import InputGroup from "./InputGroup";

import { checkAvailability } from "@/utils/venueApiFunctions";
import {
  getDateFromDateValue,
  getHrMinFromTimeValue,
} from "@/config/helperFunctions";
import { fontVnf } from "@/config/fonts";
import { useVenueChatBotStore } from "@/store/venue-chat-bot-store";

interface VenueBotChatFormProps {
  cookies?: any;
  country?: string;
  showRoomSelect: boolean;

  // form fields
  packageId: any;
  promo: any;
  roomId: any;
  startDate: any;
  startTime: any;
  enquiryDuration: any;
  eventAttendance: any;
  dateTimeFlexible: any;
  eventType: any;
  venueMessage: any;
  contactName: any;
  contactEmail: any;
  contactPhoneCountryCode: any;
  contactPhone: any;
  enquiryFormType: any;
  eventName: any;
  packages: any;
  minCapacity: any;
  maxCapacity: any;
  minDuration: any;
  maxDuration: any;
  durationErr: any;
  capacityErr: any;
  startDateErr: any;
  startTimeErr: any;
  promoCode: string;
  isPromoCodeValid: boolean;
  isPromoApplied: boolean;
  isStep1Valid: boolean;
  isStep2Valid: boolean;
  isStep3Valid: boolean;
  isLoading: boolean;
  isAvailable: boolean;
  customerGetInTouch: string;
  currentUser?: any;
  enquiryErr?: any;

  // setters
  setDateTimeFlexible: any;
  setEventName: any;
  setVenueMessage: any;
  setContactName: any;
  setContactEmail: any;
  setIsAvailable: any;
  setPromo: any;
  setIsPromoApplied: any;

  // handlers
  handleRoomChange: any;
  handlePackageChange: any;
  handleDurationChange: any;
  handleChangeGuest: any;
  handleStartDateChange: any;
  handleStartTimeChange: any;
  handleClickApplyPromo: any;
  handleChangePromoInput: any;
  handleEventTypeChange: any;
  handlePhoneInputChange: any;
  handleSubmitEnquiry: any;
  handleChangeStep: any;
  enquiry_options?: any;
}
interface ChatBotInputProps {
  cookies?: any;
  country?: string;
  showRoomSelect: boolean;
  // form fields
  packageId: any;
  promo: any;
  roomId: any;
  startDate: any;
  startTime: any;
  enquiryDuration: any;
  eventAttendance: any;
  dateTimeFlexible: any;
  eventType: any;
  venueMessage: any;
  contactName: any;
  contactEmail: any;
  contactPhoneCountryCode: any;
  contactPhone: any;
  enquiryFormType: any;
  eventName: any;
  packages: any;
  minCapacity: any;
  maxCapacity: any;
  minDuration: any;
  maxDuration: any;
  durationErr: any;
  capacityErr: any;
  startDateErr: any;
  startTimeErr: any;
  promoCode: string;
  isPromoCodeValid: boolean;
  isPromoApplied: boolean;
  isStep1Valid: boolean;
  isStep2Valid: boolean;
  isStep3Valid: boolean;
  isLoading: boolean;
  isAvailable: boolean;
  customerGetInTouch: string;
  currentUser?: any;
  // setters
  setDateTimeFlexible: any;
  setEventName: any;
  setVenueMessage: any;
  setContactName: any;
  setContactEmail: any;
  setIsAvailable: any;
  setPromo: any;
  setIsPromoApplied: any;

  // handlers
  handleRoomChange: any;
  handlePackageChange: any;
  handleDurationChange: any;
  handleChangeGuest: any;
  handleStartDateChange: any;
  handleStartTimeChange: any;
  handleClickApplyPromo: any;
  handleChangePromoInput: any;
  handleEventTypeChange: any;
  handlePhoneInputChange: any;
  handleSubmitEnquiry: any;
  handleChangeStep: any;
  scrollToBottom: any;
  enquiry_options?: any;
}

export const ChatBotInput = ({
  cookies,
  country,
  showRoomSelect,

  packageId,
  promo,
  roomId,
  startDate,
  startTime,
  enquiryDuration,
  eventAttendance,
  dateTimeFlexible,
  eventType,
  venueMessage,
  contactName,
  contactEmail,
  contactPhoneCountryCode,
  contactPhone,
  enquiryFormType,
  eventName,
  packages,
  minCapacity,
  maxCapacity,
  minDuration,
  maxDuration,
  durationErr,
  capacityErr,
  startDateErr,
  startTimeErr,
  promoCode,
  isPromoCodeValid,
  isPromoApplied,
  isStep1Valid,
  isStep2Valid,
  isStep3Valid,
  isLoading,
  isAvailable,
  customerGetInTouch,
  currentUser,

  // setters
  setDateTimeFlexible,
  setEventName,
  setVenueMessage,
  setContactName,
  setContactEmail,
  setIsAvailable,
  setPromo,
  setIsPromoApplied,

  // handlers
  handleRoomChange,
  handlePackageChange,
  handleDurationChange,
  handleChangeGuest,
  handleStartDateChange,
  handleStartTimeChange,
  handleClickApplyPromo,
  handleChangePromoInput,
  handleEventTypeChange,
  handlePhoneInputChange,
  handleSubmitEnquiry,
  handleChangeStep,
  scrollToBottom,
  enquiry_options,
}: ChatBotInputProps) => {
  // client side cookie parse (CANNOT PARSE HTTPONLY COOKIES)
  // const cookieStore = parseCookies();
  // const cookies = Object.entries(cookieStore).map(([key, value]) => ({
  //   name: key,
  //   value,
  // }));
  const params = useParams();
  const { step, changeStep, addMessage, setReplyLoading, resetMessages } =
    useVenueChatBotStore();

  const messageFunc = useCallback((message: any, callbackFun: any) => {
    setReplyLoading(true);
    addMessage(message);
    setTimeout(() => {
      scrollToBottom();
    }, 50);
    setTimeout(() => {
      setReplyLoading(false);
      callbackFun();
      setTimeout(() => {
        scrollToBottom();
      }, 50);
    }, 1000);
  }, []);

  const {
    preview,
    event_attendance_min_capacity,
    event_attendance_max_capacity,
    show_date_time_flexible,
    date_time_flexible_info,
    show_via_whatsapp,
    room_package,
    // package, cuz its a reserved keyword, try to get with enquiry_options.package
    time,
    duration,
    event_types_supported,
    contact,
    phone_country_code,
    promotion,
    chatbot_login_link,
    chatbot_apple_login_link,
    chatbot_google_login_link,
    chatbot_linkedin_login_link,
  } = enquiry_options || {};

  // check availability
  const handleCheckAvailability = async () => {
    setReplyLoading(true);
    const { status } = await checkAvailability({
      id: params.venue_slug as string,
      country: (params.country || "sg") as string,
      cookies,
      package_id: packageId || "",
      room_id: roomId || "",
      date: getDateFromDateValue({
        dateValue: startDate,
      }),
      time: getHrMinFromTimeValue({
        timeValue: startTime,
      }),
      duration: enquiryDuration,
    });

    setReplyLoading(false);
    if (status && status === 200) {
      setIsAvailable(true);
      setTimeout(() => {
        addMessage({
          sender: "bot",
          text: "Available for your selected date & time!",
        });
        setTimeout(() => {
          scrollToBottom();
          changeStep(5);
        }, 60);
      }, 1000);

      return;
    } else {
      setIsAvailable(false);
      setTimeout(() => {
        addMessage({
          sender: "bot",
          text: "Not available on this date & time! Please choose date & time again.",
          isError: true,
        });

        setTimeout(() => {
          scrollToBottom();
          changeStep(5);
        }, 50);
      }, 1000);
    }
  };

  // validate promo
  const validatePromo = () => {
    if (!promoCode) {
      messageFunc(
        {
          sender: "user",
          text: "I don't want to add promo code for now.",
        },
        () => {
          if (show_date_time_flexible) {
            changeStep(7);
            addMessage({
              sender: "bot",
              text: "Are you flexible on dates and times?",
            });
          } else {
            changeStep(8);
            addMessage({
              sender: "bot",
              text: "We need your event information. Please enter your event name.",
            });
          }
        },
      );

      return;
    }
    const promo =
      (promotion && promotion.find((promo: any) => promo.code === promoCode)) ||
      null;

    if (promo) {
      setPromo(promo);
      setIsPromoApplied(true);
      setTimeout(() => {
        addMessage({
          sender: "bot",
          text: "Promo code is applied.",
        });
        if (show_date_time_flexible) {
          addMessage({
            sender: "bot",
            text: "Are you flexible on dates and times?",
          });

          setTimeout(() => {
            scrollToBottom();
            changeStep(7);
          }, 50);
        } else {
          addMessage({
            sender: "bot",
            text: "We need your event information. Please enter your event name.",
          });
          setTimeout(() => {
            scrollToBottom();
            changeStep(8);
          }, 50);
        }
      }, 1000);

      return;
    } else {
      setTimeout(() => {
        addMessage({
          sender: "bot",
          text: "Promo code is invalid.",
          isError: true,
        });

        setTimeout(() => {
          scrollToBottom();
        }, 50);
      }, 1000);
    }
  };

  // validation duration
  useEffect(() => {
    if (durationErr) {
      setReplyLoading(true);
      scrollToBottom();
      setTimeout(() => {
        addMessage({
          sender: "bot",
          text: durationErr,
          isError: true,
        });
        setReplyLoading(false);
        setTimeout(() => {
          scrollToBottom();
        }, 50);
      }, 1000);
    }
  }, [durationErr]);

  // validation capacity
  useEffect(() => {
    if (capacityErr) {
      setReplyLoading(true);
      scrollToBottom();
      setTimeout(() => {
        addMessage({
          sender: "bot",
          text: capacityErr,
          isError: true,
        });
        setReplyLoading(false);
        setTimeout(() => {
          scrollToBottom();
        }, 50);
      }, 1000);
    }
  }, [capacityErr]);

  switch (step) {
    case 0:
      {
        // start?
        return (
          <div className="mt-4 flex items-center space-x-2">
            <Button
              className="bg-primary-600 rounded-lg w-full"
              color="primary"
              variant="solid"
              onClick={(e) => {
                e.preventDefault();
                messageFunc(
                  {
                    sender: "user",
                    text: "Hello, I'm interested in booking this venue, what's my next step?",
                  },
                  () => {
                    if (showRoomSelect) {
                      changeStep(1);
                      addMessage({
                        sender: "bot",
                        text: "Please select the room for your event.",
                      });
                    } else {
                      changeStep(2);
                      addMessage({
                        sender: "bot",
                        text: "Please select the package for your event.",
                      });
                    }
                  },
                );
              }}
            >
              <VNFTypo
                className="text-white"
                text="Start the chat enquire"
                variant="textMdRegular"
              />
            </Button>
          </div>
        );
      }
      break;
    case 1:
      {
        // Please select rooom
        return (
          <div className="mt-4 flex items-center space-x-2">
            <div className="flex-1 max-w-[87%]">
              <Select
                aria-label="Select a room"
                classNames={{
                  base: "w-full",
                  trigger:
                    "h-[42px] min-h-10 rounded-lg border-1 max-w-inherit",
                }}
                placeholder="Select A Room"
                popoverProps={{
                  offset: 0,
                  classNames: {
                    base: "before:bg-default-200",
                    content:
                      "p-0 border-small border-divider bg-background max-h-[180px] z-50",
                  },
                }}
                selectorIcon={
                  <CaretDown
                    size={18}
                    style={{
                      minWidth: "15px",
                    }}
                  />
                }
                size="sm"
                startContent={
                  <Image
                    alt="icon"
                    className="w-[20px] h-[20px] object-contain mr-1"
                    height={20}
                    loading="lazy"
                    src="/images/icons/room.png"
                    width={20}
                  />
                }
                variant="bordered"
                onBlur={(e) => e.stopPropagation()}
                onChange={handleRoomChange}
              >
                {(room_package &&
                  room_package.length > 0 &&
                  room_package.map(
                    (
                      {
                        name,
                        value,
                        min_capacity,
                        max_capacity,
                      }: {
                        name: string;
                        value: string;
                        min_capacity: any;
                        max_capacity: any;
                      },
                      index: number,
                    ) => (
                      <SelectItem key={`${value ? value : "0"}`} value={value}>
                        {name}
                      </SelectItem>
                    ),
                  )) || (
                  <SelectItem key="readonly" isReadOnly>
                    No Options
                  </SelectItem>
                )}
              </Select>
            </div>

            <Button
              isIconOnly
              className="w-[10%]"
              variant="light"
              onClick={() => {
                messageFunc(
                  {
                    sender: "user",
                    text:
                      (roomId &&
                        room_package.find((pkg: any) => pkg.value === roomId)
                          .name) ||
                      "I don't want to select room for now.",
                  },
                  () => {
                    changeStep(2);
                    addMessage({
                      sender: "bot",
                      text: "Please select the package for your event.",
                    });
                  },
                );
              }}
            >
              <Image
                alt="icon"
                className="h-5 w-5 object-contain"
                height={32}
                loading="lazy"
                src={`/images/icons/send.png`}
                width={32}
              />
            </Button>
          </div>
        );
      }
      break;
    case 2:
      {
        // Please select package
        return (
          <div className="mt-4 flex items-center space-x-2">
            <div className="flex-1 max-w-[87%]">
              <Select
                disableAnimation
                aria-label="Select a package"
                classNames={{
                  trigger: "h-[42px] min-h-10 rounded-lg border-1",
                }}
                placeholder="Select A Package"
                popoverProps={{
                  offset: 0,
                  classNames: {
                    base: "before:bg-default-200",
                    content:
                      "p-0 border-small border-divider bg-background max-h-[180px]",
                  },
                }}
                selectorIcon={
                  <CaretDown
                    size={18}
                    style={{
                      minWidth: "15px",
                    }}
                  />
                }
                size="sm"
                startContent={
                  <Image
                    alt="icon"
                    className="w-[20px] h-[20px] object-contain mr-1"
                    height={20}
                    loading="lazy"
                    src="/images/icons/bookmark-add.svg"
                    width={20}
                  />
                }
                variant="bordered"
                onChange={handlePackageChange}
              >
                {(packages &&
                  packages.length > 0 &&
                  packages.map(
                    (
                      {
                        name,
                        value,
                        min_capacity,
                        max_capacity,
                        min_duration,
                        max_duration,
                      }: any,
                      index: number,
                    ) => <SelectItem key={value}>{name}</SelectItem>,
                  )) || (
                  <SelectItem key="readonly" isReadOnly>
                    No Options
                  </SelectItem>
                )}
              </Select>
            </div>

            <Button
              isIconOnly
              className="w-[10%]"
              variant="light"
              onClick={() => {
                messageFunc(
                  {
                    sender: "user",
                    text:
                      (packageId &&
                        packages.find((pkg: any) => pkg.value === packageId)
                          .name) ||
                      "I don't want to select package for now.",
                  },
                  () => {
                    changeStep(3);
                    addMessage({
                      sender: "bot",
                      text: "Ok, when event will be held? We need date.",
                    });
                  },
                );
              }}
            >
              <Image
                alt="icon"
                className="h-5 w-5 object-contain"
                height={32}
                loading="lazy"
                src={`/images/icons/send.png`}
                width={32}
              />
            </Button>
          </div>
        );
      }
      break;
    case 3:
      {
        // Please select date
        return (
          <div className="mt-4 flex items-center space-x-2">
            <DatePicker
              dateInputClassNames={{
                inputWrapper:
                  "bg-white focus-within:hover:bg-white hover:bg-white group-data-[invalid=true]:bg-white group-data-[invalid=true]:hover:bg-white group-data-[invalid=true]:focus-within:hover:bg-white shadow-none border hover:border-secondary-400",
                errorMessage: "text-sm font-normal leading-5",
              }}
              minValue={today(getLocalTimeZone())}
              radius="sm"
              selectorIcon={
                <CaretDown
                  size={18}
                  style={{
                    minWidth: "15px",
                  }}
                />
              }
              startContent={
                <Image
                  alt="icon"
                  className="w-[20px] h-[20px] object-contain mr-1"
                  height={20}
                  loading="lazy"
                  src="/images/icons/calendar.png"
                  width={20}
                />
              }
              value={startDate}
              variant="flat"
              onChange={handleStartDateChange}
            />
            <Button
              isIconOnly
              className={`${startDate ? "cursor-pointer" : "cursor-not-allowed"}`}
              disabled={!startDate}
              variant="light"
              onClick={() => {
                messageFunc(
                  {
                    sender: "user",
                    text:
                      getDateFromDateValue({
                        dateValue: startDate,
                      }) || "I'll choose date later.",
                  },
                  () => {
                    changeStep(4);
                    addMessage({
                      sender: "bot",
                      text: "Ok, We need time & duration.",
                    });
                  },
                );
              }}
            >
              <Image
                alt="icon"
                className="h-5 w-5 object-contain"
                height={32}
                loading="lazy"
                src={`/images/icons/send.png`}
                width={32}
              />
            </Button>
          </div>
        );
      }
      break;
    case 4:
      {
        // Please select time & duration
        return (
          <div className="mt-4 flex items-center space-x-2">
            <div className="flex flex-1 gap-x-3">
              {/* <TimeInput
                className="flex-1"
                hideTimeZone
                classNames={{
                  inputWrapper:
                    "bg-white focus-within:hover:bg-white hover:bg-white shadow-none border hover:border-secondary-400",
                }}
                radius="sm"
                startContent={
                  <Image
                    alt="icon"
                    className="w-[20px] h-[20px] object-contain mr-1"
                    height={20}
                    loading="lazy"
                    src="/images/icons/clock.png"
                    width={20}
                  />
                }
                variant="bordered"
                value={startTime}
                onChange={handleStartTimeChange}
              /> */}

              <div className="flex-1 flex flex-col">
                <MuiSelect
                  handleChange={handleStartTimeChange}
                  items={time}
                  label="Event Time"
                  value={startTime}
                />
              </div>

              <div className="flex-1 flex flex-col">
                <MuiSelect
                  handleChange={handleDurationChange}
                  items={duration}
                  label="Duration"
                  value={enquiryDuration}
                />
              </div>
            </div>
            <Button
              isIconOnly
              className={`${!startTime || !enquiryDuration || durationErr ? "cursor-not-allowed" : "cursor-pointer"}`}
              disabled={!startTime || !enquiryDuration || durationErr}
              variant="light"
              onClick={handleCheckAvailability}
            >
              <Image
                alt="icon"
                className="h-5 w-5 object-contain"
                height={32}
                loading="lazy"
                src={`/images/icons/send.png`}
                width={32}
              />
            </Button>
          </div>
        );
      }
      break;
    case 5:
      {
        if (isAvailable) {
          return (
            <div className="mt-4 flex items-center space-x-2">
              <InputGroup
                customClasses="w-full"
                handleChange={handleChangeGuest}
                inputType="number"
                inputValue={eventAttendance}
                max={maxCapacity}
                min={minCapacity}
                placeholder="Enter estimated no of guests"
                startContent={
                  <Image
                    alt="icon"
                    className="w-[20px] h-[20px] object-cover mr-1"
                    height={20}
                    loading="lazy"
                    src="/images/icons/guests.svg"
                    style={{
                      width: "auto",
                      height: "auto",
                    }}
                    width={20}
                  />
                }
              />
              <Button
                isIconOnly
                className={`${!eventAttendance || capacityErr ? "cursor-not-allowed" : "cursor-pointer"}`}
                disabled={!eventAttendance || capacityErr}
                variant="light"
                onClick={() => {
                  messageFunc(
                    {
                      sender: "user",
                      text: eventAttendance,
                    },
                    () => {
                      changeStep(6);
                      addMessage({
                        sender: "bot",
                        text: `These promo codes are available. ${promotion.map((promo: any) => promo.code).join(", ")}`,
                      });
                    },
                  );
                }}
              >
                <Image
                  alt="icon"
                  className="h-5 w-5 object-contain"
                  height={32}
                  loading="lazy"
                  src={`/images/icons/send.png`}
                  width={32}
                />
              </Button>
            </div>
          );
        } else {
          return (
            <div className="mt-4 flex items-center space-x-2">
              <Button
                className="bg-primary-600 rounded-lg w-full"
                color="primary"
                variant="solid"
                onClick={() => changeStep(3)}
              >
                <VNFTypo
                  className="text-white"
                  text="Select date & time again"
                  variant="textMdRegular"
                />
              </Button>
            </div>
          );
        }
      }
      break;
    case 6:
      {
        // Enter promo code
        return (
          <div className="mt-4 flex items-center space-x-2">
            <InputGroup
              customClasses="flex-1"
              handleChange={handleChangePromoInput}
              inputType="text"
              placeholder="Enter code"
            />
            <Button isIconOnly variant="light" onClick={validatePromo}>
              <Image
                alt="icon"
                className="h-5 w-5 object-contain"
                height={32}
                loading="lazy"
                src={`/images/icons/send.png`}
                width={32}
              />
            </Button>
          </div>
        );
      }
      break;
    case 7:
      {
        // Are you flexible on dates and times?
        return (
          <div className="mt-4 flex items-center space-x-2">
            <Button
              className="rounded-lg w-full"
              color="default"
              variant="bordered"
              onClick={() => {
                setDateTimeFlexible(false);
                messageFunc(
                  {
                    sender: "user",
                    text: "Not flexible",
                  },
                  () => {
                    changeStep(8);
                    addMessage({
                      sender: "bot",
                      text: "We need your event information. Please enter your event name.",
                    });
                  },
                );
              }}
            >
              <VNFTypo text="No" variant="textMdRegular" />
            </Button>
            <Button
              className="bg-primary-600 rounded-lg w-full"
              color="primary"
              variant="solid"
              onClick={() => {
                setDateTimeFlexible(true);
                messageFunc(
                  {
                    sender: "user",
                    text: "Flexible",
                  },
                  () => {
                    changeStep(8);
                    addMessage({
                      sender: "bot",
                      text: "We need your event information. Please enter your event name.",
                    });
                  },
                );
              }}
            >
              <VNFTypo
                className="text-white"
                text="Yes"
                variant="textMdRegular"
              />
            </Button>
          </div>
        );
      }
      break;

    case 8:
      {
        // Enter event name
        return (
          <div className="mt-4 flex items-center space-x-2">
            <InputGroup
              customClasses="flex-1"
              handleChange={(e: any) => setEventName(e.target.value)}
              inputType="text"
              inputValue={eventName}
              placeholder="Enter Event Name"
            />
            <Button
              isIconOnly
              className={`${!eventName ? "cursor-not-allowed" : "cursor-pointer"}`}
              disabled={!eventName}
              variant="light"
              onClick={() => {
                messageFunc(
                  {
                    sender: "user",
                    text: eventName,
                  },
                  () => {
                    changeStep(9);
                    addMessage({
                      sender: "bot",
                      text: "OK! Please select your event type.",
                    });
                  },
                );
              }}
            >
              <Image
                alt="icon"
                className="h-5 w-5 object-contain"
                height={32}
                loading="lazy"
                src={`/images/icons/send.png`}
                width={32}
              />
            </Button>
          </div>
        );
      }
      break;
    case 9:
      {
        return (
          <div className="mt-4 flex items-center space-x-2">
            <Select
              disableAnimation
              aria-label="Select an item"
              classNames={{
                trigger: "h-[42px] min-h-10 rounded-lg border-1",
              }}
              placeholder="Select Event Type"
              popoverProps={{
                offset: 0,
                classNames: {
                  base: "before:bg-default-200",
                  content:
                    "p-0 border-small border-divider bg-background max-h-[180px]",
                },
              }}
              selectedKeys={[`${eventType}`]}
              selectorIcon={
                <CaretDown
                  size={18}
                  style={{
                    minWidth: "15px",
                  }}
                />
              }
              size="sm"
              variant="bordered"
              onChange={handleEventTypeChange}
            >
              {(event_types_supported &&
                event_types_supported.length > 0 &&
                event_types_supported.map(
                  (
                    {
                      label,
                      name,
                      value,
                    }: {
                      label: string;
                      name: string;
                      value: string;
                    },
                    index: number,
                  ) => (
                    <SelectItem key={value} value={value}>
                      {name}
                    </SelectItem>
                  ),
                )) || (
                <SelectItem key="readonly" isReadOnly>
                  No Options
                </SelectItem>
              )}
            </Select>
            <Button
              isIconOnly
              className={`${!eventType ? "cursor-not-allowed" : "cursor-pointer"}`}
              disabled={!eventType}
              variant="light"
              onClick={() => {
                messageFunc(
                  {
                    sender: "user",
                    text:
                      (eventType &&
                        event_types_supported.find(
                          (eType: any) => eType.value === eventType,
                        ).name) ||
                      "",
                  },
                  () => {
                    changeStep(10);
                    addMessage({
                      sender: "bot",
                      text: "OK! Please enter your venue message.",
                    });
                  },
                );
              }}
            >
              <Image
                alt="icon"
                className="h-5 w-5 object-contain"
                height={32}
                loading="lazy"
                src={`/images/icons/send.png`}
                width={32}
              />
            </Button>
          </div>
        );
      }
      break;
    case 10:
      {
        return (
          <div className="mt-4 flex items-center space-x-2">
            <InputGroup
              customClasses="flex-1"
              handleChange={(e: any) => setVenueMessage(e.target.value)}
              inputType="text"
              inputValue={venueMessage}
              placeholder="Enter Message"
            />
            <Button
              isIconOnly
              variant="light"
              onClick={() => {
                messageFunc(
                  {
                    sender: "user",
                    text:
                      venueMessage || "I don't want to add a message for now.",
                  },
                  () => {
                    changeStep(11);
                    addMessage({
                      sender: "bot",
                      text: "Thank you, so here are a summary of your enquiry, please double check it before I send it to venue owner",
                    });
                    addMessage({
                      sender: "bot",
                      renderedContent: (
                        <div className="bg-white text-secondary-900 text-base font-normal leading-6 rounded-xl rounded-tl-none p-2 inline-block border">
                          <p>
                            Room Package:
                            <span className="font-semibold">
                              {(roomId &&
                                room_package.find(
                                  (pkg: any) => pkg.value === roomId,
                                ).name) ||
                                "-"}
                            </span>
                          </p>
                          <p>
                            Package:
                            <span className="font-semibold">
                              {(packageId &&
                                packages.find(
                                  (pkg: any) => pkg.value === packageId,
                                ).name) ||
                                "-"}
                            </span>
                          </p>
                          <p>
                            {`Date & Time [duration]:`}
                            <span className="font-semibold">
                              {`${
                                getDateFromDateValue({
                                  dateValue: startDate,
                                }) || ""
                              } ${
                                getHrMinFromTimeValue({
                                  timeValue: startTime,
                                }) || ""
                              } [${enquiryDuration} hours]`}
                            </span>
                          </p>
                          <p>
                            Guest:
                            <span className="font-semibold">
                              {eventAttendance}
                            </span>
                          </p>
                          <p>
                            Promo code:
                            <span className="font-semibold">
                              {(promo && promo.code) || "-"}
                            </span>
                          </p>
                          <p>
                            Date & Time flexible:
                            <span className="font-semibold">
                              {(dateTimeFlexible && "Flexible") ||
                                "Not flexible"}
                            </span>
                          </p>
                          <p>
                            Event name:
                            <span className="font-semibold">
                              {eventName || "-"}
                            </span>
                          </p>
                          <p>
                            Event type:
                            <span className="font-semibold">
                              {eventType || "-"}
                            </span>
                          </p>
                          <p>
                            Message:
                            <span className="font-semibold">
                              {venueMessage || "-"}
                            </span>
                          </p>
                        </div>
                      ),
                    });
                    addMessage({
                      sender: "bot",
                      renderedContent: (
                        <div className="bg-white text-secondary-900 text-base font-normal leading-6 rounded-xl rounded-tl-none p-2 inline-block border">
                          <p>
                            Contact Name:
                            <span className="font-semibold">{contactName}</span>
                          </p>
                          <p>
                            Contact Email:
                            <span className="font-semibold">
                              {contactEmail}
                            </span>
                          </p>

                          <p>
                            Contact Phone:
                            <span className="font-semibold">
                              {`${contactPhoneCountryCode}${contactPhone}`}
                            </span>
                          </p>
                        </div>
                      ),
                    });
                  },
                );
              }}
            >
              <Image
                alt="icon"
                className="h-5 w-5 object-contain"
                height={32}
                loading="lazy"
                src={`/images/icons/send.png`}
                width={32}
              />
            </Button>
          </div>
        );
      }
      break;
    case 11:
      {
        // We have your info
        // Name
        // Email
        // Phone
        // Would you like to update?
        return (
          <div className="mt-4 flex items-center space-x-2">
            <Button
              className="rounded-lg w-full"
              color="default"
              variant="bordered"
              onClick={() => {
                messageFunc(
                  {
                    sender: "user",
                    text: "Update",
                  },
                  () => {
                    changeStep(12);
                    addMessage({
                      sender: "bot",
                      text: "Please enter contact name.",
                    });
                  },
                );
              }}
            >
              <VNFTypo text="Update Contact" variant="textMdRegular" />
            </Button>
            <Button
              className="bg-primary-600 rounded-lg w-full"
              color="primary"
              variant="solid"
              onClick={() => {
                messageFunc(
                  {
                    sender: "user",
                    text: "Don't update.",
                  },
                  () => {
                    changeStep(15);
                    addMessage({
                      sender: "bot",
                      text: "Thank you for your time! Are you ready to submit this enquiry?",
                    });
                  },
                );
              }}
            >
              <VNFTypo
                className="text-white"
                text="No"
                variant="textMdRegular"
              />
            </Button>
          </div>
        );
      }
      break;
    case 12:
      {
        return (
          <div className="mt-4 flex items-center space-x-2">
            <InputGroup
              customClasses="flex-1"
              handleChange={(e: any) => setContactName(e.target.value)}
              inputType="text"
              inputValue={contactName}
              placeholder="Enter Name"
            />
            <Button
              isIconOnly
              className={`${!contactName ? "cursor-not-allowed" : "cursor-pointer"}`}
              disabled={!contactName}
              variant="light"
              onClick={() => {
                messageFunc(
                  {
                    sender: "user",
                    text: contactName,
                  },
                  () => {
                    changeStep(13);
                    addMessage({
                      sender: "bot",
                      text: "Please enter your active email address.",
                    });
                  },
                );
              }}
            >
              <Image
                alt="icon"
                className="h-5 w-5 object-contain"
                height={32}
                loading="lazy"
                src={`/images/icons/send.png`}
                width={32}
              />
            </Button>
          </div>
        );
      }
      break;
    case 13:
      {
        return (
          <div className="mt-4 flex items-center space-x-2">
            <InputGroup
              customClasses="flex-1"
              handleChange={(e: any) => setContactEmail(e.target.value)}
              inputType="email"
              inputValue={contactEmail}
              placeholder="Enter Your Active Email"
            />
            <Button
              isIconOnly
              className={`${!contactEmail ? "cursor-not-allowed" : "cursor-pointer"}`}
              disabled={!contactEmail}
              variant="light"
              onClick={() => {
                messageFunc(
                  {
                    sender: "user",
                    text: contactEmail,
                  },
                  () => {
                    changeStep(14);
                    addMessage({
                      sender: "bot",
                      text: "Please enter contact phone number.",
                    });
                  },
                );
              }}
            >
              <Image
                alt="icon"
                className="h-5 w-5 object-contain"
                height={32}
                loading="lazy"
                src={`/images/icons/send.png`}
                width={32}
              />
            </Button>
          </div>
        );
      }
      break;
    case 14:
      {
        return (
          <div className="mt-4 flex items-center space-x-2">
            <PhoneInput
              disableSearchIcon // Disables search icon if needed
              buttonClass="rounded-r-none"
              buttonStyle={{
                border: "none",
                borderRadius: 8,
                borderRight: "none",
                paddingLeft: 5,
                paddingRight: 5,
                backgroundColor: "#FFFFFF",
              }}
              containerClass={`rounded-lg border border-secondary-300 focus:border-secondary-400 hover:border-secondary-400 shadow-sm h-10 ${fontVnf.variable}`}
              country={country} // Default country as US
              countryCodeEditable={false} // Prevents editing country code directly
              disableCountryCode={false}
              disableDropdown={false}
              dropdownClass="border-secondary-200 rounded-xl shadow-sm"
              inputClass={`h-full ${fontVnf.variable}`}
              inputStyle={{
                border: "none",
                height: "100%",
                width: "100%",
                borderRadius: 8,
                paddingLeft: 48,
              }}
              value={`${contactPhoneCountryCode}${contactPhone}`}
              onChange={handlePhoneInputChange}
            />
            <Button
              isIconOnly
              className={`${!contactPhone || !contactPhoneCountryCode ? "cursor-not-allowed" : "cursor-pointer"}`}
              disabled={!contactPhone || !contactPhoneCountryCode}
              variant="light"
              onClick={() => {
                messageFunc(
                  {
                    sender: "user",
                    text: `${contactPhoneCountryCode}${contactPhone}`,
                  },
                  () => {
                    changeStep(15);
                    addMessage({
                      sender: "bot",
                      text: "Thank you for your time! Are you ready to submit this enquiry?",
                    });
                  },
                );
              }}
            >
              <Image
                alt="icon"
                className="h-5 w-5 object-contain"
                height={32}
                loading="lazy"
                src={`/images/icons/send.png`}
                width={32}
              />
            </Button>
          </div>
        );
      }
      break;
    case 15:
      {
        // Thanks for time!
        // Are you ready to submit enquiry?
        return (
          <div className="mt-4 flex items-center space-x-2">
            <Button
              className="rounded-lg w-full"
              color="default"
              variant="bordered"
              onClick={() => changeStep(0)}
            >
              <VNFTypo text="No" variant="textMdRegular" />
            </Button>
            <Button
              className="bg-primary-600 rounded-lg w-full"
              color="primary"
              variant="solid"
              onClick={() => handleSubmitEnquiry("chatbot")} // call API
            >
              <VNFTypo
                className="text-white"
                text="Yes"
                variant="textMdRegular"
              />
            </Button>
          </div>
        );
      }
      break;
    case 16:
      {
        // Thanks for time!
        // Are you ready to submit enquiry?
        return (
          <div className="mt-4 flex items-center space-x-2">
            <Button
              className="bg-primary-600 rounded-lg w-full"
              color="primary"
              variant="solid"
              onClick={() => {
                resetMessages();
                handleChangeStep(0, "Venuerific");
              }}
            >
              <VNFTypo
                className="text-white"
                text="Try Again"
                variant="textMdRegular"
              />
            </Button>
          </div>
        );
      }
      break;
    default: {
      return <></>;
    }
  }
};

export const VenueBotChatForm = ({
  cookies,
  country,
  showRoomSelect,

  packageId,
  promo,
  roomId,
  startDate,
  startTime,
  enquiryDuration,
  eventAttendance,
  dateTimeFlexible,
  eventType,
  venueMessage,
  contactName,
  contactEmail,
  contactPhoneCountryCode,
  contactPhone,
  enquiryFormType,
  eventName,
  packages,
  minCapacity,
  maxCapacity,
  minDuration,
  maxDuration,
  durationErr,
  capacityErr,
  startDateErr,
  startTimeErr,
  promoCode,
  isPromoCodeValid,
  isPromoApplied,
  isStep1Valid,
  isStep2Valid,
  isStep3Valid,
  isLoading,
  isAvailable,
  customerGetInTouch,
  currentUser,
  enquiryErr,

  // setters
  setDateTimeFlexible,
  setEventName,
  setVenueMessage,
  setContactName,
  setContactEmail,
  setIsAvailable,
  setPromo,
  setIsPromoApplied,

  // handlers
  handleRoomChange,
  handlePackageChange,
  handleDurationChange,
  handleChangeGuest,
  handleStartDateChange,
  handleStartTimeChange,
  handleClickApplyPromo,
  handleChangePromoInput,
  handleEventTypeChange,
  handlePhoneInputChange,
  handleSubmitEnquiry,
  handleChangeStep,

  enquiry_options,
}: VenueBotChatFormProps) => {
  const { step, replyLoading, messages, changeStep } = useVenueChatBotStore();

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
    contact,
    phone_country_code,
    promotion,
    chatbot_login_link,
    chatbot_apple_login_link,
    chatbot_google_login_link,
    chatbot_linkedin_login_link,
  } = enquiry_options || {};

  const messagesParentRef = useRef<any>(null);

  const scrollToBottom = () => {
    const lastItem =
      messagesParentRef &&
      messagesParentRef.current &&
      messagesParentRef.current.lastElementChild;

    if (lastItem) {
      lastItem.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages.length]);

  return (
    <form className="flex flex-col">
      {(currentUser && Object.keys(currentUser).length > 0 && (
        <>
          {/* chat form */}
          <div
            ref={messagesParentRef}
            className="bg-gray-100 rounded-lg p-4 h-auto max-h-80 overflow-y-scroll hide-scrollbar"
          >
            {messages.map((msg, index) => (
              <div key={index} className="mb-4">
                {msg.sender === "bot" ? (
                  <div className="flex items-start space-x-2">
                    <Image
                      alt="icon"
                      className="h-10 w-10 object-contain bg-white rounded-full p-2"
                      height={24}
                      loading="lazy"
                      src={`/images/icons/bot.png`}
                      width={24}
                    />
                    <div className="flex flex-col gap-y-1">
                      <div className="flex items-center gap-x-2 justify-between">
                        <span className="text-sm text-gray-700 text-sm font-normal leading-5">
                          Vee
                        </span>
                        <span className="text-sm text-gray-400 text-xs font-normal leading-4">
                          {msg.time}
                        </span>
                      </div>
                      {msg.renderedContent || (
                        <p
                          className={`bg-white text-base font-normal leading-6 rounded-xl rounded-tl-none p-2 inline-block border ${msg.isError ? "text-red-500" : "text-secondary-900"}`}
                        >
                          {msg.text}
                        </p>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-end justify-end space-x-2 scroll-mt-24">
                    <div className="flex flex-col gap-y-1 items-end">
                      <div className="flex items-center gap-x-2 justify-between">
                        <span className="text-sm text-gray-700 text-sm font-normal leading-5">
                          You
                        </span>
                        <span className="text-sm text-gray-400 text-xs font-normal leading-4">
                          {msg.time}
                        </span>
                      </div>
                      <p className="bg-[#FBE8FF] text-secondary-900 text-base font-normal leading-6 rounded-xl rounded-tr-none p-2 inline-block border border-[#FAA7E0]">
                        {msg.text}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
            {replyLoading && (
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  alt="icon"
                  className="h-10 w-10 object-contain bg-white rounded-full p-2"
                  height={24}
                  loading="lazy"
                  src={`/images/icons/bot.png`}
                  width={24}
                />
                <div className="flex flex-col gap-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 text-sm font-normal leading-5">
                      Vee
                    </span>
                  </div>
                  <p className="bg-white text-secondary-900 text-base font-normal leading-6 rounded-xl rounded-tl-none py-2 inline-block border">
                    <Image
                      alt="icon"
                      className="h-7 w-24 object-cover -mt-3"
                      height={24}
                      loading="lazy"
                      src={`/images/animations/chatbot_typing.gif`}
                      width={24}
                    />
                  </p>
                </div>
              </div>
            )}
            {/* for scroll to bottom better design */}
            <span />
          </div>

          {/* Input Box */}
          <ChatBotInput
            capacityErr={capacityErr}
            contactEmail={contactEmail}
            contactName={contactName}
            contactPhone={contactPhone}
            contactPhoneCountryCode={contactPhoneCountryCode}
            cookies={cookies}
            country={country}
            customerGetInTouch={customerGetInTouch}
            dateTimeFlexible={dateTimeFlexible}
            durationErr={durationErr}
            enquiryDuration={enquiryDuration}
            enquiryFormType={enquiryFormType}
            eventAttendance={eventAttendance}
            eventName={eventName}
            eventType={eventType}
            handleChangeGuest={handleChangeGuest}
            handleChangePromoInput={handleChangePromoInput}
            handleChangeStep={handleChangeStep}
            handleClickApplyPromo={handleClickApplyPromo}
            handleDurationChange={handleDurationChange}
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
            packages={packages}
            promo={promo}
            promoCode={promoCode}
            roomId={roomId}
            setContactEmail={setContactEmail}
            setContactName={setContactName}
            setEventName={setEventName}
            setIsAvailable={setIsAvailable}
            setPromo={setPromo}
            setVenueMessage={setVenueMessage}
            startDate={startDate}
            startDateErr={startDateErr}
            startTime={startTime}
            startTimeErr={startTimeErr}
            venueMessage={venueMessage}
            currentUser={currentUser}
            // setters
            setDateTimeFlexible={setDateTimeFlexible}
            scrollToBottom={scrollToBottom}
            // backend props
            enquiry_options={enquiry_options}
            setIsPromoApplied={setIsPromoApplied}
            // handlers
            handleRoomChange={handleRoomChange}
            showRoomSelect={showRoomSelect}
            // form fields
            packageId={packageId}
          />
        </>
      )) || (
        <div className="flex flex-col gap-y-3">
          <h4 className="text-center my-2 text-base font-semibold leading-6">
            Login
          </h4>
          <a href={chatbot_login_link || ""}>
            <Button
              className="bg-primary-600 rounded-lg w-full"
              color="primary"
              variant="solid"
            >
              <VNFTypo
                className="text-white"
                text="Sign in"
                variant="textMdRegular"
              />
            </Button>
          </a>

          <a href={chatbot_apple_login_link || ""}>
            <Button
              className="bg-white rounded-lg w-full"
              color="secondary"
              startContent={
                <Image
                  alt="apple_icon"
                  height={20}
                  loading="lazy"
                  src="/images/icons/apple.svg"
                  width={20}
                />
              }
              variant="faded"
            >
              <VNFTypo
                className="text-secondary-700"
                text="Sign in with Apple"
                variant="textMdRegular"
              />
            </Button>
          </a>

          <a href={chatbot_google_login_link || ""}>
            <Button
              className="bg-white rounded-lg w-full"
              color="secondary"
              startContent={
                <Image
                  alt="google_icon"
                  height={20}
                  loading="lazy"
                  src="/images/icons/google.svg"
                  width={20}
                />
              }
              variant="faded"
            >
              <VNFTypo
                className="text-secondary-700"
                text="Sign in with Google"
                variant="textMdRegular"
              />
            </Button>
          </a>

          <a href={chatbot_linkedin_login_link}>
            <Button
              className="bg-white rounded-lg w-full"
              color="secondary"
              startContent={
                <Image
                  alt="linkedin_icon"
                  height={20}
                  loading="lazy"
                  src="/images/icons/linkedin.png"
                  width={20}
                />
              }
              variant="faded"
            >
              <VNFTypo
                className="text-secondary-700"
                text="Sign in with LinkedIn"
                variant="textMdRegular"
              />
            </Button>
          </a>
        </div>
      )}
    </form>
  );
};
