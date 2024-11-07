import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { TimeInput } from "@nextui-org/date-input";
import { DatePicker } from "@nextui-org/date-picker";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { CaretDown, ChatsCircle, PaperPlaneTilt } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";

import { fontVnf } from "@/config/fonts";
import { MAX_CAPACITY } from "@/config/constants";
import { StepMarker } from "@/components/atoms/StepMarker";

// css
import "react-phone-input-2/lib/style.css";

export const VenueInstantBookingForm = ({
  handleClickWhatsApp,
  handleClickCall,
  closeModal,
}: {
  handleClickWhatsApp: () => void;
  handleClickCall: () => void;
  closeModal: () => void;
}) => {
  const [step, setStep] = useState(0);

  const handleChangeStep = (step: number) => {
    setStep(step);
  };

  return (
    <div className="flex flex-col w-full">
      <StepMarker step={step} />

      {step === 0 && (
        <form className="flex flex-col gap-4">
          {/* enquiry form step 0 */}

          <div className="w-full">
            <span className="text-secondary-700 mb-2 block text-sm font-medium leading-5">
              Select room
            </span>
            <Select
              disableAnimation
              aria-label="Select rooms"
              classNames={{
                trigger: "h-[42px] min-h-10 rounded-lg",
              }}
              placeholder="Select rooms"
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
              size="lg"
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
              onChange={() => {}}
            >
              {["", "", ""].map((item, index) => (
                <SelectItem key={index}>{item}</SelectItem>
              ))}
            </Select>
          </div>
          <div className="w-full">
            <span className="text-secondary-700 mb-2 block text-sm font-medium leading-5">
              Select events date
            </span>
            <DatePicker
              classNames={{
                base: "rounded-lg border-0 border-red-200",
                label: "rounded-lg",
                calendar: "rounded-lg",
                selectorButton: "rounded-lg",
                selectorIcon: "rounded-lg",
                popoverContent: "rounded-lg",
                calendarContent: "rounded-lg",
                inputWrapper: "bg-red-200",
                input: "bg-red-200",
                segment: "rounded-lg",
                helperWrapper: "rounded-lg",
                description: "rounded-lg",
                errorMessage: "rounded-lg",
              }}
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
              variant="bordered"
            />
            <div className="flex items-center gap-x-3 mt-3">
              <TimeInput
                className="flex-1"
                label={
                  <span className="text-secondary-700 block text-sm font-medium leading-5">
                    From
                  </span>
                }
                labelPlacement="outside"
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
              />
              <TimeInput
                className="flex-1"
                label={
                  <span className="text-secondary-700 block text-sm font-medium leading-5">
                    To
                  </span>
                }
                labelPlacement="outside"
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
              />
            </div>
          </div>
          <div className="w-full">
            <div className="flex items-center gap-x-3">
              <div className="flex-1">
                <span className="text-secondary-700 block mb-2 text-sm font-medium leading-5">
                  Guests
                </span>
                <Select
                  disableAnimation
                  aria-label="Select an item"
                  classNames={{
                    trigger: "h-[42px] min-h-10 rounded-lg border-1",
                  }}
                  placeholder="Number of Pax"
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
                  size="lg"
                  startContent={
                    <Image
                      alt="icon"
                      className="w-[20px] h-[20px] object-contain mr-1"
                      height={20}
                      loading="lazy"
                      src="/images/icons/person.svg"
                      width={20}
                    />
                  }
                  variant="bordered"
                  onChange={() => {}}
                >
                  {MAX_CAPACITY &&
                    MAX_CAPACITY.map((capacity, index) => (
                      <SelectItem key={capacity}>{capacity}</SelectItem>
                    ))}
                </Select>
              </div>
              <div className="flex-1">
                <span className="text-secondary-700 block mb-2 text-sm font-medium leading-5">
                  Budget
                </span>
                <Input
                  className={`rounded-lg bg-white border border-secondary-300`}
                  classNames={{
                    inputWrapper: [
                      "bg-white",
                      "group-data-[focus=true]:bg-white",
                      "dark:group-data-[focus=true]:bg-white",
                    ],
                  }}
                  endContent={
                    <div className="flex items-center">
                      <label className="sr-only" htmlFor="currency">
                        Currency
                      </label>
                      <select
                        className="outline-none border-0 bg-transparent text-default-400 text-small"
                        id="currency"
                        name="currency"
                      >
                        <option>USD</option>
                        <option>ARS</option>
                        <option>EUR</option>
                      </select>
                    </div>
                  }
                  placeholder="0.00"
                  radius="sm"
                  startContent={
                    <Image
                      alt="icon"
                      className="w-[20px] h-[20px] object-contain mr-1"
                      height={20}
                      loading="lazy"
                      src="/images/icons/dollar_circle.png"
                      width={20}
                    />
                  }
                  type="number"
                  variant="flat"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex items-center">
            <Checkbox defaultSelected radius="sm" size="sm">
              <span className="text-secondary-700 text-sm font-medium leading-5">
                I&apos;m flexible on dates and times
              </span>
            </Checkbox>
            <Image
              alt="icon"
              className="w-[20px] h-[20px] object-contain ml-1 cusror-pointer"
              height={20}
              loading="lazy"
              src="/images/icons/exclamation.png"
              width={20}
            />
          </div>
          <div className="flex items-center justify-between gap-x-2">
            <Button
              className="flex-1 rounded-lg w-full md:w-auto bg-white min-w-10 px-2 lg:px-3"
              color="default"
              variant="bordered"
              onClick={() => {
                // close modal
                closeModal();
              }}
            >
              Back
            </Button>
            <Button
              className="rounded-lg flex-1 w-full bg-primary-600 min-w-10 p-2.5"
              color="primary"
              variant="solid"
              onClick={() => handleChangeStep(1)}
            >
              Continue
            </Button>
          </div>
        </form>
      )}
      {step === 1 && (
        <form className="flex flex-col gap-4">
          <div className="w-full">
            <span className="text-secondary-700 block mb-2 text-sm font-medium leading-5">
              Event type
            </span>
            <Select
              disableAnimation
              aria-label="Select an item"
              classNames={{
                trigger: "h-[42px] min-h-10 rounded-lg border-1",
              }}
              placeholder="Select"
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
              size="lg"
              variant="bordered"
              onChange={() => {}}
            >
              {[""].map((item, index) => (
                <SelectItem key={index}>{item}</SelectItem>
              ))}
            </Select>
          </div>
          <div className="w-full">
            <span className="text-secondary-700 block mb-2 text-sm font-medium leading-5">
              Message
            </span>
            <textarea
              className="w-full text-base border border-secondary-300 px-4 py-2 rounded-lg focus:border-secondary-300 focus:outline-none"
              placeholder="Any quetion or information  regarding your events?"
              rows={4}
            />
          </div>
          <div className="w-full">
            <span className="text-secondary-700 mb-2 block text-sm font-medium leading-5">
              Name
            </span>
            <Input
              className={`rounded-lg bg-white border border-secondary-300`}
              classNames={{
                inputWrapper: [
                  "bg-white",
                  "group-data-[focus=true]:bg-white",
                  "dark:group-data-[focus=true]:bg-white",
                ],
              }}
              placeholder="Full name"
              radius="sm"
              variant="flat"
            />
          </div>
          <div className="w-full">
            <span className="text-secondary-700 mb-2 block text-sm font-medium leading-5">
              Email
            </span>
            <Input
              className={`rounded-lg bg-white border border-secondary-300`}
              classNames={{
                inputWrapper: [
                  "bg-white",
                  "group-data-[focus=true]:bg-white",
                  "dark:group-data-[focus=true]:bg-white",
                ],
              }}
              placeholder="Your active email"
              radius="sm"
              type="email"
              variant="flat"
            />
          </div>
          <div className="w-full">
            <span className="text-secondary-700 block mb-2 text-sm font-medium leading-5">
              Phone
            </span>
            <PhoneInput
              disableSearchIcon // Disables search icon if needed
              buttonClass="border rounded-r-none"
              buttonStyle={{
                borderRadius: 8,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                borderRight: "none",
                paddingLeft: 5,
                paddingRight: 5,
                backgroundColor: "#FFFFFF",
              }}
              containerClass={`border-secondary-200 rounded-xl shadow-sm h-10 ${fontVnf.variable}`}
              country={"sg"} // Default country as US
              countryCodeEditable={false} // Prevents editing country code directly
              disableCountryCode={false}
              disableDropdown={false}
              dropdownClass="border-secondary-200 rounded-xl shadow-sm"
              inputClass={`border-secondary-300 rounded-xl h-full bg-red-100 ${fontVnf.variable}`}
              inputStyle={{
                height: "100%",
                width: "100%",
                borderRadius: 8,
                paddingLeft: 48,
              }}
              onChange={() => {}}
            />
            <div className="w-full flex items-center mt-2">
              <Checkbox defaultSelected radius="sm" size="sm">
                <span className="text-secondary-700 text-sm font-medium leading-5">
                  Contact via Whatsapp
                </span>
              </Checkbox>
              <Image
                alt="icon"
                className="w-[20px] h-[20px] object-contain ml-1 cusror-pointer"
                height={20}
                loading="lazy"
                src="/images/icons/exclamation.png"
                width={20}
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-x-2">
            <Button
              className="flex-1 rounded-lg w-full md:w-auto bg-white min-w-10 px-2 lg:px-3"
              color="default"
              variant="bordered"
              onClick={() => handleChangeStep(0)}
            >
              Back
            </Button>
            <Button
              className="rounded-lg flex-1 w-full bg-primary-600 min-w-10 p-2.5"
              color="primary"
              startContent={<PaperPlaneTilt color="#FFFFFF" size={20} />}
              variant="solid"
              onClick={() => handleChangeStep(2)}
            >
              Book
            </Button>
          </div>
        </form>
      )}
      {step === 2 && (
        <div className="text-center flex flex-col gap-3">
          {/* success */}
          <Image
            alt="icon"
            className="h-auto w-2/6 mx-auto"
            height={100}
            loading="lazy"
            src={`/images/icons/enquiry_success_mark.png`}
            width={100}
          />
          <p className="text-lg font-semibold leading-7">
            🎉 Thank you for booking [Venue Name]! We can&apos;t wait to help
            make your event unforgettable. You&apos;ll hear back from [Venue
            Name] very soon!
          </p>
          <div className="flex items-center justify-between gap-x-2">
            <Button
              className="flex-1 rounded-lg w-full md:w-auto bg-white min-w-10 px-2 lg:px-3"
              color="default"
              variant="bordered"
              onClick={() => {
                // close modal
                closeModal();
              }}
            >
              Close
            </Button>
            <Button
              className="rounded-lg flex-1 w-full bg-primary-600 min-w-10 p-2.5"
              color="primary"
              startContent={<ChatsCircle color="#FFFFFF" size={20} />}
              variant="solid"
              onClick={() => handleChangeStep(2)}
            >
              Chat Owners
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
