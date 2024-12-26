import { TRUSTED_BUSINESSES } from "@/config/constants";
import Marquee from "react-fast-marquee";

const PvmTopEventsMarquee = () => {
  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:pt-20 py-8 md:pt-20">
      <div className="px-4 md:px-0 md:mt-5 max-w-screen-2xl mx-auto">
        <h2 className="mt-0 md:mt-10 text-secondary-500 text-xl font-semibold text-center">
          Trusted by leading venues
        </h2>

        <Marquee gradient pauseOnHover className="my-16 md:mt-20">
          {TRUSTED_BUSINESSES.map(({ src, alt, href }, index) => (
            <a href={href} key={index} className="inline-block mx-10">
              <img
                alt={alt}
                className="w-auto h-[55px]"
                width="20"
                height="55"
                loading="lazy"
                src={src}
              />
            </a>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default PvmTopEventsMarquee;
