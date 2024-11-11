import { HorizontalScrollList } from "../molecules/HorizontalScrollList";
import { ScrollContainerWithTitle } from "../molecules/ScrollContainerWithTitle";

const VenueGrowing = () => {
  const venueItems = [
    {
      id: 1,
      logoUrl: "/images/why_venue_list/wework.png",
      imageUrl: "/images/why_venue_list/venue_growing_wework_img.png",
      alt: "WeWork Logo",
    },
  ];

  return (
    // <div className="w-full bg-primary-50 py-16">
    //   <div className="max-w-screen-xl mx-auto px-8 mb-10 text-left">
    //     <h2 className="text-primary-700 font-semibold text-[36px]">
    //       The world's best venues are growing their venues using Venuerific
    //     </h2>
    //     <p className="text-black text-[24px] mt-4">
    //       Thousands of venues, including WeWork, Mandala Club, Guoco Midtown
    //       Network Hub, and more are increasing their revenue by partnering with
    //       Venuerific.
    //     </p>
    //   </div>

    //   <div className="max-w-screen-xl mx-auto px-8">
    //     <div className="flex gap-8 flex-wrap">
    //       {venueItems.map(({ id, logoUrl, imageUrl, alt }) => (
    //         <div
    //           key={id}
    //           className="relative rounded-lg overflow-hidden shadow-lg"
    //           style={{ width: "100%", maxWidth: "539px", height: "320px" }}
    //         >
    //           <img
    //             src={imageUrl}
    //             alt={alt}
    //             className="w-full h-full object-cover"
    //           />

    //           <div className="absolute top-4 left-1/2 transform -translate-x-1/2 sm:hidden">
    //             <img src={logoUrl} alt={alt} className="h-10" />
    //           </div>

    //           <div className="absolute bottom-4 left-4 right-4 p-4 bg-opacity-70 rounded-lg flex items-center justify-between hidden sm:flex">
    //             <img src={logoUrl} alt={alt} className="h-10" />
    //             <button className="bg-primary-600 text-white py-2 px-4 rounded shadow-md">
    //               View Venue
    //             </button>
    //           </div>

    //           <div className="absolute bottom-4 left-4 right-4 sm:hidden">
    //             <button className="w-full bg-primary-600 text-white py-2 px-4 rounded shadow-md">
    //               View Venue
    //             </button>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-10 bg-primary-50">
      <ScrollContainerWithTitle
        className="px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto"
        title={` The world's best venues are growing their venues using Venuerific`}
        titleClasses="text-primary-700 font-semibold text-3xl"
        text={`Thousands of venues, including WeWork, Mandala Club, Guoco Midtown Network Hub, and more are increasing their revenue by partnering with Venuerific.`}
      >
        <HorizontalScrollList items={venueItems} cardType="whylistgrow" />
      </ScrollContainerWithTitle>
    </div>
  );
};

export default VenueGrowing;
