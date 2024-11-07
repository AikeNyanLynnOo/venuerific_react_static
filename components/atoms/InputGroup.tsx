"use client";

import { Input } from "@nextui-org/input";
import React, { ReactNode, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Eye, EyeSlash, WarningCircle } from "@phosphor-icons/react";

import { VNFTypo } from "../VNFTypography/Typo";

interface InputGroupProps {
  customClasses?: string;
  isValid?: boolean;
  errorText?: string;
  warningText?: string;
  normalText?: string;
  inputType?: string;
  inputValue?: string;
  inputLabel?: ReactNode;
  placeholder?: string;
  handleChange?: any;
  startContent?: any;
  endContent?: any;
  children?: ReactNode;
  [otherProp: string]: any;
}

export const InputGroup = ({
  customClasses,
  isValid = true,
  errorText,
  warningText,
  normalText,
  inputType = "text",
  inputValue,
  inputLabel,
  placeholder = "Enter text",
  handleChange,
  startContent,
  endContent,
  children,
  ...otherProps
}: InputGroupProps) => {
  const inputGroupClasses = useMemo(
    () => twMerge("", customClasses),
    [customClasses],
  );

  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const toggleVisibility = () => setIsPwdVisible(!isPwdVisible);

  return (
    <div className={inputGroupClasses}>
      <Input
        className={`rounded-lg bg-white border hover:border-secondary-400 focus:border-secondary-400 ${!isValid ? "border-danger-300" : "border-secondary-300"}`}
        classNames={{
          inputWrapper: [
            "bg-white",
            "group-data-[focus=true]:bg-white",
            "group-data-[hover=true]:bg-white",
            "dark:group-data-[focus=true]:bg-white",
          ],
        }}
        endContent={
          endContent ||
          (inputType === "password" ? (
            isPwdVisible ? (
              <EyeSlash
                className="text-primary-600 cursor-pointer"
                size={20}
                onClick={toggleVisibility}
              />
            ) : (
              <Eye
                className="text-primary-600 cursor-pointer"
                size={20}
                onClick={toggleVisibility}
              />
            )
          ) : (
            !isValid && <WarningCircle className="text-danger-500" size={20} />
          ))
        }
        label={inputLabel}
        labelPlacement="outside"
        placeholder={placeholder}
        radius="sm"
        startContent={startContent}
        type={
          inputType === "password"
            ? (isPwdVisible && "text") || "password"
            : inputType
        }
        value={inputValue}
        variant="flat"
        onChange={handleChange}
        {...otherProps}
      />

      <div
        className={`w-full flex flex-col text-left gap-y-2 ${normalText || warningText || errorText ? "mt-1" : "mt-0"}`}
      >
        {normalText && (
          <VNFTypo
            className="block w-full text-secondary-500"
            text={normalText}
            variant="textSmRegular"
          />
        )}
        {warningText && (
          <VNFTypo
            className="block w-full text-warning-500"
            text={warningText}
            variant="textSmRegular"
          />
        )}
        {errorText && (
          <VNFTypo
            className="block w-full text-danger-500"
            text={errorText}
            variant="textSmRegular"
          />
        )}
      </div>
      {children}
    </div>
  );
};

export default InputGroup;
