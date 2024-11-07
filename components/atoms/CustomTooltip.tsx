import Tooltip from "@mui/material/Tooltip";
import * as React from "react";

import { fontVnf } from "@/config/fonts";

interface CustomTooltipProps {
  children: React.ReactElement;
  title?: string;
  [otherProp: string]: any;
}

export const CustomTooltip = ({
  children,
  title,
  ...otherProps
}: CustomTooltipProps) => {
  return (
    <Tooltip
      sx={{
        fontFamily: fontVnf.style.fontFamily,
      }}
      title={title || ""}
      {...otherProps}
    >
      {children}
    </Tooltip>
  );
};
