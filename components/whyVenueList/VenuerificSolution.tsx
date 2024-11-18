import Image from "next/image";

const venueData = [
  {
    image: "/images/why_venue_list/functionHallsImg.png",
    alt: "Function Halls",
    title: "Function Halls",
  },
  {
    image: "/images/why_venue_list/eventSpacesImg.png",
    alt: "Event Spaces",
    title: "Event Spaces",
  },
  {
    image: "/images/why_venue_list/corporateVenuesImg.png",
    alt: "Corporate Venues",
    title: "Corporate Venues",
  },
  {
    image: "/images/why_venue_list/restaurantsBarsImg.png",
    alt: "Restaurants, Bars, and Cafes",
    title: "Restaurants, Bars, and Cafes",
  },
  {
    image: "/images/why_venue_list/hotelsVenuesImg.png",
    alt: "Hotels, Wedding Venues, Birthday Party Venues",
    title: "Hotels, Wedding Venues, and Birthday Party Venues",
  },
  {
    image: "/images/why_venue_list/coworkingSpacesImg.png",
    alt: "Coworking Spaces",
    title: "Coworking Spaces",
  },
];

const VenuerificSolution = () => {
  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-16 bg-white">
      <div className="px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto">
        <h2 className="text-primary-700 text-3xl font-semibold text-left lg:text-gray-800">
          Solutions for every type of venue:
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {venueData.map((venue, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-sm border border-secondary-200 rounded-lg"
            >
              <div className="relative h-40 mb-4">
                <Image
                  src={venue.image}
                  alt={venue.alt}
                  className="rounded-sm h-full w-full object-cover"
                  height={300}
                  width={350}
                />
              </div>
              <p className="text-xl font-semibold text-gray-800">
                {venue.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VenuerificSolution;
