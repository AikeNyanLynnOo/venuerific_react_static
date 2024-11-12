import Image from "next/image";

const TalkBannerVendor = () => {
  return (
    <div className="relative w-full h-auto sm:h-[215px] md:h-[300px]">
      <div className="absolute bottom-0 w-full h-1/2 md:h-1/2 translate-y-1/2 bg-gradient-to-r from-[#211A4C] to-[#323081] z-0"/>
      <div className="relative max-w-6xl mx-auto px-4 py-10 h-full z-10">
        <div className="absolute inset-0 bg-black opacity-70 rounded-3xl"/>
        <Image
          src="/images/why_vendor_list/vendor_banner.png" 
          alt="Vendor Banner"
          layout="fill"
          objectFit="cover"
          className="rounded-lg h-full"
        />
        
        <div className="relative flex flex-col md:flex-row items-center h-full rounded-lg px-8 md:px-16 py-8">
          <div className="flex-1 text-white space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Let&apos;s Work On Expanding Your Vendor Reach Together!
            </h2>
            <p className="text-base md:text-lg">
              Got questions? We’d love to help and we’re looking forward to hearing from you!
            </p>
          </div>
          <div className="mt-4 md:mt-0 md:ml-8">
            <button className="bg-primary-600 text-white px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-primary-700 transition">
              Talk To Our Partnership Specialist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkBannerVendor;
