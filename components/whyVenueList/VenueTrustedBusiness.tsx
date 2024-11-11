import Image from "next/image";
import venue_trusted_business_img1 from "../../public/images/why_venue_list/venue_trusted_business_img1.svg";
import venue_trusted_business_img2 from "../../public/images/why_venue_list/venue_trusted_business_img2.svg";
import venue_trusted_business_img3 from "../../public/images/why_venue_list/venue_trusted_business_img3.svg";
import venue_trusted_business_img4 from "../../public/images/why_venue_list/venue_trusted_business_img4.svg";
import venue_trusted_business_img5 from "../../public/images/why_venue_list/venue_trusted_business_img5.svg";

const VenueTrustedBusiness = () => {
  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-10 mt-8 md:mt-12">
      <h2 className="text-secondary-500 text-[20px] font-semibold text-center">
        Trusted by leading venue businesses
      </h2>

      <div className="relative overflow-hidden mt-4 mb-4 md:mt-12">
        <div className="flex justify-center items-center space-x-8 md:space-x-[64px] px-4 sm:px-0">
          <Image src={venue_trusted_business_img1} alt="Venue 1" width={100} height={100} />
          <Image src={venue_trusted_business_img2} alt="Venue 2" width={100} height={100} />
          <Image src={venue_trusted_business_img3} alt="Venue 3" width={100} height={100} />
          <Image src={venue_trusted_business_img4} alt="Venue 4" width={100} height={100} />
          <Image src={venue_trusted_business_img5} alt="Venue 5" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default VenueTrustedBusiness;
