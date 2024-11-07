"use client";

import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { extendVariants } from "@nextui-org/system";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Avatar } from "@nextui-org/avatar";
import { Badge } from "@nextui-org/badge";
// import { logoutUser } from "@/utils/apiFunctions";
import { useParams, useRouter } from "next/navigation";

import { DUMMY_DROPDOWNS } from "@/config/constants";

const authCookieName = process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME || "app_token";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL;

export interface UserMenuDropdownProps {
  type?: "menu" | "listbox";
  isDisabled?: boolean;
  variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow";
  placement?:
    | "top"
    | "top-start"
    | "top-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "left"
    | "left-start"
    | "left-end"
    | "right"
    | "right-start"
    | "right-end";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  triggerEle?: ReactNode;
  dropDownItems?: DropdownItems[];
  handleChange?: (selected: any) => void;
  dropDownTriggerclasses?: string;
  dropDownMenuClasses?: string;
  dropDownItemClasses?: string;
  currentUser?: any;
  [otherProp: string]: any;
}
export interface DropdownItems {
  text?: string;
  key?: string;
  link?: string;
  startContent?: ReactNode;
  description?: string;
  customContent?: ReactNode;
  separator_below?: boolean;
}

export const UserMenuDropdown = ({
  type = "menu",
  isDisabled = false,
  variant = "solid",
  color = "default",
  triggerEle,
  placement = "top",
  dropDownItems,
  handleChange,
  dropDownTriggerclasses,
  dropDownMenuClasses,
  dropDownItemClasses,
  currentUser,
  ...props
}: UserMenuDropdownProps) => {
  const router = useRouter();
  const params = useParams();

  //   const cookieStore = parseCookies();
  //   const cookies = Object.entries(cookieStore).map(([key, value]) => ({
  //     name: key,
  //     value,
  //   }));

  const handleLogout = async () => {
    // const cookies = cookieStore && cookieStore.getAll();
    // const authCookies =
    //   cookieStore &&
    //   cookieStore.length > 0 &&
    //   cookieStore.filter((cookie: any) => cookie[0] === authCookieName);

    // const cookie =
    //   (authCookies &&
    //     authCookies.length > 0 &&
    //     authCookies[0] &&
    //     authCookies[0].length > 1 &&
    //     authCookies[0][1] &&
    //     authCookies[0][1].value) ||
    //   "";

    // call logout api
    // const { status, success, statusText, data, message, meta } =
    //   await logoutUser({
    //     cookie,
    //   });
    // if (status === 200 && success) {
    // destroyCookie(null, authCookieName);
    // window.location.href = `/${params.country || "sg"}`;
    //   router.push(`/${params.country || "sg"}`);
    //   router.replace(`/${params.country || "sg"}`);
    //   router.refresh();
    // }
    window.location.href = `${baseURL}/users_logout`;
  };

  const { email, name, shrine_avatar_url } =
    (currentUser && currentUser.attributes) || {};

  return (
    <Dropdown
      classNames={{
        // base: "before:bg-default-200", // change arrow background
        content: "rounded-lg",
      }}
      isDisabled={isDisabled}
      placement={placement}
      {...props}
    >
      <DropdownTrigger className={twMerge("", dropDownTriggerclasses)}>
        {triggerEle || <Button variant={variant}>Open Menu</Button>}
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Action event example"
        className={twMerge("", dropDownMenuClasses)}
        color={color}
        variant={variant}
        // onAction={(key) => handleChange && handleChange(key)}
      >
        <DropdownItem
          key="profile"
          isReadOnly
          showDivider
          className="h-auto gap-2"
        >
          <div className="flex items-center gap-x-3 p-2">
            <Badge
              color="success"
              content=""
              placement="bottom-right"
              shape="circle"
            >
              <Avatar radius="full" src={shrine_avatar_url || ""} />
            </Badge>
            <div className="flex flex-col">
              <span className="text-sm font-semibold leading-5 text-secondary-700">
                {name}
              </span>
              <span className="text-sm font-normal leading-5 text-secondary-600">
                {email}
              </span>
            </div>
          </div>
        </DropdownItem>

        {(dropDownItems &&
          (dropDownItems.map(
            (
              {
                key,
                link,
                text,
                startContent,
                description,
                customContent,
                separator_below,
              },
              index,
            ) => {
              if (text === "Logout") {
                return (
                  <DropdownItem
                    key={key}
                    as={Button}
                    className={twMerge(
                      `py-2 text-danger-500 w-full text-left`,
                      dropDownItemClasses,
                    )}
                    color={"danger"}
                    showDivider={separator_below || false}
                    startContent={startContent}
                    onClick={() => {
                      text === "Logout" && handleLogout();
                    }}
                  >
                    {customContent || text}
                  </DropdownItem>
                );
              } else {
                return (
                  <DropdownItem
                    // as={Link}
                    // href={link || "#"}
                    key={key}
                    className={twMerge(
                      `py-2 text-gray-700`,
                      dropDownItemClasses,
                    )}
                    color="default"
                    showDivider={separator_below || false}
                    startContent={startContent}
                  >
                    <a href={link || "#"}>{customContent || text}</a>
                  </DropdownItem>
                );
              }
            },
          ) as any)) ||
          (DUMMY_DROPDOWNS.map((dropdown) => (
            <DropdownItem
              key={dropdown.key}
              className={twMerge("py-2", dropDownItemClasses)}
            >
              {dropdown.text}
            </DropdownItem>
          )) as any)}
      </DropdownMenu>
    </Dropdown>
  );
};

export const ExtendedDropdown = extendVariants(Dropdown, {});
