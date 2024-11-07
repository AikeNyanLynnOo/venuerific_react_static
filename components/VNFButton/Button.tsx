"use client";
import { Button } from "@nextui-org/button";
import { extendVariants } from "@nextui-org/system";
import { Heart } from "@phosphor-icons/react";

export interface VNFButtonProps {
  label?: string;
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  isDisabled?: boolean;
  radius?: "none" | "sm" | "md" | "lg" | "full";
  variant?:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost";
  isLoading?: boolean;
  startContent?: boolean;
  endContent?: boolean;
  isIconOnly?: boolean;
  onClick?: () => void;
}

export const VNFButton = ({
  label,
  size = "md",
  color = "default",
  isDisabled,
  radius,
  variant = "solid",
  isLoading = false,
  startContent,
  endContent,
  isIconOnly,
  ...props
}: VNFButtonProps) => {
  if (isIconOnly) {
    return (
      <ExtendedButton {...props}>
        <Heart size={20} weight="light" />
      </ExtendedButton>
    );
  }

  return (
    <ExtendedButton
      {...props}
      color={color}
      endContent={(endContent && <Heart size={20} weight="light" />) || <></>}
      isDisabled={isDisabled}
      isLoading={isLoading}
      radius={radius}
      size={size}
      startContent={
        (startContent && <Heart size={20} weight="light" />) || <></>
      }
      variant={variant}
    >
      {label}
    </ExtendedButton>
  );
};

export const ExtendedButton = extendVariants(Button, {
  variants: {
    color: {
      // primary: "bg-primary-600",
      // secondary: "bg-gray-600",
      // success: "bg-success-600",
      // warning: "bg-warning-600",
      // gray: "bg-gray",
      // error: "bg-error text-white",
    },
    // isDisabled: {
    //   true: "bg-[#eaeaea] opacity-50 cursor-not-allowed",
    // },
    size: {
      sm: "px-3.5 py-2 min-w-9 min-h-9 w-auto h-auto",
      md: "px-4 py-2.5 min-w-9 min-h-10 w-auto h-auto",
      lg: "px-[18px] py-2.5 min-w-9 min-h-11 w-auto h-auto",
      xl: "px-5 py-3 min-w-9 min-h-12 w-auto h-auto",
      xxl: "px-7 py-4 min-w-9 min-h-14 w-auto h-auto",
    },
  },
  defaultVariants: {
    // color: "olive",
    size: "md",
  },
  compoundVariants: [
    {
      // isDisabled: true,
      // color: "olive",
      // class: "bg-[#84cc16]/80 opacity-100",
    },
  ],
});
