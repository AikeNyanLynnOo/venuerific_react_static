"use client";
import React, { useState } from "react";
import { Star } from "@phosphor-icons/react";
import { ArrowLeft } from "@phosphor-icons/react";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import PaymentChat from "./PaymentChat";
import { useDisclosure } from "@nextui-org/modal";
import { PaymentChatFormModal } from "../molecules/modals/PaymentChatFormModal";

const PaymentFormEnquiryDetails = () => {
  const [chipState, setChipState] = useState("Unread");

  const getChipColor = () => {
    switch (chipState) {
      case "Unread":
        return "warning";
      case "Scheduled":
        return "success";
      case "Completed":
        return "success";
      case "Declined":
        return "danger";
      default:
        return "default";
    }
  };

  const renderBudgetOrStatus = () => {
    if (chipState === "Completed") {
      return (
        <div className="flex items-center gap-2">
          <p className="text-[16px] text-black">4,000 SGD</p>
          <Chip color="primary" variant="flat" className="font-semibold">
            <span className="font-semibold">Paid</span>
          </Chip>
        </div>
      );
    } else {
      return (
        <div className="flex items-center gap-2">
          <p className="text-[16px] text-black">4,000 SGD</p>
          <img
            src="/images/payment_form/google_pay.webp"
            alt="Google Pay"
            className="w-[32px] h-[13px] border border-secondary-100 rounded-[4px] p-[8px] box-content"
          />
        </div>
      );
    }
  };

  const paymentChatFormModal = useDisclosure();

  const handleOpenChatModal = () => {
    paymentChatFormModal.onOpen();
    console.log("Modal opened:", paymentChatFormModal.isOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    handleOpenChatModal();
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    paymentChatFormModal.onClose();
  };

  return (
    <div className="w-full mx-auto px-0 lg:px-5 xl:px-20 py-0 lg:py-10 lg:mt-[81px]">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-screen-2xl mx-auto">
        <div className="col-span-1 lg:col-span-2">
          {/* Back Button and Title */}
          <div className="flex flex-col mb-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center text-primary-700 text-lg font-medium hover:underline"
            >
              <ArrowLeft className="mr-2" size={20} weight="bold" />
              Back
            </a>

            <div className="flex items-center justify-between lg:hidden shadow-md p-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600"
              >
                <ArrowLeft className="mr-2" size={20} weight="bold" />
              </a>
              <h1 className="text-xl font-semibold text-black flex-1 text-left">
                Enquiry Details
              </h1>
            </div>
            <h1 className="text-xl font-semibold mt-10 lg:block hidden">
              Enquiry Details
            </h1>
          </div>

          {/* Enquiry Details Section */}
          <div className="border-0 lg:border border-secondary-200 rounded-lg p-4 my-4 lg:my-8">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm text-black">
                  Enquiry ID <span className="font-semibold">12345AV345</span>
                </p>
                <p className="text-sm text-secondary-600">
                  Enquiry date Oct 20, 2022 - 10.42 pm
                </p>
              </div>
              <Chip color={getChipColor()} variant="flat">
                <span className="font-semibold">{chipState}</span>
              </Chip>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/icons/payment_calendar.png"
                alt="Payment Calendar"
                className="w-5 h-5"
              />
              <h2 className="text-lg font-semibold">
                Event name inputted by the user
              </h2>
            </div>
            <p className="text-sm text-secondary-600">
              Monday, Dec 25, 2024 @ 10.00 - 16.00
            </p>

            {/* Event Details */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-sm text-secondary-500">Attendees</p>
                <p className="text-[16px] text-black">13 Pax</p>
              </div>
              <div>
                <p className="text-sm text-secondary-500">Duration</p>
                <p className="text-[16px] text-black">6 Hour</p>
              </div>
              <div>
                <p className="text-sm text-secondary-500">Event Type</p>
                <p className="text-[16px] text-black">Indoor Wedding</p>
              </div>
              <div>
                <p className="text-sm text-secondary-500">Budget</p>
                {renderBudgetOrStatus()}
              </div>
              <div>
                <p className="text-sm text-secondary-500">Room</p>
                <p className="text-[16px] text-black">Indoor Wedding</p>
              </div>
              <div>
                <p className="text-sm text-secondary-500">Room</p>
                <p className="text-[16px] text-black">Indoor Wedding</p>
              </div>
            </div>

            {/* Divider */}
            <div className="flex-grow border-t border-secondary-200 my-6 hidden lg:block" />

            {/* Venue and Host Section Container */}
            <div className="flex flex-col gap-4 border rounded-lg lg:border-0 md:p-0 mt-6 lg:mt-0 mb-36 lg:mb-0">
              {/* Venue Details */}
              <div className="flex flex-col px-4 lg:px-0 pt-4 lg:pt-0">
                <div className="flex gap-4">
                  <img
                    src="/images/white_label/distrii_sg.webp"
                    alt="Distrii Singapore"
                    className="w-[70px] h-[70px] object-cover flex-shrink-0 border rounded-lg"
                  />
                  <div className="flex-1">
                    <h2 className="text-primary-600 font-semibold text-[20px]">
                      Distrii Singapore
                    </h2>
                    <div className="flex items-center gap-1 mt-2">
                      <Star color="#F8D830" size={15} weight="fill" />
                      <span className="text-black text-[14px] font-medium">
                        4,6
                      </span>
                      <span className="text-primary-600 text-[14px]">
                        24 Reviews
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <img
                    src="/images/icons/location.svg"
                    alt="Location Icon"
                    className="w-4 h-4 object-contain"
                  />
                  <p className="text-black text-[14px]">
                    The Rise @ Oxley, 71, Oxley Rise, #02-17, Singapore
                  </p>
                </div>
                <Button className="mt-4 block w-full border border-secondary-300 text-secondary-700 bg-transparent text-sm font-semibold py-3 px-4 rounded-lg lg:hidden">
                  Call Venues
                </Button>
              </div>

              {/* Divider */}
              <div className="flex-grow border-t border-secondary-200" />

              {/* Host Section */}
              <div className="flex flex-col lg:flex-row lg:justify-between items-start">
                {/* Avatar and Name */}
                <div className="flex items-center px-4 lg:px-0">
                  <div className="w-16 h-16 rounded-full flex-shrink-0 mr-4">
                    <img
                      src="/images/white_label/agustine_img.webp"
                      alt="Host Avatar"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    {/* For Desktop */}
                    <h4 className="text-[12px] font-medium text-secondary-400 hidden lg:block">
                      Host
                    </h4>
                    <p className="text-[18px] font-semibold text-black">
                      Agustine T.
                    </p>
                    <span className="text-green-500 text-[12px] font-semibold hidden lg:block mt-1">
                      Online
                    </span>
                  </div>
                </div>

                {/* For Desktop */}
                <div className="hidden lg:block text-right">
                  <h4 className="text-[12px] font-medium text-secondary-400">
                    Average Response Time
                  </h4>
                  <p className="text-[16px] font-semibold text-black">
                    19 Hours
                  </p>
                </div>

                {/* For Mobile and Tablet */}
                <div className="block lg:hidden w-full mt-4">
                  <div className="bg-primary-100 rounded-bl-lg rounded-br-lg px-4 py-4">
                    <div className="flex justify-between items-center">
                      <h4 className="text-[12px] font-medium text-secondary-500">
                        Average Response Time
                      </h4>
                      <p className="text-[16px] font-semibold text-black">
                        19 Hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex-grow border-t border-secondary-200 my-4" />

            {/* Info and Buttons Section */}
            <div className="lg:static fixed bottom-0 left-0 w-full bg-white shadow-lg lg:shadow-none px-4 py-4 lg:px-0">
              {/* Info Section */}
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/images/icons/info-circle.png"
                  alt="Info Circle"
                  className="w-4 h-4"
                />
                {chipState === "Declined" ? (
                  <p className="text-sm text-secondary-500">
                    Venue owner has declined your enquiry. The payment has been
                    refunded to your account. Not yet received the refund?{" "}
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 underline underline-offset-4"
                    >
                      Contact us here
                    </a>
                  </p>
                ) : (
                  <p className="text-sm text-secondary-500">
                    Once enquiry scheduled, you can refund the payment.
                  </p>
                )}
              </div>

              {/* Buttons Section */}
              <div
                className={`grid gap-4 ${
                  chipState === "Scheduled" || chipState === "Completed"
                    ? "grid-cols-1"
                    : "grid-cols-2"
                }`}
              >
                {chipState === "Scheduled" && (
                  <>
                    {/* Call Owner Button for Desktop */}
                    <Button className="bg-primary-600 text-white text-sm font-semibold py-3 px-4 rounded-lg w-full hidden lg:flex">
                      <img
                        src="/images/icons/call.png"
                        alt="Call Icon"
                        className="w-5 h-5"
                      />
                      <span>Call Owner</span>
                    </Button>

                    {/* Chat Owner Button for Mobile and Tablet */}
                    <Button
                      className="bg-primary-600 text-white text-sm font-semibold py-3 px-4 rounded-lg flex justify-center items-center gap-2 w-full lg:hidden"
                      onClick={handleClick}
                    >
                      <img
                        src="/images/icons/payment_chat.png"
                        alt="Chat Icon"
                        className="w-5 h-5"
                      />
                      <span>Chat Owner</span>
                    </Button>
                  </>
                )}

                {chipState === "Completed" && (
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="bg-primary-600 text-white text-sm font-semibold py-3 px-4 rounded-lg flex justify-center items-center gap-2 w-full">
                      <img
                        src="/images/icons/review_venue_icon.png"
                        alt="Review Icon"
                        className="w-5 h-5"
                      />
                      <span>Review Venue</span>
                    </Button>
                  </a>
                )}

                {chipState === "Unread" && (
                  <>
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button className="border border-secondary-300 text-secondary-700 bg-transparent text-sm font-semibold py-3 px-4 rounded-lg w-full">
                        <span className="hidden lg:inline">
                          Refund and Cancel Enquiry
                        </span>
                        <span className="lg:hidden">Refund & Cancel</span>
                      </Button>
                    </a>

                    {/* Call Owner Button for Desktop */}
                    <Button className="hidden lg:flex bg-primary-600 text-white text-sm font-semibold py-3 px-4 rounded-lg justify-center items-center gap-2 w-full">
                      <img
                        src="/images/icons/call.png"
                        alt="Call Icon"
                        className="w-5 h-5"
                      />
                      <span>Call Owner</span>
                    </Button>

                    {/* Chat Owner Button for Mobile and Tablet */}
                    <Button
                      className="bg-primary-600 text-white text-sm font-semibold py-3 px-4 rounded-lg flex justify-center items-center gap-2 w-full lg:hidden"
                      onClick={handleClick}
                    >
                      <img
                        src="/images/icons/payment_chat.png"
                        alt="Chat Icon"
                        className="w-5 h-5"
                      />
                      <span>Chat Owner</span>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <PaymentChatFormModal
          isOpen={paymentChatFormModal.isOpen}
          onOpenChange={(isModalOpen) => {
            if (!isModalOpen) {
              handleCloseModal();
            }
          }}
          chipState={chipState}
          getChipColor={getChipColor}
        />
        {/* Side Section */}
        <div className="hidden lg:block col-span-3 mt-[127px]">
          <PaymentChat />
        </div>
      </div>
    </div>
  );
};

export default PaymentFormEnquiryDetails;
