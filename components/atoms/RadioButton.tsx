import React from "react";

import { VNFTypo } from "../VNFTypography/Typo";

type RadioButtonProps = {
  label: string;
  icon: React.ReactNode;
  checked: boolean;
  onChange: () => void;
};

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  icon,
  checked,
  onChange,
}) => {
  return (
    <button
      className={`flex items-center justify-between w-full p-3 border rounded-xl cursor-pointer ${
        checked
          ? "bg-primary-50 border-primary-600 border-2"
          : "border-secondary-300"
      }`}
      onClick={onChange}
    >
      <div className="flex items-center">
        <div className="mr-3 rounded-full p-3 bg-primary-100">{icon}</div>

        <VNFTypo
          className={`${checked ? "text-primary-800" : "text-secondary-700"}`}
          text={label}
          variant="textMdRegular"
        />
      </div>
      <div
        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
          checked ? "border-blue-500" : "border-gray-300"
        }`}
      >
        {checked && <div className="w-2 h-2 bg-blue-500 rounded-full" />}
      </div>
    </button>
  );
};

export default RadioButton;
