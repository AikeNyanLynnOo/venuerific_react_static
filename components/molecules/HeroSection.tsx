"use client";

import { useDisclosure } from "@nextui-org/modal";
import { MagnifyingGlass } from "@phosphor-icons/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { useCommonStore } from "@/store/common-store";
import { HOME_DATA } from "@/config/constants";
const DynamicHeroSectionTabsModal = dynamic(() =>
  import("@/components/molecules/HeroSectionTabsModal").then(
    (module) => module.HeroSectionTabsModal,
  ),
);
const DynamicHeroSectionTabsStatic = dynamic(() =>
  import("@/components/molecules/HeroSectionTabsStatic").then(
    (module) => module.HeroSectionTabsStatic,
  ),
);
const DynamicHeroSectionTabsSticky = dynamic(() =>
  import("@/components/molecules/HeroSectionTabsSticky").then(
    (module) => module.HeroSectionTabsSticky,
  ),
);

interface HeroSectionProps {
  content_main_banner?: any;
  venue_search_options?: any;
  vendor_search_options?: any;
  country?: string;
  vendor_search?: any;
  headerFooterRes?: any;
  cookies?: any;
}

export const HeroSection = ({
  content_main_banner,
  venue_search_options,
  vendor_search_options,
  country,
  vendor_search,
  headerFooterRes,
  cookies,
}: HeroSectionProps) => {
  const params = useParams();

  const { id, type, attributes } = content_main_banner || {};
  const { image_url, banner_title, banner_description } = attributes || {};
  const { event_types_supported, max_capacity, location } =
    venue_search_options || {};
  const { services, areas } = vendor_search_options || {};

  // const heroImgUrl = useMemo(
  //   () =>
  //     image_url ||
  //     `/images/hero_imgs/home_hero_${(params && params.country) || "sg"}${isMobile ? "_mobile" : ""}.webp`,
  //   [image_url]
  // );

  // modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { haveBanner, bannerHeight } = useCommonStore();
  const [top, setTop] = useState(81);

  useEffect(() => {
    setTop(haveBanner ? bannerHeight + 81 : 0);
  }, [haveBanner, bannerHeight]);
  // const handleScroll = useCallback(() => {
  //   if (window.scrollY > 1 && haveBanner) {
  //     setTop(41 + bannerHeight);
  //     return;
  //   }
  //   setTop(81);
  // }, [haveBanner, bannerHeight]);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [haveBanner]);

  return (
    <div
      className={`bg-no-repeat bg-cover h-auto relative mt-[${top}px] w-full min-h-[70vh] md:min-h-[60vh] lg:min-h-[75vh] flex items-center`}
      style={{
        marginTop: `${top}px`,
      }}
    >
      <Image
        priority
        alt="hero_bg_img"
        className="w-full absolute top-0 h-full object-cover"
        height={1000}
        src={
          image_url ||
          `/images/hero_imgs/home_hero_${(params && params.country) || "sg"}.webp`
        }
        width={1000}
      />
      <div className="py-16 relative top-0 w-full sm:py-20 lg:py-28 px-4 md:px-5 lg:px-12 xl:px-20">
        <h1 className="text-white md:w-10/12 lg:w-9/12 mx-auto md:text-center text-4xl font-bold leading-normal md:text-5xl md:font-semibold lg:text-5xl lg:font-bold">
          {banner_title ||
            HOME_DATA[`${(params && params.country) || "sg"}`].banner_title}
        </h1>

        <h2 className="text-white w-full md:w-10/12 lg:w-9/12 mx-auto md:text-center my-10 text-lg">
          {banner_description ||
            HOME_DATA[`${(params && params.country) || "sg"}`]
              .banner_description}
        </h2>

        <div
          className="flex items-center bg-white shadow-lg rounded-lg py-4 px-5 space-x-4 md:hidden cursor-pointer"
          role="button"
          onClick={onOpen}
        >
          <MagnifyingGlass className="text-primary-600" size={32} />
          <div>
            <h3 className="text-primary-700 text-base font-bold leading-6">
              What event are you organizing
            </h3>
            <div className="flex text-gray-500 space-x-2 text-sm mt-2 items-center">
              <span className="text-sm font-medium leading-4 text-primary-600">
                Event type
              </span>
              <span className="text-[#D9D9D9]">•</span>
              <span className="text-sm font-medium leading-4 text-primary-600">
                Guest
              </span>
              <span className="text-[#D9D9D9]">•</span>
              <span className="text-sm font-medium leading-4 text-primary-600">
                Anywhere
              </span>
            </div>
          </div>
        </div>

        <DynamicHeroSectionTabsModal
          cookies={cookies}
          event_types_supported={event_types_supported}
          isOpen={isOpen}
          location={location}
          max_capacity={max_capacity}
          placement={"bottom-center"}
          vendor_areas={areas}
          vendor_search={vendor_search}
          vendor_services={services}
          onOpenChange={onOpenChange}
        />

        <DynamicHeroSectionTabsStatic
          cookies={cookies}
          event_types_supported={event_types_supported}
          location={location}
          max_capacity={max_capacity}
          vendor_areas={areas}
          vendor_search={vendor_search}
          vendor_services={services}
        />

        <DynamicHeroSectionTabsSticky
          cookies={cookies}
          event_types_supported={event_types_supported}
          location={location}
          max_capacity={max_capacity}
          vendor_areas={areas}
          vendor_search={vendor_search}
          vendor_services={services}
        />
      </div>
    </div>
  );
};
