import Image from "next/image";
import { VNFNavbar } from "@/components/molecules/VNFNavbar";
import Footer from "@/components/molecules/Footer";
import PvmVenueManagement from "@/components/molecules/pvm/PvmVenueManagement";
import PvmTopEventsMarquee from "@/components/molecules/pvm/PvmTopEventsMarquee";
import PvmWhatGet from "@/components/molecules/pvm/PvmWhatGet";
import PvmLatestEvent from "@/components/molecules/pvm/PvmLatestEvent";
import PvmYourPlaceSec from "@/components/molecules/pvm/PvmYourPlaceSec";
import PvmWorkTogetherSec from "@/components/molecules/pvm/PvmWorkTogetherSec";
import PvmFaqSec from "@/components/molecules/pvm/PvmFaqSec";
import PvmHero from "@/components/molecules/pvm/PvmHero";
import PvmPlaceManageSec from "@/components/molecules/pvm/PvmPlaceManageSec";

export default function Pvm() {
  return (
    <div>
      <VNFNavbar
        className="px-4 md:px-5 items-center py-2 fixed"
        maxWidth="full"
      />
      <PvmHero/>
      <PvmVenueManagement/>
      <PvmTopEventsMarquee/>
      <PvmPlaceManageSec/>
      <PvmWhatGet/>
      <PvmLatestEvent/>
      <PvmYourPlaceSec/>
      <PvmFaqSec/>
      <PvmWorkTogetherSec/>
      
      <div className="w-full mt-10 mx-auto px-5 md:px-5 lg:px-12 xl:px-20 block md:flex items-center justify-between w-full">
        <Footer />
      </div>
    </div>
  );
}
