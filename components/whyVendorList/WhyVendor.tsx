import Image from "next/image";

const vendorData = [
  {
    numberImage: "/images/why_vendor_list/vendor_number1.webp",
    contentImage: "/images/why_vendor_list/why_vendor_img1.webp",
    title: "Increased Visibility",
    description:
      "When vendors register on Venuerific Vendor Listing, their visibility to potential customers can significantly increase. Through website optimization, their website can rank higher on search engines. As a result, when people search for services related to events, their website will be more likely to appear in search results. This can help vendors reach a wider audience and attract new customers who may not have discovered them otherwise.",
    imagePosition: "left",
  },
  {
    numberImage: "/images/why_vendor_list/vendor_number2.webp",
    contentImage: "/images/why_vendor_list/why_vendor_img2.webp",
    title: "Targeted Marketing",
    description:
      "Targeted marketing is a powerful tool that our vendor listing platform offers. Our platform allows vendors to fine-tune their listings and showcase their offerings to the right audience—the Venuerific audience—making it easier than ever for them to achieve their marketing goals.",
    imagePosition: "right",
  },
  {
    numberImage: "/images/why_vendor_list/vendor_number3.webp",
    contentImage: "/images/why_vendor_list/why_vendor_img3.webp",
    title: "Cost-Effective Advertising",
    description:
      "By listing on our platform, vendors can save on advertising costs that they would have otherwise spent on traditional advertising methods such as print ads or payment for online visibility. We allow vendors to showcase their products or services to potential customers who are already interested in hosting events.",
    imagePosition: "left",
  },
];

const WhyVendor = () => {
  return (
    <div className="w-full mx-auto px-4 md:px-6 lg:px-12 xl:px-20 py-10">
      <h2 className="text-center text-3xl md:text-4xl text-primary-700 mb-10">
        <span className="font-semibold hidden md:inline">Why Venuerific?</span>
        <span className="inline font-semibold md:hidden">
          Be the first to join our vendor listing commerce
        </span>
      </h2>
      <div className="space-y-8">
        {vendorData.map((vendor, index) => (
          <div
            key={index}
            className={`flex flex-col ${vendor.imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-6 md:gap-8 lg:gap-12 p-4 rounded-lg shadow-md md:shadow-none md:p-0`}
          >
            <div className="flex-shrink-0 w-full md:w-1/2">
              <Image
                src={vendor.contentImage}
                alt={vendor.title}
                width={500}
                height={300}
                className="rounded-sm w-full h-auto"
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-start md:items-start">
              <div className="mt-0 mb-0 md:mt-4 md:mb-4 flex items-center justify-center md:justify-start w-full">
                <Image
                  src={vendor.numberImage}
                  alt={`Vendor number ${index + 1}`}
                  width={48}
                  height={48}
                  className="lg:w-14 lg:h-14"
                />
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-lg lg:text-2xl font-semibold text-gray-900 mt-8 md:mt-0 lg:mt-8">
                  {vendor.title}
                </h3>

                <p className="text-sm md:text-1xl lg:text-lg text-gray-600 leading-relaxed lg:leading-8 mt-5">
                  {vendor.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyVendor;
