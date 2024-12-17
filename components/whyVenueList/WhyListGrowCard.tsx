import { Button } from "@nextui-org/button";
interface WhyListGrowCardProps {
  imageUrl: string;
  imgAlt: string;
  logoUrl: string;
  logoAlt: string;
}

export const WhyListGrowCard = ({
  imageUrl,
  imgAlt,
  logoUrl,
  logoAlt,
}: WhyListGrowCardProps) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg w-full max-w-[539px] h-[320px]">
      <img src={imageUrl} alt={imgAlt} className="w-full h-full object-cover" />

      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 sm:hidden">
        <img src={logoUrl} alt={logoAlt} className="h-10" />
      </div>

      <div className="absolute bottom-4 left-4 right-4 p-4 bg-opacity-70 rounded-lg flex items-center justify-between hidden sm:flex">
        <img src={logoUrl} alt={logoAlt} className="h-10" />
        <Button
          className="bg-primary-600 text-white py-2 px-4 rounded-lg shadow-md text-[16px]"
          variant="solid"
        >
          View Venue
        </Button>
      </div>

      <div className="absolute bottom-4 left-4 right-4 sm:hidden">
        <Button
          className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg shadow-md text-[16px]"
          variant="solid"
        >
          View Venue
        </Button>
      </div>
    </div>
  );
};
