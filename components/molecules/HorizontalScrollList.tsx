"use client";
import { Button } from "@nextui-org/button";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import dynamic from "next/dynamic";
import { Fragment, useRef } from "react";
import { WhyListGrowCard } from "../whyVenueList/WhyListGrowCard";
import { PvmEventsCard } from "../pvm/PvmEventsCard";

const DynamicCountryCard = dynamic(() =>
  import("@/components/molecules/CountryCard").then(
    (module) => module.CountryCard
  )
);
const DynamicInspirationCard = dynamic(() =>
  import("@/components/molecules/InspirationCard").then(
    (module) => module.InspirationCard
  )
);
const DynamicReviewCard = dynamic(() =>
  import("@/components/molecules/ReviewCard").then(
    (module) => module.ReviewCard
  )
);

interface HorizontalScrollListProps {
  cardType?: string;
  items?: any[];
  className?: string;
  Card?: any;
  [otherProp: string]: any;
}
export const clickLeft = (containerRef: any) => {
  if (containerRef.current) {
    containerRef.current.scrollTo({
      left: containerRef.current.scrollLeft - 300,
      top: 0,
      behavior: "smooth",
    });
  }
};

export const clickRight = (containerRef: any) => {
  if (containerRef.current) {
    containerRef.current.scrollTo({
      left: containerRef.current.scrollLeft + 300,
      top: 0,
      behavior: "smooth",
    });
  }
};

export const HorizontalScrollList = ({
  cardType,
  items,
  className,
}: HorizontalScrollListProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={className}>
      <div className="w-full overflow-y-hidden h-auto min-h-fit">
        <div
          ref={containerRef}
          className="overflow-x-auto h-fit flex flex-nowrap gap-x-4 pb-10 px-[2px] pt-5 no-scrollbar custom-scrollbar"
        >
          {items &&
            items.length > 0 &&
            items.map((item, index) => (
              <Fragment key={index}>
                {cardType === "blog" && (
                  <DynamicInspirationCard {...item.attributes} />
                )}
                {cardType === "country" && <DynamicCountryCard {...item} />}
                {cardType === "whyshouldchoose" && (
                  <DynamicReviewCard {...item} />
                )}
                {cardType === "whylistgrow" && <WhyListGrowCard {...item} />}
                {cardType === "pvmevents" && <PvmEventsCard {...item} />}
              </Fragment>
            ))}
        </div>
      </div>

      <div className="flex items-center gap-x-7 mt-4">
        <Button
          isIconOnly
          aria-label="arrow-left"
          className="bg-white border"
          color="secondary"
          radius="full"
          size="lg"
          variant="flat"
          onClick={() => clickLeft(containerRef)}
        >
          <ArrowLeft size={24} />
        </Button>
        <Button
          isIconOnly
          aria-label="arrow-right"
          className="bg-white border"
          color="secondary"
          radius="full"
          size="lg"
          variant="flat"
          onClick={() => clickRight(containerRef)}
        >
          <ArrowRight size={24} />
        </Button>
      </div>
    </div>
  );
};
