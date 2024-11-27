import { VNFNavbar } from "@/components/molecules/VNFNavbar";
import Footer from "@/components/molecules/Footer";
import HowWeWorkTabsSec from "../howWeWork/HowWeWorkTabsSec";
import HowWeWorkThreeSimpleSteps from "../howWeWork/HowWeWorkThreeSimpleSteps";
import { BannerWithTextAndBg } from "../molecules/banners/BannerWithTextAndBg";
import HowWeWorkHero from "../howWeWork/HowWeWorkHero";

export default function HowWeWorkLayout() {
  return (
    <div>
      <VNFNavbar
        className="px-4 md:px-5 items-center py-2 fixed"
        maxWidth="full"
      />
     <HowWeWorkHero/>
     <HowWeWorkTabsSec/>
     <HowWeWorkThreeSimpleSteps/>
     <BannerWithTextAndBg
            imgSrc="/images/why_vendor_list/vendor_banner.webp"
            title="Thousands of events, ready to book your venue."
            text="Join venuerific now to get the benefit!"
            btnText="Get Clients Now!"
          />

      <div className="w-full mt-10 mx-auto px-5 md:px-5 lg:px-12 xl:px-20 block md:flex items-center justify-between">
        <Footer />
      </div>
    </div>
  );
}
