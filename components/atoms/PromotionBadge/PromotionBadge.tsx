import Image from "next/image";

interface PromotionBadgeProps {
  promotions: {
    name: string;
    valid_until: string;
    description: string;
    code: string;
  }[];
}

export const PromotionBadge = ({ promotions }: PromotionBadgeProps) => {
  const promoCount = promotions.length;

  return (
    <div className="w-full mx-auto px-0 md:px-5 lg:px-12 xl:px-20 py-10">
      <div className="px-4 md:px-0 my-10 md:mt-4 max-w-screen-2xl mx-auto">
        <div className="inline-flex items-center bg-gradient-to-r from-[#FFC641] to-[#FF676A] rounded-full">
          <div className="relative flex-shrink-0 w-10 h-10 p-0 m-0">
            <video
              src="/gifs/promotion_badge_gif.mp4"
              className="object-cover w-full h-full rounded-full"
              autoPlay
              loop
              muted
            />
          </div>
          <div className="flex items-center ml-2">
            {promoCount > 1 ? (
              <>
                <span className="text-white font-semibold ml-2">
                  Promo Available
                </span>
                <div className="flex items-center justify-center w-8 h-8 bg-white text-red-600 rounded-full ml-2 mr-8">
                  {promoCount}
                </div>
              </>
            ) : (
              <span className="text-white font-semibold ml-2 mr-8">
                {promoCount ? promotions[0].name : "No Promotions Available"}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
