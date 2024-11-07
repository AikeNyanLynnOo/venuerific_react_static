// vendor detail page

// Types
import { cookies } from "next/headers";

import { VendorDetailLayout } from "@/components/clients/VendorDetailLayout";
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
        // className="px-4 md:px-5 lg:px-12 xl:px-20 items-center py-2 fixed top-0"
        className="px-4 md:px-5 items-center py-2 fixed top-0"
        maxWidth="full"
      />
      <VendorDetailLayout
        // headerFooterRes={headerFooterRes}
        params={params}
        shouldDetectIP={false}
      />
    </>
  );
}
