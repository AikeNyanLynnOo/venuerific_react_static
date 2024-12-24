"use client";
import React from "react";

export const PaymentChatMobile = () => {
  return (
    <div
      className="h-screen flex flex-col"
      style={{
        backgroundImage: `url('/images/payment_form/chat_bg.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="md:px-0 max-w-screen-2xl mx-auto flex-1 flex flex-col">
        <div className="px-4 py-4 space-y-6 overflow-y-auto flex-1">
          {/* Incoming Messages */}
          <div className="flex items-start space-x-3 mt-52">
            <div>
              <div className="bg-white border rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px] border-secondary-200 p-3 text-sm text-black shadow-sm">
                Welcome to Venuerific, the biggest venue marketplace in Asia.
                How can we help you?
              </div>
              <p className="text-xs text-secondary-400 text-right mt-2">
                11:40 AM
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div>
              <div className="bg-white border rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px] border-secondary-200 p-3 text-sm text-black shadow-sm">
                Welcome to Venuerific, the biggest venue marketplace in Asia.
                How can we help you?
              </div>

              <p className="text-xs text-secondary-400 text-right mt-2">
                11:40 AM
              </p>
            </div>
          </div>

          {/* Outgoing Messages */}
          <div className="flex flex-col items-end">
            <div className="bg-primary-100 border border-primary-200 rounded-tl-[12px] rounded-br-[12px] rounded-bl-[12px] p-3 w-[70%] text-sm text-black shadow-sm">
              Hello, I'm interested in booking this venue, what's my next step?
            </div>
            <p className="text-xs text-secondary-400 text-right mt-2">
              11:40 AM
            </p>
          </div>
        </div>

        {/* Input Section */}
        <div className="border-t border-secondary-200 flex items-center">
          <div className="relative w-full flex items-center">
            <input
              type="text"
              placeholder="Type message"
              className="flex-1 border border-secondary-200 focus:border-secondary-400 outline-none rounded-lg px-4 py-6 text-[16px] pr-16" 
            />
            <a
              href="#"
              className="absolute right-4 flex items-center justify-center"
            >
              <button>
                <img
                  src="/images/icons/send-icon.png"
                  alt="Send"
                  className="w-[20px] h-[20px]"
                />
              </button>
            </a>
            <a
              href="#"
              className="absolute right-14 flex items-center justify-center"
            >
              <button>
                <img
                  src="/images/icons/attach_icon.png"
                  alt="Attach"
                  className="w-[20px] h-[20px]"
                />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentChatMobile;
