"use client";

const venues = [
  {
    icon: "/images/pvm/coworking_icon.webp",
    alt: "Co-working Space Icon",
    title: "Co-working Spaces",
    description: "Spacious offices to meet with your team",
  },
  {
    icon: "/images/pvm/event_icon.webp",
    alt: "Event Space Icon",
    title: "Event Spaces",
    description: "Hold memorable events at one-of-a-kind venues",
  },
  {
    icon: "/images/pvm/home_icon.webp",
    alt: "Private Home Icon",
    title: "Private Homes",
    description: "Cosy, ambient spaces, your home away from home",
  },
  {
    icon: "/images/pvm/unique_space_icon.webp",
    alt: "Unique Space Icon",
    title: "Unique Spaces",
    description: "Learn, network, and enjoy large events",
  },
];

const PvmVenueManagement = () => {
  return (
    <div className="mt-4 md:mt-2 lg:mt-[81px] w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-0 lg:py-4">

      <div className="px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-primary-800 text-3xl font-bold mb-4">
            With Years of Experience, We&apos;re Your Go-To Place for Venue
            Management
          </h1>
          <p className="text-secondary-500 text-lg">
            Managing your venue can be a logistical and creative nightmare,
            especially since you have to keep up with it day-to-day. This is
            where we come in: Venuerific Management Service will manage
            everything from your enquiry to post-event.
          </p>
        </header>

        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {venues.map((venue, index) => (
            <div
              key={index}
              className="flex flex-col items-center border border-secondary-200 rounded-lg p-5 text-center"
            >
              <img
                src={venue.icon}
                alt={venue.alt}
                className="mb-4 w-12 h-12"
              />
              <h3 className="text-lg font-semibold">{venue.title}</h3>
              <p className="text-sm text-gray-600 mt-3">{venue.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PvmVenueManagement;
