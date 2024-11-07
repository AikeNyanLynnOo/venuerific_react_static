import { ReactNode, useMemo } from "react";
import { twMerge } from "tailwind-merge";

interface ResponsiveGridProps {
  className?: string;
  children?: ReactNode;
}

export const ResponsiveGrid = ({
  className,
  children,
}: ResponsiveGridProps) => {
  const gridContainerClasses = useMemo(
    () =>
      twMerge(
        "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
        className,
      ),
    [className],
  );

  return (
    <div className={gridContainerClasses}>
      {/* {children ||
        DUMMY_GRID_ITEMS.map((gridItem, index) => (
          <div key={index} className="bg-gray-200 p-4">
            {gridItem}
          </div>
        ))} */}
      {children}
    </div>
  );
};
