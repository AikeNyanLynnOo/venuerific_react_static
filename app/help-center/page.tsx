"use client";
import { useState } from "react";
import { cookies } from "next/headers";
import { ContactUsSection } from "@/components/molecules/ContactUsSection";
import { getHeaderFooter } from "@/utils/apiFunctions";
import Image from "next/image";
import helpCenterImage1 from "../../public/images/help_center/helpCenterImage1.png";
import helpCenterImage2 from "../../public/images/help_center/helpCenterImage2.png";
import helpCenterImage3 from "../../public/images/help_center/helpCenterImage3.png";
import helpCenterImage4 from "../../public/images/help_center/helpCenterImage4.png";

export default function HelpCenterPage() {
  const [activeTab, setActiveTab] = useState("Event Planner");

  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <section className="bg-blue-600 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-semibold mb-4">
              Hi there, how can we help? 👋
            </h1>
            <div className="flex justify-center mt-4">
              <input
                type="text"
                placeholder="Enter your email"
                className="px-4 py-2 w-full max-w-md rounded-l-md border border-transparent focus:border-blue-300 focus:outline-none"
              />
              <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-r-md hover:bg-gray-200">
                Search
              </button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-8 py-[42px]">
          <div className="flex space-x-6 border-b-2 border-gray-300 pb-4 mb-6">
            <button
              onClick={() => setActiveTab("Event Planner")}
              className={`text-lg text-gray-600 hover:text-blue-600 focus:outline-none ${
                activeTab === "Event Planner"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : ""
              }`}
            >
              Event Planner
            </button>
            <button
              onClick={() => setActiveTab("Venues Owner")}
              className={`text-lg text-gray-600 hover:text-blue-600 focus:outline-none ${
                activeTab === "Venues Owner"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : ""
              }`}
            >
              Venues Owner
            </button>
          </div>
        </section>

        <section className="container mx-auto px-8 py-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">
              Getting Started With Venuerific
            </h2>
            <a href="#" className="text-blue-600 hover:underline">
              Browse all topics →
            </a>
          </div>

          {/* Card Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative bg-white shadow-md rounded-lg overflow-hidden">
              <Image
                src={helpCenterImage1}
                alt="Planning Enquiries"
                width={301}
                height={356}
                className="w-full h-[356px] object-cover"
              />
            </div>

            <div className="relative bg-white shadow-md rounded-lg overflow-hidden">
              <Image
                src={helpCenterImage2}
                alt="Booking Enquiries"
                width={301}
                height={356}
                className="w-full h-[356px] object-cover"
              />
            </div>

            <div className="relative bg-white shadow-md rounded-lg overflow-hidden">
              <Image
                src={helpCenterImage3}
                alt="Forget Venuerific Account Details"
                width={301}
                height={356}
                className="w-full h-[356px] object-cover"
              />
              <div className="absolute bottom-0 w-full text-white text-center py-2 font-semibold">
                Forget Venuerific Account Details
              </div>
            </div>

            <div className="relative bg-white shadow-md rounded-lg overflow-hidden">
              <Image
                src={helpCenterImage4}
                alt="Cancellation of Bookings"
                width={301}
                height={356}
                className="w-full h-[356px] object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
