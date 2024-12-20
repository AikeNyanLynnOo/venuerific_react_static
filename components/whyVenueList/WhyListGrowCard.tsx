interface WhyListGrowCardProps {
  id: number;
  imageUrl: string;
  imgAlt: string;
  logoUrl: string;
  logoAlt: string;
  ctaLink: string;
}

export const WhyListGrowCard = ({
  id,
  imageUrl,
  imgAlt,
  logoUrl,
  logoAlt,
  ctaLink,
}: WhyListGrowCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg min-w-full sm:min-w-[400px] w-fit max-w-[420px] h-[280px] sm:h-[250px]">
      <img src={imageUrl} alt={imgAlt} className="w-full h-full object-cover" />
      <img
        src={logoUrl}
        alt={logoAlt}
        className={`${id === 4 ? "h-8" : "h-7"} object-contain absolute top-4 left-1/2 transform -translate-x-1/2 sm:hidden`}
      />

      <div className="absolute bottom-4 left-4 right-4 px-4 sm:px-0 items-center justify-between hidden sm:flex">
        <img
          src={logoUrl}
          alt={logoAlt}
          className={`${id === 4 ? "h-8" : "h-7"} w-auto object-contain`}
        />
        <a href={ctaLink} rel="noopener noreferrer" target="_blank">
          <button className="bg-primary-600 text-white py-2 px-4 rounded-lg shadow-md font-semibold">
            View Venue
          </button>
        </a>
      </div>

      <a
        href={ctaLink}
        rel="noopener noreferrer"
        target="_blank"
        className="absolute bottom-4 left-4 right-4 sm:hidden"
      >
        <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg shadow-md font-semibold">
          View Venue
        </button>
      </a>
    </div>
  );
};
