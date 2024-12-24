import { INDUSTRY_LEADERS } from "@/config/constants";
import Marquee from "react-fast-marquee";

const PvmIndustryLeadersMarquee = () => {
  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 pb-8 md:pb-20">
      <div className="px-4 md:px-0 md:mt-5 max-w-screen-2xl mx-auto">
        <h2 className="mt-0 md:mt-10 text-secondary-500 text-[20px] font-semibold text-center">
          Industry leaders trust us with their events at these managed venues
        </h2>

        <Marquee gradient pauseOnHover className="my-16 md:mt-20">
          {INDUSTRY_LEADERS.map(({ src, alt, href }, index) => (
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

export default PvmIndustryLeadersMarquee;
