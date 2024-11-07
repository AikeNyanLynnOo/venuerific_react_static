export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Rent top events | Venuerific",
  description:
    "Explore top event venues for rent on Venuerific, the largest venue marketplace. Book an event space with the best rate and no fees.",
  navItems: [
    {
      label: "Venues",
      href: "/venues",
      isDropDown: false,
    },
    {
      label: "Vendors",
      href: "/vendors",
      isDropDown: false,
    },
    {
      label: "Solutions",
      href: "/solutions",
      isDropDown: true,
    },
    {
      label: "Blog",
      href: "/blog",
      isDropDown: false,
    },
  ],
  navMenuItems: [
    {
      label: "Venues",
      href: "/venues",
      isDropDown: false,
    },
    {
      label: "Vendors",
      href: "/vendors",
      isDropDown: false,
    },
    {
      label: "Solutions",
      href: "/solutions",
      isDropDown: true,
    },
    {
      label: "Blog",
      href: "/blog",
      isDropDown: false,
    },
  ],

  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
