"use client";
import React from "react";
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
import WhiteLabelSchedule from "./WhiteLabelSchedule";

const WhiteLabelPageForm = () => {
  const room_package = [
    { name: "Room A", value: "room_a" },
    { name: "Room B", value: "room_b" },
  ];
  const packages = [
    { name: "Package 1", value: "package_1" },
    { name: "Package 2", value: "package_2" },
  ];
  const times = ["10:00 AM", "11:00 AM", "12:00 PM"];
  const durations = ["1 Hour", "2 Hours", "3 Hours"];

  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-0 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto">
        {/* Form Container */}
        <div className="md:col-span-2">
          <div className="flex flex-col md:flex-row justify-between items-start rounded-lg p-4">
            {/* Left Section */}
            <div className="flex gap-4 w-full">
              <img
                src="/images/white_label/distrii_sg.webp"
                alt="Distrii Singapore"
                className="w-[70px] h-[70px] object-cover flex-shrink-0"
              />

              <div className="flex-1">
                <h2 className="text-black font-semibold text-[20px]">
                  Distrii Singapore
                </h2>
                <div className="flex items-center gap-2 mt-1">
                  <img
                    src="/images/icons/location.svg"
                    alt="Location Icon"
                    className="w-[16px] h-[16px] object-contain"
                  />
                  <p className="text-black text-[14px]">
                    The Rise @ Oxley, 71, Oxley Rise, #02-17, Singapore
                  </p>
                </div>

                {/* Reviews Container (for Mobile and Tablet) */}
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
                  <span className="text-black text-[14px] font-medium">
                    4,6
                  </span>
                  <span className="text-primary-600 text-[14px]">
                    24 Reviews
                  </span>
                </div>
              </div>
            </div>

            {/* Reviews Container (for Desktop) */}
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
              <span className="text-black text-[14px] font-medium">4,6</span>
              <span className="text-primary-600 text-[14px]">24 Reviews</span>
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
                  handleChange={() => {}}
                  inputLabel={
                    <span className="text-secondary-700 block text-sm font-medium">
                      Name
                    </span>
                  }
                  inputType="text"
                  inputValue=""
                  placeholder="Your Full name"
                />
              </div>

              {/* Email Input */}
              <div className="flex-1 mt-4 md:mt-0">
                <InputGroup
                  handleChange={() => {}}
                  inputLabel={
                    <span className="text-secondary-700 block text-sm font-medium">
                      Email
                    </span>
                  }
                  inputType="email"
                  inputValue=""
                  placeholder="Your email"
                />
              </div>

              {/* Phone Input */}
              <div className="flex-1 mt-4 md:mt-0">
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

            {/* Mobile and Tablet View (venue location)*/}
            <div className="mb-4 block md:hidden">
              <span className="text-secondary-700 block mb-2 text-sm font-medium">
                Select Venue Location
              </span>
              <Select
                disableAnimation
                aria-label="Select locations"
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

            {/* Select Room */}
            <div className="mb-4">
              <span className="text-secondary-700 block mb-2 text-sm font-medium">
                Select Room
              </span>
              <Select
                disableAnimation
                aria-label="Select a room"
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
                  />
                </div>

                {/* Event Time and Duration */}
                <div className="flex flex-row md:w-2/3">
                  {/* Event Time */}
                  <div className="w-1/2">
                    <Select
                      disableAnimation
                      aria-label="Select event time"
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
                      <SelectItem key="location-1" value="Main Venue">
                        00:00
                      </SelectItem>
                      <SelectItem key="location-2" value="Alternate Venue">
                        00:30
                      </SelectItem>
                      <SelectItem key="location-3" value="Backup Venue">
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
                      <SelectItem key="location-1" value="1 hour">
                        1 hour
                      </SelectItem>
                      <SelectItem key="location-2" value="2 hours">
                        2 hours
                      </SelectItem>
                      <SelectItem key="location-3" value="3 hours">
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
            />
          </div>

          {/* Promo code */}
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
              <span className="text-sm font-semibold leading-5 text-primary-600 underline underline-offset-4 cursor-pointer">
                Promo code available
              </span>
            </InputGroup>
          </div>

          <Button
            className="rounded-lg flex-1 w-full bg-primary-600 min-w-10 p-2.5 mt-4"
            color="primary"
            variant="solid"
            onClick={() => {
              return;
            }}
          >
            Enquiry Now
          </Button>

          <div className="text-center text-[12px] text-secondary-500 mt-4">
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

        <div className="md:col-span-1">
          <WhiteLabelSchedule />
        </div>
      </div>
    </div>
  );
};

export default WhiteLabelPageForm;
