import Image from "next/image";

const sections = [
  {
    title: "Attract & Capture",
    image: "/images/why_venue_list/venue_marketing_img1.webp",
    text: [
      {
        heading: "Rank Higher on Google",
        description:
          "Boost your online visibility and attract a world of new event organizers by getting listed on Venuerific.",
      },
      {
        heading: "Generate More Leads",
        description:
          "Increase venue bookings through specialized venue marketing strategies.",
      },
    ],
    gradient: "from-[#428EFE] to-[#A261FD]",
    textColor: "text-primary-600",
    bgColor: "bg-gradient-to-r",
  },
  {
    title: "Manage & Automate",
    image: "/images/why_venue_list/venue_marketing_img2.webp",
    text: [
      {
        heading: "Easily Manage Leads and Bookings",
        description:
          "Track all your leads and manage bookings easily in one platform. Automate the entire venue sales process so you can focus on what truly matters - growing your venue business.",
      },
      {
        heading: "Manage Your Schedule with Ease",
        description:
          "Stay organized with our CRM! Our calendar sync feature allows you to integrate your venue’s calendar to Venuerific, enabling you to check event availability and upcoming bookings.",
      },
      {
        heading: "Instant Venue Insights",
        description:
          "Save time preparing for meetings with analytics that update in real-time, delivering key insights on your venue's performance.",
      },
    ],
    gradient: "from-[#A261FD] to-[#A261FD]",
    textColor: "text-[#A261FD]",
    bgColor: "bg-gradient-to-r",
  },
  {
    title: "Convert & Nurture",
    image: "/images/why_venue_list/venue_marketing_img3.webp",
    text: [
      {
        heading: "Instant Quotation Generation",
        description:
          "Quickly generate and send quotations to clients, complete with detailed descriptions and prices via email or WhatsApp.",
      },
      {
        heading: "Seamless and Secure Transactions",
        description:
          "With Venuerific Payment, receive payment safely and quickly for any bookings.",
      },
      {
        heading: "Grow Revenue with WhatsApp and Email Campaigns",
        description:
          "Promote your venue and nurture customer relationships, positioning your venue for long-term growth.",
      },
    ],
    gradient: "from-[#EE46BC] to-[#A261FD]",
    textColor: "text-[#EE46E0]",
    bgColor: "bg-gradient-to-r",
  },
];

const VenueMarketing = () => {
  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-10 bg-primary-50">
      <div className="px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto">
        <div className="mx-auto pt-8 pb-20">
          <h1 className="hidden md:block text-black text-2xl font-semibold">
            The #1 Venue Marketing Platform in Asia
          </h1>

          <h2 className="text-primary-700 text-3xl font-bold mt-0 md:mt-4">
            Venue Management & Marketing Lifecycle
          </h2>

          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
            {sections.map((section, index) => (
              <div key={index} className="space-y-4 w-full">
                <div
                  className={`w-full h-[6px] ${section.bgColor} ${section.gradient} mt-8`}
                ></div>
                <div className="flex items-center space-x-4">
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={44}
                    height={44}
                  />
                  <p
                    className={`${section.textColor} text-[24px] font-semibold`}
                  >
                    {section.title}
                  </p>
                </div>
                <div className="space-y-4">
                  {section.text.map((item, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-bold">{item.heading}</h3>
                      <p className="text-sm text-secondary-500">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueMarketing;
