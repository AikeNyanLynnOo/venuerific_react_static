import { Lato as Vnf } from "next/font/google";

export const fontVnf = Vnf({
  subsets: ["latin-ext"],
  weight: ["100", "300", "400", "700", "900"],
  // weight: ["400"],
  variable: "--font-vnf",
  display: "swap",
  fallback: ["sans-serif"],
});
