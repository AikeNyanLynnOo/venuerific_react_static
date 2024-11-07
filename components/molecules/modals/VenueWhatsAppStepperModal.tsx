import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Select, SelectItem } from "@nextui-org/select";
import { CaretDown, PaperPlaneTilt } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";

import { EnquiryStepper } from "../steppers/EnquiryStepper";

import InputGroup from "@/components/atoms/InputGroup";
import { fontVnf } from "@/config/fonts";

interface VenueWhatsAppStepperModalProps {
  // modal props
  isOpen: boolean;
  placement: any;
  onOpenChange: any;

  step: number;
  selected: string;
  country?: string;
  redirectUrl?: string;
  venueName?: string;

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
  validateStep2: any;
  validateStep3: any;

  enquiry_options?: any;
}

export const VenueWhatsAppStepperModal = ({
  isOpen,
  placement,
  onOpenChange,

  step,
  selected,
  country,
  redirectUrl,
  venueName,

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
  validateStep2,
  validateStep3,

  enquiry_options,
}: VenueWhatsAppStepperModalProps) => {
  //   const [selected, setSelected] = useState("enquiry");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "What is the duration of the event?",
      time: "Thursday 11:40am",
    },
    { sender: "user", text: "4 Hour(s)", time: "11:40am" },
    {
      sender: "bot",
      text: "Please provide the name of your event.",
      time: "Thursday 11:40am",
    },
    { sender: "user", text: "Noon Office Party", time: "11:40am" },
  ]);

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
    duration,
    event_types_supported,
    contact,
    phone_country_code,
    promotion,
  } = enquiry_options || {};

  return (
    <Modal
      disableAnimation
      classNames={{
        base: "rounded-b-none sm:rounded-lg",
      }}
      isDismissable={false}
      isOpen={isOpen}
      placement={placement}
      size="md"
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="text-base font-bold leading-6">
              WhatsApp Enquiry
            </ModalHeader>
            <ModalBody className="p-5 pt-0">
              {step === 1 && (
                <>
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
                        placeholder="Select"
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
                        className="w-full min-h-[100px] text-base border border-secondary-300 p-2 rounded-lg focus:border-secondary-400 focus:outline-none placeholder:text-sm"
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
                        onClick={onClose}
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
                          handleChangeStep(2, "Whatsapp");
                        }}
                      >
                        Continue
                      </Button>
                    </div>
                  </form>
                </>
              )}
              {step === 2 && (
                <>
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
                      placeholder="Enter name"
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
                      placeholder="Enter your active email"
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
                        country={"sg"} // Default country as US
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
                        onClick={() => handleChangeStep(1, "Whatsapp")}
                      >
                        Back
                      </Button>
                      <Button
                        className={`rounded-lg flex-1 w-full bg-primary-600 min-w-10 p-2.5 ${isLoading ? "cursor-not-allowed" : ""}`}
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
                </>
              )}
              {step === 3 && (
                <div>
                  {(enquiryErr && (
                    <div className="flex flex-col gap-4 mt-2">
                      {/* enquiry fail */}
                      <div className="text-center">
                        <p className="text-lg font-semibold leading-7">
                          {enquiryErr}
                        </p>
                      </div>

                      <div className="flex items-center justify-between gap-x-2">
                        <Button
                          className="rounded-lg flex-1 w-full bg-primary-600 min-w-10 p-2.5"
                          color="primary"
                          variant="solid"
                          onClick={() => {
                            resetFields();
                            handleChangeStep(1, "Whatsapp");
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
                            🎉 Thank you for booking {venueName || ""}! We
                            can&apos;t wait to help make your event
                            unforgettable. You&apos;ll hear back from{" "}
                            {venueName || ""} very soon!
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
                              // handleChangeStep(1, "Whatsapp");
                              // setSelected("enquiry");
                              if (redirectUrl) {
                                window.open(redirectUrl, "_blank");
                              }
                            }}
                          >
                            Chat Venues
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
