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

import { DUMMY_DROPDOWNS } from "@/config/constants";

export interface VNFDropdownProps {
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
  [otherProp: string]: any;
}
export interface DropdownItems {
  text?: string;
  key?: string;
  startContent?: ReactNode;
  description?: string;
  customContent?: ReactNode;
}

export const VNFDropdown = ({
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
  ...props
}: VNFDropdownProps) => {
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
        onAction={(key) => handleChange && handleChange(key)}
      >
        {(dropDownItems &&
          dropDownItems.map(
            (
              { key, text, startContent, description, customContent },
              index,
            ) => (
              <DropdownItem
                key={key}
                className={twMerge("py-2", dropDownItemClasses)}
                startContent={startContent}
                // description={description}
                // title={text}
                // title={customContent}
              >
                {customContent || text}
              </DropdownItem>
            ),
          )) ||
          DUMMY_DROPDOWNS.map((dropdown) => (
            <DropdownItem
              key={dropdown.key}
              className={twMerge("py-2", dropDownItemClasses)}
            >
              {dropdown.text}
            </DropdownItem>
          ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export const ExtendedDropdown = extendVariants(Dropdown, {});
