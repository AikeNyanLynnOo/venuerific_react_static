import { Button } from "@nextui-org/button";

const TalkBannerVendor = () => {
  return (
    <div className="relative w-full h-auto md:h-[250px] lg:h-[300px] mt-20">
      <div className="absolute w-full h-3/4 md:h-[70%] translate-y-2/3 bg-gradient-to-r from-[#211A4C] to-[#323081] z-0" />
      <div className="absolute inset-0 w-full h-full px-6 md:px-8 lg:px-12 max-w-screen-2xl mx-auto lg:translate-y-[-100px]">
        <div className="relative w-full h-full">
          <img
            src="/images/why_vendor_list/vendor_banner.webp"
            alt="Vendor Banner"
            width="1000"
            height="500"
            className="rounded-lg object-cover w-full h-full"
            style={{ height: "100%" }}
          />
        </div>
      </div>

      <div className="relative z-10 w-full px-6 md:px-8 lg:px-12 xl:px-20 py-10 max-w-screen-2xl mx-auto h-full lg:translate-y-[-100px]">
        <div className="relative flex flex-col md:flex-row items-center justify-center h-full rounded-lg px-6 md:px-10 py-6 space-y-6 md:space-y-0">
          <div className="flex-1 text-white text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
              Let&apos;s Work On Expanding Your Vendor Reach Together!
            </h2>
            <p className="text-base md:text-lg mt-2">
              Got questions? We&apos;d love to help and we&apos;re looking
              forward to hearing from you!
            </p>
          </div>

          <div className="mt-4 md:mt-0 md:ml-8 flex justify-center md:justify-start">
            <Button className="bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-primary-700 transition w-full md:w-auto sm:bg-white sm:text-black sm:hover:bg-primary-600 md:bg-primary-600 md:text-white text-[16px]">
              Talk To Our Partnership Specialist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkBannerVendor;
