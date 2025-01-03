"use client";
import React, { useState } from "react";
import InputGroup from "../atoms/InputGroup";
import { Select, SelectItem } from "@nextui-org/select";
import { CaretDown } from "@phosphor-icons/react";
import { Button } from "@nextui-org/button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const RefundPaymentForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [enquiryId, setEnquiryId] = useState("");
  const [problemDescription, setProblemDescription] = useState("");

  const handleEmailChange = (e: any) => setEmail(e.target.value);
  const handleFirstNameChange = (e: any) => setFirstName(e.target.value);
  const handleLastNameChange = (e: any) => setLastName(e.target.value);
  const handlePhoneChange = (value: any) => setPhone(value);
  const handleEnquiryIdChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEnquiryId(e.target.value);
  };

  const handleProblemChange = (e: any) => setProblemDescription(e.target.value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      enquiryId,
      firstName,
      lastName,
      email,
      phone,
      problemDescription,
    });

    setEmail("");
    setFirstName("");
    setLastName("");
    setPhone("");
    setEnquiryId("");
    setProblemDescription("");
  };

  return (
    <div className="w-full mx-auto px-4 md:px-5 lg:px-12 xl:px-20 py-0 md:py-10">
      <div className="mx-auto bg-secondary-100 p-6 md:p-10 rounded-lg">
        <h2 className="text-2xl font-semibold text-black mb-2">
          Still have problem?
        </h2>
        <p className="text-base text-secondary-600 mb-6">
          Send us your information about the enquiry below, and we&apos;ll get
          back to you at the most 5 working days.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Enquiry ID */}
          <div className="mb-6">
            <span className="text-secondary-700 block mb-2 text-sm font-medium">
              Enquiry ID
            </span>
            <Select
              disableAnimation
              aria-label="Select an enquiry ID"
              classNames={{
                trigger:
                  "h-[42px] min-h-10 rounded-lg border border-secondary-300 text-black bg-white",
              }}
              placeholder="Site visits/Bookings"
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
              value={enquiryId}
              onChange={handleEnquiryIdChange}
            >
              <SelectItem key="siteVisits" value="siteVisits">
                Site visits
              </SelectItem>
              <SelectItem key="bookings" value="bookings">
                Bookings
              </SelectItem>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            {/* First Name */}
            <InputGroup
              handleChange={handleFirstNameChange}
              inputLabel={
                <span className="text-secondary-700 block text-sm font-medium">
                  First Name
                </span>
              }
              inputType="text"
              inputValue={firstName}
              placeholder="First name"
            />

            {/* Last Name */}
            <InputGroup
              handleChange={handleLastNameChange}
              inputLabel={
                <span className="text-secondary-700 block text-sm font-medium">
                  Last Name
                </span>
              }
              inputType="text"
              inputValue={lastName}
              placeholder="Last name"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-6 mb-6">
            <InputGroup
              handleChange={handleEmailChange}
              inputLabel={
                <span className="text-secondary-700 block text-sm font-medium">
                  Email
                </span>
              }
              inputType="email"
              inputValue={email}
              placeholder="you@company.com"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-6">
            <span className="text-secondary-700 block mb-2 text-sm font-medium leading-5">
              Phone Number
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
              containerClass="rounded-lg border border-secondary-300 focus:border-secondary-400 hover:border-secondary-400 shadow-sm h-10"
              country={"sg"}
              countryCodeEditable={false}
              disableCountryCode={false}
              disableDropdown={false}
              dropdownClass="border-secondary-200 rounded-xl shadow-sm"
              inputClass="h-full"
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

          {/* Problem Description */}
          <div className="mb-6">
            <span className="text-secondary-700 block mb-2 text-sm font-medium">
              Your Problem
            </span>
            <textarea
              rows={5}
              value={problemDescription}
              onChange={handleProblemChange}
              placeholder="Leave us a message..."
              className="w-full border border-secondary-300 focus:border-secondary-400 outline-none rounded-lg px-4 py-2 text-sm"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            color="primary"
            className="w-full text-white text-sm font-semibold py-3 rounded-lg"
          >
            Send Information
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RefundPaymentForm;
