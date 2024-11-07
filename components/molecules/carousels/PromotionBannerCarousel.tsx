import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { CSSProperties, ReactNode } from "react";
import { Carousel } from "react-responsive-carousel";

interface PromotionBannerCarouselProps {
  children: ReactNode[] | any;
}
const arrowStyles: CSSProperties = {
  position: "absolute",
  zIndex: 2,
  top: "calc(50% - 15px)",
  width: 30,
  height: 30,
  cursor: "pointer",
};

export const PromotionBannerCarousel = ({
  children,
}: PromotionBannerCarouselProps) => {
  return (
    <Carousel
      stopOnHover
      swipeable
      className="relative"
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            className="bg-neutral-50 hover:backdrop-blur-md rounded-full text-center flex justify-center items-center absolute top-1/2 z-10 right-[10px] -translate-y-1/2 p-1"
            title={label}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onClickHandler();
            }}
          >
            <CaretRight color="#FFFFFF" size={20} />
          </button>
        )
      }
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            className="bg-neutral-50 hover:backdrop-blur-md rounded-full text-center flex justify-center items-center absolute top-1/2 z-10 left-[10px] -translate-y-1/2 p-1"
            title={label}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onClickHandler();
            }}
          >
            <CaretLeft color="#FFFFFF" size={20} />
          </button>
        )
      }
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        return (
          <li key={index} className="inline-block">
            <button
              aria-label={`Select slide ${index + 1}`}
              className={`${isSelected ? "dot selected" : "dot"}`}
              onClick={(e) => {
                e.preventDefault();
                onClickHandler(e);
              }}
              onKeyDown={(e) => {
                e.preventDefault();
                onClickHandler(e);
              }}
            />
          </li>
        );
      }}
      showStatus={false}
      showThumbs={false}
      useKeyboardArrows={false}
    >
      {children}
    </Carousel>
  );
};
