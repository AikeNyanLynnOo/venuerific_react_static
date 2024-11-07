// Types
import { cookies } from "next/headers";

import { VendorListLayout } from "@/components/clients/VendorListLayout";
import { VNFNavbar } from "@/components/molecules/VNFNavbar";

export default async function VendorListPage(props: any) {
  const { params } = props;
  const cookieStore = cookies();
  // header footer res
  //   const headerFooterRes = await getHeaderFooter({
  //     country: params.country || "sg",
  //     cookies: cookieStore.getAll(),
  //   });

  console.log("Params>>", params);

  return (
    <>
      <VNFNavbar
        className="px-4 md:px-5 items-center py-2 fixed top-0"
        maxWidth="full"
      />
      <VendorListLayout
        params={params}
        // headerFooterRes={headerFooterRes}
        shouldDetectIP
      />
    </>
  );
}
