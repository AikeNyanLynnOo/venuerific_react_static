import { Button } from "@nextui-org/button";
import { CaretLeft } from "@phosphor-icons/react";
import { ControlPosition, MapControl } from "@vis.gl/react-google-maps";

import { COLORS } from "@/styles/colors";
import { fontVnf } from "@/config/fonts";

type CustomMapControlCloseProps = {
  controlPosition: ControlPosition;
  handleClose: () => void;
};

export const CustomMapControlClose = ({
  controlPosition,
  handleClose,
}: CustomMapControlCloseProps) => {
  return (
    <MapControl position={controlPosition}>
      <Button
        className={`rounded-lg w-fit bg-white min-w-10 px-3 shadow-lg mt-4 ml-4 text-base text-base font-normal leading-6 text-secondary-500 ${fontVnf.className}`}
        color="default"
        startContent={
          <CaretLeft color={COLORS.secondary[500]} size={18} weight="bold" />
        }
        variant="solid"
        onClick={handleClose}
      >
        Close Map
      </Button>
    </MapControl>
  );
};
