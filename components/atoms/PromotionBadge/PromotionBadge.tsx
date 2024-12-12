import Image from "next/image";

interface PromotionBadgeProps {
  promotions: {
    name: string;
    valid_until: string;
    description: string;
    code: string;
  }[];
  handleClick?: () => void;
}

export const PromotionBadge = ({
  promotions,
  handleClick,
}: PromotionBadgeProps) => {
  const promoCount = promotions.length;

  return (
    <button
      onClick={handleClick}
      className="inline-flex w-fit items-center bg-gradient-to-r from-[#FFC641] to-[#FF676A] rounded-full"
    >
      <div className="relative flex-shrink-0 w-8 h-8 p-0 m-0">
        <div className="bg-white rounded-full h-8 w-8 z-0 top-0 left-0 -translate-x-1 " />
        <img
          src="/images/animations/percent.gif"
          className="object-cover w-full h-full rounded-full absolute top-0"
        />
      </div>
      <div className="flex items-center pl-1 pr-4 gap-x-3">
        {promoCount > 1 ? (
          <>
            <span className="text-white font-semibold">Promo Available</span>
            <span className="flex items-center justify-center w-6 h-6 font-semibold bg-white text-danger-500 rounded-full">
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
