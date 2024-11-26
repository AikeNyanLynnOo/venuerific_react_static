import Image from "next/image";
import { FEATURES } from "../../config/constants/why-venue-list";

const WhyVenuerific = () => {
  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-10">
      <div className="px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto">
        <h2 className="text-3xl font-semibold text-primary-700 text-center">
          Why Venuerific?
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-secondary-50 p-6 rounded-md"
            >
              <div className="relative w-12 h-12 mb-4">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={48}
                  height={48}
                />
              </div>
              <p className="text-xl font-semibold text-gray-800">
                {feature.title}
              </p>
              <p className="text-gray-600 mt-2 mb-4 md:mb-0 sm:mb-6">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyVenuerific;
