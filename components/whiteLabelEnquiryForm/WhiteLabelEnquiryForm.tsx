"use client";
import React from "react";
import InputGroup from "../atoms/InputGroup";
import { Button } from "@nextui-org/button";
import PhoneInput from "react-phone-input-2";
import { Select, SelectItem } from "@nextui-org/select";
import { Checkbox } from "@nextui-org/checkbox";
import { MuiSelect } from "../molecules/MuiSelect";
import { CaretDown } from "@phosphor-icons/react";
import Image from "next/image";
import "react-phone-input-2/lib/style.css";
import { getLocalTimeZone, today } from "@internationalized/date";
import { DatePicker } from "@nextui-org/date-picker";

const WhiteLabelEnquiryForm = () => {
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
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-10">
      <div className="px-4 md:px-0 my-10 md:mt-6 max-w-screen-2xl mx-auto w-full sm:w-[80%] lg:w-[60%]">
        {/* Form Container */}
        <div
          className="border border-secondary-200 rounded-lg p-6 md:p-8"
          style={{ borderRadius: "8px" }}
        >
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
              <h3
                className="text-xs font-medium"
                style={{ color: "#9FA9B4", fontSize: "12px" }}
              >
                Personal information
              </h3>
              <div className="flex-grow border-t border-secondary-200 ml-2"></div>
            </div>

            {/* Inline Inputs */}
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
                <span className="text-secondary-700 block mb-2 text-sm font-medium mt-[-3px]">
                  Phone
                </span>
                <PhoneInput
                  country={"sg"}
                  inputStyle={{
                    border: "1px solid #E5E7EB",
                    borderRadius: "8px",
                    width: "100%",
                    height: "40px",
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
              <div className="flex-grow border-t border-secondary-200 ml-2"></div>
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
      </div>
    </div>
  );
};

export default WhiteLabelEnquiryForm;
