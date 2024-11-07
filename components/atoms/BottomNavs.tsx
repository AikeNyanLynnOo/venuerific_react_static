interface NavItem {
  label: string;
  link: string;
  icon: string;
  isActive?: boolean;
}

const navs: NavItem[] = [
  {
    label: "Home",
    link: "/",
    icon: "/images/icons/home.svg",
    isActive: true,
  },
  {
    label: "Venues",
    link: "/venues",
    icon: "/images/icons/venues_tab_default.svg",
  },
  {
    label: "Search",
    link: "/search",
    icon: "/images/icons/search.svg",
  },
  {
    label: "Vendors",
    link: "/vendors",
    icon: "/images/icons/vendors_tab_default.svg",
  },
  {
    label: "Account",
    link: "/account",
    icon: "/images/icons/user_account.svg",
  },
];

export const BottomNavs = () => {
  return (
    <div className="flex w-full sticky bottom-0 z-10 bg-white justify-evenly shadow-lg border-t md:hidden">
      {navs.map(({ link, label, icon, isActive }, index) => (
        <a
          key={index}
          className={`flex flex-nowrap w-auto flex-col text-center items-center space-y-1 py-4 text-xs font-semibold leading-4 relative ${index === 0 ? "sticky left-0 z-10 bg-white" : "z-1"} ${
            isActive ? "text-black" : "text-secondary-400"
          } hover:text-secondary-500`}
          href={link}
        >
          <img alt={label} className="h-5 w-5 object-contain" src={icon} />
          <span className="text-sm block whitespace-nowrap">{label}</span>
        </a>
      ))}
    </div>
  );
};
