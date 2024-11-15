import Image from "next/image";

const TalkBannerVendor = () => {
  return (
    <div className="relative w-full h-auto md:h-[250px] lg:h-[200px] mt-10">
      <div className="absolute bottom-[-10px] w-full h-3/4 md:h-[70%] translate-y-2/3 bg-gradient-to-r from-[#211A4C] to-[#323081] z-0" />
      <div className="absolute inset-0 w-full h-full px-6 md:px-6 lg:px-12 xl:px-20">
        <div className="relative w-full h-full">
          <Image
            src="/images/why_vendor_list/vendor_banner.webp"
            alt="Vendor Banner"
            width={1000}
            height={500}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="relative z-10 w-full mx-auto px-4 md:px-6 lg:px-10 xl:px-20 py-6 h-full">
        <div className="relative flex flex-col md:flex-row items-center h-full rounded-lg px-8 md:px-16 py-6">
          <div className="flex-1 text-white space-y-4 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Let&apos;s Work On Expanding Your Vendor Reach Together!
            </h2>
            <p className="text-base md:text-lg">
              Got questions? We&apos;d love to help and we&apos;re looking
              forward to hearing from you!
            </p>
          </div>
          <div className="mt-4 md:mt-0 md:ml-8 flex justify-center md:justify-start">
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-primary-700 transition w-full md:w-auto sm:bg-white sm:text-black sm:hover:bg-primary-600 md:bg-primary-600 md:text-white">
              Talk To Our Partnership Specialist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkBannerVendor;
