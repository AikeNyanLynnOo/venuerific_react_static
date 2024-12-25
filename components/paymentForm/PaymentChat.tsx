"use client";
import React, { useState } from "react";
import { Tab, Tabs } from "@nextui-org/tabs";
import { twMerge } from "tailwind-merge";

export const PaymentChat = () => {
  const [selectedTab, setSelectedTab] = useState("Chat");

  const tabsData = [
    {
      key: "Chat",
      title: "Chat",
      content: (
        <div
          className="p-4 lg:px-6 lg:pt-16 lg:pb-10 overflow-y-auto max-h-[400px] bg-cover bg-center rounded-[6px]"
          style={{
            backgroundImage: `url('/images/payment_form/chat_bg.webp')`,
          }}
        >
          <div className="space-y-6">
            {/* Incoming Message */}
            <div className="flex items-start space-x-3">
              <img
                src="/images/white_label/agustine_img.webp"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium text-black">
                      Agustine T.
                    </p>
                    <span className="text-green-500 text-xs font-semibold">
                      Online
                    </span>
                  </div>
                  <p className="text-xs text-secondary-400">11:40 AM</p>
                </div>
                <div className="bg-white border rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px] border-secondary-200 p-3 mt-1 text-sm text-black shadow-sm">
                  Welcome to Venuerific, the biggest venue marketplace in Asia.
                  How can we help you?
                </div>
              </div>
            </div>

            {/* Incoming Message */}
            <div className="flex items-start space-x-3">
              <img
                src="/images/white_label/agustine_img.webp"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium text-black">
                      Agustine T.
                    </p>
                    <span className="text-green-500 text-xs font-semibold">
                      Online
                    </span>
                  </div>
                  <p className="text-xs text-secondary-400">11:40 AM</p>
                </div>
                <div className="bg-white border rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px] border-secondary-200 p-3 mt-1 text-sm text-black shadow-sm">
                  We have a catolog ready for you if you need one.
                </div>
              </div>
            </div>

            {/* Outgoing Message */}
            <div className="flex flex-col items-end">
              <div className="flex justify-between items-center w-[70%] mb-1">
                <p className="text-xs text-secondary-400">You</p>
                <p className="text-xs text-secondary-400 text-right">
                  11:40 AM
                </p>
              </div>
              <div className="bg-primary-100 border border-primary-200 rounded-tl-[12px] rounded-br-[12px] rounded-bl-[12px] p-3 mt-1 w-[70%] text-sm text-black shadow-sm">
                Hello, I'm interested in booking this venue, what's my next
                step?
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "Documents",
      title: "Documents",
      content: (
        <div className="p-4 lg:p-6">
          <p className="text-secondary-500 text-sm">
            No documents uploaded yet.
          </p>
        </div>
      ),
    },
  ];

  const currentTab = tabsData.find((tab) => tab.key === selectedTab);

  return (
    <div className="lg:border lg:border-secondary-200 rounded-lg p-0 lg:pb-4 lg:pt-0 lg:px-6 shadow-sm">
      <div className="px-4 md:px-0 max-w-screen-2xl mx-auto">
        {/* Tabs */}
        <Tabs
          aria-label="Chat and Documents Tabs"
          selectedKey={selectedTab}
          color="primary"
          onSelectionChange={(key) => setSelectedTab(key.toString())}
          variant="underlined"
          className={twMerge(
            "border-b border-secondary-200 w-full max-w-screen-2xl mx-auto"
          )}
          classNames={{
            tabList: "p-0 text-left flex gap-x-7 w-auto",
            cursor: "w-full h-0.5 bg-primary-600",
            tab: "h-12 min-w-fit p-0 text-black font-bold",
            tabContent: "min-w-fit p-0",
          }}
        >
          {tabsData.map((tab) => (
            <Tab key={tab.key} title={tab.title}></Tab>
          ))}
        </Tabs>

        {/* Tab Content */}
        <div className="mt-6">{currentTab?.content}</div>
      </div>

      {/* Input Section */}
      {selectedTab === "Chat" && (
        <div className="border-t border-secondary-200 py-4 flex items-center">
          <div className="relative w-full flex items-center">
            <input
              type="text"
              placeholder="Type message"
              className="flex-1 border border-secondary-200 focus:border-secondary-400 outline-none rounded-lg px-4 py-2 text-sm"
            />
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-10"
            >
              <button>
                <img
                  src="/images/icons/attach_icon.png"
                  alt="Attach"
                  className="w-[14px] h-[15px]"
                />
              </button>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-2"
            >
              <button>
                <img
                  src="/images/icons/send-icon.png"
                  alt="Send"
                  className="w-[14px] h-[15px]"
                />
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentChat;
