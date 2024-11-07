import { Button, ButtonGroup } from "@nextui-org/button";
import { Minus, Plus } from "@phosphor-icons/react";
import { ControlPosition, MapControl } from "@vis.gl/react-google-maps";
import React from "react";

import { COLORS } from "@/styles/colors";

type CustomZoomControlProps = {
  controlPosition: ControlPosition;
  zoom: number;
  setZoom: (zoom: number) => void;
};

export const CustomZoomControl = ({
  controlPosition,
  zoom,
  setZoom,
}: CustomZoomControlProps) => {
  const handleZoomChange = (action: string) => {
    if (action === "decrease") {
      if (zoom > 3) {
        setZoom(zoom - 1);
      }

      return;
    }
    if (zoom < 18) {
      setZoom(zoom + 1);
    }
  };

  return (
    <MapControl position={controlPosition}>
      <ButtonGroup className="mt-4 mr-4 bg-white rounded-lg shadow-lg">
        <Button
          isIconOnly
          className="bg-white px-2"
          disabled={zoom === 3}
          onClick={() => handleZoomChange("decrease")}
        >
          <Minus color={COLORS.secondary[500]} size={18} weight="bold" />
        </Button>
        <Button isIconOnly className="bg-white px-2" disabled={zoom === 13}>
          <Plus
            color={COLORS.secondary[500]}
            size={18}
            weight="bold"
            onClick={() => handleZoomChange("increase")}
          />
        </Button>
      </ButtonGroup>
    </MapControl>
  );
};
