"use client";
import Image from "next/image";
import whyVenueListHero from "../../public/images/hero_imgs/why_venue_list_hero.png";
import whyVenueListImg1 from "../../public/images/why_venue_list/why_venue_list_img1.png";
import React from "react";

const WhyVenueListHero = () => {
  return (
    <div>
      <div className="relative flex flex-col items-center justify-center bg-gray-100 py-20 lg:px-16 lg:flex-row">
        <div className="absolute inset-0 w-full z-0">
          <Image
            src={whyVenueListHero}
            alt="Venue background image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="opacity-100"
            priority
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gray opacity-40"></div>

        {/* Content Section */}
        <div className="max-w-screen-xl mx-auto px-8 lg:w-3/5 lg:pr-8 space-y-4 text-center lg:text-left text-white z-20 relative">
          <h1 className="text-3xl lg:text-5xl font-normal">
            Get More Leads with Venuerific
          </h1>
          <p className="text-white text-lg max-w-[60ch]">
            Transform your venue with Venuerific, making it easy to generate
            more leads, manage them, and convert them into revenue.
          </p>
          <div className="bg-transparent sm:bg-gradient-to-r sm:from-[#9C3EF3] sm:to-[#4E8CFF] rounded-md p-3 inline-block">
            <p className="text-white font-normal sm:font-semibold text-lg">
              On average, Venuerific venues earn up to $30,000 per month.
            </p>
          </div>

          {/* G2 User Ratings */}
          <div className="items-center mt-6 hidden sm:flex">
            <div className="flex-shrink-0 h-[120px] w-[80px] flex items-center">
              <Image
                src={whyVenueListImg1}
                alt="G2 User Ratings Logo"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>

            {/* Text beside logo */}
            <div className="flex flex-col justify-center">
              <p className="text-[14px] text-white leading-none">
                G2 User Ratings
              </p>
              <div className="flex items-center mt-2 leading-none">
                <span className="text-yellow-500">
                  <svg
                    className="w-[34px] h-[34px]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927a.75.75 0 011.902 0l1.502 4.632h4.867a.75.75 0 01.466 1.34l-3.937 2.869 1.503 4.632a.75.75 0 01-1.152.826l-3.938-2.87-3.937 2.87a.75.75 0 01-1.153-.826l1.503-4.632-3.937-2.87a.75.75 0 01.466-1.34h4.867l1.502-4.632z" />
                  </svg>
                </span>
                <span className="text-[30px] text-white ml-1">4.6</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div
          className="max-w-screen-xl mx-auto px-8 lg:w-2/5 lg:pl-8 bg-white p-6 shadow-lg rounded-lg space-y-4 z-20 relative hidden sm:block"
          style={{ borderRadius: "12px" }}
        >
          <h2 className="text-xl font-semibold text-gray-800">
            Fill out the form to speak with our experts
          </h2>
          <p className="text-gray-600">
            to see how Venuerific can help your venue.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col text-gray-700 font-normal">
                <span className="flex items-center">
                  First Name<span className="text-red-500 ml-1">*</span>
                </span>
                <input
                  type="text"
                  placeholder="Your first name"
                  className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                  required
                />
              </label>
              <label className="flex flex-col text-gray-700 font-normal">
                <span className="flex items-center">
                  Last Name<span className="text-red-500 ml-1">*</span>
                </span>
                <input
                  type="text"
                  placeholder="Your last name"
                  className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                  required
                />
              </label>
              <label className="flex flex-col text-gray-700 font-normal">
                <span className="flex items-center">
                  Venue Name<span className="text-red-500 ml-1">*</span>
                </span>
                <input
                  type="text"
                  placeholder="Your venue name"
                  className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                  required
                />
              </label>
              <label className="flex flex-col text-gray-700 font-normal">
                Venue Website
                <input
                  type="text"
                  placeholder="Your venue website"
                  className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col text-gray-700 font-normal">
                <span className="flex items-center">
                  Email Address<span className="text-red-500 ml-1">*</span>
                </span>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                  required
                />
              </label>
              <label className="flex flex-col text-gray-700 font-normal">
                <span className="flex items-center">
                  Phone Number<span className="text-red-500 ml-1">*</span>
                </span>
                <input
                  type="text"
                  placeholder="Your phone number"
                  className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                  required
                />
              </label>
            </div>

            <label className="flex flex-col text-gray-700 font-normal">
              <span className="flex items-center">Country</span>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                required
              >
                <option>Select your country</option>
                <option>Singapore</option>
                <option>Malaysia</option>
                <option>Indonesia</option>
              </select>
            </label>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold p-2 rounded-lg"
            >
              Schedule a Demo
            </button>
          </form>
        </div>
      </div>

      <div
        className="max-w-screen-xl mx-auto px-8 lg:w-2/5 lg:pl-8 bg-white p-6 shadow-lg rounded-lg space-y-4 z-20 relative block sm:hidden"
        style={{ borderRadius: "12px" }}
      >
        <h2 className="text-xl font-semibold text-gray-800">
          Fill out the form to speak with our experts
        </h2>
        <p className="text-gray-600">
          to see how Venuerific can help your venue.
        </p>

        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex flex-col text-gray-700 font-normal">
              <span className="flex items-center">
                First Name<span className="text-red-500 ml-1">*</span>
              </span>
              <input
                type="text"
                placeholder="Your first name"
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                required
              />
            </label>
            <label className="flex flex-col text-gray-700 font-normal">
              <span className="flex items-center">
                Last Name<span className="text-red-500 ml-1">*</span>
              </span>
              <input
                type="text"
                placeholder="Your last name"
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                required
              />
            </label>
            <label className="flex flex-col text-gray-700 font-normal">
              <span className="flex items-center">
                Venue Name<span className="text-red-500 ml-1">*</span>
              </span>
              <input
                type="text"
                placeholder="Your venue name"
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                required
              />
            </label>
            <label className="flex flex-col text-gray-700 font-normal">
              Venue Website
              <input
                type="text"
                placeholder="Your venue website"
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
              />
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex flex-col text-gray-700 font-normal">
              <span className="flex items-center">
                Email Address<span className="text-red-500 ml-1">*</span>
              </span>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                required
              />
            </label>
            <label className="flex flex-col text-gray-700 font-normal">
              <span className="flex items-center">
                Phone Number<span className="text-red-500 ml-1">*</span>
              </span>
              <input
                type="text"
                placeholder="Your phone number"
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                required
              />
            </label>
          </div>

          <label className="flex flex-col text-gray-700 font-normal">
            <span className="flex items-center">Country</span>
            <select
              className="w-full p-2 border border-gray-300 rounded-lg mt-1"
              required
            >
              <option>Select your country</option>
              <option>Singapore</option>
              <option>Malaysia</option>
              <option>Indonesia</option>
            </select>
          </label>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold p-2 rounded-lg"
          >
            Schedule a Demo
          </button>
        </form>
      </div>

      {/* G2 User Ratings */}
      <div className="items-center mt-6 sm:hidden flex justify-center">
        {/* G2 Logo */}
        <div className="flex-shrink-0 h-[120px] w-[80px] flex items-center">
          <Image
            src={whyVenueListImg1}
            alt="G2 User Ratings Logo"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Text beside logo */}
        <div className="flex flex-col justify-center">
          <p className="text-[14px] text-secondary-500 leading-none">
            G2 User Ratings
          </p>
          <div className="flex items-center mt-2 leading-none">
            <span className="text-yellow-500">
              <svg
                className="w-[34px] h-[34px]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927a.75.75 0 011.902 0l1.502 4.632h4.867a.75.75 0 01.466 1.34l-3.937 2.869 1.503 4.632a.75.75 0 01-1.152.826l-3.938-2.87-3.937 2.87a.75.75 0 01-1.153-.826l1.503-4.632-3.937-2.87a.75.75 0 01.466-1.34h4.867l1.502-4.632z" />
              </svg>
            </span>
            <span className="text-[30px] ml-1">4.6</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyVenueListHero;
