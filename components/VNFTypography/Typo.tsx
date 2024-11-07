"use client";
import { useMemo } from "react";
import { tv } from "tailwind-variants";

export const TypoVariants = [
  // text
  "textXsRegular",
  "textXsMedium",
  "textXsSemibold",
  "textXsBold",
  "textSmRegular",
  "textSmMedium",
  "textSmSemibold",
  "textSmBold",
  "textMdRegular",
  "textMdMedium",
  "textMdSemibold",
  "textMdBold",
  "textLgRegular",
  "textLgMedium",
  "textLgSemibold",
  "textLgBold",
  "textXlRegular",
  "textXlMedium",
  "textXlSemibold",
  "textXlBold",

  // title
  "titleXsRegular",
  "titleXsMedium",
  "titleXsSemibold",
  "titleXsBold",
  "titleSmRegular",
  "titleSmMedium",
  "titleSmSemibold",
  "titleSmBold",
  "titleMdRegular",
  "titleMdMedium",
  "titleMdSemibold",
  "titleMdBold",
  "titleLgRegular",
  "titleLgMedium",
  "titleLgSemibold",
  "titleLgBold",
  "titleXlRegular",
  "titleXlMedium",
  "titleXlSemibold",
  "titleXlBold",
  "title2XlRegular",
  "title2XlMedium",
  "title2XlSemibold",
  "title2XlBold",
] as const;

export interface VNFTypoProps {
  text?: string;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  variant?: (typeof TypoVariants)[number];
  className?: string;
  [otherProp: string]: any;
}

export const VNFTypo = ({
  text = "Text",
  color = "default",
  variant = "titleMdMedium",
  className,
  ...props
}: VNFTypoProps) => {
  const typoClasses = useMemo(
    () =>
      extendTypo({
        color,
        variant,
        class: className,
        ...props,
      }),
    [className, props],
  );

  return <span className={typoClasses}>{text}</span>;
};

export const extendTypo = tv(
  {
    base: "tracking-normal inline",
    variants: {
      color: {
        default: "text-black dark:text-white",
        primary: "text-primary-600 dark:text-white",
        secondary: "text-secondary-600 dark:text-white",
        success: "text-success-600 dark:text-white",
        warning: "text-warning-600 dark:text-white",
        danger: "text-danger-600 dark:text-white",
      },
      fullWidth: {
        true: "w-full block",
      },
      variant: {
        // text
        textXsRegular: "text-xs font-normal leading-4",
        textXsMedium: "text-xs font-medium leading-4",
        textXsSemibold: "text-xs font-semibold leading-4",
        textXsBold: "text-xs font-bold leading-4",
        textSmRegular: "text-sm font-normal leading-5",
        textSmMedium: "text-sm font-medium leading-5",
        textSmSemibold: "text-sm font-semibold leading-5",
        textSmBold: "text-sm font-bold leading-5",
        textMdRegular: "text-base font-normal leading-6",
        textMdMedium: "text-base font-medium leading-6",
        textMdSemibold: "text-base font-semibold leading-6",
        textMdBold: "text-base font-bold leading-6",
        textLgRegular: "text-lg font-normal leading-7",
        textLgMedium: "text-lg font-medium leading-7",
        textLgSemibold: "text-lg font-semibold leading-7",
        textLgBold: "text-lg font-bold leading-7",
        textXlRegular: "text-xl font-normal leading-8",
        textXlMedium: "text-xl font-medium leading-8",
        textXlSemibold: "text-xl font-semibold leading-8",
        textXlBold: "text-xl font-bold leading-8",

        // title
        titleXsRegular: "text-2xl font-normal leading-9",
        titleXsMedium: "text-2xl font-medium leading-9",
        titleXsSemibold: "text-2xl font-semibold leading-9",
        titleXsBold: "text-2xl font-bold leading-9",
        titleSmRegular: "text-3xl font-normal leading-10",
        titleSmMedium: "text-3xl font-medium leading-10",
        titleSmSemibold: "text-3xl font-semibold leading-10",
        titleSmBold: "text-3xl font-bold leading-10",
        titleMdRegular: "text-4xl font-normal leading-normal",
        titleMdMedium: "text-4xl font-medium leading-normal",
        titleMdSemibold: "text-4xl font-semibold leading-normal",
        titleMdBold: "text-4xl font-bold leading-normal",
        titleLgRegular: "text-5xl font-normal leading-normal",
        titleLgMedium: "text-5xl font-medium leading-normal",
        titleLgSemibold: "text-5xl font-semibold leading-normal",
        titleLgBold: "text-5xl font-bold leading-normal",
        titleXlRegular: "text-6xl font-normal leading-relaxed",
        titleXlMedium: "text-6xl font-medium leading-relaxed",
        titleXlSemibold: "text-6xl font-semibold leading-relaxed",
        titleXlBold: "text-6xl font-bold leading-relaxed",
        title2XlRegular: "text-7xl font-normal leading-relaxed",
        title2XlMedium: "text-7xl font-medium leading-relaxed",
        title2XlSemibold: "text-7xl font-semibold leading-relaxed",
        title2XlBold: "text-7xl font-bold leading-relaxed",
      },
    },
    defaultVariants: {
      variant: "textMdMedium",
      color: "default",
    },
    compoundVariants: [],
  },
  {
    responsiveVariants: ["sm", "md", "lg", "xl", "2xl"], // `true` to apply to all screen sizes
  },
);
