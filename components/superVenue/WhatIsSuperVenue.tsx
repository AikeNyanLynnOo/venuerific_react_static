"use client";
import Image from "next/image";

const WhatIsSuperVenue = () => {
  const cardData = [
    {
      image: "/images/super_venue/what_super_venue_search_icon.webp",
      alt: "Top Search Icon",
      title: "Top Search",
      description:
        "Appear at the beginning of every venue search and increase your chances of getting booked!",
    },
    {
      image: "/images/super_venue/what_super_venue_badge_icon.webp",
      alt: "Special Badge Icon",
      title: "Special Badge",
      description:
        "Stand out with a badge that highlights your venue.",
    },
    {
      image: "/images/super_venue/what_super_venue_filter_icon.webp",
      alt: "Super Venue Filter Icon",
      title: "Super Venue Filter Search",
      description:
        "A special filter that celebrates YOUR hard work.",
    },
    {
      image: "/images/super_venue/what_super_venue_support_icon.webp",
      alt: "Priority Support Icon",
      title: "Priority Support from our Team",
      description:
        "Our team values your venue, so we're always here to help, ASAP.",
    },
  ];

  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-10">
      <div className="px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto">
        <div className="text-center">
          <h1 className="text-primary-800 text-3xl font-bold">
            What is Super Venue?
          </h1>
          <p className="text-secondary-500 text-xl mt-4">
            Super Venue is Venuerific's way of recognising our top performing venues.
            Venues are specially curated based on criteria such as conversion rate,
            response time, number of bookings and customer ratings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6 mt-16">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="border border-secondary200 rounded-lg p-6 flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="w-full flex justify-center md:justify-start">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={50}
                  height={50}
                  className="mb-4"
                />
              </div>
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-secondary-600 mt-2">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIsSuperVenue;
