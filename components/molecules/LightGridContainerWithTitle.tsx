"use client";

import { Button } from "@nextui-org/button";
import { ArrowRight } from "@phosphor-icons/react";
import { ReactNode } from "react";

import { IconType, LabelWithIcon } from "../atoms/LabelWithIcon";

// const DynamicLabelWithIcon = dynamic(() =>
//   import("@/components/atoms/LabelWithIcon").then((mod) => mod.LabelWithIcon)
// );

interface LightGridContainerWithTitleProps {
  title?: string;
  titleVariant?: any;
  titleClasses?: string;
  text?: string;
  textVariant?: any;
  textClasses?: string;
  linkClasses?: string;
  linkText?: string;
  linkTextVariant?: any;
  linkHref?: string;
  icon?: IconType;
  className?: string;
  children?: ReactNode;
}

export const LightGridContainerWithTitle = ({
  title,
  titleVariant,
  titleClasses,
  text,
  textVariant,
  textClasses,
  linkClasses,
  linkText,
  linkTextVariant,
  linkHref,
  icon,
  className,
  children,
}: LightGridContainerWithTitleProps) => {
  return (
    <div className={className}>
      <div className="flex items-center justify-between px-0 py-0">
        <h3
          className={`text-neutral text-2xl font-semibold leading-9 md:text-3xl md:font-semibold md:leading-10 ${titleClasses}`}
        >
          {title || "Title"}
        </h3>
        {linkHref && (
          <a href={linkHref || "#"}>
            <LabelWithIcon
              customClasses="hidden md:flex"
              customIconClasses="w-5 h-5"
              customLabel={
                <span className="text-base font-semibold leading-6">
                  {linkText || ""}
                </span>
              }
              customLabelClasses="text-primary-700 w-fit"
              endIcons={[
                {
                  IconNode: (icon && icon.IconNode) || null,
                  filePath: (icon && icon.filePath) || "",
                },
              ]}
            />
            <span className="sr-only"> Go to link</span>
          </a>
        )}
      </div>
      {text && (
        <span
          className={`text-base font-normal leading-6 text-secondary-500 block w-full my-5 ${textClasses}`}
        >
          {text}
        </span>
      )}

      {linkHref && linkText && (
        <a href={linkHref || "#"}>
          <Button
            className={`flex md:hidden my-8 rounded-lg w-full h-auto text-base font-semibold leading-6 text-secondary-700 py-2 ${linkClasses}`}
            endContent={<ArrowRight size={20} />}
            variant="bordered"
          >
            {linkText}
          </Button>
          <span className="sr-only"> Go to link</span>
        </a>
      )}

      {children}
    </div>
  );
};
