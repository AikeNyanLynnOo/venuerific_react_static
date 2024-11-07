"use client";

import { Button } from "@nextui-org/button";
import { ArrowRight } from "@phosphor-icons/react";
import { ReactNode, useMemo } from "react";
import { twMerge } from "tailwind-merge";

import { extendTypo, VNFTypo } from "../VNFTypography/Typo";
import { IconType, LabelWithIcon } from "../atoms/LabelWithIcon";

interface GridContainerWithTitleProps {
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

export const GridContainerWithTitle = ({
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
}: GridContainerWithTitleProps) => {
  const containerClasses = useMemo(
    () => twMerge("z-10", className),
    [className],
  );
  const textTypoClasses = useMemo(
    () => twMerge("text-secondary-500 block w-full my-5", textClasses),
    [titleClasses],
  );
  const titleTypoClasses = useMemo(
    () =>
      extendTypo({
        variant: {
          initial: "titleXsSemibold",
          md: titleVariant || "titleSmSemibold",
        },
        class: twMerge("text-neutral", titleClasses),
      }),
    [titleClasses, titleVariant],
  );

  const linkContainerClasses = useMemo(
    () =>
      twMerge(
        "flex md:hidden my-8 rounded-lg w-full h-auto text-base font-semibold leading-6 text-secondary-700 py-2",
        linkClasses,
      ),
    [linkClasses],
  );

  return (
    <div className={containerClasses}>
      <div className="flex items-center justify-between px-0 py-0">
        <h3 className={titleTypoClasses}>{title || "Title"}</h3>
        {linkHref && (
          // <Link href={linkHref || "#"}>
          <a href={linkHref || "#"}>
            <LabelWithIcon
              customClasses="hidden md:flex"
              customIconClasses="w-5 h-5"
              customLabelClasses="text-primary-700 w-fit"
              endIcons={[
                {
                  IconNode: (icon && icon.IconNode) || null,
                  filePath: (icon && icon.filePath) || "",
                },
              ]}
              label={{
                text: linkText || "",
                variant: linkTextVariant || "textMdSemibold",
              }}
            />
            <span className="sr-only"> Go to link</span>
          </a>
          // </Link>
        )}
      </div>
      {text && (
        <VNFTypo
          className={textTypoClasses}
          text={text}
          variant={textVariant || "textMdRegular"}
        />
      )}

      {linkHref && linkText && (
        <a href={linkHref || "#"}>
          <Button
            // as={Link}
            className={linkContainerClasses}
            endContent={<ArrowRight size={20} />}
            // href={linkHref || "#"}
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
