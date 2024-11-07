import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";
import { useEffect, useState } from "react";
import { Input } from "@nextui-org/input";
import PhoneInput from "react-phone-input-2";
import { Checkbox } from "@nextui-org/checkbox";
import Image from "next/image";
import { CaretDown } from "@phosphor-icons/react";
import { Select, SelectItem } from "@nextui-org/select";
import { Radio, RadioGroup } from "@nextui-org/radio";
import { Button } from "@nextui-org/button";

import { fontVnf } from "@/config/fonts";

interface VenueWhatsAppFormModalProps {
  isOpen: boolean;
  placement: any;
  onOpenChange: any;
  isCall: boolean;
}

export const VenueWhatsAppFormModal = ({
  isOpen,
  placement,
  onOpenChange,
  isCall,
}: VenueWhatsAppFormModalProps) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(0);
  }, [isCall]);

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
              {(step === 0 && "WhatsApp Enquiry") || "Call Host"}
            </ModalHeader>
            <ModalBody className="p-5 pt-0">
              {step === 0 && (
                <div className="flex flex-col gap-4">
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
                  <div className="w-full">
                    <span className="text-secondary-700 mb-2 block text-sm font-medium leading-5">
                      Event Name
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
                      placeholder="Your event name"
                      radius="sm"
                      type="email"
                      variant="flat"
                    />
                  </div>
                  <div className="w-full">
                    <span className="text-secondary-700 mb-2 block text-sm font-medium leading-5">
                      Event Type
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
                          className="w-[20px] h-[20px] object-cover mr-1"
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
                  <div className="w-full">
                    <RadioGroup
                      label={
                        <span className="text-secondary-700 mb-2 block text-sm font-medium leading-5">
                          Urgency
                        </span>
                      }
                    >
                      <Radio size="sm" value="urgent">
                        Urgently looking for a venue (need a reply within 24
                        hours)
                      </Radio>
                      <Radio
                        className="text-sm font-medium leading-5 text-secondary-700"
                        size="sm"
                        value="just_shopping"
                      >
                        Just shopping around for quotation (can reply within 3-5
                        days)
                      </Radio>
                      <Radio
                        className="text-sm font-medium leading-5 text-secondary-700"
                        size="sm"
                        value="interested"
                      >
                        Interested to do site visit (choose preferred date &
                        time)
                      </Radio>
                    </RadioGroup>
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
                        if (isCall) {
                          setStep(1);
                        } else {
                          onClose();
                        }
                      }}
                    >
                      {(isCall && "Next") || "Continue"}
                    </Button>
                  </div>
                </div>
              )}
              {step === 1 && (
                <div className="flex flex-col gap-4">
                  <div className="w-full">
                    <span className="text-secondary-700 block mb-2 text-sm font-medium leading-5">
                      Enter your phone number
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
                    <p className="w-full flex items-center mt-2 text-secondary-500 text-sm font-normal leading-5">
                      Your number will be shown to the venue owner you are about
                      to call for follow-up purposes.
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-x-2">
                    <Button
                      className="flex-1 rounded-lg w-full md:w-auto bg-white min-w-10 px-2 lg:px-3"
                      color="default"
                      variant="bordered"
                      onClick={() => setStep(0)}
                    >
                      Back
                    </Button>
                    <Button
                      className="rounded-lg flex-1 w-full bg-primary-600 min-w-10 p-2.5"
                      color="primary"
                      variant="solid"
                      onClick={() => {}}
                    >
                      Proceed to Call
                    </Button>
                  </div>
                </div>
              )}
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
