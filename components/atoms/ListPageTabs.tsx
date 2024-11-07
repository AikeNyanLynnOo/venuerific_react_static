import { Divider } from "@nextui-org/divider";
import React, { useEffect, useRef, useState } from "react"; // Use this if you want to enable routing with React Router
import { Button } from "@nextui-org/button";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

import { clickLeft, clickRight } from "../molecules/HorizontalScrollList";

import { COLORS } from "@/styles/colors";

export interface Tab {
  title: string;
  link: string;
  icon_name: string;
  isActive?: boolean;
  divider?: boolean;
}
interface ListPageTabsProps {
  tabs?: Tab[];
  currentTab?: string;
}

export const ListPageTabs = ({ tabs, currentTab }: ListPageTabsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

      // set current scroll position
      setScrollPosition(scrollLeft);
      // Check if scrolled to the end
      setIsScrolledToEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  useEffect(() => {
    const scrollContainer = containerRef.current;

    // Listen for scroll events
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    // Clean up the event listener
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    console.log(scrollPosition);
  }, [scrollPosition]);

  return (
    <div className="flex relative">
      <div
        ref={containerRef}
        className="flex w-full border-b border-gray-100 overflow-x-scroll hide-scrollbar"
      >
        {scrollPosition > 170 && (
          <div className="absolute z-20 flex items-center left-[104px] top-0 bottom-0 h-[84px] bg-white px-3 md:px-5">
            <Button
              isIconOnly
              aria-label="arrow-right"
              className="bg-white border border-secondary-400 shadow-xl"
              color="secondary"
              radius="full"
              size="sm"
              variant="flat"
              onClick={() => clickLeft(containerRef)}
            >
              <CaretLeft
                color={COLORS.secondary[700]}
                size={18}
                weight="bold"
              />
            </Button>
          </div>
        )}

        {tabs &&
          tabs.length > 0 &&
          tabs.map(({ link, title, icon_name, divider }, index) => (
            <a
              key={index}
              className={`flex flex-nowrap w-auto flex-col text-center items-center space-y-1 py-4 px-5 text-xs font-semibold leading-4 relative ${index === 0 ? "sticky left-0 z-10 bg-white" : "z-1"} ${
                currentTab === icon_name ? "text-black" : "text-secondary-400"
              } hover:text-secondary-500`}
              href={link}
            >
              <img
                alt={title}
                className="h-7 w-7 object-cover"
                src={`/images/icons/event_type_icons/${icon_name}.svg`}
              />

              {/* <ImageWithErrorHandle
                    alt={title}
                    className="h-7 w-7 object-cover"
                    src={`/images/icons/event_type_icons/${icon_name}.svg`}
                    fallbackSrc="/images/icons/event_type_icons/all_venues.svg"
                    priority
                    height={50}
                    width={50}
                  /> */}
              <span className="text-sm block whitespace-nowrap">{title}</span>
              {currentTab === icon_name && (
                <span className="absolute bottom-0 inline-block w-3/5 h-1 bg-primary-600" />
              )}
              {divider && (
                <Divider
                  className="absolute right-0 top-1/2 -translate-y-1/2 h-3/5"
                  orientation="vertical"
                />
              )}
            </a>
          ))}
      </div>
      {!isScrolledToEnd && (
        <div className="sticky flex items-center right-0 top-0 bottom-0 h-[84px] bg-white px-3 md:px-5">
          <Button
            isIconOnly
            aria-label="arrow-right"
            className="bg-white border border-secondary-400 shadow-xl"
            color="secondary"
            radius="full"
            size="sm"
            variant="flat"
            onClick={() => clickRight(containerRef)}
          >
            <CaretRight color={COLORS.secondary[700]} size={18} weight="bold" />
          </Button>
        </div>
      )}
    </div>
  );
};
