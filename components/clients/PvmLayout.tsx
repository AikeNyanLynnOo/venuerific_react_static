import { VNFNavbar } from "@/components/molecules/VNFNavbar";
import Footer from "@/components/molecules/Footer";
import PvmVenueManagement from "@/components/pvm/PvmVenueManagement";
import PvmTopEventsMarquee from "@/components/pvm/PvmTopEventsMarquee";
import PvmWhatGet from "@/components/pvm/PvmWhatGet";
import PvmLatestEvent from "@/components/pvm/PvmLatestEvent";
import PvmYourPlaceSec from "@/components/pvm/PvmYourPlaceSec";
import PvmBannerWorkTogether from "@/components/pvm/PvmBannerWorkTogether";
import PvmFaqSec from "@/components/pvm/PvmFaqSec";
import PvmHero from "@/components/pvm/PvmHero";
import PvmPlaceManageSec from "@/components/pvm/PvmPlaceManageSec";

export default function PvmLayout() {
  return (
    <div>
      <VNFNavbar
        className="px-4 md:px-5 items-center py-2 fixed"
        maxWidth="full"
      />
      <PvmHero />
      <PvmVenueManagement />
      <PvmTopEventsMarquee />
      <PvmPlaceManageSec />
      <PvmWhatGet />
      <PvmLatestEvent />
      <PvmYourPlaceSec />
      <PvmFaqSec />
      <PvmBannerWorkTogether
        imgSrc="/images/pvm/pvm_talk_banner.webp"
        title="Let’s Work On Your Space Together!"
        text="Got questions? We'd love to help and we're looking
              forward to hearing from you!"
        btnText="Talk To Us"
      />
      <div className="w-full mt-10 mx-auto px-5 md:px-5 lg:px-12 xl:px-20 block md:flex items-center justify-between w-full">
        <Footer />
      </div>
    </div>
  );
}
