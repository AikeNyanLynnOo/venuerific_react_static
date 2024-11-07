"use client";
import { Button } from "@nextui-org/button";
import { ArrowRight } from "@phosphor-icons/react";
import { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";

import { IconType } from "../atoms/LabelWithIcon";
import { LightLabelWithIcon } from "../atoms/LightLabelWithIcon";

interface ScrollContainerWithTitleProps {
  title?: string;
  titleVariant?: any;
  titleClasses?: string;
  text?: string;
  textVariant?: any;
  textClasses?: string;
  linkText?: string;
  linkTextVariant?: any;
  linkHref?: string;
  icon?: IconType;
  className?: string;
  children?: ReactNode;
}

export const ScrollContainerWithTitle = ({
  title,
  titleVariant,
  titleClasses,
  text,
  textVariant,
  textClasses,
  linkText,
  linkTextVariant,
  linkHref,
  icon,
  className,
  children,
}: ScrollContainerWithTitleProps) => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <div className={className}>
      <div className="flex items-center justify-between px-0 py-0">
        {/* font-semibold leading-9 md:text-3xl md:font-semibold md:leading-10 */}
        <h3 className={titleClasses}>{title || "Title"}</h3>

        <a href={linkHref || "#"}>
          <LightLabelWithIcon
            customClasses="hidden md:flex items-center gap-x-2.5 justify-between p-2"
            customLabel={
              <span className="text-primary-700 w-fit text-base font-semibold leading-6">
                {linkText || ""}
              </span>
            }
            endIconNode={(icon && icon.IconNode) || null}
          />
          <span className="sr-only">Go to link</span>
        </a>
      </div>
      <span className="text-base font-normal leading-6 text-secondary-500 block w-full my-5">
        {text || ""}
      </span>

      {linkHref && linkText && (
        <a href={linkHref || "#"}>
          <Button
            className="flex md:hidden my-8 rounded-lg w-full h-auto text-secondary-700 py-2 text-base font-semibold leading-6"
            endContent={<ArrowRight size={20} />}
            variant="bordered"
          >
            {linkText || ""}
          </Button>
          <span className="sr-only">Go to link</span>
        </a>
      )}

      {children}
    </div>
  );
};
