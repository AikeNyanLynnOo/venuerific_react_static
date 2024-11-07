import { ReactNode } from "react";

interface LightResponsiveGridProps {
  className?: string;
  children?: ReactNode;
}

export const LightResponsiveGrid = ({
  className,
  children,
}: LightResponsiveGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {children}
    </div>
  );
};
