import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Props = {
  params: any;
  searchParams: { [key: string]: string | string[] | undefined };
};
