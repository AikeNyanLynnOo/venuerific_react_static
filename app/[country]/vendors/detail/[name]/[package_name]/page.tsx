// vendor detail page

// Types
import { cookies } from "next/headers";

import { VendorPackageDetailLayout } from "@/components/clients/VendorPackageDetailLayout";
import { VNFNavbar } from "@/components/molecules/VNFNavbar";

export default async function VenueDetailPage(props: any) {
  const { params } = props;
  const cookieStore = cookies();
  // header footer res
  //   const headerFooterRes = await getHeaderFooter({
  //     country: params.country || "sg",
  //     cookies: cookieStore.getAll(),
  //   });

  return (
    <>
      <VNFNavbar
        className="px-4 md:px-5 items-center py-2 fixed top-0"
        maxWidth="full"
      />
      <VendorPackageDetailLayout
        // headerFooterRes={headerFooterRes}
        params={params}
        shouldDetectIP={false}
      />
    </>
  );
}
