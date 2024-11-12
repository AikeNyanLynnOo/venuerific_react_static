import Image from "next/image";
import WhyVendor from "@/components/whyVendorList/WhyVendor";
import TalkBannerVendor from "@/components/whyVendorList/TalkBannerVendor";
import WhyVendorListHero from "@/components/whyVendorList/WhyVendorListHero";
import VendorMarket from "@/components/whyVendorList/VendorMarket";
import VendorTrustedBusiness from "@/components/whyVendorList/VendorTrustedBusiness";

export default function WhyVendorList() {
  return (
    <div>
      <WhyVendorListHero/>
      <VendorTrustedBusiness/>
      <VendorMarket />
      <WhyVendor/>
      <TalkBannerVendor/>
    </div>
  );
}
