import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import React, { useEffect, useRef, useState } from "react";

type ChipGroupProps = {
  chips: string[];
  initiallyVisible?: number;
};

const ExpandableChipGroup: React.FC<ChipGroupProps> = ({ chips }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [visibleChips, setVisibleChips] = useState<number>(2); // Show at least 2 chips initially
  const chipContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateVisibleChips = () => {
      if (chipContainerRef.current) {
        const containerWidth = chipContainerRef.current.clientWidth;
        let totalWidth = 0;
        let numberOfVisibleChips = 0;

        const chipElements = chipContainerRef.current.children;

        const minimumChips = 2; // Set this to at least 1 chip visible

        for (let i = 0; i < chipElements.length; i++) {
          const chipWidth = chipElements[i].clientWidth;

          totalWidth += chipWidth;

          if (
            totalWidth + 60 >
            containerWidth
            // numberOfVisibleChips >= minimumChips
          ) {
            // Stop when total width exceeds container width, and we ensure at least one chip is visible
            break;
          }
          numberOfVisibleChips++;
        }

        // setVisibleChips(Math.max(numberOfVisibleChips, minimumChips));
        setVisibleChips(numberOfVisibleChips);
      }
    };

    // Initial calculation on mount
    calculateVisibleChips();

    // Recalculate on window resize
    window.addEventListener("resize", calculateVisibleChips);

    return () => window.removeEventListener("resize", calculateVisibleChips);
  }, [chips]);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const hiddenChipsCount = chips.length - visibleChips;

  return (
    <div className="relative w-full">
      {/* Chip Container */}
      <div
        ref={chipContainerRef}
        className={`flex w-full justify-start gap-2 items-center flex-wrap overflow-hidden ${
          isExpanded ? "overflow-visible" : "overflow-hidden"
        }`}
        style={{ maxWidth: "100%" }}
      >
        {chips
          .slice(0, isExpanded ? chips.length : visibleChips)
          .map((chip, index) => (
            <Chip key={index} className="bg-primary-50" radius="sm">
              <span className="text-sm font-semibold leading-5 text-primary-700">
                {chip}
              </span>
            </Chip>
          ))}

        {/* Show "+X" Button */}
        {!isExpanded && hiddenChipsCount > 0 && (
          <Chip
            as={Button}
            className="bg-primary-50"
            radius="sm"
            onClick={handleToggle}
          >
            <span className="text-sm font-semibold leading-5 text-primary-700">
              +{hiddenChipsCount} More
            </span>
          </Chip>
        )}
        {/* Toggle Button */}
        {isExpanded && (
          <Chip
            as={Button}
            className="bg-primary-50"
            radius="sm"
            onClick={handleToggle}
          >
            <span className="text-sm font-semibold leading-5 text-primary-700">
              See Less
            </span>
          </Chip>
        )}
      </div>
    </div>
  );
};

export default ExpandableChipGroup;
