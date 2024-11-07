"use client";

import { Badge } from "@nextui-org/badge";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import { CaretDown, List, X } from "@phosphor-icons/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { default as NextLink } from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { Fragment, useCallback, useEffect, useState } from "react";

import { COOKIE_NAME, LANGS } from "@/config/constants";
import { getCountryCodeFromName } from "@/config/helperFunctions";
import { useCommonStore } from "@/store/common-store";
import { useVenueListStore } from "@/store/venue-list-store";

const DynamicLabelWithIcon = dynamic(() =>
  import("@/components/atoms/LabelWithIcon").then(
    (module) => module.LabelWithIcon,
  ),
);

const DynamicVNFDropdown = dynamic(() =>
  import("@/components/VNFDropdown/Dropdown").then(
    (module) => module.VNFDropdown,
  ),
);
const DynamicUserMenuDropdown = dynamic(() =>
  import("@/components/molecules/UserMenuDropdown").then(
    (module) => module.UserMenuDropdown,
  ),
);

interface LanguageDescriptor {
  name: string;
  title: string;
}

declare global {
  namespace globalThis {
    var __GOOGLE_TRANSLATION_CONFIG__: {
      languages: LanguageDescriptor[];
      defaultLanguage: string;
    };
  }
}

interface VNFNavbarProps {
  maxWidth?: any;
  className?: string;
}

export const VNFNavbar = ({ maxWidth, className }: VNFNavbarProps) => {
  const pathName = usePathname();
  const router = useRouter();

  const params = useParams();

  const {
    country,
    currentUser,
    countryLinks,
    centerMenus,
    navItemsState,
    navItemsStateSm,
    notifications,
    userMenus,
    whyListMenus,
    loginLink,
    signupLink,
    setNavItemsState,
    setNavItemsStateSm,
    toggleNavItemsStateSm,
  } = useCommonStore();

  console.log("Current USER>>>", currentUser);

  const [locale, setLocale] = useState<string>("sg");
  const [lang, setLang] = useState("English");
  const [isLangPopOverOpen, setIsLangPopOverOpen] = useState(false);
  const [isListYourVenuesOpen, setIsListYourVenuesOpen] = useState(false);
  const [isListYourVenuesOpenSm, setIsListYourVenuesOpenSm] = useState(false);

  const { resetStoreVenues } = useVenueListStore();

  useEffect(() => {
    if (params.country) {
      setLocale(params.country as string);

      return;
    }
    // get data from global state
    setLocale(country || "sg");
  }, [params, country]);

  const handleChangeLocale = useCallback((newLocale: string) => {
    // router.push(`/${newLocale}`);
    resetStoreVenues();
    const newRoute = pathName.split("/");

    newRoute[1] = newLocale;
    router.push(newRoute.join("/"));
  }, []);

  const handleChangeLang = useCallback((newLang: string) => {
    destroyCookie(null, COOKIE_NAME, { domain: ".venuerific.com" }) &&
      setCookie(null, COOKIE_NAME, "/auto/" + newLang);
    window.location.reload();
  }, []);

  useEffect(() => {
    const cookies = parseCookies();
    const existingLanguageCookieValue = cookies[COOKIE_NAME];

    let languageValue: any;

    if (existingLanguageCookieValue) {
      const sp = existingLanguageCookieValue.split("/");

      if (sp.length > 2) {
        languageValue = sp[2];
      }
    }
    if (global.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
      languageValue = global.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
    }
    if (languageValue) {
      const foundLang = LANGS.find((lang) => lang.name === languageValue);

      if (foundLang && foundLang.name === "zh-CN") {
        setLang("简体 中文");

        return;
      }
      setLang((foundLang && foundLang.title) || "");
    }
  }, []);

  const { haveBanner, bannerHeight } = useCommonStore();
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(haveBanner ? bannerHeight : 0);
  }, [haveBanner, bannerHeight]);

  // const handleScroll = useCallback(() => {
  //   if (window.scrollY > 1 && haveBanner) {
  //     setTop(0);
  //     return;
  //   }
  //   setTop(bannerHeight);
  // }, [haveBanner, bannerHeight]);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [haveBanner]);

  return (
    <NextUINavbar
      classNames={{
        wrapper: "px-0",
      }}
      isBlurred={false}
      maxWidth={maxWidth || "2xl"}
      style={{
        top: `${top}px`,
      }}
      isBordered
      // className={`px-4 md:px-5 lg:px-12 xl:px-20 items-center py-2 fixed top-0`}
      className={`${className}`}
    >
      <NavbarBrand className="gap-3 max-w-fit">
        <NextLink
          className="flex justify-start items-center w-fit"
          href={`/${params.country || "sg"}`}
        >
          <Image
            priority
            alt="logo"
            height={28}
            src={"/images/logo.png"}
            width={123}
          />
        </NextLink>
      </NavbarBrand>
      <NavbarContent justify="start">
        <li>
          <DynamicVNFDropdown
            dropDownItems={
              (countryLinks &&
                countryLinks.length > 0 &&
                countryLinks.map(({ name, link, icon }, index) => ({
                  key: getCountryCodeFromName(name),
                  text: name,
                  link,
                  startContent: (
                    <Image
                      alt="icon"
                      height={20}
                      loading="lazy"
                      src={icon}
                      width={20}
                    />
                  ),
                }))) ||
              []
            }
            handleChange={handleChangeLocale}
            placement="bottom-start"
            triggerEle={
              <Button className="px-0 min-w-[95px]" variant="light">
                <DynamicLabelWithIcon
                  // showSkeletonWhileLoading
                  customLabel={
                    <span className="text-base font-normal leading-6 uppercase text-secondary-500 hover:text-secondary-600">
                      {locale}
                    </span>
                  }
                  // label={{
                  //   text: locale,
                  //   variant: "textMdRegular",
                  // }}
                  startIcons={[
                    {
                      filePath:
                        countryLinks.find(
                          ({ name, link, icon }, index) =>
                            getCountryCodeFromName(name) === locale
                        )?.icon || "/images/icons/globe.svg",
                    },
                  ]}
                  customIconClasses="w-5 h-5 rounded-full"
                  // customLabelClasses="uppercase text-secondary-500 hover:text-secondary-600"
                  endIcons={[
                    {
                      IconNode: (
                        <CaretDown
                          size={18}
                          style={{
                            minWidth: "15px",
                          }}
                          className="text-secondary-500 hover:text-secondary-600"
                        />
                      ),
                    },
                  ]}
                />
              </Button>
            }
            variant="light"
          />
        </li>
        <li className="hidden lg:flex gap-4 justify-start items-center ml-2">
          {centerMenus.map(({ name, dropdowns, link }, index) => (
            <div key={index}>
              {(!dropdowns && (
                // <NextLink href={link}>
                //   <VNFTypo
                //     text={name}
                //     variant="textMdRegular"
                //     className="text-secondary-500 hover:text-secondary-600"
                //   />
                // </NextLink>
                <a
                  className="text-base font-normal leading-6 text-secondary-500 hover:text-secondary-600"
                  href={link}
                >
                  {name}
                </a>
              )) || (
                <Popover
                  isOpen={
                    (navItemsState.find(
                      (navItem: any) => navItem.name === name && navItem.isOpen,
                    ) &&
                      true) ||
                    false
                  }
                  placement="bottom"
                >
                  <PopoverTrigger>
                    <div
                      className="px-0 cursor-pointer"
                      onMouseEnter={() => {
                        setNavItemsState(name, true);
                      }}
                      onMouseLeave={() => {
                        setNavItemsState(name, false);
                      }}
                    >
                      <DynamicLabelWithIcon
                        customLabel={
                          <span className="text-base font-normal leading-6 text-secondary-500 hover:text-secondary-600">
                            {name}
                          </span>
                        }
                        // label={{
                        //   text: name,
                        //   variant: "textMdRegular",
                        // }}
                        customIconClasses="w-5 h-5"
                        // customLabelClasses="text-secondary-500 hover:text-secondary-600"
                        endIcons={[
                          {
                            IconNode: (
                              <CaretDown
                                size={18}
                                style={{
                                  minWidth: "15px",
                                }}
                                className="text-secondary-500 hover:text-secondary-600"
                              />
                            ),
                          },
                        ]}
                      />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent
                    onMouseEnter={() => {
                      setNavItemsState(name, true);
                    }}
                    onMouseLeave={() => {
                      setNavItemsState(name, false);
                    }}
                  >
                    <div className="flex py-3 px-2 flex-col gap-y-5 w-[250px]">
                      {dropdowns.map(
                        (
                          { name, description, link, icon }: any,
                          index: any,
                        ) => (
                          // <NextLink
                          //   key={index}
                          //   className="flex items-start justify-between gap-4"
                          //   href={link}
                          // >
                          <a
                            key={index}
                            className="flex items-start justify-between gap-4"
                            href={link}
                          >
                            <Image
                              alt="icon"
                              className="mt-1"
                              height={20}
                              loading="lazy"
                              src={icon}
                              width={20}
                            />

                            <div className="w-full text-clip">
                              {/* <VNFTypo
                                className="block mb-1"
                                text={name}
                                variant="textMdSemibold"
                              /> */}
                              <span className="inline-block text-base font-semibold leading-6 mb-1">
                                {name}
                              </span>
                              {/* <VNFTypo
                                className="w-full text-clip"
                                text={description}
                                variant="textSmRegular"
                              /> */}
                              <span className="block w-full text-sm font-normal leading-5 text-clip">
                                {description}
                              </span>
                            </div>
                          </a>
                          // </NextLink>
                        ),
                      )}
                    </div>
                  </PopoverContent>
                </Popover>
              )}
            </div>
          ))}
        </li>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex gap-2">
          <DynamicVNFDropdown
            dropDownItems={LANGS.map(({ title, name }, index) => ({
              text: title,
              key: name,
            }))}
            handleChange={handleChangeLang}
            placement="bottom-start"
            triggerEle={
              <Button className="px-0 min-w-[95px]" variant="light">
                <DynamicLabelWithIcon
                  customLabel={
                    <span className="text-base font-normal leading-6 text-secondary-500 hover:text-secondary-600">
                      {lang}
                    </span>
                  }
                  // label={{
                  //   text: lang,
                  //   variant: "textMdRegular",
                  // }}
                  startIcons={[
                    {
                      filePath: "/images/icons/globe.svg",
                    },
                  ]}
                  customIconClasses="w-5 h-5"
                  // customLabelClasses="text-secondary-500 hover:text-secondary-600"
                  endIcons={[
                    {
                      IconNode: (
                        <CaretDown
                          size={18}
                          style={{
                            minWidth: "15px",
                          }}
                          className="text-secondary-500 hover:text-secondary-600"
                        />
                      ),
                    },
                  ]}
                />
              </Button>
            }
            variant="light"
          />
        </NavbarItem>

        {!pathName.startsWith("/login") && !pathName.startsWith("/signup") && (
          <NavbarItem className="hidden lg:flex">
            {/* <NextLink
              className={clsx(linkStyles({ color: "foreground" }))}
              color="foreground"
              href="/venue-list"
            >
              <VNFTypo text="List Your Venue" variant="textMdMedium" />
            </NextLink> */}

            <Popover
              showArrow
              isOpen={isListYourVenuesOpen}
              placement="bottom"
              size="lg"
            >
              <PopoverTrigger>
                <div
                  className="px-0 cursor-pointer"
                  onMouseEnter={() => {
                    setIsListYourVenuesOpen(true);
                  }}
                  onMouseLeave={() => {
                    setIsListYourVenuesOpen(false);
                  }}
                >
                  <DynamicLabelWithIcon
                    customClasses="px-0"
                    customLabel={
                      <span className="text-base font-normal leading-6 text-secondary-500 hover:text-secondary-600">
                        List Your Venue
                      </span>
                    }
                    // label={{
                    //   text: "List Your Venue",
                    //   variant: "textMdRegular",
                    // }}
                    customIconClasses="w-5 h-5"
                    // customLabelClasses="text-secondary-500 hover:text-secondary-600"
                    endIcons={[
                      {
                        IconNode: (
                          <CaretDown
                            size={18}
                            style={{
                              minWidth: "15px",
                            }}
                            className="text-secondary-500 hover:text-secondary-600"
                          />
                        ),
                      },
                    ]}
                  />
                </div>
              </PopoverTrigger>
              <PopoverContent
                className="w-full h-full p-0"
                onMouseEnter={() => {
                  setIsListYourVenuesOpen(true);
                }}
                onMouseLeave={() => {
                  setIsListYourVenuesOpen(false);
                }}
              >
                <div className="flex flex-col w-full">
                  {whyListMenus.map(({ name, link }, index) => (
                    // <NextLink
                    //   color="foreground"
                    //   href={link}
                    //   key={index}
                    //   className="bg-white w-full px-4 py-3 rounded-xl hover:bg-secondary-100"
                    // >
                    <a
                      key={index}
                      className="bg-white w-full px-4 py-3 rounded-xl hover:bg-secondary-100 text-base font-medium leading-6"
                      color="foreground"
                      href={link}
                    >
                      {/* <VNFTypo text={name} variant="textMdMedium" /> */}
                      {name}
                    </a>
                    // </NextLink>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </NavbarItem>
        )}

        {currentUser && Object.keys(currentUser).length > 0 && (
          <NavbarItem className="flex items-center gap-x-3">
            <DynamicVNFDropdown
              // dropDownItems={LANGS.map(({ title, name }, index) => ({
              //   text: title,
              //   key: name,
              // }))}
              showArrow
              dropDownItemClasses="items-start p-2"
              dropDownMenuClasses="p-0 max-h-[50vh] overflow-scroll"
              dropDownItems={
                notifications &&
                notifications.data &&
                notifications.data.map(
                  (
                    { title, message, link, date, icon_background, icon }: any,
                    index: number
                  ) => ({
                    key: index,
                    text: message,
                    link,
                    startContent: (
                      <div
                        className={`bg-[${icon_background && icon_background.color}] rounded-full flex items-center justify-center`}
                      >
                        <Image
                          alt="icon"
                          height={32}
                          loading="lazy"
                          className="h-8 w-8 object-contain"
                          src={icon}
                          width={32}
                        />
                      </div>
                    ),
                    customContent: (
                      <a
                        href={link}
                        className="flex w-full flex-col gap-y-2 px-3 min-w-[70%] sm:min-w-[200px]"
                      >
                        <p className="text-sm font-semibold leading-5 text-secondary-900 block w-[200px] whitespace-normal">
                          {message}
                        </p>
                        <span className="text-sm font-normal leading-5 text-secondary-600 block w-full">
                          Click here to find out
                        </span>
                        <span className="text-xs font-normal leading-4 text-secondary-500 mt-2">
                          {date}
                        </span>
                      </a>
                    ),
                  })
                )
              }
              // isDisabled
              placement="bottom"
              triggerEle={
                <Button isIconOnly variant="solid" className="bg-white">
                  {(notifications && notifications.unread_count > 0 && (
                    <Badge
                      color="danger"
                      content=""
                      size="sm"
                      isInvisible={false}
                      shape="circle"
                    >
                      <Image
                        src={"/images/icons/bell.svg"}
                        alt="noti-bell"
                        height={20}
                        width={20}
                        className="w-5 h-5 object-contain"
                      />
                    </Badge>
                  )) || (
                    <Image
                      src={"/images/icons/bell.svg"}
                      alt="noti-bell"
                      height={20}
                      width={20}
                      className="w-5 h-5 object-contain"
                    />
                  )}
                </Button>
              }
              variant="flat"
            />
            <DynamicUserMenuDropdown
              showArrow
              className="p-0"
              currentUser={currentUser}
              dropDownItemClasses="px-3 py-2 text-sm font-medium leading-5"
              dropDownItems={
                (userMenus &&
                  userMenus.length > 0 &&
                  userMenus.map(
                    (
                      { name, link, icon, separator_below }: any,
                      index: any,
                    ) => ({
                      key: index,
                      link,
                      text: name,
                      startContent: (
                        <Image
                          alt="icon"
                          className="h-[16px] w-[16px] object-contain"
                          height={16}
                          loading="lazy"
                          src={icon}
                          width={16}
                        />
                      ),
                      separator_below,
                    }),
                  )) ||
                []
              }
              dropDownMenuClasses="p-0 rounded-sm"
              placement="bottom-end"
              triggerEle={
                <Button className="px-0 min-w-[80px]" variant="bordered">
                  <DynamicLabelWithIcon
                    customClasses="gap-x-1"
                    customIconClasses="w-6 h-6 rounded-full"
                    endIcons={[
                      {
                        IconNode: (
                          <CaretDown
                            size={18}
                            style={{
                              minWidth: "15px",
                            }}
                          />
                        ),
                      },
                    ]}
                    startIcons={[
                      {
                        filePath:
                          (currentUser &&
                            currentUser.attributes &&
                            currentUser.attributes.shrine_avatar_url) ||
                          "/images/icons/user.webp",
                      },
                    ]}
                  />
                </Button>
              }
              variant="light"
            />
          </NavbarItem>
        )}

        {/* hidden md:flex lg:hidden */}
        {!pathName.startsWith("/login") &&
          !pathName.startsWith("/signup") &&
          !(currentUser && Object.keys(currentUser).length > 0) && (
            <NavbarItem className="hidden lg:flex items-center gap-3">
              <a href={signupLink}>
                <Button
                  // as={Link}
                  className="rounded-lg border-secondary-300"
                  color="secondary"
                  // href={signupLink}
                  variant="bordered"
                >
                  Sign up
                </Button>
              </a>
              <a href={loginLink}>
                <Button
                  // as={Link}
                  className="bg-primary-600 rounded-lg"
                  color="primary"
                  // href={loginLink}
                  variant="solid"
                >
                  Log in
                </Button>
              </a>
            </NavbarItem>
          )}
      </NavbarContent>

      <NavbarMenuToggle
        className="lg:hidden w-fit"
        icon={(isOpen) => (isOpen && <X size={24} />) || <List size={24} />}
      />

      {/* menu toggle */}
      <NavbarMenu
        className={`border`}
        style={{
          top: `${top + 50}px`,
        }}
      >
        <div className="mt-4 py-4 flex flex-col gap-5 border-t-1">
          {centerMenus.map(({ name, dropdowns, link }, index) => (
            <NavbarMenuItem key={index}>
              {(!dropdowns && (
                // <NextLink href={link}>
                <a
                  className="text-base font-semibold leading-6 text-secondary-900"
                  href={link}
                >
                  {/* <VNFTypo
                    className="text-secondary-900"
                    text={name}
                    variant="textMdSemibold"
                  /> */}
                  {name}
                </a>
                // </NextLink>
              )) || (
                <Popover
                  shouldCloseOnBlur
                  isOpen={
                    (navItemsStateSm.find(
                      (navItem: any) => navItem.name === name && navItem.isOpen,
                    ) &&
                      true) ||
                    false
                  }
                  placement="bottom"
                  onOpenChange={(isOpen) => {
                    toggleNavItemsStateSm(name);
                  }}
                >
                  <PopoverTrigger>
                    <div
                      className="px-0 cursor-pointer"
                      // onMouseEnter={() => {
                      //   setNavItemsStateSm(name, true);
                      // }}
                      // onMouseLeave={() => {
                      //   setNavItemsStateSm(name, false);
                      // }}
                    >
                      <DynamicLabelWithIcon
                        customClasses="px-0"
                        customIconClasses="w-5 h-5"
                        endIcons={[
                          {
                            IconNode: (
                              <CaretDown
                                size={18}
                                style={{
                                  minWidth: "15px",
                                }}
                              />
                            ),
                          },
                        ]}
                        // label={{
                        //   text: name,
                        //   variant: "textMdSemibold",
                        // }}
                        customLabel={
                          <span className="text-base font-semibold leading-6">
                            {name}
                          </span>
                        }
                      />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent
                    onMouseEnter={() => {
                      setNavItemsStateSm(name, true);
                    }}
                    onMouseLeave={() => {
                      setNavItemsStateSm(name, false);
                    }}
                  >
                    <div className="flex py-3 px-2 flex-col gap-y-5 w-full">
                      {dropdowns.map(
                        (
                          { name, description, link, icon }: any,
                          index: any,
                        ) => (
                          // <NextLink
                          //   key={index}
                          //   className="flex items-start justify-between gap-4"
                          //   href={link}
                          // >
                          <a
                            key={index}
                            className="flex items-start justify-between gap-4"
                            href={link}
                          >
                            <Image
                              alt="icon"
                              className="mt-1"
                              height={20}
                              loading="lazy"
                              src={icon}
                              width={20}
                            />

                            <div className="w-full text-clip">
                              {/* <VNFTypo
                                className="block mb-1"
                                text={name}
                                variant="textMdSemibold"
                              /> */}
                              <span className="inline-block text-base font-semibold leading-6 mb-1">
                                {name}
                              </span>
                              {/* <VNFTypo
                                className="w-full text-clip"
                                text={description}
                                variant="textSmRegular"
                              /> */}
                              <span className="block w-full text-sm font-normal leading-5 text-clip">
                                {description}
                              </span>
                            </div>
                          </a>
                          // </NextLink>
                        ),
                      )}
                    </div>
                  </PopoverContent>
                </Popover>
              )}
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem key={"lang-sm"} className="block md:hidden">
            <Popover
              shouldCloseOnBlur
              showArrow
              isOpen={isLangPopOverOpen}
              placement="bottom"
              size="lg"
              onOpenChange={(isOpen) => {
                setIsLangPopOverOpen(!isLangPopOverOpen);
              }}
            >
              <PopoverTrigger>
                <div
                  className="px-0 cursor-pointer"
                  // onMouseEnter={() => {
                  //   setIsLangPopOverOpen(true);
                  // }}
                  // onMouseLeave={() => {
                  //   setIsLangPopOverOpen(false);
                  // }}
                >
                  <DynamicLabelWithIcon
                    customClasses="px-0"
                    customIconClasses="w-5 h-5"
                    endIcons={[
                      {
                        IconNode: (
                          <CaretDown
                            size={18}
                            style={{
                              minWidth: "15px",
                            }}
                          />
                        ),
                      },
                    ]}
                    // label={{
                    //   text: lang,
                    //   variant: "textMdSemibold",
                    // }}
                    customLabel={
                      <span className="text-base font-semibold leading-6">
                        {lang}
                      </span>
                    }
                  />
                </div>
              </PopoverTrigger>
              <PopoverContent
                className="w-full"
                onMouseEnter={() => {
                  setIsLangPopOverOpen(true);
                }}
                onMouseLeave={() => {
                  setIsLangPopOverOpen(false);
                }}
              >
                <div className="flex py-3 px-2 flex-col gap-y-5 w-full">
                  {LANGS.map(({ title, name }, index) => (
                    <Button
                      key={index}
                      className="flex items-center justify-start gap-4"
                      variant="light"
                      onClick={() => handleChangeLang(name)}
                    >
                      <Image
                        alt="icon"
                        className="mt-1"
                        height={20}
                        loading="lazy"
                        src={"/images/icons/globe.svg"}
                        width={20}
                      />

                      <div className="w-full text-clip text-base font-semibold leading-6 text-left">
                        {/* <VNFTypo
                          className="block text-left"
                          text={title}
                          variant="textMdSemibold"
                        /> */}
                        {title}
                      </div>
                    </Button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </NavbarMenuItem>

          <Divider className="my-2" orientation="horizontal" />

          {/* <div className="flex justify-between">
            <div className="flex flex-col gap-y-3">
              {EXTRA_NAVS1.map(({ text, link }, index) => (
                <a
                  key={index}
                  className="block mb-1 text-base font-semibold leading-6"
                  href={link}
                >
                  {text}
                </a>
                // </NextLink>
              ))}
            </div>
            <div className="flex flex-col gap-y-3">
              {EXTRA_NAVS2.map(({ text, link }, index) => (
                <a
                  key={index}
                  className="block mb-1 text-base font-semibold leading-6"
                  href={link}
                >
                  {text}
                </a>
              ))}
            </div>
          </div> */}

          {!pathName.startsWith("/login") &&
            !pathName.startsWith("/signup") && (
              <Fragment>
                {!(currentUser && Object.keys(currentUser).length > 0) && (
                  <div className="w-full flex flex-col gap-y-3 my-2">
                    <a href={signupLink}>
                      <Button
                        // as={Link}
                        className="rounded-lg w-full border-secondary-300"
                        color="secondary"
                        // href={signupLink}
                        variant="bordered"
                      >
                        Sign up
                      </Button>
                    </a>
                    <a href={loginLink}>
                      <Button
                        // as={Link}
                        className="rounded-lg w-full bg-primary-600"
                        color="primary"
                        // href={loginLink}
                        variant="solid"
                      >
                        Log in
                      </Button>
                    </a>
                  </div>
                )}

                {/* <NextLink
                  className={clsx(linkStyles({ color: "foreground" }))}
                  color="foreground"
                  href="/venue-list"
                >
                  <VNFTypo
                    className="w-full text-center"
                    text="List Your Venue"
                    variant="textMdSemibold"
                  />
                </NextLink> */}

                <Popover
                  shouldCloseOnBlur
                  showArrow
                  isOpen={isListYourVenuesOpenSm}
                  placement="bottom"
                  size="lg"
                  onOpenChange={(isOpen) => {
                    setIsListYourVenuesOpenSm(!isListYourVenuesOpenSm);
                  }}
                >
                  <PopoverTrigger>
                    <div
                      className="px-0 cursor-pointer"
                      onMouseEnter={() => {
                        setIsListYourVenuesOpenSm(true);
                      }}
                      onMouseLeave={() => {
                        setIsListYourVenuesOpenSm(false);
                      }}
                    >
                      <DynamicLabelWithIcon
                        customClasses="px-0"
                        customIconClasses="w-5 h-5"
                        endIcons={[
                          {
                            IconNode: (
                              <CaretDown
                                size={18}
                                style={{
                                  minWidth: "15px",
                                }}
                              />
                            ),
                          },
                        ]}
                        // label={{
                        //   text: "List Your Venue",
                        //   variant: "textMdSemibold",
                        // }}
                        customLabel={
                          <span className="text-base font-semibold leading-6">
                            List Your Venue
                          </span>
                        }
                      />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-full h-full p-0"
                    onMouseEnter={() => {
                      setIsListYourVenuesOpenSm(true);
                    }}
                    onMouseLeave={() => {
                      setIsListYourVenuesOpenSm(false);
                    }}
                  >
                    <div className="flex flex-col w-full">
                      {whyListMenus.map(({ name, link }, index) => (
                        // <NextLink
                        //   color="foreground"
                        //   href={link}
                        //   key={index}
                        //   className="bg-white w-full px-5 py-4 rounded-xl hover:bg-secondary-100"
                        // >
                        <a
                          key={index}
                          className="bg-white w-full px-5 py-4 rounded-xl hover:bg-secondary-100 text-base font-semibold leading-6"
                          href={link}
                        >
                          {/* <VNFTypo text={name} variant="textMdSemibold" /> */}
                          {name}
                        </a>
                        // </NextLink>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              </Fragment>
            )}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
