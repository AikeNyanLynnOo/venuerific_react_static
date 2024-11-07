import { cookies } from "next/headers";

import { ContactUsSection } from "@/components/molecules/ContactUsSection";
import { getHeaderFooter } from "@/utils/apiFunctions";

export default async function ContactUsPage() {
  const cookieStore = cookies();
  // header footer res
  const headerFooterRes = await getHeaderFooter({
    country: "sg",
    cookies: cookieStore.getAll(),
  });

  return <ContactUsSection headerFooterRes={headerFooterRes} />;
}
