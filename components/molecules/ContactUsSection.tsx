"use client";

import { MARQUEE_IMGS } from "@/config/constants";

import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { CaretDown, WarningCircle } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/style.css";
import { VNFTypo } from "../VNFTypography/Typo";

import Footer from "./Footer";

import "react-phone-input-2/lib/style.css";
import { fontVnf } from "@/config/fonts";
import { VNFNavbar } from "./VNFNavbar";
interface ContactUsSectionProps {
  headerFooterRes?: any;
}

export const ContactUsSection = ({
  headerFooterRes,
}: ContactUsSectionProps) => {
  const { data } = headerFooterRes || {};
  const {
    countries_link,
    countries,
    center_menus,
    why_list_menus,
    notifications,
    user_menus,
    login_link,
    sign_up_link,
    footer_menus,
    footer_informations,
    office,
    socials,
    current_user,
  } = data || {};

  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [isFirstNameError, setIsFirstNameError] = useState(true);

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [isLastNameError, setIsLastNameError] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);

  const [helpWith, setHelpWith] = useState("");

  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isMessageError, setIsMessageError] = useState(false);

  const handleChangeType = (e: any) => {
    if (e.target.value) {
      setHelpWith(e.target.value);
    }
  };

  return (
    <div>
      <VNFNavbar className="px-4 md:px-5 lg:px-12 xl:px-20 items-center py-2 fixed" />
      <section className="mt-[81px] w-full">
        <div className="py-12 px-4 md:pl-2 lg:pr-0 lg:pl-10 xl:pl-20 2xl:pl-0 w-full lg:pl-20 max-w-screen-2xl mx-auto">
          {/* Contact Us Title */}
          <div className="text-center mb-16 flex flex-col gap-y-4">
            <h2 className="text-primary-700 text-2xl font-semibold leading-normal">
              Contact Us
            </h2>
            <h1 className="text-4xl font-bold text-secondary-900">
              We&apos;d love to hear from you
            </h1>
            <p className="text-secondary-600 mt-2">
              We have offices and teams all around the world.
            </p>
          </div>

          {/* Contact Form & Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Section: Form */}
            <div className="bg-white p-0 lg:pr-16">
              <h2 className="text-2xl font-semibold mb-4 text-secondary-900">
                Get In Touch
              </h2>
              <p className="text-secondary-600 mb-4">
                Whether you&apos;re looking to grow your venue or event
                services, find the perfect venue or explore partnership
                opportunities, we&apos;d love to hear from you.
              </p>
              <h4 className="text-secondary-900 text-lg font-semibold leading-8">
                Email
              </h4>
              <p className="text-secondary-600 mb-4">
                Our friendly team is here to help.
              </p>
              <a
                className="text-primary-700 font-semibold mb-8 block"
                href="mailto:info@venuerific.com"
              >
                info@venuerific.com
              </a>

              {/* Form */}
              <form className="space-y-4 flex flex-col">
                <div className="flex space-x-4">
                  {/* first name */}
                  <div className="w-1/2">
                    <Input
                      className={`rounded-lg bg-white border ${isFirstNameError ? "border-danger-300" : "border-secondary-300"}`}
                      classNames={{
                        inputWrapper: [
                          "bg-white",
                          "group-data-[focus=true]:bg-white",
                          "dark:group-data-[focus=true]:bg-white",
                        ],
                      }}
                      endContent={
                        isFirstNameError && (
                          <WarningCircle
                            className="text-danger-500"
                            size={20}
                          />
                        )
                      }
                      label={
                        <VNFTypo
                          className="block text-secondary-700"
                          text="First name"
                          variant="textSmMedium"
                        />
                      }
                      labelPlacement="outside"
                      placeholder="First name"
                      radius="sm"
                      type="text"
                      value={firstName}
                      variant="flat"
                      onValueChange={setFirstName}
                    />
                    <p className="text-red-600 text-sm min-h-5">
                      {isFirstNameError && "Field required."}
                    </p>
                  </div>
                  {/* last name */}
                  <div className="w-1/2">
                    <Input
                      className={`rounded-lg bg-white border ${isLastNameError ? "border-danger-300" : "border-secondary-300"}`}
                      classNames={{
                        inputWrapper: [
                          "bg-white",
                          "group-data-[focus=true]:bg-white",
                          "dark:group-data-[focus=true]:bg-white",
                        ],
                      }}
                      endContent={
                        isLastNameError && (
                          <WarningCircle
                            className="text-danger-500"
                            size={20}
                          />
                        )
                      }
                      label={
                        <VNFTypo
                          className="block text-secondary-700"
                          text="Last name"
                          variant="textSmMedium"
                        />
                      }
                      labelPlacement="outside"
                      placeholder="Last name"
                      radius="sm"
                      type="text"
                      value={lastName}
                      variant="flat"
                      onValueChange={setLastName}
                    />
                    <p className="text-red-600 text-sm min-h-5">
                      {isLastNameError && "Field required."}
                    </p>
                  </div>
                </div>

                {/* email */}
                <div>
                  <Input
                    className={`rounded-lg bg-white border ${isEmailError ? "border-danger-300" : "border-secondary-300"}`}
                    classNames={{
                      inputWrapper: [
                        "bg-white",
                        "group-data-[focus=true]:bg-white",
                        "dark:group-data-[focus=true]:bg-white",
                      ],
                    }}
                    endContent={
                      isEmailError && (
                        <WarningCircle className="text-danger-500" size={20} />
                      )
                    }
                    label={
                      <VNFTypo
                        className="block text-secondary-700"
                        text="Email"
                        variant="textSmMedium"
                      />
                    }
                    labelPlacement="outside"
                    placeholder="you@company.com"
                    radius="sm"
                    type="email"
                    value={email}
                    variant="flat"
                    onValueChange={setEmail}
                  />
                  <p className="text-red-600 text-sm min-h-5">
                    {isEmailError && "Field required."}
                  </p>
                </div>

                {/* phone */}
                <div>
                  <VNFTypo
                    className="block text-secondary-700 mb-2"
                    text="Phone number"
                    variant="textSmMedium"
                  />
                  <PhoneInput
                    disableSearchIcon // Disables search icon if needed
                    buttonClass="border rounded-r-none"
                    buttonStyle={{
                      borderRadius: 8,
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      borderRight: "none",
                      paddingLeft: 5,
                      paddingRight: 5,
                      backgroundColor: "#FFFFFF",
                    }}
                    containerClass={`border-secondary-200 rounded-xl shadow-sm h-10 ${fontVnf.variable}`}
                    country={"sg"} // Default country as US
                    countryCodeEditable={false} // Prevents editing country code directly
                    disableCountryCode={false}
                    disableDropdown={false}
                    dropdownClass="border-secondary-200 rounded-xl shadow-sm"
                    inputClass={`border-secondary-300 rounded-xl h-full bg-red-100 ${fontVnf.variable}`}
                    inputStyle={{
                      height: "100%",
                      width: "100%",
                      borderRadius: 8,
                      paddingLeft: 48,
                    }}
                    onChange={(phone) => console.log(phone)}
                  />
                </div>

                {/* I need help with */}
                <div className="pt-5">
                  <VNFTypo
                    className="block text-secondary-700 mb-2"
                    text="I need help with"
                    variant="textSmMedium"
                  />
                  <Select
                    disableAnimation
                    aria-label="Select an item"
                    placeholder="Select"
                    popoverProps={{
                      offset: 0,
                    }}
                    radius="sm"
                    selectedKeys={[helpWith]}
                    selectorIcon={
                      <CaretDown
                        size={18}
                        style={{
                          minWidth: "15px",
                        }}
                      />
                    }
                    size="md"
                    variant="bordered"
                    onChange={handleChangeType}
                  >
                    <SelectItem key={"site_visit"}>
                      Site visits/Bookings
                    </SelectItem>
                  </Select>
                </div>

                {/* message */}
                <div className="pt-5">
                  <VNFTypo
                    className="block text-secondary-700 mb-2"
                    text="Message"
                    variant="textSmMedium"
                  />
                  <textarea
                    className="w-full text-base border border-secondary-300 px-4 py-2 rounded-lg focus:border-secondary-300 focus:outline-none"
                    placeholder="Leave us a message..."
                    rows={5}
                  />
                  <p className="text-red-600 text-sm min-h-5">
                    {isMessageError && "Field required."}
                  </p>
                </div>
                <button className="w-full bg-primary-600 text-white font-semibold py-3 rounded-lg">
                  Contact Us
                </button>
              </form>
            </div>

            {/* Right Section: Image */}
            <div className="flex-col gap-y-4 hidden lg:flex">
              <img
                alt="Office"
                className="shadow-lg h-4/6 w-full object-cover"
                src="/images/hero_imgs/contact_hero.webp"
              />
              <div className="px-5">
                <VNFTypo
                  className="block text-secondary-500 mb-2 text-md font-semibold leading-8"
                  text="Trusted by industry leaders and venue owners across Asia"
                  variant="textSmMedium"
                />
                {/* Logos */}
                <div className="flex w-full flex-wrap gap-x-16 gap-y-8 mt-12">
                  {MARQUEE_IMGS.map(({ src, alt, href }, index) => (
                    <Image
                      key={index}
                      alt={alt}
                      className="w-[20px] h-[36px]"
                      height={36}
                      loading="lazy"
                      src={src}
                      style={{
                        width: "auto",
                        height: "36px",
                      }}
                      width={20}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our offices */}

        <div className="mt-16 bg-primary-800 text-white w-full max-w-screen-2xl mx-auto py-20 px-4 md:px-5 lg:px-12 xl:px-20">
          <h2 className="text-2xl font-bold mb-4 hidden lg:block">
            Our Offices
          </h2>
          <p className="text-primary-200 hidden lg:block">
            We are present in 5 countries in Asia to transform the event
            planning experience.
          </p>
          <p className="text-primary-200 block lg:hidden">Our locations.</p>
          <h2 className="text-2xl font-bold mt-4 mb-5 block lg:hidden">
            Visit Our Offices
          </h2>
          <p className="text-primary-200 block lg:hidden">
            Find us at the locations.
          </p>

          <div className="flex gap-x-5 items-start mt-10 justify-between">
            <Image
              alt="contact_us_world_alt"
              className="w-[400px] h-auto bg-primary-900 rounded-lg mr-10 hidden lg:block"
              height={470}
              loading="lazy"
              src="/images/background_imgs/contact_us_world.webp"
              width={400}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
              {/* Singapore */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Singapore</h3>
                <p className="text-primary-200">
                  34 South Bridge Road #03-01 Singapore 058668
                </p>
              </div>
              {/* Hong Kong */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Hong Kong</h3>
                <p className="text-primary-200">
                  Suite 1204, Eastern Harbour Centre, 28 Hoi Chak St, Quarry
                  Bay, Hong Kong
                </p>
              </div>
              {/* Malaysia */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Malaysia</h3>
                <p className="text-primary-200">
                  BO1-C, Boutique Office 1, Menara 2, Levels 15-19, 3, Jalan
                  Bangsar, Kampung Haji Abdullah Hukum, 59200 Kuala Lumpur
                </p>
              </div>
              {/* Indonesia */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Indonesia</h3>
                <p className="text-primary-200">
                  Lippo St. Moritz Tower Floor #09-01 Jl. Puri Raya Blok U1,
                  Puri Indah 11610, Jakarta Barat, RT.11/RW.7, Kembangan
                  Selatan, Kembangan, DKI Jakarta, Jakarta 11610
                </p>
              </div>
              {/* Philippines */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Philippines</h3>
                <p className="text-primary-200">
                  1104 Landsdale Tower, Sct. Rallos St, Quezon City, Metro
                  Manila, Philippines
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer  */}
        <div className="w-full mt-5 mx-auto px-5 md:px-5 lg:px-12 xl:px-20 block md:flex items-center justify-between w-full">
          <Footer />
        </div>
      </section>
    </div>
  );
};
