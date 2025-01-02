"use client";
import React from "react";

const PvmWhatGetUpdate = () => {
  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-10">
      <div className="px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto">
        <h2 className="text-primary-800 text-4xl font-semibold mb-10">
          Why Venuerific as Your Venue Management Partner?
        </h2>
        <p className="text-secondary-600 font-medium text-xl mb-20">
          Venuerific brings the expertise to manage a diverse range of venues
          and host every type of event. Whether it&apos;s a high-profile
          corporate dinner or personal milestones like engagements, birthdays,
          and weddings, we have the solutions and services you need.
        </p>
      </div>

      {/* Circle Arrangement with Outer Dotted Circle */}
      <div className="relative w-[500px] h-[500px] mx-auto">
        {/* Outer Dotted Circle */}
        <div
          className="absolute w-[470px] h-[470px] border-[3px] border-dashed border-secondary-200 rounded-full"
          style={{
            top: "-20px",
            left: "23px",
          }}
        ></div>

        <div className="absolute w-[500px] h-[500px] pointer-events-none">
          {/* Bottom CaretDown */}
          <div
            className="absolute"
            style={{
              bottom: "39px",
              left: "54%",
              transform: "translateX(-50%) rotate(90deg)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="#7C98B6"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* Left CaretDown */}
          <div
            className="absolute"
            style={{
              top: "15%",
              left: "60px",
              transform: "translateY(-50%) rotate(210deg)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="#7C98B6"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* Right CaretDown */}
          <div
            className="absolute"
            style={{
              top: "15%",
              right: "42px",
              transform: "translateY(-50%) rotate(-30deg)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="#7C98B6"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Text */}
        <div
          className="absolute text-secondary-500 text-[28px] font-semibold text-center"
          style={{
            top: "42%",
            left: "52%",
            transform: "translate(-50%, -50%)",
          }}
        >
          VENUE <br />
          MANAGEMENT <br />
          LIFECYCLE
        </div>

        {/* Event Coordination */}
        <div
          className="absolute w-[300px] h-[340px]"
          style={{
            top: "0",
            left: "30%",
            transform: "translate(-50%, 0)",
          }}
        >
          <img
            src="/images/pvm/event_coordination.png"
            alt="Event Coordination"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Sales and Support */}
        <div
          className="absolute w-[300px] h-[300px]"
          style={{
            top: "0",
            right: "25%",
            transform: "translate(50%, 0)",
          }}
        >
          <img
            src="/images/pvm/sales_and_support.png"
            alt="Sales and Support"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Venue Growth */}
        <div
          className="absolute w-[370px] h-[360px]"
          style={{
            bottom: "-25px", 
            left: "52%",
            transform: "translate(-50%, 2%)",
          }}
        >
          <img
            src="/images/pvm/venue_growth.png"
            alt="Venue Growth"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default PvmWhatGetUpdate;
