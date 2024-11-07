import { MenuItem, Select } from "@mui/material";
import { CaretDown } from "@phosphor-icons/react";
import Image from "next/image";
import { useMemo } from "react";

import { COLORS } from "@/styles/colors";
import { isObjectArray } from "@/config/helperFunctions";
import { fontVnf } from "@/config/fonts";

interface MuiSelectProps {
  value?: any;
  label?: string;
  handleChange?: any;
  items: any[];
  customStyles?: any;
  size?: "sm" | "md" | "lg";
  startAdornment?: any;
}

export const MuiSelect = ({
  value,
  label,
  handleChange,
  items,
  customStyles,
  size = "sm",
  startAdornment,
}: MuiSelectProps) => {
  const isObjectArr = useMemo(() => isObjectArray(items), [items]);

  return (
    <Select
      displayEmpty
      IconComponent={() => (
        <CaretDown
          size={18}
          style={{
            minWidth: "15px",
          }}
        />
      )}
      renderValue={(selected) => {
        // console.log("selected>>", selected);
        if (selected.length === 0) {
          return (
            <span className={`text-${size} text-secondary-400`}>
              {label || ""}
            </span>
          );
        }
        const valText = items?.find((item) => item.value === selected);

        return (
          <span className={`text-secondary-600 text-${size}`}>
            {valText.name}
          </span>
        );
      }}
      startAdornment={
        startAdornment || (
          <Image
            alt="icon"
            className="w-5 h-5 ml-1 -mt-0.5 object-contain absolute top-1/2 -translate-y-1/2 left-2"
            height={16}
            loading="lazy"
            src="/images/icons/clock.png"
            width={16}
          />
        )
      }
      sx={{
        width: "100%",
        "&.MuiOutlinedInput-root": {
          borderRadius: 2,
          height: "42px",
          minHeight: 0,
          fontFamily: fontVnf.style.fontFamily,
          fontSize: "15px",
        },
        "& .MuiSelect-outlined": {
          height: "42px",
          minHeight: 0,
          color: COLORS.secondary[400],
        },
        "&.MuiOutlinedInput-root svg": {
          mr: 1.6,
        },
        "& .MuiOutlinedInput-notchedOutline": {
          height: "45px",
          borderColor: "#e5e7eb",
          pl: 3,
        },

        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#475467 !important",
          borderWidth: "1px",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#a1a1aa",
        },

        "& .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input":
          {
            paddingLeft: "28px",
            paddingRight: 0,
            mt: "-3px",
          },
        ...customStyles,
      }}
      value={value}
      onChange={handleChange}
    >
      {items &&
        items.length > 0 &&
        items.map(
          (item: any, index: number) =>
            (isObjectArr && (
              <MenuItem
                key={index}
                sx={{
                  fontFamily: fontVnf.style.fontFamily,
                  fontSize: "14px",
                }}
                value={item.value}
              >
                {item.name || ""}
              </MenuItem>
            )) || (
              <MenuItem
                key={index}
                sx={{
                  fontFamily: fontVnf.style.fontFamily,
                  fontSize: "14px",
                }}
                value={item}
              >
                {item}
              </MenuItem>
            ),
        )}
    </Select>
  );
};
