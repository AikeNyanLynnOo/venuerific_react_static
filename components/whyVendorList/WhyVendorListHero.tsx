"use client";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const WhyVendorListHero = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="mt-[81px]">
      <div className="relative flex flex-col items-center justify-center bg-gray-100 py-20 lg:px-16 lg:flex-row">
        <div className="absolute inset-0 w-full z-0">
          <Image
            src={
              isMobile
                ? "/images/hero_imgs/why_vendor_list_hero_mobile.webp"
                : "/images/hero_imgs/why_vendor_list_hero.webp"
            }
            alt="Venue background image"
            className="opacity-100 h-full w-full object-cover"
            priority
            height={500}
            width={1500}
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gray opacity-40" />

        {/* Content Section */}
        <div className="max-w-3xl mx-auto px-8 lg:w-3/5 lg:pr-8 space-y-4 text-center lg:text-left text-white z-20 relative">
          <h1 className="text-3xl lg:text-5xl font-normal leading-loose">
            <span className="hidden sm:block">
              Unlock new revenue opportunities
            </span>
            <span className="block font-semibold sm:hidden">
              We are on a Mission to Bring Vendor Listing Opportunities to YOUR
              country!
            </span>
          </h1>

          <p className="text-white text-lg max-w-[60ch]">
            <span className="hidden sm:block">
              With Venuerific, you're on Asia's largest platform in the events
              and venues business.
            </span>
            <span className="block sm:hidden">
              Get ahead of the competition, be first in joining our vendor
              listing waiting list!
            </span>
          </p>

          <div className="block md:block lg:hidden mt-8">
            <div className="flex flex-row justify-center align-center md:space-x-1">
              <div className="flex flex-col w-fit mr-4">
                <div className="border border-white backdrop-filter justify-center backdrop-blur-md bg-gray-300 bg-opacity-30 text-white px-6 py-3 rounded-md flex items-center space-x-2">
                  <Image
                    src="/images/why_vendor_list/vendor_hero_mobile_icon1.webp"
                    alt="Active Users Icon"
                    width={18}
                    height={18}
                  />
                  <div className="flex flex-col items-start px-3">
                    <div className="text-xl font-semibold">1000+</div>
                    <div className="text-sm">Active users</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-fit">
                <div className="border border-white backdrop-filter justify-center backdrop-blur-md bg-gray-300 bg-opacity-30 text-white px-6 py-3 rounded-md flex items-center space-x-2">
                  <Image
                    src="/images/why_vendor_list/vendor_hero_mobile_icon2.webp"
                    alt="Registered Venues Icon"
                    width={18}
                    height={18}
                  />
                  <div className="flex flex-col items-start">
                    <div className="text-xl font-semibold">500+</div>
                    <div className="text-sm text-left">Registered venues</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Form Section */}
        <div className="max-w-screen-xl mx-auto px-8 lg:w-2/5 lg:pl-8 bg-white p-6 shadow-lg rounded-lg space-y-4 z-20 relative hidden lg:block">
          <h2 className="text-xl font-semibold text-gray-800">
            Grow your vendor business with Venuerific.
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col text-gray-700 font-normal">
                <span className="flex items-center">
                  First Name<span className="text-red-500 ml-1">*</span>
                </span>
                <input
                  type="text"
                  placeholder="Your first name"
                  className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:border-secondary-400 outline-none"
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
                  className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:border-secondary-400 outline-none"
                  required
                />
              </label>
            </div>

            <label className="flex flex-col text-gray-700 font-normal">
              <span className="flex items-center">
                Vendor Name<span className="text-red-500 ml-1">*</span>
              </span>
              <input
                type="text"
                placeholder="Your venue name"
                className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:border-secondary-400 outline-none"
                required
              />
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col text-gray-700 font-normal">
                <span className="flex items-center">
                  Email Address<span className="text-red-500 ml-1">*</span>
                </span>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:border-secondary-400 outline-none"
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
                  className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:border-secondary-400 outline-none"
                  required
                />
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-lg"
            >
              Next
            </button>
          </form>
          <div className="mt-4 text-black">
            <p>Need help for your registered vendor information?</p>
            <a
              href="#contact-us"
              className="text-primary-600 underline underline-offset-4 leading-relaxed"
            >
              Contact us here
            </a>
          </div>
        </div>
      </div>

      <div
        className="max-w-screen-xl mx-auto px-8 lg:w-2/5 lg:pl-8 bg-white p-6 shadow-lg rounded-lg space-y-4 z-20 relative block lg:hidden"
        style={{ borderRadius: "12px" }}
      >
        <h2 className="text-xl font-semibold text-gray-800">
          Grow your vendor business with Venuerific.
        </h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex flex-col text-gray-700 font-normal">
              <span className="flex items-center">
                First Name<span className="text-red-500 ml-1">*</span>
              </span>
              <input
                type="text"
                placeholder="Your first name"
                className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:border-secondary-400 outline-none"
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
                className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:border-secondary-400 outline-none"
                required
              />
            </label>
          </div>

          <label className="flex flex-col text-gray-700 font-normal">
            <span className="flex items-center">
              Vendor Name<span className="text-red-500 ml-1">*</span>
            </span>
            <input
              type="text"
              placeholder="Your venue name"
              className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:border-secondary-400 outline-none"
              required
            />
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex flex-col text-gray-700 font-normal">
              <span className="flex items-center">
                Email Address<span className="text-red-500 ml-1">*</span>
              </span>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:border-secondary-400 outline-none"
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
                className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:border-secondary-400 outline-none"
                required
              />
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg"
          >
            Next
          </button>
        </form>
        <div className="mt-4 text-black text-center">
          <p>Need help for your registered vendor information?</p>
          <a
            href="#contact-us"
            className="text-primary-600 underline underline-offset-4 leading-relaxed"
          >
            Contact us here
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyVendorListHero;
