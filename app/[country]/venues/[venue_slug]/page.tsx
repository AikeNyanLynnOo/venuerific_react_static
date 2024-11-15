// venue detail page

// Types
import { cookies } from "next/headers";
import { Metadata, ResolvingMetadata } from "next";
import { redirect } from "next/navigation";

import { VenueDetailLayout } from "@/components/clients/VenueDetailLayout";
import { VNFNavbar } from "@/components/molecules/VNFNavbar";
import { getHeaderFooter } from "@/utils/apiFunctions";
import { Props } from "@/types";
import { getVenueDetailInfoMeta } from "@/utils/venueApiFunctions";

// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata,
// ): Promise<Metadata> {
//   // venue detail page meta
//   const { status, statusText, success, message, data, meta } =
//     await getVenueDetailInfoMeta({
//       country: params.country || "sg",
//       id: params.venue_slug || "",
//     });

//   if (!success && status === 401) {
//     //401
//     return redirect("/login");
//   }

//   if (data && data.redirect_to) {
//     // redirect to
//     return redirect(data.redirect_to);
//   }

//   if (!success) {
//     throw new Error(message || "Failed to fetch data");
//   }

//   const {
//     meta_tags: { title, description, keywords, og, fb },
//   } = meta || {};

//   return {
//     title: title || "",
//     description: description || "",
//     keywords: keywords || "",
//     openGraph: {
//       title: (og && og.title) || "",
//       description: (og && og.description) || "",
//       url: (og && og.url) || "",
//       siteName: (og && og.site_name) || "",
//       images: [
//         {
//           url: (og && og.image) || "",
//           width: (og && og.image_width) || 1200,
//           height: (og && og.image_height) || 630,
//           alt: (og && og.image_alt) || og.title || "",
//         },
//       ],
//       type: (og && og.type) || "",
//     },
//     facebook: {
//       appId: (fb && fb.app_id) || "",
//     },
//   };
// }

export default async function VenueDetailPage(props: any) {
  const { params } = props;
  const cookieStore = cookies();

  // header footer res
  const headerFooterRes = await getHeaderFooter({
    country: params.country || "sg",
    cookies: cookieStore.getAll(),
  });

  return (
    <>
      <VNFNavbar
        // className="px-4 md:px-5 lg:px-12 xl:px-20 items-center py-2 fixed top-0"
        className="px-4 md:px-5 items-center py-2 fixed top-0"
        maxWidth="full"
      />
      <VenueDetailLayout
        cookies={cookieStore.getAll()}
        headerFooterRes={headerFooterRes}
        params={params}
      />
    </>
  );
}
