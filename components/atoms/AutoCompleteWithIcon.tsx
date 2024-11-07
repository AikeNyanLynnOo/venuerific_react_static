// import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
// import { ReactNode } from "react";

// import { extendTypo } from "../VNFTypography/Typo";

// interface AutoCompleteWithIconProps {
//   placeholder?: string;
//   items?: any[];
//   startContent?: ReactNode;
//   selectorIcon?: ReactNode;
//   [otherProp: string]: any;
// }

// export const AutoCompleteWithIcon = ({
//   placeholder,
//   items,
//   startContent,
//   selectorIcon,
//   ...props
// }: AutoCompleteWithIconProps) => {
//   return (
//     <Autocomplete
//       {...props}
//       disableAnimation
//       aria-label="Select an item"
//       className="w-full"
//       classNames={{
//         // listboxWrapper: "max-h-[320px]",
//         selectorButton: "text-default-500",
//       }}
//       defaultItems={items}
//       inputProps={{
//         classNames: {
//           input: extendTypo({
//             variant: "textMdRegular",
//             class: "ml-1",
//           }),
//           inputWrapper:
//             // "h-[48px] group-data-[focus-visible=true]:ring-0 group-data-[focus-visible=true]:ring-offset-0",
//             "h-[48px]",
//         },
//       }}
//       listboxProps={{
//         hideSelectedIcon: true,
//         emptyContent: "Results not found.",
//         classNames: {
//           //   base: "max-h[100px] overflow-scroll",
//         },
//         itemClasses: {
//           base: [
//             // "rounded-medium",
//             // "text-default-500",
//             // "transition-opacity",
//             // "data-[hover=true]:text-foreground",
//             // "dark:data-[hover=true]:bg-default-500",
//             // "data-[pressed=true]:opacity-70",
//             "data-[hover=true]:bg-default-200",
//             // "data-[selectable=true]:focus:bg-default-100",
//             // "data-[focus-visible=true]:ring-default-500",
//           ],
//         },
//       }}
//       placeholder={placeholder || "Enter something to search"}
//       popoverProps={{
//         offset: 0,
//         placement: "bottom-end",
//         classNames: {
//           base: "rounded-medium bg-blue-200 overflow-hidden margin-0",
//           content: "max-h-[180px]",
//         },
//         style: {
//           bottom: 0,
//         },
//         // portalContainer: null,
//       }}
//       radius="md"
//       selectorIcon={selectorIcon}
//       size="lg"
//       variant="bordered"
//       //   selectorButtonProps={{
//       //     rot
//       //   }}
//       //   disableSelectorIconRotation
//       startContent={startContent}
//     >
//       {(item) => (
//         <AutocompleteItem
//           key={typeof item !== "string" ? JSON.stringify(item) : item}
//         >
//           {typeof item !== "string" ? item.label : item}
//         </AutocompleteItem>
//       )}
//     </Autocomplete>
//   );
// };
