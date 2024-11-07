"use client";
import { Divider } from "@nextui-org/divider";
import Image from "next/image";

const DynamicLabelWithIcon = dynamic(() =>
  import("@/components/atoms/LabelWithIcon").then(
    (module) => module.LabelWithIcon,
  ),
);

import dynamic from "next/dynamic";

import { useDataSet } from "../hooks/useDataSet";

import { FOOTER_AWARDS_IMGS, PAYMENT_METHODS_IMGS } from "@/config/constants";
import { useCommonStore } from "@/store/common-store";

interface FooterProps {
  headerFooterRes?: any;
  country?: string;
  cookieStore?: any;
}

const Footer = ({ headerFooterRes, country, cookieStore }: FooterProps) => {
  const {
    footerMenus,
    footerInformations,
    office,
    socials,
    termsAndConditionLink,
    privacyLink,
    sitemapLink,
  } = useCommonStore();

  // setting client side data
  useDataSet(headerFooterRes, cookieStore);

  return (
    <footer className="py-10 w-full max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-14">
        <div className="sm:col-span-2 pr-10">
          <Image
            alt="Venuerific"
            className="h-7 hidden md:block"
            height={50}
            loading="lazy"
            src="/images/logo.svg"
            style={{
              width: "auto",
              height: "auto",
            }}
            width={200}
          />
          {/* <VNFTypo
            text="Since 2013, Venuerific has been helping people celebrate their
            personal and business events by connecting them to unique event
            venues in Singapore, Malaysia, Hong Kong, Philippines, and
            Indonesia."
            variant="textMdRegular"
            className="text-[#6A7583] text-[16px] text-justify block"
          /> */}
          <div className="flex flex-wrap mt-3 gap-2">
            {FOOTER_AWARDS_IMGS.map((img, key) => (
              <Image
                key={key}
                alt="award"
                className="h-[80px] w-[58px] mr-2 mb-2"
                height={80}
                loading="lazy"
                src={img}
                width={58}
              />
            ))}
          </div>
          <h4 className="text-secondary-500 font-semibold text-sm mt-7 mb-4">
            PAYMENT PARTNERS
          </h4>
          <div className="flex space-x-2">
            {PAYMENT_METHODS_IMGS.map((paymentMethod, key) => (
              <div
                key={key}
                className="h-8 p-1 flex items-center justify-center p w-[50px] border rounded-md"
              >
                <Image
                  key={key}
                  alt="award"
                  className={`${key === 0 ? "h-8" : "h-5"} w-auto`}
                  height={32}
                  loading="lazy"
                  src={paymentMethod}
                  width={60}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between w-full flex-wrap gap-y-5 col-span-1 sm:col-span-2 lg:justify-evenly">
          <div className="w-1/2">
            <h5 className="text-secondary-500 font-semibold mb-4 text-sm">
              COMPANY
            </h5>
            <ul className="space-y-2">
              {footerMenus &&
                footerMenus.length > 0 &&
                footerMenus.map(({ name, link }: any, index: number) => (
                  <li key={index}>
                    {/* <Link href={link}> */}
                    <a
                      className="text-base font-normal leading-6 text-secondary-500 hover:text-secondary-800"
                      href={link}
                    >
                      {name}
                    </a>

                    {/* </Link> */}
                  </li>
                ))}

              {/* <li>
                <Link href="/vendors">
                  <VNFTypo
                    text="Vendors"
                    variant="textMdRegular"
                    className="text-secondary-500 hover:text-secondary-800"
                  />
                </Link>
              </li>
              <li>
                <Link href="/videos">
                  <VNFTypo
                    text="Videos"
                    variant="textMdRegular"
                    className="text-secondary-500 hover:text-secondary-800"
                  />
                </Link>
              </li>
              <li>
                <Link href="/events">
                  <VNFTypo
                    text="Events"
                    variant="textMdRegular"
                    className="text-secondary-500 hover:text-secondary-800"
                  />
                </Link>
              </li>
              <li>
                <Link href="/press">
                  <VNFTypo
                    text="Press"
                    variant="textMdRegular"
                    className="text-secondary-500 hover:text-secondary-800"
                  />
                </Link>
              </li>
              <li>
                <Link href="/partners">
                  <VNFTypo
                    text="Partners"
                    variant="textMdRegular"
                    className="text-secondary-500 hover:text-secondary-800"
                  />
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <VNFTypo
                    text="Blog"
                    variant="textMdRegular"
                    className="text-secondary-500 hover:text-secondary-800"
                  />
                </Link>
              </li>
              <li>
                <Link href="/contact-us">
                  <VNFTypo
                    text="Contact Us"
                    variant="textMdRegular"
                    className="text-secondary-500 hover:text-secondary-800"
                  />
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="w-1/2">
            <h5 className="text-secondary-500 font-semibold mb-4 text-sm">
              ABOUT
            </h5>
            <ul className="space-y-2">
              {footerInformations &&
                footerInformations.length > 0 &&
                footerInformations.map(({ name, link }: any, index: number) => (
                  <li key={index}>
                    {/* <Link href={link}> */}
                    <a
                      className="text-base font-normal leading-6 text-secondary-500 hover:text-secondary-800"
                      href={link}
                    >
                      {name}
                    </a>
                    {/* </Link> */}
                  </li>
                ))}

              {/* <li>
                <Link href="/about">
                  <VNFTypo
                    text="About"
                    variant="textMdRegular"
                    className="text-secondary-500 hover:text-secondary-800"
                  />
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <VNFTypo
                    text="FAQ"
                    variant="textMdRegular"
                    className="text-secondary-500 hover:text-secondary-800"
                  />
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions">
                  <VNFTypo
                    text="Terms & Conditions"
                    variant="textMdRegular"
                    className="text-secondary-500 hover:text-secondary-800"
                  />
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy">
                  <VNFTypo
                    text="Privacy Policy"
                    variant="textMdRegular"
                    className="text-secondary-500 hover:text-secondary-800"
                  />
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
        <div>
          <h5 className="text-secondary-500 font-semibold mb-4 text-sm">
            OFFICE
          </h5>
          <address className="not-italic">
            <DynamicLabelWithIcon
              customClasses="w-fit px-0 py-0 flex items-start"
              customIconClasses="w-5 h-5 mt-1"
              customLabelClasses="text-secondary-500"
              label={{
                text: (office && office.address) || "",
                variant: "textMdRegular",
              }}
              startIcons={[
                {
                  filePath: "/images/icons/location_active.svg",
                },
              ]}
            />
          </address>
          {/* <Link
            className="text-secondary-500 hover:text-secondary-800"
            href={`mailto:${(office && office.email) || "@"}`}
          > */}
          <a
            className="text-secondary-500 hover:text-secondary-800"
            href={`mailto:${(office && office.email) || "@"}`}
          >
            <DynamicLabelWithIcon
              customClasses="w-fit px-0 my-2 py-0 flex items-start"
              customIconClasses="w-5 h-5 mt-1"
              customLabelClasses="text-secondary-500"
              label={{
                text: (office && office.email) || "",
                variant: "textMdRegular",
              }}
              startIcons={[
                {
                  filePath: "/images/icons/mail_active.svg",
                },
              ]}
            />
          </a>
          {/* </Link> */}
          {/* <Link
            className="text-secondary-500 hover:text-secondary-800"
            href={`tel:${office && office.phone}`}
          > */}
          <a
            className="text-secondary-500 hover:text-secondary-800"
            href={`tel:${office && office.phone}`}
          >
            <DynamicLabelWithIcon
              customClasses="w-fit px-0 my-2 py-0 flex items-start"
              customIconClasses="w-5 h-5 mt-1"
              customLabelClasses="text-secondary-500"
              label={{
                text: (office && office.phone_text) || "",
                variant: "textMdRegular",
              }}
              startIcons={[
                {
                  filePath: "/images/icons/phone.svg",
                },
              ]}
            />
          </a>
          {/* </Link> */}
        </div>
      </div>

      <Divider className="my-5" />
      <div className="flex flex-col md:flex-row items-start justify-between md:items-center">
        <div className="mt-4 md:mt-0 order-last md:order-first flex flex-col lg:flex-row gap-x-3 h-6">
          <span className="text-base font-normal leading-6 text-secondary-500 block">
            © 2024 Venuerific. All rights reserved.
          </span>
          <Divider className="hidden lg:block" orientation="vertical" />
          <div className="flex items-center h-6 gap-x-3 mt-3 lg:mt-0">
            {/* <Link href={terms_and_condition_link}> */}
            <a
              className="text-secondary-500 hover:text-secondary-800 underline underline-offset-4 text-base font-normal leading-6"
              href={termsAndConditionLink}
            >
              Terms & Conditions
            </a>
            {/* </Link> */}
            <Divider orientation="vertical" />
            {/* <Link href={privacy_link}> */}
            <a
              className="text-secondary-500 hover:text-secondary-800 underline underline-offset-4 text-base font-normal leading-6"
              href={privacyLink}
            >
              Privacy Policy
            </a>
            {/* </Link> */}
            <Divider orientation="vertical" />
            <a
              className="text-secondary-500 hover:text-secondary-800 underline underline-offset-4 text-base font-normal leading-6"
              href={sitemapLink}
            >
              Sitemap
            </a>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mb-1 sm:my-0">
          {socials.map(({ link, icon }: any, key: number) => (
            <a key={key} href={link}>
              <Image
                alt="social_icon"
                className="h-5"
                height={20}
                loading="lazy"
                src={icon}
                width={20}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
