"use client";

import Image from "next/image";
import { useState } from "react";

import RadioButton from "../atoms/RadioButton"; // Assuming RadioButton is in the same directory

const RadioGroup = () => {
  const [selectedOption, setSelectedOption] = useState<string>("business");

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="space-y-4">
      <RadioButton
        checked={selectedOption === "business"}
        icon={
          <Image
            alt="login_page_venue"
            height={15}
            loading="lazy"
            src="/images/icons/login_page_venue.svg"
            width={15}
          />
        }
        label="I own a business"
        onChange={() => handleOptionChange("business")}
      />
      <RadioButton
        checked={selectedOption === "events"}
        icon={
          <Image
            alt="login_page_user"
            height={16}
            loading="lazy"
            src="/images/icons/login_page_user.svg"
            width={16}
          />
        }
        label="I plan events"
        onChange={() => handleOptionChange("events")}
      />
    </div>
  );
};

export default RadioGroup;
