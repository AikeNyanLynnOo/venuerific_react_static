"use client";
import React, { useState } from "react";
import InputGroup from "../atoms/InputGroup";
import { Button } from "@nextui-org/button";
import PhoneInput from "react-phone-input-2";
import { Select, SelectItem } from "@nextui-org/select";
import { Checkbox } from "@nextui-org/checkbox";
import { CaretDown } from "@phosphor-icons/react";
import Image from "next/image";
import "react-phone-input-2/lib/style.css";
import { getLocalTimeZone, today } from "@internationalized/date";
import { DatePicker } from "@nextui-org/date-picker";
import { PromoModal } from "../molecules/PromoModal";
import { useDisclosure } from "@nextui-org/modal";
import WhiteLabelSchedule from "./WhiteLabelSchedule";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";
import { ScheduleModal } from "../molecules/modals/ScheduleModal";

const WhiteLabelPageForm = ({
  promo,
  promoCode,
  isPromoCodeValid,
  isPromoApplied,

  // setters
  setPromo,
  setIsPromoApplied,

  // validators
  enquiry_options,
}: {
  promo: any;
  promoCode: string;
  isPromoCodeValid: boolean;
  isPromoApplied: boolean;
  setPromo: any;
  setIsPromoApplied: any;

  // validators
  enquiry_options?: any;
}) => {
  const venue_location = [
    { name: "Conference Hall", value: "conference_hall" },
    { name: "Boardroom", value: "boardroom" },
  ];

  const packages = [
    { name: "Package 1", value: "package_1" },
    { name: "Package 2", value: "package_2" },
  ];

  const promoModal = useDisclosure();
  const termsModal = useDisclosure();
  const scheduleModal = useDisclosure();

  const handleOpenScheduleModal = () => {
    scheduleModal.onOpen();
    console.log("Modal opened:", scheduleModal.isOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    handleOpenScheduleModal();
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    scheduleModal.onClose();
  };

  const { promotion } = enquiry_options || {};

  // State variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedRoom, setSelectedRoom] = useState<string>("");
  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventType, setEventType] = useState("");
  const [guests, setGuests] = useState("");
  const [eventDetails, setEventDetails] = useState("");

  // Handlers to update state
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handlePhoneChange = (value: string) => setPhone(value);

  const handleLocationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    setSelectedLocation(value);
  };

  const handleRoomChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRoom(event.target.value);
  };

  const handlePackageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPackage(event.target.value);
  };

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  const handleSelectChange = (value: any, type: any) => {
    if (type === "time") {
      setSelectedTime(value);
    } else if (type === "duration") {
      setSelectedDuration(value);
    }
  };

  const handleEventName = (e: any) => {
    setEventName(e.target.value);
  };

  // Handle Event Type Change
  const handleEventType = (e: any) => {
    setEventType(e.target.value);
  };

  // Handle Guests Change
  const handleGuests = (e: any) => {
    setGuests(e.target.value);
  };

  // Handle Event Details Change
  const handleEventDetails = (e: any) => {
    setEventDetails(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Selected Venue Location:", selectedLocation);
    console.log("Selected Room:", selectedRoom);
    console.log("Selected Package:", selectedPackage);
    console.log("Selected Date:", selectedDate);
    console.log("Selected Time:", selectedTime);
    console.log("Selected Duration:", selectedDuration);
    console.log("Event Name:", eventName);
    console.log("Event Type:", eventType);
    console.log("Guests:", guests);
    console.log("Event Details:", eventDetails);

    setName("");
    setEmail("");
    setPhone("");
    setSelectedLocation("");
    setSelectedRoom("");
    setSelectedPackage("");
    setSelectedDate(null);
    setSelectedTime("");
    setSelectedDuration("");
    setEventName("");
    setEventType("");
    setGuests("");
    setEventDetails("");
  };

  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-0 md:py-10">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto">
          {/* Form Container */}
          <div className="md:col-span-2">
            <div className="flex flex-col md:flex-row justify-between items-start rounded-lg p-4">
              {/* Left Section (logo)*/}
              <div className="flex gap-4 w-full">
                <img
                  src="/images/white_label/distrii_sg.webp"
                  alt="Distrii Singapore"
                  className="w-[70px] h-[70px] object-cover flex-shrink-0"
                />

                <div className="flex-1">
                  <h2 className="text-black font-semibold text-xl">
                    Distrii Singapore
                  </h2>
                  <div className="flex items-center gap-2 mt-1">
                    <img
                      src="/images/icons/location.svg"
                      alt="Location Icon"
                      className="w-[16px] h-[16px] object-contain"
                    />
                    <p className="text-black text-sm">
                      The Rise @ Oxley, 71, Oxley Rise, #02-17, Singapore
                    </p>
                  </div>

                  {/* Right Sec-Reviews Container (for Mobile and Tablet) */}
                  <div className="inline-flex items-center gap-1 bg-secondary-100 py-2 px-3 rounded-lg mt-4 md:hidden">
                    <span className="text-yellow-500">
                      <svg
                        className="w-[14px] h-[14px]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927a.75.75 0 011.902 0l1.502 4.632h4.867a.75.75 0 01.466 1.34l-3.937 2.869 1.503 4.632a.75.75 0 01-1.152.826l-3.938-2.87-3.937 2.87a.75.75 0 01-1.153-.826l1.503-4.632-3.937-2.87a.75.75 0 01.466-1.34h4.867l1.502-4.632z" />
                      </svg>
                    </span>
                    <span className="text-black text-sm font-medium">
                      4,6
                    </span>
                    <span className="text-primary-600 text-sm">
                      24 Reviews
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Sec-Reviews Container (for Desktop) */}
              <div className="hidden md:flex items-center gap-1 bg-secondary-100 py-2 px-3 rounded-lg md:ml-4 flex-none ">
                <span className="text-yellow-500">
                  <svg
                    className="w-[14px] h-[14px]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927a.75.75 0 011.902 0l1.502 4.632h4.867a.75.75 0 01.466 1.34l-3.937 2.869 1.503 4.632a.75.75 0 01-1.152.826l-3.938-2.87-3.937 2.87a.75.75 0 01-1.153-.826l1.503-4.632-3.937-2.87a.75.75 0 01.466-1.34h4.867l1.502-4.632z" />
                  </svg>
                </span>
                <span className="text-black text-sm font-medium">4,6</span>
                <span className="text-primary-600 text-sm">24 Reviews</span>
              </div>
            </div>
            <div className="flex-grow border-t border-secondary-200 mb-6" />
            {/* Header */}
            <p className="text-sm text-black mb-6">
              Thank you for considering our venue for your upcoming event! 🎉
              I&apos;m excited about the possibility of hosting you. Could you
              share more details about yourself and the event you&apos;re
              planning?
            </p>

            {/* Personal Information */}
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <h3 className="text-xs font-medium text-[#9FA9B4]">
                  Personal information
                </h3>

                <div className="flex-grow border-t border-secondary-200 ml-2" />
              </div>

              <div className="flex flex-col md:flex-row md:space-x-4">
                {/* Name Input */}
                <div className="flex-1">
                  <InputGroup
                    handleChange={handleNameChange}
                    inputLabel={
                      <span className="text-secondary-700 block text-sm font-medium">
                        Name
                      </span>
                    }
                    inputType="text"
                    inputValue={name}
                    placeholder="Your Full name"
                  />
                </div>

                {/* Email Input */}
                <div className="flex-1 mt-4 md:mt-0">
                  <InputGroup
                    handleChange={handleEmailChange}
                    inputLabel={
                      <span className="text-secondary-700 block text-sm font-medium">
                        Email
                      </span>
                    }
                    inputType="email"
                    inputValue={email}
                    placeholder="Your email"
                  />
                </div>

                {/* Phone Input */}
                <div className="flex-1 md:mt-[-4px]">
                  <span className="text-secondary-700 block mb-2 text-sm font-medium leading-5">
                    Phone
                  </span>
                  <PhoneInput
                    disableSearchIcon
                    buttonClass="rounded-r-none"
                    buttonStyle={{
                      border: "none",
                      borderRadius: 8,
                      borderRight: "none",
                      paddingLeft: 5,
                      paddingRight: 5,
                      backgroundColor: "#FFFFFF",
                    }}
                    containerClass={`rounded-lg border border-secondary-300 focus:border-secondary-400 hover:border-secondary-400 shadow-sm h-10`}
                    country={"sg"}
                    countryCodeEditable={false}
                    disableCountryCode={false}
                    disableDropdown={false}
                    dropdownClass="border-secondary-200 rounded-xl shadow-sm"
                    inputClass={`h-full`}
                    inputStyle={{
                      border: "none",
                      height: "100%",
                      width: "100%",
                      borderRadius: 8,
                      paddingLeft: 48,
                    }}
                    value={phone}
                    onChange={handlePhoneChange}
                  />
                </div>
              </div>
            </div>

            {/* Enquiry Information */}
            <div>
              <div className="flex items-center mb-4">
                <h3 className="text-xs font-medium text-[#9FA9B4]">
                  Enquiry information
                </h3>
                <div className="flex-grow border-t border-secondary-200 ml-2" />
              </div>

              {/* Venue Location */}
              <div className="mb-4 hidden md:block">
                <span className="text-secondary-700 block mb-2 text-sm font-medium">
                  Select Venue Location
                </span>
                <Select
                  disableAnimation
                  aria-label="Select locations"
                  value={selectedLocation}
                  onChange={handleLocationChange}
                  classNames={{
                    trigger: "h-[42px] min-h-10 rounded-lg border-1",

                    listboxWrapper: "!max-h-none",
                  }}
                  placeholder="Main Venue - The Rise @ Oxley, 71, Oxley Rise, #02-17, Singapore"
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
                      src="/images/icons/location.svg"
                      width={20}
                    />
                  }
                  variant="bordered"
                >
                  {(packages &&
                    venue_location.length > 0 &&
                    venue_location.map(
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

              {/* Mobile and Tablet View (venue location)*/}
              <div className="mb-4 block md:hidden">
                <span className="text-secondary-700 block mb-2 text-sm font-medium">
                  Select Venue Location
                </span>
                <Select
                  disableAnimation
                  aria-label="Select locations"
                  value={selectedLocation}
                  onChange={handleLocationChange}
                  classNames={{
                    trigger: "h-[42px] min-h-10 rounded-lg border-1",

                    listboxWrapper: "!max-h-none",
                  }}
                  placeholder="Select venue"
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
                      src="/images/icons/location.svg"
                      width={20}
                    />
                  }
                  variant="bordered"
                >
                  {(packages &&
                    venue_location.length > 0 &&
                    venue_location.map(
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

              {/* Select Room */}
              <div className="mb-4">
                <span className="text-secondary-700 block mb-2 text-sm font-medium">
                  Select Room
                </span>
                <Select
                  disableAnimation
                  aria-label="Select a room"
                  value={selectedRoom}
                  onChange={handleRoomChange}
                  classNames={{
                    trigger: "h-[42px] min-h-10 rounded-lg border-1 text-black",
                    listboxWrapper: "!max-h-none",
                  }}
                  placeholder="Select room"
                  popoverProps={{
                    offset: 0,
                    classNames: {
                      base: "before:bg-default-200",
                      content: "p-0 border-small border-divider bg-background",
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
                >
                  <SelectItem key="room_1">Room 1</SelectItem>
                  <SelectItem key="room_2">Room 2</SelectItem>
                  <SelectItem key="room_3">Room 3</SelectItem>
                </Select>
              </div>

              {/* Select Package */}
              <div className="mb-4">
                <span className="text-secondary-700 block mb-2 text-sm font-medium">
                  Packages
                </span>
                <Select
                  disableAnimation
                  aria-label="Select packages"
                  value={selectedPackage}
                  onChange={handlePackageChange}
                  classNames={{
                    trigger: "h-[42px] min-h-10 rounded-lg border-1",

                    listboxWrapper: "!max-h-none",
                  }}
                  placeholder="Select a package"
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

              <div className="mb-4">
                <span className="text-secondary-700 block mb-2 text-sm font-medium">
                  Event Date & Time
                </span>

                <div className="flex flex-col md:flex-row">
                  {/* Event Date */}
                  <div className="w-full md:w-1/3 mb-2 md:mb-0">
                    <DatePicker
                      dateInputClassNames={{
                        inputWrapper: `
                        bg-white 
                        focus-within:hover:bg-white 
                        hover:bg-white 
                        shadow-none 
                        border 
                        hover:border-secondary-400 
                        h-[42px]
                        rounded-lg
                        md:rounded-tl-lg md:rounded-bl-lg md:rounded-tr-none md:rounded-br-none
                    `,
                      }}
                      radius="none"
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
                          src="/images/icons/calendar.png"
                          alt="Calendar Icon"
                          width={20}
                          height={20}
                          className="object-contain mr-2"
                        />
                      }
                      variant="flat"
                      value={selectedDate}
                      onChange={handleDateChange}
                    />
                  </div>

                  {/* Event Time and Duration */}
                  <div className="flex flex-row md:w-2/3">
                    {/* Event Time */}
                    <div className="w-1/2">
                      <Select
                        disableAnimation
                        aria-label="Select event time"
                        value={selectedTime}
                        onChange={(e) =>
                          handleSelectChange(e.target.value, "time")
                        }
                        classNames={{
                          trigger: `
                          h-[42px] min-h-10 border-1 
                          rounded-tl-lg rounded-bl-lg 
                          rounded-tr-none rounded-br-none 
                          sm:rounded-tl-lg sm:rounded-bl-lg sm:rounded-tr-none sm:rounded-br-none 
                          md:rounded-none
                        `,
                        }}
                        placeholder="Event time"
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
                            src="/images/icons/clock.png"
                            width={20}
                          />
                        }
                        variant="bordered"
                      >
                        <SelectItem key="00:00" value="00:00">
                          00:00
                        </SelectItem>
                        <SelectItem key="00:30" value="00:30">
                          00:30
                        </SelectItem>
                        <SelectItem key="01:00" value="01:00">
                          01:00
                        </SelectItem>
                      </Select>
                    </div>

                    {/* Duration */}
                    <div className="w-1/2">
                      <Select
                        disableAnimation
                        aria-label="Select duration"
                        classNames={{
                          trigger:
                            "h-[42px] min-h-10 rounded-lg border-1 rounded-tl-none rounded-bl-none",
                        }}
                        placeholder="Duration"
                        value={selectedDuration}
                        onChange={(e) =>
                          handleSelectChange(e.target.value, "duration")
                        }
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
                            src="/images/icons/clock.png"
                            width={20}
                          />
                        }
                        variant="bordered"
                      >
                        <SelectItem key="1 hour" value="1 hour">
                          1 hour
                        </SelectItem>
                        <SelectItem key="2 hours" value="2 hours">
                          2 hours
                        </SelectItem>
                        <SelectItem key="3 hours" value="3 hours">
                          3 hours
                        </SelectItem>
                      </Select>
                    </div>
                  </div>
                </div>

                <Checkbox radius="sm" size="sm">
                  <span className="text-secondary-700 text-sm font-medium leading-5 block md:hidden">
                    I&apos;m flexible with the date
                  </span>
                  <span className="text-secondary-700 text-sm font-medium leading-5 hidden md:block">
                    I&apos;m flexible on dates and times
                  </span>
                </Checkbox>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <InputGroup
                  inputLabel={
                    <span className="text-secondary-700 block text-sm font-medium leading-5">
                      Event name
                    </span>
                  }
                  inputType="text"
                  placeholder="Type your event name"
                  value={eventName}
                  onChange={handleEventName}
                />
              </div>

              <div className="w-full">
                <span className="text-secondary-700 block mb-2 text-sm font-medium leading-5">
                  Event Type
                </span>
                <Select
                  disableAnimation
                  aria-label="Select an item"
                  classNames={{
                    trigger:
                      "h-[42px] min-h-10 rounded-lg border-1 text-black mt-[-3px]",
                  }}
                  placeholder="Select event type"
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
                      style={{ minWidth: "15px" }}
                      className="text-secondary-500"
                    />
                  }
                  size="sm"
                  variant="bordered"
                  value={eventType}
                  onChange={handleEventType}
                >
                  <SelectItem key="conference" value="conference">
                    Conference
                  </SelectItem>
                  <SelectItem key="workshop" value="workshop">
                    Workshop
                  </SelectItem>
                  <SelectItem key="seminar" value="seminar">
                    Seminar
                  </SelectItem>
                  <SelectItem key="webinar" value="webinar">
                    Webinar
                  </SelectItem>
                </Select>
              </div>
              <div className="w-full mb-4">
                <InputGroup
                  inputLabel={
                    <span className="text-secondary-700 block text-sm font-medium leading-5">
                      Guests
                    </span>
                  }
                  inputType="number"
                  placeholder="Enter estimated no of guests"
                  value={guests}
                  onChange={handleGuests}
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
              </div>
            </div>
            <div className="w-full">
              <span className="text-secondary-700 block mb-2 text-sm font-medium leading-5">
                Tell Us About Your Event or Ask a Question
              </span>
              <textarea
                className="w-full min-h-[100px] text-sm border border-secondary-300 p-2 rounded-lg focus:border-secondary-400 focus:outline-none placeholder:text-sm shadow-sm"
                placeholder="Share your event details or ask any question here."
                rows={3}
                value={eventDetails}
                onChange={handleEventDetails}
              />
            </div>

            {/* Promo code */}
            <div className="pb-[200px] lg:pb-0">
              <div className="w-full">
                <InputGroup
                  endContent={
                    <button>
                      <span className="text-sm font-semibold leading-5 text-primary-600 cursor-pointer">
                        Apply
                      </span>
                    </button>
                  }
                  inputLabel={
                    <span className="text-secondary-700 block text-sm font-medium leading-5">
                      Promo Code
                    </span>
                  }
                  inputType="text"
                  placeholder="Enter promo code"
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
              <PromoModal
                isOpen={promoModal.isOpen}
                placement="bottom-center"
                promotion={promotion}
                onOpenChange={promoModal.onOpenChange}
              />
            </div>

            {/* Sticky Bottom Container for Mobile and Tablet */}
            <div className="block lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-secondary-200 rounded-t-[22px] shadow-2xl z-50 overflow-hidden">
              {/* Contact and Schedule */}
              <div
                role="button"
                onClick={handleClick}
                className="h-[52px] flex items-center justify-between px-4 border-b border-secondary-200 cursor-pointer"
              >
                <span className="text-primary-600 font-semibold text-base">
                  Contact and Schedule
                </span>
                <CaretDown
                  size={20}
                  className={`transform transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Enquiry Button */}
              <div className="px-4 py-5 bg-white">
                <Button
                  type="submit"
                  className="rounded-lg w-full bg-primary-600 text-white text-center py-2"
                  color="primary"
                  variant="solid"
                >
                  Enquire Now
                </Button>
              </div>

              {/* Terms and Privacy */}
              <div className="text-center text-xs text-secondary-500 pb-3 px-4 bg-white">
                By clicking send booking request, you agree to Venuerific's{" "}
                <a
                  href="#"
                  className="text-primary-600 underline underline-offset-4 hover:text-primary-700"
                >
                  Terms of Service
                </a>{" "}
                &amp;{" "}
                <a
                  href="#"
                  className="text-primary-600 underline underline-offset-4 hover:text-primary-700"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            {/* Enquiry Button and Terms for Desktop */}
            <div className="hidden lg:block w-full my-6">
              <Button
                type="submit"
                className="rounded-lg w-full bg-primary-600 text-white text-center py-3 font-semibold"
                color="primary"
                variant="solid"
              >
                Enquire Now
              </Button>
              <p className="text-xs text-secondary-500 mt-3 text-center">
                By clicking send booking request, you agree to Venuerific's{" "}
                <a
                  href="#"
                  className="text-primary-600 underline underline-offset-4 hover:text-primary-700"
                >
                  Terms of Service
                </a>{" "}
                &amp;{" "}
                <a
                  href="#"
                  className="text-primary-600 underline underline-offset-4 hover:text-primary-700"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>

          {/* Schedule Modal */}
          <ScheduleModal
            isOpen={scheduleModal.isOpen}
            onOpenChange={(isModalOpen) => {
              if (!isModalOpen) {
                handleCloseModal();
              }
            }}
          />

          <div className="hidden lg:block lg:col-span-1">
            <WhiteLabelSchedule />
          </div>
        </div>
      </form>
    </div>
  );
};

export default WhiteLabelPageForm;
