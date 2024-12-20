"use client";
import Image from "next/image";
import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { Select, SelectItem } from "@nextui-org/select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

type CountryCode = "SG" | "MY" | "ID" | "PH" | "HK";

const WhyVenueListHero = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [venueName, setVenueName] = useState("");
  const [venueWebsite, setVenueWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState<CountryCode>("SG");
  const [discover, setDiscover] = useState("");
  const [remark, setRemark] = useState("");

  const handleFirstNameChange = (e: any) => setFirstName(e.target.value);
  const handleLastNameChange = (e: any) => setLastName(e.target.value);
  const handleVenueChange = (e: any) => setVenueName(e.target.value);
  const handleVenueWebsiteChange = (e: any) => setVenueWebsite(e.target.value);
  const handleEmailChange = (e: any) => setEmail(e.target.value);
  const handleDiscoverChange = (e: any) => setDiscover(e.target.value);
  const handleRemarkChange = (e: any) => setRemark(e.target.value);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      venueName,
      venueWebsite,
      email,
      phoneNumber,
      country,
      discover,
      remark,
    };
    console.log(formData);

    setFirstName("");
    setLastName("");
    setVenueName("");
    setVenueWebsite("");
    setEmail("");
    setPhoneNumber("");
    setCountry("" as CountryCode);
    setDiscover("");
    setRemark("");
  };

  const countryOptions: Record<CountryCode, { name: string; flag: string }> = {
    SG: { name: "Singapore", flag: "/images/sg.svg" },
    MY: { name: "Malaysia", flag: "/images/my.svg" },
    ID: { name: "Indonesia", flag: "/images/indo.svg" },
    PH: { name: "Philippines", flag: "/images/phi.svg" },
    HK: { name: "Hong Kong", flag: "/images/hk.svg" },
  };

  const handleCountryChange = (value: string) => {
    setCountry(value as CountryCode);
  };

  const handlePhoneInputChange = (value: any) => setPhoneNumber(value);

  return (
    <div className="mt-[81px]">
      <div className="relative flex flex-col items-center justify-center bg-gray-100 py-20 lg:px-16 lg:flex-row">
        <div className="absolute inset-0 w-full z-0">
          <Image
            src="/images/hero_imgs/why_venue_list_hero.webp"
            alt="Venue background image"
            className="opacity-100 h-full w-full object-cover"
            priority
            height={500}
            width={1500}
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gray opacity-40" />
        {/* Content Section */}
        <div className="max-w-screen-xl mx-auto px-8 lg:mt-20 lg:w-3/5 lg:pr-8 space-y-4 text-center lg:text-left text-white z-20 relative">
          <h1 className="text-3xl lg:text-5xl font-normal">
            Get More Leads with Venuerific
          </h1>
          <p className="text-white text-lg max-w-[60ch]">
            Transform your venue with Venuerific, making it easy to generate
            more leads, manage them, and convert them into revenue.
          </p>
          <div className="bg-transparent lg:bg-gradient-to-r sm:from-[#9C3EF3] sm:to-[#4E8CFF] rounded-md p-3 inline-block">
            <p className="text-white font-normal sm:font-semibold text-lg">
              On average, Venuerific venues earn up to $30,000 per month.
            </p>
          </div>

          {/* G2 User Ratings */}
          <div className="items-center mt-6 hidden lg:flex ">
            <div className="flex-shrink-0 h-[120px] w-[80px] flex items-center">
              <Image
                src="/images/why_venue_list/why_venue_list_img1.png"
                alt="G2 User Ratings Logo"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>

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
        <div className="max-w-screen-xl mx-auto px-8 lg:w-2/5 lg:pl-8 bg-white p-6 shadow-lg rounded-lg space-y-4 z-20 relative hidden lg:block">
          <h2 className="text-xl font-semibold text-gray-800">
            Fill out the form to speak with our experts
          </h2>
          <p className="text-gray-600">
            to see how Venuerific can help your venue.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col text-gray-700 font-normal">
                <span className="flex items-center">
                  First Name<span className="text-red-500 ml-1">*</span>
                </span>
                <input
                  type="text"
                  placeholder="Your first name"
                  className="w-full p-2 border border-gray-300 rounded-lg mt-2 focus:border-secondary-400 outline-none"
                  value={firstName}
                  onChange={handleFirstNameChange}
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
                  className="w-full p-2 border border-gray-300 rounded-lg mt-2 focus:border-secondary-400 outline-none"
                  value={lastName}
                  onChange={handleLastNameChange}
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
                  className="w-full p-2 border border-gray-300 rounded-lg mt-2 focus:border-secondary-400 outline-none"
                  value={venueName}
                  onChange={handleVenueChange}
                  required
                />
              </label>
              <label className="flex flex-col text-gray-700 font-normal">
                Venue Website
                <input
                  type="text"
                  placeholder="Your venue website"
                  className="w-full p-2 border border-gray-300 rounded-lg mt-2 focus:border-secondary-400 outline-none"
                  value={venueWebsite}
                  onChange={handleVenueWebsiteChange}
                  required
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
                  className="w-full p-2 border border-gray-300 rounded-lg mt-2 focus:border-secondary-400 outline-none"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </label>
              {/* <label className="flex flex-col text-gray-700 font-normal">
                <span className="flex items-center">
                  Phone Number<span className="text-red-500 ml-1">*</span>
                </span>
                <input
                  type="text"
                  placeholder="Your phone number"
                  className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:border-secondary-400 outline-none"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </label> */}

              <div className="flex flex-col text-gray-700 font-normal">
                <span className="flex items-center mb-2">
                  Phone Number<span className="text-red-500 ml-1">*</span>
                </span>
                <PhoneInput
                  disableSearchIcon
                  buttonClass="rounded-r-none"
                  buttonStyle={{
                    border: "none",
                    borderRadius: 8,
                    borderRight: "none",
                    paddingLeft: 8,
                    paddingRight: 8,
                    backgroundColor: "#FFFFFF",
                  }}
                  containerClass={`rounded-lg border border-secondary-300 focus:border-secondary-400 hover:border-secondary-400 shadow-sm h-10`}
                  country={"sg"}
                  countryCodeEditable={false}
                  disableCountryCode={false}
                  disableDropdown={false}
                  dropdownClass="border-secondary-200 rounded-xl shadow-sm"
                  inputClass={`h-full pl-10`}
                  inputStyle={{
                    border: "none",
                    height: "100%",
                    width: "100%",
                    borderRadius: 8,
                    paddingLeft: 55,
                    backgroundColor: "#FFFFFF",
                  }}
                  value={phoneNumber}
                  onChange={handlePhoneInputChange}
                  // placeholder="Phone number"
                />
              </div>
            </div>

            <label className="flex flex-col text-gray-700 font-normal">
              <span className="flex items-center mb-2">Country</span>
              <Select
                disableAnimation
                aria-label="Select your country"
                classNames={{
                  trigger: "h-[42px] min-h-10 rounded-lg border-1",
                }}
                placeholder="Select your country"
                popoverProps={{
                  placement: "bottom",
                  offset: 0,
                  classNames: {
                    base: "before:bg-default-200",
                    content:
                      "p-0 border-small border-divider bg-background max-h-[180px]",
                  },
                }}
                selectorIcon={
                  <CaretDown
                    size={18}
                    style={{
                      minWidth: "15px",
                    }}
                  />
                }
                size="lg"
                value={country}
                variant="bordered"
                onChange={(e) => handleCountryChange(e.target.value)}
                renderValue={() => (
                  <div className="flex items-center">
                    {country && countryOptions[country] ? (
                      <>
                        <img
                          src={countryOptions[country].flag}
                          alt={countryOptions[country].name}
                          className="w-5 h-5 mr-2"
                        />
                        {countryOptions[country].name}
                      </>
                    ) : (
                      <span>Select your country</span>
                    )}
                  </div>
                )}
              >
                {Object.entries(countryOptions).map(([key, { name, flag }]) => (
                  <SelectItem key={key} value={key} textValue={name}>
                    <div className="flex items-center">
                      <img src={flag} alt={name} className="w-5 h-5 mr-2" />
                      {name}
                    </div>
                  </SelectItem>
                ))}
              </Select>
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
        className="max-w-screen-xl mx-auto px-8 lg:w-2/5 lg:pl-8 bg-white p-6 shadow-lg rounded-lg space-y-4 z-20 relative block lg:hidden"
        style={{ borderRadius: "12px" }}
      >
        <h2 className="text-xl font-semibold text-gray-800">
          Submit your interest in starting your journey with Venuerific today
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
                className="w-full p-2 border border-gray-300 rounded-lg mt-2 focus:border-secondary-400 outline-none"
                value={firstName}
                onChange={handleFirstNameChange}
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
                className="w-full p-2 border border-gray-300 rounded-lg mt-2 focus:border-secondary-400 outline-none"
                value={lastName}
                onChange={handleLastNameChange}
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
                className="w-full p-2 border border-gray-300 rounded-lg mt-2 focus:border-secondary-400 outline-none"
                value={venueName}
                onChange={handleVenueChange}
                required
              />
            </label>
            <label className="flex flex-col text-gray-700 font-normal">
              Venue Website
              <input
                type="text"
                placeholder="Your venue website"
                className="w-full p-2 border border-gray-300 rounded-lg mt-2 focus:border-secondary-400 outline-none"
                value={venueWebsite}
                onChange={handleVenueWebsiteChange}
                required
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
                className="w-full p-2 border border-gray-300 rounded-lg mt-2 focus:border-secondary-400 outline-none"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </label>
            <div className="flex flex-col text-gray-700 font-normal">
              <span className="flex items-center mb-2">
                Phone Number<span className="text-red-500 ml-1">*</span>
              </span>
              <PhoneInput
                disableSearchIcon
                buttonClass="rounded-r-none"
                buttonStyle={{
                  border: "none",
                  borderRadius: 8,
                  borderRight: "none",
                  paddingLeft: 8,
                  paddingRight: 8,
                  backgroundColor: "#FFFFFF",
                }}
                containerClass={`rounded-lg border border-secondary-300 focus:border-secondary-400 hover:border-secondary-400 shadow-sm h-10`}
                country={"sg"}
                countryCodeEditable={false}
                disableCountryCode={false}
                disableDropdown={false}
                dropdownClass="border-secondary-200 rounded-xl shadow-sm"
                inputClass={`h-full pl-10`}
                inputStyle={{
                  border: "none",
                  height: "100%",
                  width: "100%",
                  borderRadius: 8,
                  paddingLeft: 55,
                  backgroundColor: "#FFFFFF",
                }}
                value={phoneNumber}
                onChange={handlePhoneInputChange}
                // placeholder="Phone number"
              />
            </div>
          </div>

          <div className="flex flex-col text-gray-700 font-normal">
            <span className="flex items-center mb-2">
              How did you discover us?
            </span>
            <Select
              disableAnimation
              aria-label="discover"
              classNames={{
                trigger: "h-[42px] min-h-10 rounded-lg border-1",
              }}
              placeholder="From"
              popoverProps={{
                placement: "bottom",
                offset: 0,
                classNames: {
                  base: "before:bg-default-200",
                  content:
                    "p-0 border-small border-divider bg-background max-h-[180px]",
                },
              }}
              selectorIcon={
                <CaretDown
                  size={18}
                  style={{
                    minWidth: "15px",
                  }}
                />
              }
              value={discover}
              variant="bordered"
              onChange={handleDiscoverChange}
            >
              <SelectItem key="sg" value="Singapore">
                Facebook
              </SelectItem>
            </Select>
          </div>

          <label className="flex flex-col text-gray-700 font-normal">
            <span className="flex items-center">Remarks</span>
            <textarea
              placeholder="Write something here"
              className="w-full p-2 border border-gray-300 rounded-lg mt-2 focus:border-secondary-400 outline-none"
              value={remark}
              onChange={handleRemarkChange}
              required
            />
          </label>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold p-2 rounded-lg"
          >
            Schedule a Demo
          </button>
        </form>
      </div>

      {/* G2 User Ratings for mobile */}
      <div className="items-center mt-6 lg:hidden flex justify-center">
        <div className="flex-shrink-0 h-[120px] w-[80px] flex items-center">
          <Image
            src="/images/why_venue_list/why_venue_list_img1.png"
            alt="G2 User Ratings Logo"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>

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
            <span className="font-bold text-black text-[30px] ml-1 lg:text-white">
              4.6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyVenueListHero;
