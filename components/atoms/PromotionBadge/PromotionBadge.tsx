interface PromotionBadgeProps {
  promotions: {
    name: string;
    valid_until: string;
    description: string;
    code: string;
  }[];
  handleClick: () => void;
}

export const PromotionBadge = ({
  promotions,
  handleClick,
}: PromotionBadgeProps) => {
  const promoCount = promotions.length;

  return (
    <button
      onClick={handleClick}
      className="relative inline-flex w-fit items-center bg-gradient-to-r from-[#FFC641] to-[#FF676A] rounded-full"
    >
      <div className="absolute flex-shrink-0 w-9 h-9 p-0 m-0 left-0 -translate-x-1">
        <div className="bg-white absolute rounded-full h-9 w-9 z-0 top-0 left-0" />
        <img
          alt="promotion-percent-gif"
          src="/images/animations/percent.gif"
          className="object-cover w-full h-full scale-125 rounded-full absolute top-0"
        />
      </div>
      <div className="flex items-center pl-10 pr-4 gap-x-3 py-0.5">
        {promoCount > 1 ? (
          <>
            <span className="text-white font-semibold">Promos Available</span>
            <span className="flex items-center justify-center w-6 h-6 font-semibold bg-white text-red-600 rounded-full">
              {promoCount}
            </span>
          </>
        ) : (
          <span className="text-white font-semibold">
            {promoCount ? promotions[0].name : "No Promotions Available"}
          </span>
        )}
      </div>
    </button>
  );
};
