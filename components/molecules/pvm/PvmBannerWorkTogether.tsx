import Image from "next/image";

interface PvmBannerWorkTogetherProps {
  imgSrc?: string;
  title?: string;
  text?: string;
  btnText?: string;
  btnLink?: string;
}

const PvmBannerWorkTogether = ({
  imgSrc,
  title,
  text,
  btnText,
  btnLink,
}: PvmBannerWorkTogetherProps) => {
  return (
    <div className="w-full mx-auto px-5 lg:px-12 xl:px-20 relative mb-28">
      <Image
        src={imgSrc || "/images/why_vendor_list/vendor_banner.webp"}
        alt="Vendor Banner"
        width={1000}
        height={500}
        className="rounded-2xl object-cover z-20 relative w-full h-[400px] sm:h-[250] md:h-[200px]"
      />
      <div className="absolute z-20 w-full h-[400px] sm:h-[250] md:h-[200px] px-5 lg:px-12 xl:px-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col justify-center md:flex-row md:justify-between py-10 md:py-0 items-center h-full text-white gap-x-5 px-0 md:px-10">
          <div className="flex-1 flex flex-col justify-center text-center md:text-left px-5 md:px-0 md:block">
            <h2 className="text-2xl lg:text-3xl font-semibold leading-tight">
              {title || ""}
            </h2>
            <p className="mt-3 md:mt-2">{text || ""}</p>
          </div>

          <button className="bg-white text-black w-fit font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-primary-700 transition md:w-auto sm:bg-white sm:text-black sm:hover:bg-primary-600 md:bg-primary-600 md:text-white flex items-center gap-2">
            <Image
              src="/images/pvm/chat_default.webp"
              alt="Chat Icon Desktop"
              width={24}
              height={24}
              className="hidden md:inline-block"
            />
            <Image
              src="/images/pvm/chat_default_mobile.webp"
              alt="Chat Icon Mobile"
              width={24}
              height={24}
              className="inline-block md:hidden"
            />
            {btnText || "Talk to Us"}
          </button>
        </div>
      </div>
      <div className="h-[300px] md:h-[130px] absolute z-10 w-full left-0 right-0 bottom-0 bg-gradient-to-b from-[#211A4C] to-[#323081] translate-y-[60px] lg:translate-y-2/3" />
    </div>
  );
};

export default PvmBannerWorkTogether;
