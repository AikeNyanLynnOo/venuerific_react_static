"use client";
import Image from "next/image";
// import { Montserrat } from "next/font/google";
import { X } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";

import { useCommonStore } from "@/store/common-store";

// const fontVnfBanner = Montserrat({
//   subsets: ["latin"],
//   weight: ["500", "700"],
//   variable: "--font-vnf-banner",
//   display: "swap",
//   fallback: ["sans-serif"],
// });

interface TopBannerProps {
  text?: string;
  icon?: any;
}
export const TopBanner = ({ text, icon }: TopBannerProps) => {
  const { haveBanner, setHaveBanner, bannerHeight, setBannerHeight } =
    useCommonStore();
  const bannerRef = useRef<any>(null);

  // useEffect(() => {
  //   console.log("BannerHeight>>", bannerHeight);
  // }, [bannerHeight]);

  useEffect(() => {
    setHaveBanner(true);
    setTimeout(() => {
      updateHeight();
    }, 10);

    return () => setHaveBanner(false);
  }, []);

  const updateHeight = () => {
    setBannerHeight(
      (bannerRef && bannerRef.current && bannerRef.current.offsetHeight) || 40,
    );
  };

  useEffect(() => {
    // Update height on mount
    updateHeight();

    // Update height on window resize
    window.addEventListener("resize", updateHeight);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <>
      {(haveBanner && (
        <div
          ref={bannerRef}
          className={`w-full banner-bg-gradient min-h-10 p-2 flex items-center justify-start sm:justify-center bg-red-200 gap-x-1 sm:gap-x-2 fixed top-0 z-30`}
        >
          <Image
            alt="icon"
            className="h-[16px] w-[16px] mr-2"
            height={20}
            loading="lazy"
            src={`/images/icons/globe-white.svg`}
            width={20}
          />

          <span className="text-white md:text-nowrap inline-block max-w-[60%] text-sm font-medium">
            Host Your Event at the Singapore Chinese Cultural Center in 2025:
          </span>
          <a
            className="underline cursor-pointer text-white underline-offset-4 font-bold text-sm"
            href="https://www.venuerific.com/sg/venues/singapore-chinese-cultural-centre?utm_campaign=Listing&utm_source=Website&utm_medium=HomepageBanner&utm_content=organic_HeaderBanner_singapore-chinese-cultural-center-2025_291024__sg"
          >
            Book Now!
          </a>
          <button
            className="absolute top-1/2 -translate-y-1/2 right-1 sm:right-4"
            onClick={() => setHaveBanner(false)}
          >
            <X color="#FFFFFF" size={18} />
          </button>
        </div>
      )) || <></>}
    </>
  );
};
