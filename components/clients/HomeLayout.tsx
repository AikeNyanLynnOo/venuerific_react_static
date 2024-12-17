"use client";

// NextJS
import dynamic from "next/dynamic";
import Image from "next/image";

// Components
import { ArrowRight } from "@phosphor-icons/react";
import Marquee from "react-fast-marquee";
import { useMediaQuery } from "react-responsive";

import { useFetchData } from "../hooks/useFetchData";

import { HeroSection } from "@/components/molecules/HeroSection";

// check is modile

// Constants
import Footer from "@/components/molecules/Footer";
import { LightGridContainerWithTitle } from "@/components/molecules/LightGridContainerWithTitle";
import { ScrollContainerWithTitle } from "@/components/molecules/ScrollContainerWithTitle";
import {
  DUMMY_COUNTRIES,
  DUMMY_PROMOTEXTS,
  HOME_DATA,
  MARQUEE_IMGS,
} from "@/config/constants";
import { getHomePageDataAll } from "@/utils/apiFunctions";
import { PromotionBannerCarousel } from "../molecules/carousels/PromotionBannerCarousel";

const DynamicContentServiceCard = dynamic(() =>
  import("@/components/molecules/ContentServiceCard").then(
    (module) => module.ContentServiceCard
  )
);

const DynamicVenueCard = dynamic(() =>
  import("@/components/molecules/VenueCard").then((module) => module.VenueCard)
);

const DynamicTabsViewVenues = dynamic(() =>
  import("@/components/molecules/TabsViewVenues").then(
    (module) => module.TabsViewVenues
  )
);

const DynamicGridContainerWithTitle = dynamic(() =>
  import("@/components/molecules/GridContainerWithTitle").then(
    (module) => module.GridContainerWithTitle
  )
);

const DynamicLightLabelWithIcon = dynamic(() =>
  import("@/components/atoms/LightLabelWithIcon").then(
    (mod) => mod.LightLabelWithIcon
  )
);

const DynamicFeatureBusinessTabs = dynamic(() =>
  import("@/components/molecules/FeatureBusinessTabs").then(
    (module) => module.FeatureBusinessTabs
  )
);
const DynamicResponsiveGrid = dynamic(() =>
  import("@/components/molecules/ResponsiveGrid").then(
    (module) => module.ResponsiveGrid
  )
);

const DynamicWantToGrow = dynamic(() =>
  import("@/components/molecules/WantToGrow").then(
    (module) => module.WantToGrow
  )
);

const DynamicHorizontalScrollList = dynamic(() =>
  import("@/components/molecules/HorizontalScrollList").then(
    (module) => module.HorizontalScrollList
  )
);

const DynamicCountryCard = dynamic(() =>
  import("@/components/molecules/CountryCard").then(
    (module) => module.CountryCard
  )
);

const DynamicImageWithErrorHandle = dynamic(() =>
  import("@/components/molecules/ImageWithErrorHandle").then(
    (mod) => mod.ImageWithErrorHandle
  )
);

interface HomeLayoutProps {
  params?: any;
  headerFooterRes?: any;
  shouldDetectIP?: boolean;
  cookies?: any;
}

export const HomeLayout = ({
  params,
  headerFooterRes,
  shouldDetectIP,
  cookies,
}: HomeLayoutProps) => {
  // client side cookie parse (CANNOT PARSE HTTPONLY COOKIES)
  // const cookieStore = parseCookies();
  // const cookies = Object.entries(cookieStore).map(([key, value]) => ({
  //   name: key,
  //   value,
  // }));

  const homeRes = useFetchData({
    fetcher: getHomePageDataAll,
    args: {
      country: params.country || "",
      cookies,
      shouldDetectIP: shouldDetectIP || false,
    },
    deps: [],
  });

  const {
    content_main_banner,
    content_promotion_banners,
    venue_search_options,
    show,
    country,
    country_long,
    vendor_search_options,
    content_localizations,
    featured_venue_link,
    featured_venues,
    featured_vendor_link,
    featured_vendors,
    super_venue_link,
    super_venues,
    newest_venue_link,
    newest_venues,
    package_venue_link,
    package_venues,
    event_type_longtails,
    content_service_types,
    service_longtails,
    blog_link,
    blogs,
    current_user,
  } = (homeRes && homeRes.data) || {};

  const {
    vendor_search,
    localization,
    featured_vendor,
    super_venue,
    content_service_type,
    service_longtail,
    newest_venue,
  } = show || {};

  // if (homeRes && homeRes.loading) {
  //   return (
  //     <section className="h-screen w-full">
  //       <Loading />
  //     </section>
  //   );
  // }
  // if (homeRes && homeRes.error) {
  //   return (
  //     <section className="h-screen w-full">
  //       <SomethingWentWrong />
  //     </section>
  //   );
  // }

  // Tailwind breakpoints mapped to media queries
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" }); // sm: max-width 640px
  // const isTablet = useMediaQuery({
  //   query: "(min-width: 641px) and (max-width: 768px)",
  // }); // md: 641px - 768px
  // const isSmallDesktop = useMediaQuery({
  //   query: "(min-width: 769px) and (max-width: 1024px)",
  // }); // lg: 769px - 1024px
  // const isLargeDesktop = useMediaQuery({
  //   query: "(min-width: 1025px) and (max-width: 1280px)",
  // }); // xl: 1025px - 1280px
  // const isExtraLargeScreen = useMediaQuery({ query: "(min-width: 1281px)" }); // 2xl: 1281px and up

  // console.log("Is mobile>>", isMobile);
  // console.log("Is tablet>>", isTablet);
  // console.log("Is small desktop>>", isSmallDesktop);
  // console.log("Is large desktop>>", isLargeDesktop);

  return (
    <section className="h-screen">
      <HeroSection
        content_main_banner={content_main_banner}
        cookies={cookies}
        country={country}
        headerFooterRes={headerFooterRes}
        vendor_search={vendor_search}
        vendor_search_options={vendor_search_options}
        venue_search_options={venue_search_options}
      />

      <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20">
        <div className="hidden md:flex mt-10 mb-16 gap-y-10 flex-col md:flex-row gap-x-28 w-full items-center justify-between max-w-screen-2xl mx-auto">
          <h2 className="text-secondary-500 w-72 text-center md:text-left text-xl font-semibold leading-8">
            Trusted by industry leaders and venue owners across Asia
          </h2>
          <Marquee gradient pauseOnHover className="flex-1">
            {MARQUEE_IMGS.map(({ src, alt, href }, index) => (
              <Image
                key={index}
                alt={alt}
                className="w-auto h-[36px] mx-10"
                height={36}
                loading="lazy"
                src={src}
                width={20}
              />
            ))}
          </Marquee>
        </div>

        {/* promotion banners */}

        {/* {content_promotion_banners && content_promotion_banners.length > 0 && (
          <div className="w-full mx-auto px-4 md:px-0 py-5 relative mt-5 mb-16 max-w-screen-2xl mx-auto">
            <PromotionBannerCarousel>
              {content_promotion_banners.map(
                (
                  {
                    country,
                    image_url,
                    image_mobile_url,
                    image_title,
                    image_alt,
                    click_track_link,
                  }: any,
                  index: number
                ) => (
                  <DynamicImageWithErrorHandle
                    key={index}
                    unoptimized
                    alt={image_alt}
                    className="w-full object-contain h-[260px] z-0 rounded-xl"
                    height={260}
                    loading="lazy"
                    src={image_url || "/images/venues/venue1.webp"}
                    width={1000}
                  />
                )
              )}
            </PromotionBannerCarousel>
          </div>
        )} */}

        {/* Localization */}
        {localization && (
          <div className="w-full mx-auto px-4 md:px-0 py-5 relative mt-5 mb-16 max-w-screen-2xl mx-auto">
            <h3 className="text-primary-700 mb-10 text-3xl font-semibold leading-10">
              Discover {country_long || ""}
            </h3>
            {!isMobile && (
              <DynamicResponsiveGrid
                className={`gap-0 hidden md:grid ${content_localizations.length === 3 && "md:grid-cols-3 lg:grid-cols-3"}`}
              >
                {content_localizations &&
                  content_localizations.length > 0 &&
                  content_localizations.map(
                    ({ id, type, attributes }: any, index: number) => (
                      <DynamicCountryCard
                        key={index}
                        image_url={attributes && attributes.image_url}
                        link={attributes && attributes.link}
                        location={attributes && attributes.location}
                      />
                    )
                  )}
              </DynamicResponsiveGrid>
            )}

            {isMobile && (
              <DynamicHorizontalScrollList
                cardType="country"
                className="block md:hidden"
                items={
                  content_localizations &&
                  content_localizations.length > 0 &&
                  content_localizations.map(
                    ({ id, type, attributes }: any, index: number) => ({
                      location: (attributes && attributes.location) || "",
                      image_url: (attributes && attributes.image_url) || "",
                      link: (attributes && attributes.link) || "",
                    })
                  )
                }
              />
            )}
          </div>
        )}

        {/* Featured Venues/Vendors */}
        <div className="max-w-screen-2xl mx-auto">
          <DynamicLightLabelWithIcon
            customClasses="flex items-center gap-x-2.5 justify-between p-2 w-fit gap-x-3 px-0 hidden md:flex"
            customLabel={
              <h3 className="text-3xl font-semibold leading-10 text-primary-700">
                Featured Venues & Vendors
              </h3>
            }
            startIconNode={
              <Image
                alt="icon"
                className="h-auto w-[30px]"
                height={30}
                loading="lazy"
                src="/images/icons/featured_venues.svg"
                width={30}
              />
            }
          />
        </div>

        {featured_vendor && !isMobile && (
          <DynamicFeatureBusinessTabs
            country={country || "sg"}
            featured_vendor={featured_vendor}
            featured_vendor_link={featured_vendor_link}
            featured_vendors={featured_vendors}
            featured_venue_link={featured_venue_link}
            featured_venues={featured_venues}
          />
        )}
        {!featured_vendor && (
          <DynamicGridContainerWithTitle
            className="px-4 md:px-0 my-10 md:mt-4 md:mb-10 hidden md:block max-w-screen-2xl mx-auto"
            icon={{
              IconNode: <ArrowRight className="text-primary-700" size={20} />,
            }}
            linkHref={featured_venue_link || "#"}
            linkText={HOME_DATA[`${country || "sg"}`].featuredVenue.linkText}
            text={HOME_DATA[`${country || "sg"}`].featuredVenue.text}
            title={HOME_DATA[`${country || "sg"}`].featuredVenue.title}
          >
            <DynamicResponsiveGrid>
              {featured_venues &&
                featured_venues.length > 0 &&
                featured_venues.map((venue: any, index: number) => (
                  <DynamicVenueCard key={index} {...venue} />
                ))}
            </DynamicResponsiveGrid>
          </DynamicGridContainerWithTitle>
        )}

        {/* Super Venue */}
        {super_venue && super_venues && super_venues.length > 0 && (
          <div className="max-w-screen-2xl mx-auto">
            {!isMobile && (
              <DynamicLightLabelWithIcon
                customClasses="flex items-center gap-x-2.5 justify-between p-2 w-fit gap-x-3 px-0 mt-16 hidden md:flex"
                customLabel={
                  <h3 className="text-3xl font-semibold leading-10 text-primary-700">
                    Super Venues
                  </h3>
                }
                startIconNode={
                  <Image
                    alt="icon"
                    className="h-auto w-[30px]"
                    height={30}
                    loading="lazy"
                    src="/images/icons/super_venues.svg"
                    width={30}
                  />
                }
              />
            )}
          </div>
        )}

        {super_venue &&
          super_venues &&
          super_venues.length > 0 &&
          !isMobile && (
            <DynamicGridContainerWithTitle
              className="px-4 md:px-0 my-10 md:mt-4 md:mb-10 hidden md:block max-w-screen-2xl mx-auto"
              icon={{
                IconNode: <ArrowRight className="text-primary-700" size={20} />,
              }}
              linkHref={super_venue_link || ""}
              linkText={HOME_DATA[`${country || "sg"}`].superVenue.linkText}
              text={HOME_DATA[`${country || "sg"}`].superVenue.text}
              title={HOME_DATA[`${country || "sg"}`].superVenue.title}
            >
              <DynamicResponsiveGrid>
                {super_venues &&
                  super_venues.length > 0 &&
                  super_venues.map((venue: any, index: number) => (
                    <DynamicVenueCard key={index} {...venue} />
                  ))}
              </DynamicResponsiveGrid>
            </DynamicGridContainerWithTitle>
          )}

        {/* New Venues */}
        {newest_venue &&
          newest_venues &&
          newest_venues.length > 0 &&
          !isMobile && (
            <div className="max-w-screen-2xl mx-auto">
              <DynamicLightLabelWithIcon
                customClasses="flex items-center gap-x-2.5 justify-between p-2 w-fit gap-x-3 px-0 mt-16 hidden md:flex"
                customLabel={
                  <h3 className="text-3xl font-semibold leading-10 text-primary-700">
                    New Venues
                  </h3>
                }
                startIconNode={
                  <Image
                    alt="icon"
                    className="h-auto w-[30px]"
                    height={30}
                    loading="lazy"
                    src="/images/icons/new_venue_icon.webp"
                    width={30}
                  />
                }
              />
            </div>
          )}

        {newest_venue &&
          newest_venues &&
          newest_venues.length > 0 &&
          !isMobile && (
            <DynamicGridContainerWithTitle
              className="px-4 md:px-0 my-10 md:mt-4 md:mb-10 hidden md:block max-w-screen-2xl mx-auto"
              icon={{
                IconNode: <ArrowRight className="text-primary-700" size={20} />,
              }}
              linkHref={newest_venue_link || ""}
              linkText={HOME_DATA[`${country || "sg"}`].newestVenue.linkText}
              text={HOME_DATA[`${country || "sg"}`].newestVenue.text}
              title={HOME_DATA[`${country || "sg"}`].newestVenue.title}
            >
              <DynamicResponsiveGrid>
                {newest_venues &&
                  newest_venues.length > 0 &&
                  newest_venues.map((venue: any, index: number) => (
                    <DynamicVenueCard key={index} {...venue} />
                  ))}
              </DynamicResponsiveGrid>
            </DynamicGridContainerWithTitle>
          )}

        {/* Package Venues */}
        {/* no need to check cuz all countries have */}
        {package_venues && package_venues.length > 0 && !isMobile && (
          <div className="max-w-screen-2xl mx-auto">
            <DynamicLightLabelWithIcon
              customClasses="flex items-center gap-x-2.5 justify-between p-2 w-fit gap-x-3 px-0 mt-16 hidden md:flex"
              customLabel={
                <h3 className="text-3xl font-semibold leading-10 text-primary-700">
                  Venues With Packages
                </h3>
              }
              startIconNode={
                <Image
                  alt="icon"
                  className="h-auto w-[20px]"
                  height={30}
                  loading="lazy"
                  src="/images/icons/popular_events.svg"
                  width={30}
                />
              }
            />
          </div>
        )}

        {package_venues && package_venues.length > 0 && !isMobile && (
          <DynamicGridContainerWithTitle
            className="px-4 md:px-0 my-10 md:mt-4 md:mb-10 hidden md:block max-w-screen-2xl mx-auto"
            icon={{
              IconNode: <ArrowRight className="text-primary-700" size={20} />,
            }}
            linkHref={package_venue_link}
            linkText={HOME_DATA[`${country || "sg"}`].venueWithPackage.linkText}
            text={HOME_DATA[`${country || "sg"}`].venueWithPackage.text}
            title={HOME_DATA[`${country || "sg"}`].venueWithPackage.title}
          >
            <DynamicResponsiveGrid>
              {package_venues &&
                package_venues.length > 0 &&
                package_venues.map((venue: any, index: number) => (
                  <DynamicVenueCard key={index} {...venue} />
                ))}
            </DynamicResponsiveGrid>
          </DynamicGridContainerWithTitle>
        )}

        {/* {((featured_vendor ||
          super_venue ||
          newest_venue ||
          (package_venues && package_venues.length > 0)) && ( */}
        <DynamicTabsViewVenues
          country={country}
          featured_vendor={featured_vendor}
          featured_vendor_link={featured_vendor_link}
          featured_vendors={featured_vendors}
          featured_venue_link={featured_venue_link}
          featured_venues={featured_venues}
          newest_venue={newest_venue}
          newest_venue_link={newest_venue_link}
          newest_venues={newest_venues}
          package_venue_link={package_venue_link}
          package_venues={package_venues}
          super_venue={super_venue}
          super_venue_link={super_venue_link}
          super_venues={super_venues}
        />
        {/* )) || (
          <Fragment>
            <div className="max-w-screen-2xl mx-auto">
              <DynamicLightLabelWithIcon
                customClasses="flex items-center gap-x-2.5 justify-between p-2 w-fit gap-x-3 px-4 flex md:hidden"
                customLabel={
                  <h4 className="text-3xl font-semibold leading-10 text-primary-700">
                    Featured Venues
                  </h4>
                }
                startIconNode={
                  <Image
                    alt="icon"
                    className="h-auto w-[30px]"
                    height={30}
                    width={30}
                    loading="lazy"
                    src="/images/icons/featured_venues.svg"
                  />
                }
              />
            </div>
            <DynamicGridContainerWithTitle
              className="px-4 md:px-0 my-10 md:mt-4 md:mb-10 md:hidden max-w-screen-2xl mx-auto"
              icon={{
                IconNode: <ArrowRight className="text-primary-700" size={20} />,
              }}
              linkHref={featured_venue_link || "#"}
              linkText={HOME_DATA[`${country || "sg"}`].featuredVenue.linkText}
              title={HOME_DATA[`${country || "sg"}`].featuredVenue.title}
              text={HOME_DATA[`${country || "sg"}`].featuredVenue.text}
            >
              <DynamicResponsiveGrid>
                {featured_venues &&
                  featured_venues.length > 0 &&
                  featured_venues.map((venue: any, index: number) => (
                    <DynamicVenueCard key={index} {...venue} />
                  ))}
              </DynamicResponsiveGrid>
            </DynamicGridContainerWithTitle>
          </Fragment>
        )} */}
      </div>

      {/* Event Type Longtails */}
      {/* not include */}
      {/* <div className="bg-explore-types bg-no-repeat w-full bg-cover mx-auto py-10 px-4 md:px-5 lg:px-12 xl:px-20 hidden md:block">
        <h3 className="text-white text-3xl font-semibold leading-10">
          Explore Your Event Types
        </h3>
        <div className="flex mt-10 gap-3 w-10/12 flex-wrap">
          {EXPLORE_EVENT_BUTTONS.map((btn, index) => (
            <Button
              key={index}
              className="bg-white rounded-md flex items-center text-sm font-normal leading-5"
              variant="solid"
            >
              {btn}
            </Button>
          ))}
        </div>
      </div> */}

      {/* Content Service Types */}
      {!isMobile && content_service_type && (
        <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 pt-20 pb-10">
          <div className="max-w-screen-2xl mx-auto">
            <DynamicLightLabelWithIcon
              customClasses="flex items-center gap-x-2.5 justify-between p-2 w-fit gap-x-3 px-0 hidden md:flex"
              customLabel={
                <h3 className="text-3xl font-semibold leading-10 text-primary-700">
                  Popular Events Services
                </h3>
              }
              startIconNode={
                <Image
                  alt="icon"
                  className="h-auto w-[30px]"
                  height={30}
                  loading="lazy"
                  src="/images/icons/vendors_tab_active.svg"
                  width={30}
                />
              }
            />
          </div>
          <DynamicGridContainerWithTitle
            className="px-4 md:px-0 my-10 md:mt-4 md:mb-10 hidden md:block max-w-screen-2xl mx-auto"
            title={HOME_DATA[`${country || "sg"}`].popularEventServices.title}
            titleClasses="text-2xl whitespace-pre"
          >
            <DynamicResponsiveGrid className="lg:grid-cols-2 mt-5">
              {content_service_types &&
                content_service_types.length > 0 &&
                content_service_types.map(
                  ({ attributes }: any, index: number) => {
                    return (
                      <DynamicContentServiceCard
                        key={index}
                        {...attributes}
                        btnText={
                          index === 0 ? "Explore PVM" : "Explore Vendors"
                        }
                      />
                    );
                  }
                )}
            </DynamicResponsiveGrid>
          </DynamicGridContainerWithTitle>
        </div>
      )}

      {/* Service Longtails */}
      {/* not include */}
      {/* <div className="bg-explore-services bg-no-repeat w-full bg-cover mx-auto py-10 px-4 md:px-5 lg:px-12 xl:px-20 hidden md:block">
        <h3 className="text-white text-3xl font-semibold leading-10">
          Explore Your Event Services
        </h3>
        <div className="flex mt-10 gap-3 w-10/12 flex-wrap">
          {EXPLORE_EVENT_BUTTONS.map((btn, index) => (
            <Button
              key={index}
              className="bg-white rounded-md flex items-center"
              variant="solid"
            >
              <VNFTypo text={btn} variant="textSmRegular" />
            </Button>
          ))}
        </div>
        </div> */}

      {/* Want to grow */}

      <DynamicWantToGrow
        country={country}
        headerFooterRes={headerFooterRes}
        vendor_search={vendor_search}
      />

      {/* Blogs */}
      <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-16 bg-primary-50">
        <ScrollContainerWithTitle
          className="px-4 md:px-0 my-10 md:mt-4 md:mb-10 max-w-screen-2xl mx-auto"
          icon={{
            IconNode: <ArrowRight className="text-primary-700" size={20} />,
          }}
          linkHref={blog_link || "#"}
          linkText={HOME_DATA[`${country || "sg"}`].blog.linkText}
          text={HOME_DATA[`${country || "sg"}`].blog.text}
          title={HOME_DATA[`${country || "sg"}`].blog.title}
          titleClasses="text-secondary-900 md:text-primary-700 font-semibold text-3xl"
        >
          <DynamicHorizontalScrollList cardType="blog" items={blogs} />
        </ScrollContainerWithTitle>
      </div>

      {/* Review */}
      <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-16 bg-white">
        <ScrollContainerWithTitle
          className="px-4 md:px-0 my-10 md:mt-4 md:mb-10 max-w-screen-2xl mx-auto"
          icon={{
            IconNode: <ArrowRight className="text-primary-700" size={20} />,
          }}
          title={HOME_DATA[`${country || "sg"}`].review.title}
          titleClasses="text-secondary-900 md:text-primary-700 font-semibold text-3xl mb-5"
        >
          <DynamicHorizontalScrollList
            cardType="whyshouldchoose"
            items={DUMMY_PROMOTEXTS}
          />
        </ScrollContainerWithTitle>
      </div>

      {/* Tour */}
      <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-5 relative">
        <LightGridContainerWithTitle
          className="z-10 px-4 md:px-0 my-10 md:mt-4 md:mb-10 relative max-w-screen-2xl mx-auto"
          icon={{
            IconNode: <ArrowRight className="text-primary-700" size={20} />,
          }}
          linkClasses="hidden md:block"
          text={HOME_DATA[`${country || "sg"}`].tour.text}
          textClasses="hidden md:block"
          title={HOME_DATA[`${country || "sg"}`].tour.title}
          titleClasses="text-primary-700 text-3xl hidden md:block"
        >
          <h3 className="block text-white md:hidden mb-10 text-3xl font-semibold leading-10">
            {HOME_DATA[`${country || "sg"}`].tour.title}
          </h3>
          <DynamicResponsiveGrid className="gap-0 hidden md:grid">
            {DUMMY_COUNTRIES.filter(({ short }) => short !== country).map(
              (country, index) => (
                <DynamicCountryCard key={index} {...country} />
              )
            )}
          </DynamicResponsiveGrid>
          <DynamicHorizontalScrollList
            cardType="country"
            className="block md:hidden"
            items={DUMMY_COUNTRIES}
          />
        </LightGridContainerWithTitle>
        <div className="h-full md:h-[480px] lg:h-[390px] absolute z-0 w-full left-0 right-0 bottom-0 bg-gradient-to-b from-[#211A4C] to-[#323081]" />
      </div>

      {/* Footer form */}
      {/* not include */}
      {/* <div className="w-full mx-auto px-5 md:px-5 lg:px-12 xl:px-20 block md:flex items-center justify-between w-full py-12 bg-secondary-50">
          <div className="flex flex-col gap-y-3 w-7/12 mb-7 md:mb-0">
            <span className="text-xl font-semibold leading-8">
              Subscribe to our newsletter
            </span>
            <span className="text-base font-normal leading-6">
              And get exclusive discount
            </span>
          </div>
          <div className="block md:flex items-center justify-between gap-x-4">
            <Input
              className="rounded-lg h-auto md:h-[44px] w-full md:w-fit min-w-[251px] mb-3 md:mb-0 bg-white"
              label="Enter your email"
              size="sm"
              type="email"
              variant="bordered"
            />
            <Button
              className="rounded-lg px-6 bg-primary-600 h-[44px] w-full md:w-fit"
              color="primary"
              variant="solid"
            >
              Subscribe
            </Button>
          </div>
        </div> */}

      {/* Footer  */}
      <div className="w-full mt-10 mx-auto px-5 md:px-5 lg:px-12 xl:px-20 block md:flex items-center justify-between w-full">
        <Footer headerFooterRes={headerFooterRes} />
      </div>
    </section>
  );
};
