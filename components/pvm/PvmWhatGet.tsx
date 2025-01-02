"use client";
import React from "react";

const PvmWhatGet = () => {
  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-10">
      <div className="px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto">
        <h2 className="text-primary-800 text-4xl font-semibold mb-10">
          Why Venuerific as Your Venue Management Partner?
        </h2>
        <p className="text-secondary-600 font-medium text-xl">
          Venuerific brings the expertise to manage a diverse range of venues
          and host every type of event. Whether it&apos;s a high-profile
          corporate dinner or personal milestones like engagements, birthdays,
          and weddings, we have the solutions and services you need.
        </p>
      </div>

      <div className="relative flex items-center justify-center">
        {/* Dotted Circle */}
        <div
          className="absolute rounded-full border border-dashed border-secondary-200"
          style={{
            width: "500px",
            height: "500px",
            borderWidth: "3px",
            borderSpacing: "10px",
          }}
        ></div>

        <svg
          width="480"
          height="480"
          viewBox="0 0 42 42"
          className="relative"
          style={{ marginTop: "10px" }}
        >
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#477AD2" />
              <stop offset="100%" stopColor="#74CC8C" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9F57F8" />
              <stop offset="45%" stopColor="#71CBE6" />
              <stop offset="100%" stopColor="#74CC8C" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#477AD2" />
              <stop offset="100%" stopColor="#9F57F8" />
            </linearGradient>
          </defs>

          {/* Event Coordination Segment */}
          <circle
            r="15.5"
            cx="21"
            cy="21"
            fill="transparent"
            stroke="url(#gradient1)"
            strokeWidth="7"
            strokeDasharray="31 2 27" // Segment: 31, Gap: 2, Remaining: 67
            strokeDashoffset="0"
            transform="rotate(-90 21 21)"
          />
          {/* Venue Growth Segment */}
          <circle
            r="15.5"
            cx="21"
            cy="21"
            fill="transparent"
            stroke="url(#gradient2)"
            strokeWidth="7"
            strokeDasharray="31 2 67"
            strokeDashoffset="-33" // Adjust offset for segment alignment
            transform="rotate(-90 21 21)"
          />
          {/* Sales and Support Segment */}
          <circle
            r="15.5"
            cx="21"
            cy="21"
            fill="transparent"
            stroke="url(#gradient3)"
            strokeWidth="7"
            strokeDasharray="41 5 87"
            strokeDashoffset="-66" // Adjust offset for segment alignment
            transform="rotate(-90 21 21)"
          />

          <path id="arc1" d="M 21 6 A 15.5 15.5 0 0 1 36 21" fill="none" />
          <path id="arc2" d="M 36 21 A 15.5 15.5 0 0 1 21 36" fill="none" />
          <path id="arc3" d="M 21 36 A 15.5 15.5 0 0 1 6 21" fill="none" />

          <text fontSize="0.14em" fill="#FFFFFF">
            <textPath
              href="#arc1"
              startOffset="50%"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              Event Coordination
            </textPath>
          </text>
          <text fontSize="0.14em" fill="#FFFFFF">
            <textPath
              href="#arc2"
              startOffset="50%"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              Venue Growth
            </textPath>
          </text>
          <text fontSize="0.14em" fill="#FFFFFF">
            <textPath
              href="#arc3"
              startOffset="50%"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              Sales and Support
            </textPath>
          </text>
        </svg>

        <div className="absolute text-center">
          <p className="text-secondary-500 text-[32px] font-semibold">
            VENUE <br /> MANAGEMENT <br /> LIFECYCLE
          </p>
        </div>
      </div>
    </div>
  );
};

export default PvmWhatGet;
