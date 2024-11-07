import { Autocomplete, Box, Chip, TextField, Typography } from "@mui/material";
import { CaretDown, X } from "@phosphor-icons/react";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { Spinner } from "@nextui-org/spinner";

import { fontVnf } from "@/config/fonts";
import { COLORS } from "@/styles/colors";
import { isObjectArray } from "@/config/helperFunctions";

interface MuiAutoProps {
  options: any[];
  isLoading?: boolean;
  placeholder?: string;
  startIconSrc?: string;
  value?: any;
  multiple?: boolean;
  scrollTagsHorizontal?: boolean;
  customStyles?: any;
  onInputChange?: (e: React.SyntheticEvent, value: string, r: string) => void;
  handleChange: (event: React.SyntheticEvent, value: any) => void;
}

export const MuiAuto = ({
  options,
  isLoading,
  value,
  onInputChange,
  handleChange,
  placeholder,
  startIconSrc,
  multiple = false,
  scrollTagsHorizontal = false,
  customStyles,
}: MuiAutoProps) => {
  const [open, setOpen] = useState(false);
  const [isGroup, setIsGroup] = useState(false);

  useEffect(() => {
    if (isObjectArray(options) && options[0].label) {
      setIsGroup(true);

      return;
    }
    setIsGroup(false);
  }, [isLoading]);

  const getOptionLabelFunc = (option: any) => {
    return option.name || (value && value.name) || value;
  };

  return (
    <Fragment>
      {(isGroup && (
        <Autocomplete
          openOnFocus
          clearIcon={<X />}
          getOptionLabel={getOptionLabelFunc}
          groupBy={(option: any) => option.label}
          loading={isLoading || false}
          loadingText={<Typography component="p">Loading...</Typography>}
          multiple={multiple}
          noOptionsText={
            <div
              style={{
                fontFamily: fontVnf.style.fontFamily,
              }}
            >
              <span className="text-sm font-semibold leading-5 block text-secondary-400">
                Results not found.
              </span>
            </div>
          }
          open={open}
          options={options}
          popupIcon={<CaretDown className="mx-0.5" />}
          renderGroup={(params) => {
            return (
              <div key={params.key} className="mb-2">
                <span className="ml-2 mb-1 block text-sm font-semibold leading-5 text-secondary-500">
                  {params.group}
                </span>
                <div className="ml-2">{params.children}</div>
              </div>
            );
          }}
          renderInput={(params) => {
            return (
              <TextField
                placeholder={placeholder || "Search something"}
                variant="outlined"
                {...params}
                slotProps={{
                  input: {
                    ...params.InputProps,
                    startAdornment: (
                      <div className="flex items-center ml-6">
                        <Image
                          alt="icon"
                          className="w-5 h-5 ml-1 object-contain absolute top-1/2 -translate-y-1/2 left-2"
                          height={16}
                          loading="lazy"
                          src={startIconSrc || "/images/icons/location.svg"}
                          width={16}
                        />
                        <div
                          className={`h-auto max-w-2/5 sm:max-w-2/3 py-0.5 hide-scrollbar flex flex-wrap w-auto`}
                        >
                          {params.InputProps.startAdornment}
                        </div>
                      </div>
                    ),
                    endAdornment: (
                      <Fragment>
                        {isLoading ? (
                          <Spinner color="default" size="sm" />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </Fragment>
                    ),
                  },
                }}
                sx={{ fontFamily: fontVnf.style.fontFamily }}
              />
            );
          }}
          renderOption={(props: any, option: any, { selected }) => {
            const { key, ...optionProps } = props;
            const { className, ...notStyledOptionProps } = optionProps;

            return (
              <Box
                key={key}
                {...notStyledOptionProps}
                style={{
                  fontFamily: fontVnf.style.fontFamily,
                }}
              >
                <span className="text-sm font-medium leading-5 block w-full hover:bg-[#d4d4d8] py-1 px-2 rounded-lg cursor-pointer">
                  {isGroup ? option.name : option}
                </span>
              </Box>
            );
          }}
          renderTags={(value, getTagProps) => {
            return value.map((option, index) => {
              const { key, ...tagProps } = getTagProps({ index });

              return (
                <Chip
                  key={key}
                  deleteIcon={
                    <X
                      className="font-bold"
                      color={COLORS.secondary[600]}
                      size={14}
                    />
                  }
                  label={option.name || option}
                  sx={{
                    background: COLORS.primary[100],
                    borderRadius: 2,
                    fontFamily: fontVnf.style.fontFamily,
                  }}
                  variant="filled"
                  {...tagProps}
                />
              );
            });
          }}
          sx={{
            position: "relative",
            fontFamily: fontVnf.style.fontFamily,
            maxWidth: "100%",
            width: "100%",
            "& .MuiAutocomplete-endAdornment": {
              display: "flex",
              // columnGap: 1,
              width: "fit-content",
              // mr: 0.5,
            },
            "& .MuiAutocomplete-endAdornment svg": {
              p: "4px",
              height: "24px",
              width: "24px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#D0D5DD",
              borderWidth: "1px",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#a1a1aa",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#475467 !important",
            },
            "& .MuiOutlinedInput-root": {
              width: "100%",
              maxWidth: "100%",
              height: "fit-content",
              borderRadius: 2,
              borderWidth: "0 !important",
              py: 0,
              display: "flex",
              // flexWrap: scrollTagsHorizontal ? "nowrap" : "wrap",
              flexWrap: "nowrap",
            },
            "& .MuiOutlinedInput-input.MuiAutocomplete-input": {
              borderWidth: 0,
              width: "5px",
              height: "42px",
              py: 0,
              // pl: 1.5,
            },
            "& .MuiOutlinedInput-input": {
              borderWidth: 0,
              height: "42px",
              width: "5px",
              fontFamily: fontVnf.style.fontFamily,
              fontSize: "16px",
              // ml:
              //   !scrollTagsHorizontal &&
              //   value &&
              //   Array.isArray(value) &&
              //   value.length > 0
              //     ? 2
              //     : 0,
            },
            "& + .MuiAutocomplete-popper .MuiAutocomplete-listbox": {
              height: "100px !important",
              display: "none",
            },
            ...customStyles,
          }}
          value={value}
          onChange={handleChange}
          onClose={(e) => {
            setOpen(false);
          }}
          onInputChange={onInputChange}
          onOpen={(e) => {
            setOpen(true);
          }}
        />
      )) || (
        <Autocomplete
          openOnFocus
          clearIcon={<X />}
          getOptionLabel={(option: any) =>
            typeof option === "object" ? option.name : option
          }
          loading={isLoading || false}
          loadingText={<Typography component="p">Loading...</Typography>}
          multiple={multiple}
          noOptionsText={
            <div
              style={{
                fontFamily: fontVnf.style.fontFamily,
              }}
            >
              <span className="text-sm font-semibold leading-5 block text-secondary-400">
                Results not found.
              </span>
            </div>
          }
          open={open}
          options={options}
          popupIcon={<CaretDown className="mx-0.5" />}
          renderInput={(params) => (
            <TextField
              placeholder={placeholder || "Search something"}
              variant="outlined"
              {...params}
              slotProps={{
                input: {
                  ...params.InputProps,
                  startAdornment: (
                    <div className="flex items-center ml-6">
                      <Image
                        alt="icon"
                        className="w-5 h-5 ml-1 object-contain absolute top-1/2 -translate-y-1/2 left-2"
                        height={16}
                        loading="lazy"
                        src={startIconSrc || "/images/icons/location.svg"}
                        width={16}
                      />
                      <div
                        className={`h-auto max-w-2/5 w-fit sm:max-w-2/3 py-0.5 hide-scrollbar flex flex-wrap w-auto`}
                      >
                        {params.InputProps.startAdornment}
                      </div>
                    </div>
                  ),
                  endAdornment: (
                    <Fragment>
                      {isLoading ? <Spinner color="default" size="sm" /> : null}
                      {params.InputProps.endAdornment}
                    </Fragment>
                  ),
                },
              }}
              sx={{ fontFamily: fontVnf.style.fontFamily }}
            />
          )}
          renderOption={(props: any, option: any, { selected }) => {
            const { key, ...optionProps } = props;
            const { className, ...notStyledOptionProps } = optionProps;

            return (
              <Box
                key={key}
                {...notStyledOptionProps}
                style={{
                  fontFamily: fontVnf.style.fontFamily,
                }}
              >
                <span className="text-sm font-medium leading-5 block w-full hover:bg-[#d4d4d8] py-1 px-2 rounded-lg cursor-pointer">
                  {typeof option === "object" ? option.name : option}
                </span>
              </Box>
            );
          }}
          renderTags={(value, getTagProps) => {
            return value.map((option, index) => {
              const { key, ...tagProps } = getTagProps({ index });

              return (
                <Chip
                  key={key}
                  deleteIcon={
                    <X
                      className="font-bold"
                      color={COLORS.secondary[600]}
                      size={14}
                    />
                  }
                  label={option.name || option}
                  sx={{
                    background: COLORS.primary[100],
                    borderRadius: 2,
                    fontFamily: fontVnf.style.fontFamily,
                  }}
                  variant="filled"
                  {...tagProps}
                />
              );
            });
          }}
          sx={{
            position: "relative",
            fontFamily: fontVnf.style.fontFamily,
            maxWidth: "100%",
            width: "100%",
            "& .MuiAutocomplete-endAdornment": {
              display: "flex",
              // columnGap: 1,
              width: "fit-content",
              // mr: 0.5,
            },
            "& .MuiAutocomplete-endAdornment svg": {
              p: "4px",
              height: "24px",
              width: "24px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#D0D5DD",
              borderWidth: "1px",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#a1a1aa",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#475467 !important",
            },
            "& .MuiOutlinedInput-root": {
              width: "100%",
              maxWidth: "100%",
              height: "fit-content",
              borderRadius: 2,
              borderWidth: "0 !important",
              py: 0,
              display: "flex",
              // flexWrap: scrollTagsHorizontal ? "nowrap" : "wrap",
              flexWrap: "nowrap",
            },
            "& .MuiOutlinedInput-input.MuiAutocomplete-input": {
              borderWidth: 0,
              width: "5px",
              height: "42px",
              py: 0,
              // pl: 1.5,
            },
            "& .MuiOutlinedInput-input": {
              borderWidth: 0,
              height: "42px",
              fontFamily: fontVnf.style.fontFamily,
              fontSize: "16px",
              // ml:
              //   scrollTagsHorizontal &&
              //   value &&
              //   Array.isArray(value) &&
              //   value.length > 0
              //     ? 2
              //     : 0,
            },
            "& + .MuiAutocomplete-popper .MuiAutocomplete-listbox": {
              height: "100px !important",
              display: "none",
            },
            ...customStyles,
          }}
          value={value}
          onChange={handleChange}
          onClose={(e) => {
            setOpen(false);
          }}
          onInputChange={onInputChange}
          onOpen={(e) => {
            setOpen(true);
          }}
        />
      )}
    </Fragment>
  );
};
