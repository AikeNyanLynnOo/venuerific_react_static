import { Divider } from "@nextui-org/divider";
import { PlusCircle } from "@phosphor-icons/react";
import { MinusCircle } from "@phosphor-icons/react/dist/ssr";
import { ReactNode, useId, useState } from "react";

import { COLORS } from "@/styles/colors";

interface CustomAccordionItemProps {
  title?: string;
  titleUppercase?: boolean;
  showBorder?: boolean;
  showDivider?: boolean;
  children?: ReactNode;
}
export const CustomAccordionItem = ({
  title,
  titleUppercase = false,
  showDivider,
  showBorder = false,
  children,
}: CustomAccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();

  return (
    <div
      id={id}
      className={`${showBorder ? "border p-3" : "p-0"}  rounded-lg`}
      //   onClick={(e) => {
      //     if (e.currentTarget.id === id) {
      //       setIsOpen(!isOpen);
      //     }
      //   }}
    >
      <div
        className="flex items-center justify-between"
        // onClick={(e) => e.preventDefault()}
      >
        <span
          className={`text-secondary-900 text-lg font-normal leading-7 ${titleUppercase ? "uppercase" : "capitalize"}`}
        >
          {(title && title.toLowerCase()) || ""}
        </span>
        {/* icon */}
        {(!isOpen && (
          <PlusCircle
            className="cursor-pointer"
            color={COLORS.secondary[500]}
            size={24}
            onClick={(e) => {
              //   e.stopPropagation();
              setIsOpen(true);
            }}
          />
        )) || (
          <MinusCircle
            className="cursor-pointer"
            color={COLORS.secondary[500]}
            size={24}
            onClick={(e) => {
              //   e.stopPropagation();
              setIsOpen(false);
            }}
          />
        )}
      </div>
      {showDivider && isOpen && <Divider className="my-4" />}
      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
};
