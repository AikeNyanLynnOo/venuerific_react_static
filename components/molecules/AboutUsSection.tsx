"use client";

import Image from "next/image";

import Footer from "./Footer";

interface AboutUsSectionProps {
  headerFooterRes?: any;
}

export const AboutUsSection = ({ headerFooterRes }: AboutUsSectionProps) => {
  const { data } = headerFooterRes;
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
  } = data;

  //   const {
  //     changeCountry,
  //     setCurrentUser,
  //     setCountryLinks,
  //     setCenterMenus,
  //     setNavItemsState,
  //     setNavItemsStateSm,
  //     putNavItemsState,
  //     putNavItemsStateSm,
  //     setNotifications,
  //     setUserMenus,
  //     setWhyListMenus,
  //     setLoginLink,
  //     setSignupLink,
  //     setCookieStore,
  //   } = useCommonStore();

  //   // set country for global
  //   useEffect(() => {
  //     changeCountry(country || "sg");
  //   }, [country]);

  //   // set current user
  //   useEffect(() => {
  //     setCurrentUser(current_user);
  //   }, [current_user]);

  //   // set country links
  //   useEffect(() => {
  //     setCountryLinks(countries_link);
  //   }, [countries_link]);

  //   // set center menus
  //   useEffect(() => {
  //     setCenterMenus(center_menus);
  //     putNavItemsState(
  //       center_menus.map((item: any) => ({
  //         ...item,
  //         isOpen: false,
  //       }))
  //     );
  //     putNavItemsStateSm(
  //       center_menus.map((item: any) => ({
  //         ...item,
  //         isOpen: false,
  //       }))
  //     );
  //   }, [center_menus]);

  //   // set notifications
  //   useEffect(() => {
  //     setNotifications(notifications);
  //   }, [notifications]);

  //   // set user menus
  //   useEffect(() => {
  //     setUserMenus(user_menus);
  //   }, [user_menus]);

  //   // set why list menus
  //   useEffect(() => {
  //     setWhyListMenus(why_list_menus);
  //   }, [why_list_menus]);

  //   // set login link
  //   useEffect(() => {
  //     setLoginLink(login_link);
  //   }, [login_link]);

  //   // set sign up link
  //   useEffect(() => {
  //     setSignupLink(sign_up_link);
  //   }, [sign_up_link]);

  return (
    <section className="mt-[81px] w-full">
      <Image
        unoptimized
        alt="about_hero_img"
        className="w-full h-auto hidden md:block"
        height={400}
        src={"/images/hero_imgs/about_hero.webp"}
        width={1200}
      />
      <Image
        unoptimized
        alt="about_hero_img"
        className="w-full h-auto block md:hidden"
        height={400}
        src={"/images/hero_imgs/about_hero_sm.webp"}
        width={1200}
      />
      <div className="bg-white mt-10">
        <div className="w-full">
          <div className="px-5 md:px-16 lg:px-20  max-w-screen-2xl mx-auto">
            <p className="text-lg font-semibold leading-8 text-primary-700">
              About Us
            </p>
            <h2 className="text-3xl font-semibold leading-normal text-secondary-900 mt-2">
              Welcome to Venuerific.
            </h2>
            <p className="mt-4 text-secondary-600 w-full mx-auto lg:mx-0 leading-relaxed">
              In 2013, Ricardo Sentosa started Venuerific to help restaurants
              struggling with high manpower costs and rental rates in Singapore.
              <br />
              <br />
              What started as a thought-provoking question, “What if?” has grown
              into Asia&apos;s largest platform for event planners and venue
              owners, transforming the way people find, plan and book venues.
              From the Guoco Midtown Network Hub to the iconic Mandala Club, our
              platform simplifies venue discovery and booking with just a few
              clicks.
              <br />
              <br />
              Today, we empower thousands of venue owners & event vendors across
              Singapore, Malaysia, Hong Kong, the Philippines, and Indonesia to
              drive their growth and boost their ability to connect with event
              planners.
              <br />
              <br />
              With our integrated suite of venue management software,
              marketplace, and marketing solutions, we provide the tools they
              need to generate leads, manage their spaces and connect with
              customers like never before.
              <br />
              <br />
              At Venuerific, we&apos;re more than just a technology and software
              company. We&apos;re a dedicated team passionate about bringing
              people and venues together and transforming every event into
              something extraordinary.
              <br />
              <br />
              Whether it&apos;s celebrating life&apos;s moments and corporate
              milestones to planning impactful workshops and company events,
              we&apos;re here to make every occasion exceptional. 🎉
            </p>
          </div>
          <div className="mt-12 bg-[#09113D] py-8 px-4 lg:px-20 lg:py-16 py-20 text-white flex items-center justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center w-full lg:w-fit">
              <div className="p-2 lg:p-5">
                <p className="text-4xl font-bold">5</p>
                <p className="text-lg mt-2">Country Around Southeast Asia</p>
              </div>
              <div className="p-2 lg:p-5">
                <p className="text-4xl font-bold">100,000+</p>
                <p className="text-lg mt-2">Website visitors per month</p>
              </div>
              <div className="p-2 lg:p-5">
                <p className="text-4xl font-bold">5,000+</p>
                <p className="text-lg mt-2">Average bookings/month</p>
              </div>
              <div className="p-2 lg:p-5">
                <p className="text-4xl font-bold">1,000+</p>
                <p className="text-lg mt-2">Venues listed</p>
              </div>
            </div>
            <Image
              unoptimized
              alt="about_us_world"
              className="w-[200px] lg:w-[512px] h-auto hidden lg:block"
              height={500}
              src={"/images/background_imgs/about_us_world.webp"}
              width={512}
            />
          </div>
        </div>
      </div>
      {/* Footer  */}
      <div className="w-full mt-5 mx-auto px-5 md:px-5 lg:px-12 xl:px-20 block md:flex items-center justify-between w-full">
        <Footer />
      </div>
    </section>
  );
};
