import Image from "next/image";
import WhyVendor from "@/components/whyVendorList/WhyVendor";
import TalkBannerVendor from "@/components/whyVendorList/TalkBannerVendor";

export default function WhyVendorList() {
  return (
    <div>
      <WhyVendor/>
      <TalkBannerVendor/>
    </div>
  );
}
