import Image from "next/image";
import functionHallsImg from "../../public/images/why_venue_list/functionHallsImg.png";
import eventSpacesImg from "../../public/images/why_venue_list/eventSpacesImg.png";
import corporateVenuesImg from "../../public/images/why_venue_list/corporateVenuesImg.png";
import restaurantsBarsImg from "../../public/images/why_venue_list/restaurantsBarsImg.png";
import hotelsVenuesImg from "../../public/images/why_venue_list/hotelsVenuesImg.png";
import coworkingSpacesImg from "../../public/images/why_venue_list/coworkingSpacesImg.png";

const venueData = [
  {
    image: functionHallsImg,
    alt: "Function Halls",
    title: "Function Halls",
  },
  {
    image: eventSpacesImg,
    alt: "Event Spaces",
    title: "Event Spaces",
  },
  {
    image: corporateVenuesImg,
    alt: "Corporate Venues",
    title: "Corporate Venues",
  },
  {
    image: restaurantsBarsImg,
    alt: "Restaurants, Bars, and Cafes",
    title: "Restaurants, Bars, and Cafes",
  },
  {
    image: hotelsVenuesImg,
    alt: "Hotels, Wedding Venues, Birthday Party Venues",
    title: "Hotels, Wedding Venues, and Birthday Party Venues",
  },
  {
    image: coworkingSpacesImg,
    alt: "Coworking Spaces",
    title: "Coworking Spaces",
  },
];

const VenuerificSolution = () => {
  return (
    <div className="py-16 bg-white">
      <div className="w-full mx-auto px-4 sm:px-0 md:px-5 lg:px-12 xl:px-20 py-10">
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
                  layout="fill"
                  objectFit="cover"
                  className="rounded-sm"
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
