import { VNFNavbar } from "@/components/molecules/VNFNavbar";
import Footer from "@/components/molecules/Footer";
import WhatIsSuperVenue from "@/components/superVenue/WhatIsSuperVenue";
import SuperVenueRequirement from "@/components/superVenue/SuperVenueRequirement";
import SuperVenueRaiseStatus from "@/components/superVenue/SuperVenueRaiseStatus";
import SuperVenueFaqSec from "@/components/superVenue/SuperVenueFaqSec";
import SuperVenueBanner from "@/components/superVenue/SuperVenueBanner";
import SuperVenueHero from "@/components/superVenue/SuperVenueHero";

export default function SuperVenue() {
  return (
    <div>
      <VNFNavbar
        className="px-4 md:px-5 items-center py-2 fixed"
        maxWidth="full"
      />
      <SuperVenueHero/>
      <SuperVenueRaiseStatus />
      <WhatIsSuperVenue />
      <SuperVenueRequirement />
      <SuperVenueFaqSec />
      <SuperVenueBanner
        imgSrc="/images/why_vendor_list/vendor_banner.webp"
        title="Become Super Venue Now"
        text="Got questions? We'd love to help and we're looking
              forward to hearing from you!"
        btnText="Get In Touch"
      />
      <div className="w-full mt-10 mx-auto px-5 md:px-5 lg:px-12 xl:px-20 block md:flex items-center justify-between w-full">
        <Footer />
      </div>
    </div>
  );
}
