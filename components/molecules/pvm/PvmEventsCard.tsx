interface PvmEventsCardProps {
  imageUrl: string;
  imgAlt: string;
  logoUrl: string;
  logoAlt: string;
  eventTitle: string;
  eventDate: string;
}

export const PvmEventsCard = ({
  imageUrl,
  imgAlt,
  logoUrl,
  logoAlt,
  eventTitle,
  eventDate,
}: PvmEventsCardProps) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg w-full max-w-[539px] h-[320px]">
      <img src={imageUrl} alt={imgAlt} className="w-full h-full object-cover" />

      <div className="absolute top-2 left-4 sm:hidden z-20">
        <img src={logoUrl} alt={logoAlt} className="h-7" />
      </div>

      <div className="absolute top-0 left-0 w-full h-[40%] sm:h-1/3 backdrop-blur-md bg-gray-300 bg-opacity-30 flex flex-col text-left p-4 z-10 sm:z-20">
        <h3 className="text-white text-2xl sm:text-3xl font-bold mt-10 sm:mt-0">{eventTitle}</h3> 
        <p className="text-white text-sm sm:text-base mt-3">{eventDate}</p>
      </div>

      <div className="absolute bottom-4 left-4 right-4 p-4 bg-opacity-70 rounded-lg flex items-center justify-between hidden sm:flex">
        <img src={logoUrl} alt={logoAlt} className="h-10" />
        <button className="bg-primary-600 text-white py-2 px-4 rounded shadow-md">
          View Venue
        </button>
      </div>

      <div className="absolute bottom-4 left-4 right-4 sm:hidden">
        <button className="w-full bg-primary-600 text-white py-2 px-4 rounded shadow-md">
          View Venue
        </button>
      </div>
    </div>
  );
};
