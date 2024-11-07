import { Copy, ThumbsUp } from "@phosphor-icons/react";
import { useState } from "react";

import { LightLabelWithIcon } from "./LightLabelWithIcon";

import { COLORS } from "@/styles/colors";

interface PromoCodeCardProps {
  name?: string;
  value?: string;
  valid_until?: string;
  description?: string;
  code?: string;
  terms_and_conditions: string;
}

export const PromoCodeCard = ({
  name,
  value,
  valid_until,
  description,
  code,
  terms_and_conditions,
}: PromoCodeCardProps) => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className="border rounded-lg p-3 flex flex-col gap-y-2">
      <span className="text-lg font-bold leading-7">{name || ""}</span>
      <span className="text-secondary-400 text-sm font-normal leading-5">
        {valid_until || ""}
      </span>
      <span className="uppercase text-sm font-normal leading-5">
        {description || ""}
      </span>
      <div className="rounded-md border flex justify-between items-center py-2 px-3">
        <span className="text-success-600 text-sm font-bold leading-5">
          {code || ""}
        </span>
        <LightLabelWithIcon
          customClasses="flex gap-x-1 items-center w-fit cursor-pointer"
          customLabel={
            <span className="text-primary-600 text-sm font-bold leading-5">
              {(isCopied && "Copied !") || "Copy"}
            </span>
          }
          startIconNode={
            (isCopied && (
              <ThumbsUp color={COLORS.primary[600]} size={18} />
            )) || <Copy color={COLORS.primary[600]} size={18} />
          }
          onClick={() => {
            code &&
              navigator.clipboard.writeText(code).then(() => setIsCopied(true));
          }}
        />
      </div>
    </div>
  );
};
