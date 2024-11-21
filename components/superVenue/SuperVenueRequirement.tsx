"use client";
import Image from "next/image";

const SuperVenueRequirement = () => {
  const firstCardData = [
    {
      title: "90% or higher",
      subtitle: "Response Rate",
      description:
        "Response rates of 90% or higher make for a proactive venue.",
    },
    {
      title: "6% or higher",
      subtitle: "Conversion Rate",
      description:
        "Conversion rates of 6% or higher make for a proactive venue.",
    },
    {
      title: "5 booking / year",
      subtitle: "Number of Booking",
      description: "5 or more bookings a year build a venue’s good reputation.",
    },
  ];

  const secondCardData = [
    {
      title: "Under 24 hours",
      subtitle: "Response time",
      description:
        "Responsive venues reply in less than 24 hours after an enquiry.",
    },
    {
      title: "4 Star or higher",
      subtitle: "Venue Rating",
      description:
        "If customers love you, they’ll let you know. Super Venue lets future customers know too.",
    },
  ];

  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-10">
      <div className="px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto">
        <div className="text-center md:text-left mb-12">
          <h1 className="text-primary-800 text-3xl font-bold">
            Requirements to Apply for Super Venue Program
          </h1>
          <p className="text-secondary-600 text-xl mt-6">
            What makes a Super Venue? For Venuerific, there are four standards
            that make your venue a cut above the rest: high responsive rate,
            high conversion rate, fast response time, successful yearly
            bookings, and good rating.
          </p>
        </div>

        {/* First Section */}
        <div className="py-8 grid grid-cols-1 lg:grid-cols-2 gap-16 md:items-center md:justify-center">
          <div className="space-y-6">
            {firstCardData.map((card, index) => (
              <div key={index} className="bg-secondary-100 rounded-lg p-6">
                <h2 className="text-primary-800 text-3xl font-bold">
                  {card.title}
                </h2>
                <h3 className="text-secondary-900 text-2xl font-semibold mt-4">
                  {card.subtitle}
                </h3>
                <p className="text-secondary-900 text-lg mt-4">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <div className="relative">
            <Image
              src="/images/super_venue/super_venue_requirement_sec_img.webp"
              alt="Super Venue Requirement Image"
              width={700}
              height={500}
              className="rounded-lg"
            />
            <div className="absolute bottom-0 left-0 w-full max-w-[700px] mx-auto py-4 px-6 backdrop-blur-md bg-gray-300 bg-opacity-30 rounded-t-lg">
              <span className="text-white text-[30px]">
                HERE | Singapore
              </span>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="py-8 grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 md:items-center md:justify-center">
          <div className="relative">
            <Image
              src="/images/super_venue/super_venue_requirement_sec_img2.webp"
              alt="Super Venue Requirement Image 2"
              width={700}
              height={500}
              className="rounded-lg"
            />
            <div className="absolute bottom-0 left-0 w-full max-w-[700px] mx-auto py-4 px-6 backdrop-blur-md bg-gray-300 bg-opacity-30 rounded-t-lg">
              <span className="text-white text-[30px]">
                SOCIOQ | Singapore
              </span>
            </div>
          </div>

          <div className="space-y-6">
            {secondCardData.map((card, index) => (
              <div key={index} className="bg-secondary-100 rounded-lg p-6">
                <h2 className="text-primary-800 text-3xl font-bold">
                  {card.title}
                </h2>
                <h3 className="text-secondary-900 text-2xl font-semibold mt-4">
                  {card.subtitle}
                </h3>
                <p className="text-secondary-900 text-lg mt-4">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperVenueRequirement;
