const vendorData = [
  {
    numberImage: "/images/why_vendor_list/vendor_number1.webp",
    contentImage: "/images/why_vendor_list/why_vendor_img_1.webp",
    title: "Rank higher on Google.",
    description:
      "Boost your search engine rankings and drive more organic traffic with Venuerific.",
    imagePosition: "left",
  },
  {
    numberImage: "/images/why_vendor_list/vendor_number2.webp",
    contentImage: "/images/why_vendor_list/why_vendor_img_2.webp",
    title: "Connect with Event Organizers on Venuerific.",
    description:
      "Over 500,000 active event organizers are on the Venuerific platform.",
    imagePosition: "right",
  },
  {
    numberImage: "/images/why_vendor_list/vendor_number3.webp",
    contentImage: "/images/why_vendor_list/why_vendor_img_3.webp",
    title: "Grow your business for free.",
    description:
      "Yes, you read that right!<br />It’s completely free to get listed as a vendor on our platform to unlock revenue opportunities.",
    imagePosition: "left",
  },
];

const WhyVendor = () => {
  return (
    <div className="w-full mx-auto px-4 md:px-6 lg:px-12 xl:px-20 py-10">
      <div className="px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl text-primary-700 mb-10">
          <span className="font-semibold hidden md:inline">
            Why Venuerific?
          </span>
          <span className="inline font-semibold md:hidden">
            Be the first to join our vendor listing commerce
          </span>
        </h2>
        <div className="space-y-8">
          {vendorData.map((vendor, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                vendor.imagePosition === "left"
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              } items-center gap-6 md:gap-8 lg:gap-12 p-4 rounded-lg shadow-md md:shadow-none md:p-0`}
            >
              <div className="flex-shrink-0 w-full md:w-1/2">
                <img
                  src={vendor.contentImage}
                  alt={vendor.title}
                  width="500"
                  height="300"
                  className="rounded-sm w-full h-auto"
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col items-start md:items-start">
                <div className="mt-0 mb-0 md:mt-4 md:mb-4 flex items-center justify-center md:justify-start w-full">
                  <img
                    src={vendor.numberImage}
                    alt={`Vendor number ${index + 1}`}
                    width="48"
                    height="48"
                    className="lg:w-14 lg:h-14"
                  />
                </div>

                <div className="text-center md:text-left">
                  <h3 className="text-lg lg:text-2xl font-semibold text-gray-900 mt-8 md:mt-0 lg:mt-8">
                    {vendor.title}
                  </h3>
                  <p
                    className="text-sm md:text-1xl lg:text-lg text-gray-600 leading-relaxed lg:leading-8 mt-5"
                    dangerouslySetInnerHTML={{ __html: vendor.description }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyVendor;
