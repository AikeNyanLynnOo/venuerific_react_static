import { useEffect } from "react";

import { useCommonStore } from "@/store/common-store";
import { setCountryCookie } from "@/config/helperFunctions";

// React

export const useDataSet = (
  headerFooterRes?: any,
  // country?: string,
  cookieStore?: any,
) => {
  const {
    // navbar
    changeCountry,
    setCurrentUser,
    setCountryLinks,
    setCenterMenus,
    setNavItemsState,
    setNavItemsStateSm,
    putNavItemsState,
    putNavItemsStateSm,
    setNotifications,
    setUserMenus,
    setWhyListMenus,
    setLoginLink,
    setSignupLink,

    // footer
    setFooterMenus,
    setFooterInformations,
    setOffice,
    setSocials,
    setTermsAndConditionLink,
    setPrivacyLink,
    setSitemapLink,
  } = useCommonStore();

  const { data } = headerFooterRes || {};
  const {
    // navbar
    country,
    countries_link,
    countries,
    center_menus,
    why_list_menus,
    notifications,
    user_menus,
    login_link,
    sign_up_link,
    current_user,
    // footer
    footer_menus,
    footer_informations,
    office,
    socials,
    terms_and_condition_link,
    privacy_link,
    sitemap_link,
  } = data || {};

  // set country for global
  useEffect(() => {
    changeCountry(country || "sg");
  }, [country]);

  // set country in cookie
  setCountryCookie(country || "sg");

  // set current user
  useEffect(() => {
    setCurrentUser(current_user || null);
  }, [current_user]);

  // set country links
  useEffect(() => {
    setCountryLinks(countries_link || []);
  }, [countries_link]);

  // set center menus
  useEffect(() => {
    setCenterMenus(center_menus || []);
    putNavItemsState(
      (center_menus &&
        center_menus.map((item: any) => ({
          ...item,
          isOpen: false,
        }))) ||
        [],
    );
    putNavItemsStateSm(
      (center_menus &&
        center_menus.map((item: any) => ({
          ...item,
          isOpen: false,
        }))) ||
        [],
    );
  }, [center_menus]);

  // set notifications
  useEffect(() => {
    setNotifications(notifications || []);
  }, [notifications]);

  // set user menus
  useEffect(() => {
    setUserMenus(user_menus || []);
  }, [user_menus]);

  // set why list menus
  useEffect(() => {
    setWhyListMenus(why_list_menus || []);
  }, [why_list_menus]);

  // set login link
  useEffect(() => {
    setLoginLink(login_link || "");
  }, [login_link]);

  // set sign up link
  useEffect(() => {
    setSignupLink(sign_up_link || "");
  }, [sign_up_link]);

  // set footer menus
  useEffect(() => {
    setFooterMenus(footer_menus || []);
  }, [footer_menus]);

  // set footer informations
  useEffect(() => {
    setFooterInformations(footer_informations || []);
  }, [footer_informations]);

  // set office
  useEffect(() => {
    setOffice(office || null);
  }, [office]);

  // set socials
  useEffect(() => {
    setSocials(socials || []);
  }, [socials]);

  // set terms and condition link
  useEffect(() => {
    setTermsAndConditionLink(terms_and_condition_link || "");
  }, [terms_and_condition_link]);

  // set privacy link
  useEffect(() => {
    setPrivacyLink(privacy_link || "");
  }, [privacy_link]);

  // set sitemap link
  useEffect(() => {
    setSitemapLink(sitemap_link || "");
  }, [sitemap_link]);
};
