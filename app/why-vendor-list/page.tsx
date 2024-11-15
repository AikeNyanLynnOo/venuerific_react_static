import Image from "next/image";
import WhyVendor from "@/components/whyVendorList/WhyVendor";
import TalkBannerVendor from "@/components/whyVendorList/TalkBannerVendor";
import WhyVendorListHero from "@/components/whyVendorList/WhyVendorListHero";
import VendorMarket from "@/components/whyVendorList/VendorMarket";
import VendorTrustedBusiness from "@/components/whyVendorList/VendorTrustedBusiness";
import { VNFNavbar } from "@/components/molecules/VNFNavbar";
import Footer from "@/components/molecules/Footer";

export default function WhyVendorList() {
  return (
    <div>
      <VNFNavbar className="px-4 md:px-5 items-center py-2 fixed" maxWidth="full"/>
      <WhyVendorListHero />
      <VendorTrustedBusiness />
      <VendorMarket />
      <WhyVendor />
      <TalkBannerVendor />
      <div className="w-full mt-10 mx-auto px-5 md:px-5 lg:px-12 xl:px-20 block md:flex items-center justify-between w-full">
        <Footer />
      </div>
    </div>
  );
}
