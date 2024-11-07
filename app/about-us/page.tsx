import { cookies } from "next/headers";

import { AboutUsSection } from "@/components/molecules/AboutUsSection";
import { getHeaderFooter } from "@/utils/apiFunctions";

export default async function AboutUsPage() {
  const cookieStore = cookies();
  // header footer res
  const headerFooterRes = await getHeaderFooter({
    country: "sg",
    cookies: cookieStore.getAll(),
  });

  return <AboutUsSection headerFooterRes={headerFooterRes} />;
}
