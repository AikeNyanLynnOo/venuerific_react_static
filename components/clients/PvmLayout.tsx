import { VNFNavbar } from "@/components/molecules/VNFNavbar";
import Footer from "@/components/molecules/Footer";
import PvmTopEventsMarquee from "@/components/pvm/PvmTopEventsMarquee";
import PvmLatestEvent from "@/components/pvm/PvmLatestEvent";
import PvmYourPlaceSec from "@/components/pvm/PvmYourPlaceSec";
import PvmBannerWorkTogether from "@/components/pvm/PvmBannerWorkTogether";
import PvmFaqSec from "@/components/pvm/PvmFaqSec";
import PvmHero from "@/components/pvm/PvmHero";
import PvmPlaceManageSec from "@/components/pvm/PvmPlaceManageSec";
import PvmIndustryLeadersMarquee from "../pvm/PvmIndustryLeadersMarquee";
import PvmVenueManagementUpdate from "../pvm/PvmVenueManagementUpdate";
import PvmWhatGetUpdate from "../pvm/PvmWhatGetUpdate";

export default function PvmLayout() {
  return (
    <div>
      <VNFNavbar
        className="px-4 md:px-5 items-center py-2 fixed"
        maxWidth="full"
      />
      <PvmHero />
      <PvmTopEventsMarquee />
      <PvmVenueManagementUpdate />
      <PvmPlaceManageSec />
      <PvmWhatGetUpdate />
      <PvmIndustryLeadersMarquee />
      <PvmLatestEvent />
      <PvmYourPlaceSec />
      <PvmFaqSec />
      <PvmBannerWorkTogether
        imgSrc="/images/pvm/pvm_talk_banner.webp"
        title="Let’s Work On Your Space Together!"
        text="Got questions? We'd love to help and we're looking
              forward to hearing from you!"
        btnText="Schedule A Consultation"
      />
      <div className="w-full mt-10 mx-auto px-5 md:px-5 lg:px-12 xl:px-20 block md:flex items-center justify-between">
        <Footer />
      </div>
    </div>
  );
}
