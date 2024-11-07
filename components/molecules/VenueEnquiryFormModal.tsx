import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";

import { EnquiryChatForm } from "./EnquiryChatForm";

interface VenueEnquiryFormModalProps {
  cookies?: any;

  isOpen: boolean;
  placement: any;
  onOpenChange: any;

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
  calendarModal: any;
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
}

export const VenueEnquiryFormModal = ({
  cookies,

  isOpen,
  placement,
  onOpenChange,

  step,
  selected,
  country,
  redirectUrl,
  venueName,

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
  calendarModal,
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
  resetFields,

  validateStep1,
  validateStep2,
  validateStep3,

  enquiry_options,
  handleClickWhatsApp,
  handleClickCall,
}: VenueEnquiryFormModalProps) => {
  return (
    <Modal
      disableAnimation
      classNames={{
        base: "rounded-b-none sm:rounded-lg",
      }}
      isDismissable={false}
      isOpen={isOpen}
      placement={placement}
      scrollBehavior="inside"
      size="2xl"
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col text-xl font-semibold">
              <button className="w-fit" onClick={calendarModal.onOpen}>
                <span className="text-primary-600 text-sm font-semibold cursor-pointer underline underline-offset-4">
                  Check Availability
                </span>
              </button>
            </ModalHeader>
            <ModalBody className="p-5 pt-0">
              <EnquiryChatForm
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
                handleClickCall={handleClickCall}
                handleClickWhatsApp={handleClickWhatsApp}
                handleContactEmailChange={handleContactEmailChange}
                handleContactNameChange={handleContactNameChange}
                handleDurationChange={handleDurationChange}
                handleEventNameChange={handleEventNameChange}
                handleEventTypeChange={handleEventTypeChange}
                handlePackageChange={handlePackageChange}
                handlePhoneInputChange={handlePhoneInputChange}
                handleRoomChange={handleRoomChange}
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
                resetFields={resetFields}
                roomId={roomId}
                selected={selected}
                setContactEmail={setContactEmail}
                setContactName={setContactName}
                setDateTimeFlexible={setDateTimeFlexible}
                setEventName={setEventName}
                setIsAvailable={setIsAvailable}
                setIsPromoApplied={setIsPromoApplied}
                setPromo={setPromo}
                setSelected={setSelected}
                setVenueMessage={setVenueMessage}
                startDate={startDate}
                startDateErr={startDateErr}
                startTime={startTime}
                step={step}
                // handlers
                validateStep1={validateStep1}
                // resetters
                startTimeErr={startTimeErr}
                validateStep2={validateStep2}
                // setters
                handleChangeStep={handleChangeStep}
                validateStep3={validateStep3}
                // backend props
                enquiry_options={enquiry_options}
                venueMessage={venueMessage}
                // validators
                enquiryErr={enquiryErr}
                venueName={venueName}
                // form fields
                showRoomSelect={showRoomSelect}
              />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
