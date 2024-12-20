import { Button } from "@nextui-org/button";
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
    <div className="relative overflow-hidden rounded-lg shadow-lg min-w-full sm:min-w-[400px] w-fit max-w-[420px] h-[280px] sm:h-[250px]">
      <img src={imageUrl} alt={imgAlt} className="w-full h-full object-cover" />

      <div className="absolute top-6 left-4 md:hidden z-20 ">
        <img src={logoUrl} alt={logoAlt} className="h-7" />
      </div>

      <div
        className="
        absolute top-0 left-0 w-full 
        h-[calc(50%+4px)] md:h-[calc(33%+12px)] sm:h-[calc(50%+8px)] 
        backdrop-blur-md bg-gray-300 bg-opacity-30 
        flex flex-col text-left 
        p-6 md:pt-4 md:pb-4 md:pl-6 
        sm:pt-5 sm:pb-5 sm:pl-6 sm:pr-6 
        z-10 md:z-20"
      >
        <h3 className="text-white text-2xl md:text-3xl font-bold mt-11 md:mt-0">
          {eventTitle}
        </h3>
        <p className="text-white text-sm md:text-base md:pt-2">{eventDate}</p>
      </div>

      <div className="absolute bottom-4 left-4 right-4 p-4 bg-opacity-70 rounded-lg hidden md:flex items-center justify-between">
        <img src={logoUrl} alt={logoAlt} className="h-7" />
        <a href="/" rel="noopener noreferrer" target="_blank">
          <Button className="bg-primary-600 text-white py-2 px-4 rounded-lg shadow-md font-semibold">
            View Details
          </Button>
        </a>
      </div>

      <div className="absolute bottom-4 left-4 right-4 md:hidden">
        <a
          href="/"
          rel="noopener noreferrer"
          target="_blank"
          className="absolute bottom-4 left-4 right-4 md:hidden"
        >
          <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg shadow-md font-semibold">
            View Details
          </button>
        </a>
      </div>
    </div>
  );
};
