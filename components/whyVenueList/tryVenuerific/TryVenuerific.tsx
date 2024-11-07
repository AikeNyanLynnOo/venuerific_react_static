import Image from "next/image";
import tryVenuerificImg from "../../../public/images/why_venue_list/try_venuerific_img.png";

const TryVenuerific = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[80vh]"> 
      <div className="max-w-screen-xl mx-auto p-6 sm:p-8 md:p-16 lg:p-24 flex flex-col justify-center space-y-6">
        <h2 className="text-primary-700 text-[32px] sm:text-[40px] lg:text-[48px] font-bold">
          Ready to try Venuerific?
        </h2>
        <p className="text-secondary-600 text-[14px] sm:text-[16px] md:text-[18px]">
          Integrate Venuerific easily into your venue sales and marketing operations
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="border-2 border-secondary-300 px-6 py-3 text-lg font-semibold rounded-md hover:bg-secondary-300 hover:text-white transition-colors">
            Schedule a demo
          </button>
          <button className="bg-primary-600 text-white px-6 py-3 text-lg font-semibold rounded-md hover:bg-primary-700 transition-colors">
            Sign up for free
          </button>
        </div>
      </div>

      <div className="relative w-full h-full">
        <Image
          src={tryVenuerificImg}
          alt="Try Venuerific"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default TryVenuerific;
