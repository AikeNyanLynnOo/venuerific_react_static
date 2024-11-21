import { TRUSTED_BUSINESSES } from "@/config/constants";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const PvmTopEventsMarquee = () => {
  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-8 md:py-20">
      <div className="px-4 md:px-0 my-10 md:mt-5 max-w-screen-2xl mx-auto">
        <h2 className="mt-0 md:mt-10 text-secondary-500 text-[20px] font-semibold text-center">
          Managing Top Event Spaces Such As
        </h2>

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
    </div>
  );
};

export default PvmTopEventsMarquee;
