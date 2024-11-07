import { Button } from "@nextui-org/button";
import { TimeInput } from "@nextui-org/date-input";
import { DatePicker } from "@nextui-org/date-picker";
import { Select, SelectItem } from "@nextui-org/select";
import { CaretDown } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

import { MAX_CAPACITY } from "@/config/constants";

export const VendorEnquiryForm = () => {
  const [step, setStep] = useState(0);

  const handleChangeStep = (step: number) => {
    setStep(step);
  };

  return (
    <div className="flex flex-col w-full">
      {step === 0 && (
        <form className="flex flex-col gap-3">
          {/* enquiry form step 0 */}
          <div className="w-full">
            <span className="text-secondary-700 mb-2 block text-sm font-medium leading-5">
              Select package
            </span>
            <Select
              disableAnimation
              aria-label="Select rooms"
              classNames={{
                trigger: "h-[42px] min-h-10 rounded-lg",
              }}
              placeholder="Select packages"
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
                  src="/images/icons/archive.png"
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
          <Button
            className="rounded-lg w-full bg-primary-600 min-w-10 p-2.5"
            color="primary"
            variant="solid"
            onClick={() => handleChangeStep(1)}
          >
            Send Enquiry
          </Button>
        </form>
      )}
      {step === 1 && (
        <form className="flex flex-col gap-3">
          {/* enquiry form step 1 */}
          <div className="w-full">
            <span className="text-secondary-700 mb-2 block text-sm font-medium leading-5">
              Select package
            </span>
            <Select
              disableAnimation
              aria-label="Select rooms"
              classNames={{
                trigger: "h-[42px] min-h-10 rounded-lg",
              }}
              placeholder="Select packages"
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
                  src="/images/icons/archive.png"
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
            <span className="text-success-700 text-sm font-semibold leading-5">
              1,200.00 SGD / session
            </span>
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
              <Select
                disableAnimation
                className="flex-1"
                classNames={{
                  trigger: "h-[42px] min-h-10 rounded-lg",
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
                size="lg"
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
                onChange={() => {}}
              >
                {["", "", ""].map((item, index) => (
                  <SelectItem key={index}>{item}</SelectItem>
                ))}
              </Select>
            </div>
          </div>

          <div className="w-full">
            <span className="text-secondary-700 block mb-2 text-sm font-medium leading-5">
              Guests
            </span>
            <Select
              disableAnimation
              aria-label="Select an item"
              classNames={{
                trigger: "h-[42px] min-h-10 rounded-lg border-1",
              }}
              placeholder="Total Guest"
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

          <div className="w-full">
            <span className="text-secondary-700 block mb-2 text-sm font-medium leading-5">
              Message
            </span>
            <textarea
              className="w-full text-base border border-secondary-300 px-4 py-2 rounded-lg focus:border-secondary-300 focus:outline-none"
              placeholder="Write your event description"
              rows={5}
            />
          </div>

          <Button
            className="rounded-lg w-full bg-primary-600 min-w-10 p-2.5"
            color="primary"
            variant="solid"
            onClick={() => handleChangeStep(2)}
          >
            Send Enquiry
          </Button>
        </form>
      )}
      {step === 2 && (
        <form className="flex flex-col gap-4 mt-2">
          {/* success */}
          <div className="text-center">
            <Image
              alt="icon"
              className="h-auto w-2/6 mx-auto"
              height={100}
              loading="lazy"
              src={`/images/icons/enquiry_success_mark.png`}
              width={100}
            />
            <p className="text-lg font-semibold leading-7">
              🎉 Thank you for booking [Vendor Name]! We can&apos;t wait to help
              make your event unforgettable. You&apos;ll hear back from [Venue
              Name] very soon!
            </p>
          </div>

          <Button
            className="rounded-lg w-full bg-primary-600 min-w-10 p-2.5"
            color="primary"
            variant="solid"
            onClick={() => {}}
          >
            Go To Enquiry Details
          </Button>
        </form>
      )}
    </div>
  );
};
