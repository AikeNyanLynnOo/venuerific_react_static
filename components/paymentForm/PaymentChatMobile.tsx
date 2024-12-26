"use client";
import React from "react";
import { Button } from "@nextui-org/button";

export const PaymentChatMobile = () => {
  return (
    <div
      className="h-screen w-full flex flex-col"
      style={{
        backgroundImage: `url('/images/payment_form/chat_bg.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex-1 flex flex-col w-full">
        {/* Chat Section */}
        <div className="px-4 py-4 space-y-6 overflow-y-auto flex-1 w-full">
          {/* Incoming Messages */}
          <div className="flex items-start space-x-3 w-full">
            <div className="max-w-[75%]">
              <div className="bg-white border rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px] border-secondary-200 p-3 text-sm text-black shadow-sm w-full">
                Welcome to Venuerific, the biggest venue marketplace in Asia.
                How can we help you?
              </div>
              <p className="text-xs text-secondary-400 text-right mt-2">
                11:40 AM
              </p>
            </div>
          </div>

          {/* Outgoing Messages */}
          <div className="flex flex-col items-end w-full">
            <div className="bg-primary-100 border border-primary-200 rounded-tl-[12px] rounded-br-[12px] rounded-bl-[12px] p-3 w-[75%] text-sm text-black shadow-sm">
              Hello, I'm interested in booking this venue, what's my next step?
            </div>
            <p className="text-xs text-secondary-400 text-right mt-2">
              11:40 AM
            </p>
          </div>
        </div>

        <div className="flex items-center w-full shadow-lg">
          <div className="relative w-full flex items-center shadow-lg ">
            <input
              type="text"
              placeholder="Type message"
              className="flex-1 px-4 py-6 text-[16px] shadow-lg focus:border-secondary-400 outline-none"
            />
            <Button
              isIconOnly
              className="absolute right-4 flex items-center justify-center bg-transparent"
            >
              <img
                src="/images/icons/send-icon.png"
                alt="Send"
                className="w-[20px] h-[20px]"
              />
            </Button>
            <Button
              isIconOnly
              className="absolute right-14 flex items-center justify-center bg-transparent"
            >
              <img
                src="/images/icons/attach_icon.png"
                alt="Attach"
                className="w-[20px] h-[20px]"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentChatMobile;
