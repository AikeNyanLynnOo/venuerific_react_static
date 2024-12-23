"use client";
import React, { useState } from "react";
import { ArrowLeft } from "@phosphor-icons/react";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import PaymentChat from "./PaymentChat";

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

  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-0 md:py-10 lg:mt-[81px]">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-screen-2xl mx-auto">
        <div className="col-span-1 lg:col-span-2">
          {/* Back Button and Title */}
          <div className="flex flex-col mb-4 p-4 lg:p-0">
            <a
              href="#"
              className="flex items-center text-primary-700 text-lg font-medium hover:underline"
            >
              <div className="flex items-center text-primary-600 font-semibold">
                <ArrowLeft className="mr-2" size={20} weight="bold" /> Back
              </div>
            </a>
            <h1 className="text-xl font-semibold mt-10">Enquiry Details</h1>
          </div>

          {/* Enquiry Details Section */}
          <div className="border-0 md:border border-secondary-200 rounded-lg p-4 my-8">
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
            <div className="flex-grow border-t border-secondary-200 my-6" />

            {/* Venue Details */}
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

            <div className="flex items-center gap-2 mt-4">
              <img
                src="/images/icons/location.svg"
                alt="Location Icon"
                className="w-[16px] h-[16px] object-contain"
              />
              <p className="text-black text-[14px]">
                The Rise @ Oxley, 71, Oxley Rise, #02-17, Singapore
              </p>
            </div>

            {/* Divider */}
            <div className="flex-grow border-t border-secondary-200 my-6" />

            {/* Host Section */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full flex-shrink-0 mr-4 hidden lg:block">
                  <img
                    src="/images/white_label/agustine_img.webp"
                    alt="Host Avatar"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[12px] font-medium text-secondary-400">
                    Host
                  </h4>
                  <p className="text-[18px] font-semibold text-black">
                    Agustine T.
                  </p>
                  <span className="text-green-500 text-[12px] font-semibold">
                    Online
                  </span>
                </div>
              </div>
              <div className="text-right">
                <h4 className="text-[12px] font-medium text-secondary-400">
                  Average Response Time
                </h4>
                <p className="text-[16px] font-semibold text-black">19 Hours</p>
              </div>
            </div>

            {/* Divider */}
            <div className="flex-grow border-t border-secondary-200 my-4" />

            {/* Info Section */}
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/icons/info-circle.png"
                alt="Info Circle"
                className="w-5 h-5"
              />
              {chipState === "Declined" ? (
                <p className="text-sm text-secondary-500">
                  Venue owner has declined your enquiry. The payment has been
                  refunded to your account. Not yet received the refund?{" "}
                  <a
                    href="#"
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

            {/* Buttons */}
            <div
              className={`grid gap-4 ${
                chipState === "Scheduled" || chipState === "Completed"
                  ? "grid-cols-1"
                  : "grid-cols-2"
              }`}
            >
              {chipState === "Scheduled" && (
                <a href="/" className="w-full">
                  <Button className="bg-primary-600 text-white text-sm font-semibold py-3 px-4 rounded-lg flex justify-center items-center gap-2 w-full">
                    <img
                      src="/images/icons/call.png"
                      alt="Call Icon"
                      className="w-5 h-5"
                    />
                    <span>Call Owner</span>
                  </Button>
                </a>
              )}

              {chipState === "Completed" && (
                <a href="/" className="w-full">
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
                  <a href="/" className="w-full">
                    <Button className="border border-secondary-300 bg-transparent text-sm font-semibold py-3 px-4 rounded-lg w-full">
                      Refund and Cancel Enquiry
                    </Button>
                  </a>

                  <a href="/" className="w-full">
                    <Button className="bg-primary-600 text-white text-sm font-semibold py-3 px-4 rounded-lg flex justify-center items-center gap-2 w-full">
                      <img
                        src="/images/icons/call.png"
                        alt="Call Icon"
                        className="w-5 h-5"
                      />
                      <span>Call Owner</span>
                    </Button>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Side Section */}
        <div className="hidden lg:block col-span-3 mt-[127px]">
          <PaymentChat />
        </div>
      </div>
    </div>
  );
};

export default PaymentFormEnquiryDetails;
