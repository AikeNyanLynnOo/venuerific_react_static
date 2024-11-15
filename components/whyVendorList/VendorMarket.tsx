import Image from "next/image";

const VendorMarket = () => {
  const features = [
    {
      image: "/images/why_venue_list/curated_marketplace.png",
      alt: "Curated Marketplace",
      title: "Curated Marketplace",
      description:
        "Connect with thousands of event organizers monthly through Venuerific to generate more revenue.",
    },
    {
      image: "/images/why_venue_list/venue_management.png",
      alt: "Venue Management",
      title: "Venue Management",
      description: "Increase sales, save time and stay on top of your venue.",
    },
    {
      image: "/images/why_venue_list/end_to_end_support.png",
      alt: "End-to-End Support",
      title: "End-to-End Support",
      description:
        "Our customer success team offers local and fast assistance to guide you in growing your venue business.",
    },
  ];

  return (
    <div className="py-10 bg-white w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20">
      <div className="max-w-screen-xl">
        {/* <h2 className="text-3xl font-semibold text-primary-700 text-center">
          Why Venuerific?
        </h2> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
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

export default VendorMarket;
