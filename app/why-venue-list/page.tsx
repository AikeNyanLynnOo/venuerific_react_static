import Footer from "@/components/molecules/Footer";
import { VNFNavbar } from "@/components/molecules/VNFNavbar";
import TryVenuerific from "@/components/whyVenueList/TryVenuerific";
import VenueGrowing from "@/components/whyVenueList/VenueGrowing";
import VenueMarketing from "@/components/whyVenueList/VenueMarketing";
import VenueMonthlyRevenue from "@/components/whyVenueList/VenueMonthlyRevenue";
import VenuerificSolution from "@/components/whyVenueList/VenuerificSolution";
import VenueTrustedBusiness from "@/components/whyVenueList/VenueTrustedBusiness";
import WhyVenueListHero from "@/components/whyVenueList/WhyVenueListHero";
import WhyVenueListVideoSec from "@/components/whyVenueList/WhyVenueListVideoSec";
import WhyVenuerific from "@/components/whyVenueList/WhyVenuerific";

export default function WhyVenueList() {
  return (
    <div>
      <VNFNavbar className="px-4 md:px-5 lg:px-12 xl:px-20 items-center py-2 fixed" />
      {/* Why Venues List Hero Section */}
      <WhyVenueListHero />

      {/* Venues Trusted Business Section */}
      <VenueTrustedBusiness />

      {/* Why Venuerific Section */}
      <WhyVenuerific />

      {/* Venuerific Solution Section */}
      <VenuerificSolution />

      {/* Venuerific Growing Section */}
      <VenueGrowing />

      {/* Venuerific Monthly Revenue Section */}
      <VenueMonthlyRevenue />

      {/* Venuerific Marketing Section */}
      <div className="flex flex-col md:flex-col">
        <div className="w-full md:w-auto">
          <VenueMarketing />
        </div>

        {/* Venuerific Video Section*/}
        <div className="w-full md:w-auto md:order-first">
          <WhyVenueListVideoSec />
        </div>
      </div>

      {/* Try Venuerific Section */}
      <TryVenuerific />

      {/* Footer  */}
      <div className="w-full mt-10 mx-auto px-5 md:px-5 lg:px-12 xl:px-20 block md:flex items-center justify-between w-full">
        <Footer />
      </div>
    </div>
  );
}
