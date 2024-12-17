"use client";
import { fontVnf } from "@/config/fonts";

import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { DatePicker } from "@nextui-org/date-picker";
import { Select, SelectItem } from "@nextui-org/select";
import { Tab, Tabs } from "@nextui-org/tabs";
import { CaretDown, PaperPlaneTilt } from "@phosphor-icons/react";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import { getLocalTimeZone, today } from "@internationalized/date";

// css
import { useDisclosure } from "@nextui-org/modal";

import { LightLabelWithIcon } from "../atoms/LightLabelWithIcon";
import "react-phone-input-2/lib/style.css";

import { CustomTooltip } from "../atoms/CustomTooltip";
import InputGroup from "../atoms/InputGroup";
import { VenueBotChatForm } from "../atoms/VenueBotChatForm";

import { PromoModal } from "./PromoModal";
import { CommonModal } from "./CommonModal";
import { MuiSelect } from "./MuiSelect";
import { EnquiryStepper } from "./steppers/EnquiryStepper";
export const EnquiryChatForm = ({
  cookies,
  sideBarRef,
  step,
  selected,
  country,
  redirectUrl,
  venueName,

  showRoomSelect = true,

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
  eventNameErr,
  eventTypeErr,
  nameErr,
  emailErr,
  phoneErr,
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
  setSelected,

  // handlers
  handleRoomChange,
  handlePackageChange,
  handleDurationChange,
  handleChangeGuest,
  handleStartDateChange,
  handleStartTimeChange,
  handleClickApplyPromo,
  handleChangePromoInput,
  handleEventNameChange,
  handleEventTypeChange,
  handleContactNameChange,
  handleContactEmailChange,
  handlePhoneInputChange,
  handleSubmitEnquiry,
  handleChangeStep,

  // resets
  resetFields,

  // validators
  validateStep1,
  validateStep2,
  validateStep3,

  enquiry_options,
  handleClickWhatsApp,
  handleClickCall,
}: {
  cookies?: any;
  sideBarRef?: any;
  step: number;
  selected: string;
  country?: string;
  redirectUrl?: string;
  venueName?: string;

  // form fields
  showRoomSelect?: boolean;
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
  eventNameErr: any;
  eventTypeErr: any;
  nameErr: any;
  emailErr: any;
  phoneErr: any;
  promoCode: string;
  isPromoCodeValid: boolean;
  isPromoApplied: boolean;
  isStep1Valid: boolean;
  isStep2Valid: boolean;
  isStep3Valid: boolean;
  isLoading: boolean;
  isAvailable: boolean;
  customerGetInTouch: string;
  currentUser: any;
  enquiryErr: any;

  // setters
  setDateTimeFlexible: any;
  setEventName: any;
  setVenueMessage: any;
  setContactName: any;
  setContactEmail: any;
  setIsAvailable: any;
  setPromo: any;
  setIsPromoApplied: any;
  setSelected: any;

  // handlers
  handleRoomChange: any;
  handlePackageChange: any;
  handleDurationChange: any;
  handleChangeGuest: any;
  handleStartDateChange: any;
  handleStartTimeChange: any;
  handleClickApplyPromo: any;
  handleChangePromoInput: any;
  handleEventNameChange: any;
  handleEventTypeChange: any;
  handleContactNameChange: any;
  handleContactEmailChange: any;
  handlePhoneInputChange: any;
  handleSubmitEnquiry: any;
  handleChangeStep: any;
  resetFields: () => void;

  // validators
  validateStep1: any;
  validateStep2: any;
  validateStep3: any;

  enquiry_options?: any;
  handleClickWhatsApp: () => void;
  handleClickCall: () => void;
}) => {
  const promoModal = useDisclosure();
  const termsModal = useDisclosure();

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
  } = enquiry_options || {};

  const handleTabChange = (key: any) => {
    setSelected(`${key}`);
  };

  return (
    <div className="flex flex-col w-full">
      {step === 0 && (
        <Tabs
          fullWidth
          aria-label="Tabs form"
          className={`bg-white w-full`}
          classNames={{
            tabList: "text-center w-full bg-white",
            cursor: "w-full bg-primary-100 shadow-none",
            tab: "py-5",
            panel: "pt-2 pb-0",
          }}
          selectedKey={selected}
          size="md"
          onSelectionChange={handleTabChange}
        >
          <Tab
            key="chat"
            title={
              <LightLabelWithIcon
                customClasses="px-0 flex items-center gap-x-2"
                customLabel={
                  <span
                    className={`text-sm font-semibold leading-6 ${selected === "chat" ? "text-primary-700" : "text-secondary-500"}`}
                  >
                    Chat
                  </span>
                }
                startIconNode={
                  <Image
                    alt="icon"
                    className="h-[20px] w-[20px]"
                    height={20}
                    loading="lazy"
                    src={`/images/icons/chat_${selected === "chat" ? "active" : "default"}.png`}
                    width={20}
                  />
                }
              />
            }
          >
            <VenueBotChatForm
              capacityErr={capacityErr}
              contactEmail={contactEmail}
              contactName={contactName}
              contactPhone={contactPhone}
              contactPhoneCountryCode={contactPhoneCountryCode}
              cookies={cookies}
              country={country}
              currentUser={currentUser}
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
              enquiryErr={enquiryErr}
              // setters
              setDateTimeFlexible={setDateTimeFlexible}
              handleChangeStep={handleChangeStep}
              // backend props
              enquiry_options={enquiry_options}
              setIsPromoApplied={setIsPromoApplied}
              // handlers
              handleRoomChange={handleRoomChange}
              showRoomSelect={showRoomSelect}
              // form fields
              packageId={packageId}
            />
          </Tab>
          <Tab
            key="enquiry"
            title={
              <LightLabelWithIcon
                customClasses="px-0 flex items-center gap-x-2"
                customLabel={
                  <span
                    className={`text-sm font-semibold leading-6 ${selected === "enquiry" ? "text-primary-700" : "text-secondary-500"}`}
                  >
                    Enquiry
                  </span>
                }
                startIconNode={
                  <Image
                    alt="icon"
                    className="h-[20px] w-[20px]"
                    height={20}
                    loading="lazy"
                    src={`/images/icons/enquiry_${selected === "enquiry" ? "active" : "default"}.png`}
                    width={20}
                  />
                }
              />
            }
          >
            <EnquiryStepper
              activeStep={step}
              steps={[
                "Event Information",
                "Event Type & Description",
                "Contact Information",
              ]}
            />

            <form className="flex flex-col gap-4">
              {/* enquiry form step 0 */}
              {showRoomSelect && (
                <div className="w-full">
                  <span className="text-secondary-700 mb-2 block text-sm font-medium leading-5">
                    Rooms
                  </span>
                  <Select
                    disableAnimation
                    aria-label="Select a room"
                    classNames={{
                      trigger: "h-[42px] min-h-10 rounded-lg border-1",
                      value: `${(`${roomId}`.length > 0 && "text-secondary-700") || "text-secondary-500"}`,
                      listboxWrapper: "!max-h-none",
                    }}
                    placeholder="Select A Room"
                    popoverProps={{
                      offset: 0,
                      classNames: {
                        base: "before:bg-default-200",
                        content:
                          "p-0 border-small border-divider bg-background",
                      },
                    }}
                    selectedKeys={[`${roomId}`]}
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
                          index: number
                        ) => (
                          <SelectItem
                            key={`${value ? value : "0"}`}
                            value={value}
                          >
                            {name}
                          </SelectItem>
                        )
                      )) || (
                      <SelectItem key="readonly" isReadOnly>
                        No Options
                      </SelectItem>
                    )}
                  </Select>
                </div>
              )}
              <div className="w-full">
                <span className="text-secondary-700 mb-2 block text-sm font-medium leading-5">
                  Packages
                </span>
                <Select
                  disableAnimation
                  aria-label="Select packages"
                  classNames={{
                    trigger: "h-[42px] min-h-10 rounded-lg border-1",
                    value: `${(`${packageId}`.length > 0 && "text-secondary-700") || "text-secondary-500"}`,
                    listboxWrapper: "!max-h-none",
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
                  selectedKeys={[`${packageId}`]}
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
                        index: number
                      ) => <SelectItem key={value}>{name}</SelectItem>
                    )) || (
                    <SelectItem key="readonly" isReadOnly>
                      No Options
                    </SelectItem>
                  )}
                </Select>
              </div>
              <div className="w-full">
                <span className="text-secondary-700 mb-2 block text-sm font-medium leading-5">
                  Event Date & Time
                </span>

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
                <div className="flex gap-x-3 mt-3">
                  <div className="flex-1 flex flex-col">
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
                    <MuiSelect
                      handleChange={handleStartTimeChange}
                      items={time}
                      label="Event Time"
                      value={startTime}
                    />
                    {startTimeErr && (
                      <span className="block w-full text-danger-500 text-sm font-normal leading-5">
                        {startTimeErr}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col">
                    <MuiSelect
                      handleChange={handleDurationChange}
                      items={duration}
                      label="Duration"
                      value={enquiryDuration}
                    />
                    {durationErr && (
                      <span className="block w-full text-danger-500 text-sm font-normal leading-5">
                        {durationErr}
                      </span>
                    )}
                  </div>
                </div>
                {!isAvailable && (
                  <span className="block w-full text-danger-500 text-sm font-normal leading-5">
                    Not available on this date & time
                  </span>
                )}
              </div>

              <div className="w-full">
                <InputGroup
                  handleChange={handleChangeGuest}
                  inputLabel={
                    <span className="text-secondary-700 block text-sm font-medium leading-5">
                      Guests
                    </span>
                  }
                  inputType="number"
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
                  inputValue={eventAttendance}
                  // normalText={`Minimum - ${minCapacity}, Maximum - ${maxCapacity}`}
                  errorText={capacityErr}
                />
              </div>
              {promotion && promotion.length > 0 && (
                <div className="w-full">
                  <InputGroup
                    endContent={
                      <button onClick={handleClickApplyPromo}>
                        <span className="text-sm font-semibold leading-5 text-primary-600 cursor-pointer">
                          {(isPromoApplied && "Applied") || "Apply"}
                        </span>
                      </button>
                    }
                    handleChange={handleChangePromoInput}
                    inputLabel={
                      <span className="text-secondary-700 block text-sm font-medium leading-5">
                        Promo Code
                      </span>
                    }
                    inputType="text"
                    placeholder="Enter code"
                  >
                    {!promoCode && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          promoModal.onOpen();
                        }}
                      >
                        <span className="text-sm font-semibold leading-5 text-primary-600 underline underline-offset-4 cursor-pointer">
                          Promo code available (
                          {(promotion && promotion.length) || 0})
                        </span>
                      </button>
                    )}
                    {isPromoApplied && (
                      <span className="text-sm block font-normal leading-5 text-secondary-500">
                        Promo will be applied at Venue Owner&apos;s discretion.
                      </span>
                    )}
                    {(isPromoCodeValid && (
                      <button
                        className="block"
                        onClick={(e) => {
                          e.preventDefault();
                          termsModal.onOpen();
                        }}
                      >
                        <span className="text-sm font-normal leading-5 text-secondary-500 underline underline-offset-4">
                          Read terms & conditions
                        </span>
                      </button>
                    )) ||
                      (promoCode && (
                        <span className="block w-full text-danger-500 text-sm font-normal leading-5">
                          Invalid Promo Code
                        </span>
                      ))}
                  </InputGroup>
                </div>
              )}

              {show_date_time_flexible && (
                <div className="w-full flex items-center">
                  <Checkbox
                    isSelected={dateTimeFlexible}
                    radius="sm"
                    size="sm"
                    onValueChange={setDateTimeFlexible}
                  >
                    <span className="text-secondary-700 text-sm font-medium leading-5">
                      I&apos;m flexible on dates and times
                    </span>
                  </Checkbox>
                  <CustomTooltip arrow title={date_time_flexible_info}>
                    <Image
                      alt="icon"
                      className="w-[20px] h-[20px] object-contain ml-1 cusror-pointer"
                      height={20}
                      loading="lazy"
                      src="/images/icons/exclamation.png"
                      width={20}
                    />
                  </CustomTooltip>
                </div>
              )}

              <div className="flex items-center justify-between gap-x-2">
                <Button
                  className="flex-1 rounded-lg w-full md:w-auto bg-white min-w-10 px-2 lg:px-3"
                  color="default"
                  startContent={
                    <Image
                      alt="icon"
                      className="w-[20px] h-[20px] object-cover mr-1"
                      height={20}
                      loading="lazy"
                      src="/images/icons/whatsapp.png"
                      width={20}
                    />
                  }
                  variant="bordered"
                  onClick={handleClickWhatsApp}
                >
                  <span className="flex">Via WhatsApp</span>
                </Button>
                <Button
                  className="rounded-lg flex-1 w-full bg-primary-600 min-w-10 p-2.5"
                  color="primary"
                  variant="solid"
                  onClick={() => {
                    if (!isStep1Valid) {
                      validateStep1();

                      return;
                    }
                    handleChangeStep(1, "Venuerific");
                  }}
                >
                  Continue
                </Button>
              </div>
            </form>
          </Tab>
        </Tabs>
      )}
      {step === 1 && (
        <Tabs
          fullWidth
          aria-label="Tabs form"
          className={`bg-white w-full`}
          classNames={{
            tabList: "text-center w-full bg-white",
            cursor: "w-full bg-primary-100 shadow-none",
            tab: "py-5",
            panel: "pt-2 pb-0",
          }}
          selectedKey={selected}
          size="md"
          onSelectionChange={handleTabChange}
        >
          <Tab
            key="chat"
            title={
              <LightLabelWithIcon
                customClasses="px-0 flex items-center gap-x-2"
                customLabel={
                  <span
                    className={`text-sm font-semibold leading-6 ${selected === "chat" ? "text-primary-700" : "text-secondary-500"}`}
                  >
                    Chat
                  </span>
                }
                startIconNode={
                  <Image
                    alt="icon"
                    className="h-[20px] w-[20px]"
                    height={20}
                    loading="lazy"
                    src={`/images/icons/chat_${selected === "chat" ? "active" : "default"}.png`}
                    width={20}
                  />
                }
              />
            }
          >
            <VenueBotChatForm
              capacityErr={capacityErr}
              contactEmail={contactEmail}
              contactName={contactName}
              contactPhone={contactPhone}
              contactPhoneCountryCode={contactPhoneCountryCode}
              cookies={cookies}
              country={country}
              currentUser={currentUser}
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
              enquiryErr={enquiryErr}
              // setters
              setDateTimeFlexible={setDateTimeFlexible}
              handleChangeStep={handleChangeStep}
              // backend props
              enquiry_options={enquiry_options}
              setIsPromoApplied={setIsPromoApplied}
              // handlers
              handleRoomChange={handleRoomChange}
              showRoomSelect={showRoomSelect}
              // form fields
              packageId={packageId}
            />
          </Tab>
          <Tab
            key="enquiry"
            title={
              <LightLabelWithIcon
                customClasses="px-0 flex items-center gap-x-2"
                customLabel={
                  <span
                    className={`text-sm font-semibold leading-6 ${selected === "enquiry" ? "text-primary-700" : "text-secondary-500"}`}
                  >
                    Enquiry
                  </span>
                }
                startIconNode={
                  <Image
                    alt="icon"
                    className="h-[20px] w-[20px]"
                    height={20}
                    loading="lazy"
                    src={`/images/icons/enquiry_${selected === "enquiry" ? "active" : "default"}.png`}
                    width={20}
                  />
                }
              />
            }
          >
            <EnquiryStepper
              activeStep={step}
              steps={[
                "Event Information",
                "Event Type & Description",
                "Contact Information",
              ]}
            />
            <form className="flex flex-col gap-4">
              {/* enquiry form step 1 */}
              <div className="w-full">
                <InputGroup
                  errorText={eventNameErr || ""}
                  handleChange={handleEventNameChange}
                  inputLabel={
                    <span className="text-secondary-700 block text-sm font-medium leading-5">
                      Event name
                    </span>
                  }
                  inputType="text"
                  inputValue={eventName}
                  placeholder="Enter Event Name"
                />
              </div>

              <div className="w-full">
                <span className="text-secondary-700 block mb-2 text-sm font-medium leading-5">
                  Event type
                </span>
                <Select
                  disableAnimation
                  aria-label="Select an item"
                  classNames={{
                    trigger: "h-[42px] min-h-10 rounded-lg border-1",
                    value: `${(eventType && "text-secondary-700") || "text-secondary-500"}`,
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
                        index: number
                      ) => (
                        <SelectItem key={value} value={value}>
                          {name}
                        </SelectItem>
                      )
                    )) || (
                    <SelectItem key="readonly" isReadOnly>
                      No Options
                    </SelectItem>
                  )}
                </Select>
                {eventTypeErr && (
                  <span className="block w-full text-danger-500 text-sm font-normal leading-5">
                    {eventTypeErr}
                  </span>
                )}
              </div>
              <div className="w-full">
                <span className="text-secondary-700 block mb-2 text-sm font-medium leading-5">
                  Message
                </span>
                <textarea
                  className="w-full min-h-[100px] text-sm border border-secondary-300 p-2 rounded-lg focus:border-secondary-400 focus:outline-none placeholder:text-sm"
                  placeholder="Enter Message"
                  rows={5}
                  value={venueMessage}
                  onChange={(e: any) => setVenueMessage(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between gap-x-2">
                <Button
                  className="flex-1 rounded-lg w-full md:w-auto bg-white min-w-10 px-2 lg:px-3"
                  color="default"
                  variant="bordered"
                  onClick={() => handleChangeStep(0, "Venuerific")}
                >
                  Back
                </Button>
                <Button
                  className="rounded-lg flex-1 w-full bg-primary-600 min-w-10 p-2.5"
                  color="primary"
                  variant="solid"
                  onClick={() => {
                    if (!isStep2Valid) {
                      validateStep2();

                      return;
                    }
                    handleChangeStep(2, "Venuerific");
                  }}
                >
                  Continue
                </Button>
              </div>
            </form>
          </Tab>
        </Tabs>
      )}
      {step === 2 && (
        <Tabs
          fullWidth
          aria-label="Tabs form"
          className={`bg-white w-full`}
          classNames={{
            tabList: "text-center w-full bg-white",
            cursor: "w-full bg-primary-100 shadow-none",
            tab: "py-5",
            panel: "pt-2 pb-0",
          }}
          selectedKey={selected}
          size="md"
          onSelectionChange={handleTabChange}
        >
          <Tab
            key="chat"
            title={
              <LightLabelWithIcon
                customClasses="px-0 flex items-center gap-x-2"
                customLabel={
                  <span
                    className={`text-sm font-semibold leading-6 ${selected === "chat" ? "text-primary-700" : "text-secondary-500"}`}
                  >
                    Chat
                  </span>
                }
                startIconNode={
                  <Image
                    alt="icon"
                    className="h-[20px] w-[20px]"
                    height={20}
                    loading="lazy"
                    src={`/images/icons/chat_${selected === "chat" ? "active" : "default"}.png`}
                    width={20}
                  />
                }
              />
            }
          >
            <VenueBotChatForm
              capacityErr={capacityErr}
              contactEmail={contactEmail}
              contactName={contactName}
              contactPhone={contactPhone}
              contactPhoneCountryCode={contactPhoneCountryCode}
              cookies={cookies}
              currentUser={currentUser}
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
              showRoomSelect={showRoomSelect}
              startDate={startDate}
              startDateErr={startDateErr}
              startTime={startTime}
              startTimeErr={startTimeErr}
              venueMessage={venueMessage}
              country={country}
              // form fields
              packageId={packageId}
              enquiryErr={enquiryErr}
              // setters
              setDateTimeFlexible={setDateTimeFlexible}
              handleChangeStep={handleChangeStep}
              // backend props
              enquiry_options={enquiry_options}
              setIsPromoApplied={setIsPromoApplied}
              // handlers
              handleRoomChange={handleRoomChange}
            />
          </Tab>
          <Tab
            key="enquiry"
            title={
              <LightLabelWithIcon
                customClasses="px-0 flex items-center gap-x-2"
                customLabel={
                  <span
                    className={`text-sm font-semibold leading-6 ${selected === "enquiry" ? "text-primary-700" : "text-secondary-500"}`}
                  >
                    Enquiry
                  </span>
                }
                startIconNode={
                  <Image
                    alt="icon"
                    className="h-[20px] w-[20px]"
                    height={20}
                    loading="lazy"
                    src={`/images/icons/enquiry_${selected === "enquiry" ? "active" : "default"}.png`}
                    width={20}
                  />
                }
              />
            }
          >
            {/* enquiry form step 2 */}
            <div>
              {/* <Button
                className="bg-white rounded-lg w-full mb-3"
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
                onClick={() => {
                  // setIsError(false);
                  // setIsSuccess(true);
                }}
              >
                <span className="text-base font-normal leading-6 text-secondary-700">
                  Send with Google
                </span>
              </Button>
              <Divider>Or</Divider> */}
              <EnquiryStepper
                activeStep={step}
                steps={[
                  "Event Information",
                  "Event Type & Description",
                  "Contact Information",
                ]}
              />
              <form className="flex flex-col gap-4 mt-2">
                {/* enquiry form */}
                <InputGroup
                  errorText={nameErr}
                  handleChange={handleContactNameChange}
                  inputLabel={
                    <span className="text-secondary-700 block text-sm font-medium leading-5">
                      Name
                    </span>
                  }
                  inputType="text"
                  inputValue={contactName}
                  placeholder="Enter Name"
                />
                <InputGroup
                  errorText={emailErr}
                  handleChange={handleContactEmailChange}
                  inputLabel={
                    <span className="text-secondary-700 block text-sm font-medium leading-5">
                      Email
                    </span>
                  }
                  inputType="email"
                  inputValue={contactEmail}
                  placeholder="Enter Your Active Email"
                />

                <div className="w-full">
                  <span className="text-secondary-700 block mb-2 text-sm font-medium leading-5">
                    Phone
                  </span>
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
                  {phoneErr && (
                    <span className="block w-full text-danger-500 text-sm font-normal leading-5">
                      {phoneErr}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between gap-x-2">
                  <Button
                    className="flex-1 rounded-lg w-full md:w-auto bg-white min-w-10 px-2 lg:px-3"
                    color="default"
                    variant="bordered"
                    onClick={() => handleChangeStep(1, "Venuerific")}
                  >
                    Back
                  </Button>
                  <Button
                    className="rounded-lg flex-1 w-full bg-primary-600 min-w-10 p-2.5"
                    color="primary"
                    disabled={isLoading}
                    isLoading={isLoading}
                    startContent={<PaperPlaneTilt size={20} />}
                    variant="solid"
                    onClick={() => {
                      if (!isStep3Valid) {
                        validateStep3();

                        return;
                      }
                      handleSubmitEnquiry();
                    }}
                  >
                    {(country === "my" && "Book Venue Now") ||
                      "Send Enquiry Now"}
                  </Button>
                </div>
              </form>
            </div>
          </Tab>
        </Tabs>
      )}
      {step === 3 && (
        <div>
          {(enquiryErr && (
            <div className="flex flex-col gap-4 mt-2">
              {/* enquiry fail */}
              <div className="text-center">
                <p className="text-lg font-semibold leading-7">{enquiryErr}</p>
              </div>

              <div className="flex items-center justify-between gap-x-2">
                <Button
                  className="rounded-lg flex-1 w-full bg-primary-600 min-w-10 p-2.5"
                  color="primary"
                  variant="solid"
                  onClick={() => {
                    resetFields();
                    handleChangeStep(0, "Venuerific");
                    setSelected("enquiry");
                  }}
                >
                  Try Again
                </Button>
              </div>
            </div>
          )) || (
            <>
              <EnquiryStepper
                activeStep={step}
                steps={[
                  "Event Information",
                  "Event Type & Description",
                  "Contact Information",
                ]}
              />
              <div className="flex flex-col gap-4 mt-2">
                {/* success */}
                <div className="text-center">
                  <Image
                    alt="icon"
                    className="h-auto w-2/6 mx-auto"
                    height={100}
                    loading="lazy"
                    src={`/images/animations/enquiry_success.gif`}
                    width={100}
                  />
                  <p className="text-lg font-semibold leading-7">
                    🎉 Thank you for booking {venueName || ""}! We can&apos;t
                    wait to help make your event unforgettable. You&apos;ll hear
                    back from {venueName || ""} very soon!
                  </p>
                </div>

                <div className="flex items-center justify-between gap-x-2">
                  <Button
                    className="flex-1 rounded-lg w-full md:w-auto bg-white min-w-10 px-2 lg:px-3"
                    color="default"
                    startContent={
                      <Image
                        alt="icon"
                        className="h-[20px] w-[20px]"
                        height={20}
                        loading="lazy"
                        src={`/images/icons/chat_default.png`}
                        width={20}
                      />
                    }
                    variant="bordered"
                    onClick={() => {
                      // handleChangeStep(0, "Venuerific");
                      // setSelected("chat");
                      if (redirectUrl) {
                        window.location.href = redirectUrl;
                      }
                    }}
                  >
                    Chat Venues
                  </Button>
                  {/* <Button
                        className="rounded-lg flex-1 w-full bg-primary-600 min-w-10 p-2.5"
                        color="primary"
                        startContent={
                          <Image
                            alt="icon"
                            className="h-[20px] w-[20px]"
                            height={20}
                            loading="lazy"
                            src={`/images/icons/zap_fast.png`}
                            width={20}
                          />
                        }
                        variant="solid"
                        onClick={() => setStep(0)}
                      >
                        Instant Enquiry
                      </Button> */}
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* Promo modal */}
      <PromoModal
        isOpen={promoModal.isOpen}
        placement="bottom-center"
        promotion={promotion}
        onOpenChange={promoModal.onOpenChange}
      />
      {/* Terms & conditions modal */}
      <CommonModal
        isOpen={termsModal.isOpen}
        placement="bottom-center"
        title="Terms & Conditions"
        onOpenChange={termsModal.onOpenChange}
      >
        <p>{(promo && promo.terms_and_conditions) || ""}</p>
      </CommonModal>
    </div>
  );
};
