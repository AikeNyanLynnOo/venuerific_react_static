"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { ReactNode, useMemo } from "react";
import { twMerge } from "tailwind-merge";

const ImageWithSkeleton = dynamic(() =>
  import("@/components/molecules/ImageWithSkeleton").then(
    (mod) => mod.ImageWithSkeleton,
  ),
);

import { VNFTypo } from "../VNFTypography/Typo";

export interface LabelWithIconProps {
  startIcons?: IconType[];
  endIcons?: IconType[];
  label?: LabelType;
  customIconClasses?: string;
  customLabelClasses?: string;
  customLabel?: ReactNode;
  customClasses?: string;
  showSkeletonWhileLoading?: boolean;
}
export interface IconType {
  IconNode?: ReactNode;
  filePath?: string;
}

export interface LabelType {
  text?: string;
  variant?: any;
  customClasses?: string;
}

export const LabelWithIcon = ({
  startIcons = [],
  endIcons = [],
  label,
  customIconClasses,
  customLabelClasses,
  customLabel,
  customClasses,
  showSkeletonWhileLoading = false,
}: LabelWithIconProps) => {
  const labelWitIconClasses = useMemo(
    () =>
      twMerge("flex items-center gap-x-2.5 justify-between p-2", customClasses),
    [customClasses],
  );
  const imageClasses = useMemo(
    () => twMerge("w-6 h-6 object-cover", customIconClasses),
    [customIconClasses],
  );

  const iconClasses = useMemo(
    () => twMerge("w-6 h-6 object-cover", customIconClasses),
    [customIconClasses],
  );

  return (
    <div className={labelWitIconClasses}>
      {startIcons &&
        startIcons.length > 0 &&
        startIcons.map((icon: IconType, index: number) => (
          <React.Fragment key={index}>
            {(icon && icon.IconNode) ||
              (showSkeletonWhileLoading && (
                <ImageWithSkeleton
                  alt="icon"
                  className={imageClasses}
                  height={20}
                  loading="lazy"
                  src={(icon && icon.filePath) || ""}
                  width={20}
                />
              )) || (
                <Image
                  alt="icon"
                  className={imageClasses}
                  height={20}
                  loading="lazy"
                  src={(icon && icon.filePath) || ""}
                  width={20}
                />
              )}
          </React.Fragment>
        ))}

      {customLabel || (
        <VNFTypo
          className={customLabelClasses}
          text={(label && label.text) || ""}
          variant={(label && label.variant) || "textMdMedium"}
        />
      )}

      {endIcons &&
        endIcons.length > 0 &&
        endIcons.map((icon: IconType, index: number) => (
          <React.Fragment key={index}>
            {(icon && icon.IconNode) ||
              (showSkeletonWhileLoading && (
                <ImageWithSkeleton
                  alt="icon"
                  className={iconClasses}
                  height={20}
                  loading="lazy"
                  src={(icon && icon.filePath) || ""}
                  width={20}
                />
              )) || (
                <Image
                  alt="icon"
                  className={iconClasses}
                  height={20}
                  loading="lazy"
                  src={(icon && icon.filePath) || ""}
                  width={20}
                />
              )}
          </React.Fragment>
        ))}
    </div>
  );
};
