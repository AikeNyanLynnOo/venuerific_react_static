import { Button } from "@nextui-org/button";

interface PvmBannerWorkTogetherProps {
  imgSrc?: string;
  title?: React.ReactNode;
  text?: string;
  btnText?: string;
  btnLink?: string;
  btnSize?: "sm" | "md" | "lg";
  btnStartContent?: any;
  btnEndContent?: any;
  handleClick?: any;
}

export const PvmBannerWorkTogether = ({
  imgSrc,
  title,
  text,
  btnText,
  btnLink,
  btnSize,
  btnStartContent,
  btnEndContent,
  handleClick,
}: PvmBannerWorkTogetherProps) => {
  return (
    <div className="w-full mx-auto px-5 lg:px-12 xl:px-20 relative mb-28">
      <img
        src={imgSrc || "/images/why_vendor_list/vendor_banner.webp"}
        alt="Vendor Banner"
        className="rounded-2xl object-cover z-20 relative w-full max-w-screen-2xl mx-auto h-[400px] sm:h-[250px] md:h-[200px]"
      />
      <div className="absolute z-20 w-full max-w-screen-2xl mx-auto h-[400px] sm:h-[250px] md:h-[200px] px-5 lg:px-12 xl:px-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col justify-center md:flex-row md:justify-between py-10 md:py-0 items-center h-full text-white gap-x-5 px-0 md:px-10">
          <div className="flex-1 flex flex-col justify-center text-center md:text-left px-5 md:px-0 md:block">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight">
              {title || ""}
            </h2>
            <p className="mt-3 md:mt-2">{text || ""}</p>
          </div>

          {(btnLink && (
            <a href={btnLink}>
              <Button
                className="rounded-lg w-fit bg-primary-600 font-semibold text-base lg:text-lg"
                size={btnSize || "md"}
                color="primary"
                startContent={
                  <img
                    src="/images/pvm/chat_default.webp"
                    alt="Chat Icon Desktop"
                    className="w-4 h-4"
                  />
                }
                endContent={btnEndContent || <></>}
                variant="solid"
              >
                {btnText || ""}
              </Button>
            </a>
          )) || (
            <Button
              className="rounded-lg w-fit bg-primary-600 font-semibold"
              size={btnSize || "md"}
              color="primary"
              startContent={
                <img
                  src="/images/pvm/calendar.webp"
                  alt="Chat Icon Desktop"
                  className="w-4 h-4"
                />
              }
              endContent={btnEndContent || <></>}
              variant="solid"
              onClick={handleClick}
            >
              {btnText || ""}
            </Button>
          )}
        </div>
      </div>
      <div className="h-[300px] md:h-[130px] absolute z-10 w-full left-0 right-0 bottom-0 bg-gradient-to-b from-[#211A4C] to-[#323081] translate-y-[60px] lg:translate-y-2/3" />
    </div>
  );
};

export default PvmBannerWorkTogether;
