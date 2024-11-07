import { create } from "zustand";

type Store = {
  // top banner
  haveBanner: boolean;
  bannerHeight: number;

  // navbar
  country: string;
  currentUser: any;
  countryLinks: any[];
  centerMenus: any[];
  navItemsState: any;
  navItemsStateSm: any;
  notifications: any;
  userMenus: any[];
  whyListMenus: any[];
  loginLink: string;
  signupLink: string;

  // footer
  footerMenus: any[];
  footerInformations: any[];
  office: any;
  socials: any[];
  termsAndConditionLink: string;
  privacyLink: string;
  sitemapLink: string;

  // setter - top banner
  setHaveBanner: (haveBanner: boolean) => void;
  setBannerHeight: (bannerHeight: number) => void;

  // setters - Navbar
  changeCountry: (newCountry: string) => void;
  setCurrentUser: (currentUser: any) => void;
  setCountryLinks: (countryLinks: any[]) => void;
  setCenterMenus: (centerMenus: any[]) => void;
  setNavItemsState: (name: any, open: boolean) => void;
  setNavItemsStateSm: (name: any, open: boolean) => void;
  toggleNavItemsStateSm: (name: any) => void;

  putNavItemsState: (items: any) => void;
  putNavItemsStateSm: (items: any) => void;
  setNotifications: (notifications: any[]) => void;
  setUserMenus: (userMenus: any[]) => void;
  setWhyListMenus: (whyListMenus: any[]) => void;
  setLoginLink: (link: string) => void;
  setSignupLink: (link: string) => void;

  // setters - Footer
  setFooterMenus: (footerMenus: any) => void;
  setFooterInformations: (footerInformations: any) => void;
  setOffice: (office: any) => void;
  setSocials: (socials: any) => void;
  setTermsAndConditionLink: (termsAndConditionLink: string) => void;
  setPrivacyLink: (privacyLink: string) => void;
  setSitemapLink: (sitemapLink: string) => void;
};

export const useCommonStore = create<Store>()((set) => ({
  // top banner
  haveBanner: false,
  bannerHeight: 40,

  country: "",
  currentUser: null,
  countryLinks: [],
  centerMenus: [],
  navItemsState: [],
  navItemsStateSm: [],
  footerMenus: [],
  footerInformations: [],
  office: null,
  socials: [],
  termsAndConditionLink: "",
  privacyLink: "",
  sitemapLink: "",

  notifications: null,
  userMenus: [],
  whyListMenus: [],
  loginLink: "",
  signupLink: "",

  // Top banner setter
  setHaveBanner: (haveBanner: boolean) => {
    set((state) => ({ ...state, haveBanner }));
  },
  setBannerHeight: (bannerHeight: number) => {
    set((state) => ({ ...state, bannerHeight }));
  },

  // Navbar setters
  changeCountry: (newCountry: string) => {
    set((state) => ({ ...state, country: newCountry }));
  },

  setCurrentUser: (currentUser: any) => {
    set((state) => ({ ...state, currentUser }));
  },

  setCountryLinks: (countryLinks: any) => {
    set((state) => ({
      ...state,
      countryLinks,
    }));
  },
  setCenterMenus: (centerMenus: any) => {
    set((state) => ({
      ...state,
      centerMenus,
    }));
  },

  setNavItemsState: (name: any, open: boolean) => {
    set((state) => {
      const { navItemsState } = state;
      const newItems = navItemsState.map((prevItem: any) => {
        if (prevItem.name === name) {
          return {
            ...prevItem,
            isOpen: open,
          };
        }

        return {
          ...prevItem,
        };
      });

      return {
        ...state,
        navItemsState: newItems,
      };
    });
  },

  setNavItemsStateSm: (name: any, open: boolean) => {
    set((state) => {
      const { navItemsStateSm } = state;
      const newItems = navItemsStateSm.map((prevItem: any) => {
        if (prevItem.name === name) {
          return {
            ...prevItem,
            isOpen: open,
          };
        }

        return {
          ...prevItem,
        };
      });

      return {
        ...state,
        navItemsStateSm: newItems,
      };
    });
  },

  toggleNavItemsStateSm: (name: any) => {
    set((state) => {
      const { navItemsStateSm } = state;
      const newItems = navItemsStateSm.map((prevItem: any) => {
        // console.log("Prev Item>>", prevItem);
        if (prevItem.name === name) {
          return {
            ...prevItem,
            isOpen: !prevItem.isOpen,
          };
        }

        return {
          ...prevItem,
        };
      });

      return {
        ...state,
        navItemsStateSm: newItems,
      };
    });
  },

  putNavItemsState: (items) => {
    set((state) => ({
      ...state,
      navItemsState: items,
    }));
  },

  putNavItemsStateSm: (items) => {
    set((state) => ({
      ...state,
      navItemsStateSm: items,
    }));
  },

  setNotifications: (notifications: any) => {
    set((state) => ({
      ...state,
      notifications,
    }));
  },

  setUserMenus: (userMenus: any[]) => {
    set((state) => ({
      ...state,
      userMenus,
    }));
  },

  setWhyListMenus: (whyListMenus: any[]) => {
    set((state) => ({
      ...state,
      whyListMenus,
    }));
  },

  setLoginLink: (loginLink: string) => {
    set((state) => ({
      ...state,
      loginLink,
    }));
  },

  setSignupLink: (signupLink: string) => {
    set((state) => ({
      ...state,
      signupLink,
    }));
  },

  // Footer setters
  setFooterMenus: (footerMenus) => {
    set((state) => ({
      ...state,
      footerMenus,
    }));
  },
  setFooterInformations: (footerInformations) => {
    set((state) => ({
      ...state,
      footerInformations,
    }));
  },
  setOffice: (office: any) => {
    set((state) => ({
      ...state,
      office,
    }));
  },
  setSocials: (socials) => {
    set((state) => ({
      ...state,
      socials,
    }));
  },
  setTermsAndConditionLink: (termsAndConditionLink) => {
    set((state) => ({
      ...state,
      termsAndConditionLink,
    }));
  },
  setPrivacyLink: (privacyLink) => {
    set((state) => ({
      ...state,
      privacyLink,
    }));
  },
  setSitemapLink: (sitemapLink) => {
    set((state) => ({
      ...state,
      sitemapLink,
    }));
  },
}));
