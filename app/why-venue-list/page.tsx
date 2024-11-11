import Image from "next/image";
import VenuerificSolution from "@/components/whyVenueList/VenuerificSolution";
import WhyVenuerific from "@/components/whyVenueList/WhyVenuerific";
import WhyVenueListVideoSec from "@/components/whyVenueList/WhyVenueListVideoSec";
import VenueMarketing from "@/components/whyVenueList/VenueMarketing";
import VenueTrustedBusiness from "@/components/whyVenueList/VenueTrustedBusiness";
import TryVenuerific from "@/components/whyVenueList/TryVenuerific";
import VenueGrowing from "@/components/whyVenueList/VenueGrowing";
import VenueMonthlyRevenue from "@/components/whyVenueList/VenueMonthlyRevenue";
import WhyVenueListHero from "@/components/whyVenueList/WhyVenueListHero";

export default function WhyVenueList() {
  return (
    <div>
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
    </div>
  );
}
