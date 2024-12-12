import { TRUSTED_BUSINESSES } from "@/config/constants";
import Marquee from "react-fast-marquee";

const VenueTrustedBusiness = () => {
  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-10">
      <div className="px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto">
        <h2 className="text-secondary-500 text-3xl font-semibold text-center hidden sm:block">
          Trusted by leading venue businesses
        </h2>

        <h2 className="text-secondary-500 text-3xl font-semibold text-center sm:hidden">
          Trusted by industry leaders and venue owners across Asia
        </h2>

        <Marquee gradient pauseOnHover className="my-16 md:mt-20">
          {TRUSTED_BUSINESSES.map(({ src, alt, href }, index) => (
            <a key={index} href={href} className="inline-block mx-10">
              <img
                src={src}
                alt={alt}
                className="w-auto h-[55px]"
                width="20"
                height="55"
                loading="lazy"
              />
            </a>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default VenueTrustedBusiness;
