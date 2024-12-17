import { VNFNavbar } from "@/components/molecules/VNFNavbar";
import Footer from "@/components/molecules/Footer";
import VenueVideoSec from "../venueVideo/VenueVideoSec";
import { BannerWithTextAndBg } from "../molecules/banners/BannerWithTextAndBg";
import VenueVideoHero from "../venueVideo/VenueVideoHero";

export default function VenueVideoLayout() {
  return (
    <div>
      <VNFNavbar
        className="px-4 md:px-5 items-center py-2 fixed"
        maxWidth="full"
      />
      <VenueVideoHero />
      <VenueVideoSec />
      <BannerWithTextAndBg
        imgSrc="/images/why_vendor_list/vendor_banner.webp"
        title={
          <>
            Discover Enchanting Event Space Recommendation For <br />
            Your Event
          </>
        }
        btnText="Discover Venue"
      />
      <div className="w-full mt-10 mx-auto px-5 md:px-5 lg:px-12 xl:px-20 block md:flex items-center justify-between">
        <Footer />
      </div>
    </div>
  );
}
