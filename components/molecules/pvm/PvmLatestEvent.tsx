import { HorizontalScrollList } from "../../molecules/HorizontalScrollList";
import { ScrollContainerWithTitle } from "../../molecules/ScrollContainerWithTitle";
import { PvmEventsCard } from "./PvmEventsCard";

const PvmLatestEvent = () => {
  const venueItems = [
    {
      id: 1,
      logoUrl: "/images/why_venue_list/wework.png",
      imageUrl: "/images/why_venue_list/venue_growing_wework_img.png",
      alt: "WeWork Logo",
      eventTitle: "Mendaki", 
      eventDate: "Sep 24, 2022", 
    },
  ];

  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-10 bg-primary-50">
      <ScrollContainerWithTitle
        className="px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto"
        title={`Our Latest Event`}
        titleClasses="text-primary-700 font-semibold text-3xl"
        text={`Venuerific has the experience necessary to manage a variety of venues and to host all kinds of events. From high-profile corporate dinners.`}
      >
        <HorizontalScrollList items={venueItems} cardType="pvmevents">
          {venueItems.map((item) => (
            <PvmEventsCard
              key={item.id}
              imageUrl={item.imageUrl}
              imgAlt={item.alt}
              logoUrl={item.logoUrl}
              logoAlt="Event Logo"
              eventTitle={item.eventTitle}
              eventDate={item.eventDate}
            />
          ))}
        </HorizontalScrollList>
      </ScrollContainerWithTitle>
    </div>
  );
};

export default PvmLatestEvent;
