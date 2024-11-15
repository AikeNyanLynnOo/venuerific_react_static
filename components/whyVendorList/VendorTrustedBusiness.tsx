import { TRUSTED_BUSINESSES } from "@/config/constants";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const VendorTrustedBusiness = () => {
  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-10 lg:mt-8 sm:mt-1 md:mt-12">
      <h2 className="text-secondary-500 text-[20px] font-semibold text-center hidden sm:block">
        Trusted by leading venue businesses
      </h2>

      <h2 className="text-secondary-500 text-[20px] mt-8 font-semibold text-center sm:hidden">
        Trusted by industry leaders and venue owners across Asia
      </h2>

      {/* <div className="relative overflow-hidden mt-4 mb-4 md:mt-12">
        <div className="flex justify-center items-center space-x-8 md:space-x-[64px] px-4 sm:px-0">
          <Image src={venue_trusted_business_img1} alt="Venue 1" width={100} height={100} />
          <Image src={venue_trusted_business_img2} alt="Venue 2" width={100} height={100} />
          <Image src={venue_trusted_business_img3} alt="Venue 3" width={100} height={100} />
          <Image src={venue_trusted_business_img4} alt="Venue 4" width={100} height={100} />
          <Image src={venue_trusted_business_img5} alt="Venue 5" width={100} height={100} />
        </div>
      </div> */}
      <Marquee gradient pauseOnHover className="my-16 md:mt-20">
        {TRUSTED_BUSINESSES.map(({ src, alt, href }, index) => (
          <Image
            key={index}
            alt={alt}
            className="w-auto h-[55px] mx-10"
            width={20}
            height={55}
            loading="lazy"
            src={src}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default VendorTrustedBusiness;
