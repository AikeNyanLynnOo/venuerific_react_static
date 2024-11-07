"use client";
import React, { ReactNode } from "react";

export interface LightLabelWithIconProps {
  startIconNode?: any;
  endIconNode?: any;
  customLabel?: ReactNode;
  customClasses?: string;
  [otherProp: string]: any;
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

export const LightLabelWithIcon = ({
  startIconNode,
  endIconNode,
  customLabel,
  customClasses,
  ...props
}: LightLabelWithIconProps) => {
  // flex items-center gap-x-2.5 justify-between p-2
  return (
    <div className={customClasses} {...props}>
      {startIconNode || <></>}

      {customLabel || <></>}

      {endIconNode || <></>}
    </div>
  );
};
