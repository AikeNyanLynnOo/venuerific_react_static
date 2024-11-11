import Image from "next/image";

const vendorData = [
  {
    numberImage: "/images/why_vendor_list/vendor_number1.png",
    contentImage: "/images/why_vendor_list/why_vendor_img1.png",
    title: "Increased Visibility",
    description:
      "When vendors register on Venuerific Vendor Listing, their visibility to potential customers can significantly increase. Through website optimization, their website can rank higher on search engines. As a result, when people search for services related to events, their website will be more likely to appear in search results. This can help vendors reach a wider audience and attract new customers who may not have discovered them otherwise.",
    imagePosition: "left",
  },
  {
    numberImage: "/images/why_vendor_list/vendor_number2.png",
    contentImage: "/images/why_vendor_list/why_vendor_img2.png",
    title: "Targeted Marketing",
    description:
      "Targeted marketing is a powerful tool that our vendor listing platform offers. Our platform allows vendors to fine-tune their listings and showcase their offerings to the right audience—the Venuerific audience—making it easier than ever for them to achieve their marketing goals.",
    imagePosition: "right",
  },
  {
    numberImage: "/images/why_vendor_list/vendor_number3.png",
    contentImage: "/images/why_vendor_list/why_vendor_img3.png",
    title: "Cost-Effective Advertising",
    description:
      "By listing on our platform, vendors can save on advertising costs that they would have otherwise spent on traditional advertising methods such as print ads or payment for online visibility. We allow vendors to showcase their products or services to potential customers who are already interested in hosting events.",
    imagePosition: "left",
  },
];

const WhyVendor = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-center text-3xl text-primary-700  mb-10">
        <span className="font-semibold hidden md:inline">Why Venuerific?</span>
        <span className="inline md:hidden">Be the first to join our vendor listing commerce</span>
      </h2>
      <div className="space-y-12">
        {vendorData.map((vendor, index) => (
          <div
            key={index}
            className={`flex flex-col ${vendor.imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-6 md:gap-8 lg:gap-12 p-4 rounded-lg shadow-md md:shadow-none`}
          >
            <div className="flex-shrink-0 w-full md:w-1/2">
              <Image
                src={vendor.contentImage}
                alt={vendor.title}
                width={500}
                height={300}
                className="rounded-sm"
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-start md:items-start space-y-4">
              <div className="flex items-center justify-center md:justify-start w-full">
                <Image
                  src={vendor.numberImage}
                  alt={`Vendor number ${index + 1}`}
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{vendor.title}</h3>
              <p className="text-gray-600">{vendor.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyVendor;
