import React, { ReactNode, useMemo } from "react";
import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";

import { fontVnf } from "@/config/fonts";

interface MarkerWithInfoWindowProps {
  lat: number;
  lng: number;
  children?: ReactNode;
  handleClickInfoWindowOpen: ({
    lat,
    lng,
  }: {
    lat: number;
    lng: number;
  }) => void;
  currentMarker: any;
}

export const MarkerWithInfowindow = ({
  lat,
  lng,
  children,
  handleClickInfoWindowOpen,
  currentMarker,
}: MarkerWithInfoWindowProps) => {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const isOpen = useMemo(
    () =>
      currentMarker && currentMarker.lat === lat && currentMarker.lng === lng,
    [currentMarker],
  );

  return (
    <div className="bg-blue-100">
      <AdvancedMarker
        ref={markerRef}
        position={{ lat, lng }}
        title={"AdvancedMarker that opens an Infowindow when clicked."}
        onClick={() =>
          handleClickInfoWindowOpen({
            lat,
            lng,
          })
        }
      >
        <img
          alt="pin_img"
          className={`h-auto cursor-pointer ${isOpen ? "w-12" : "w-6"}`}
          src={`/images/icons/location_pin_${isOpen ? "active" : "default"}.svg`}
        />
      </AdvancedMarker>
      {isOpen && (
        <InfoWindow
          headerDisabled
          anchor={marker}
          className={`h-fit mx-0 hide-scrollbar ${fontVnf.className}`}
          // onCloseClick={() => setInfoWindowOpen(false)}
        >
          {children}
        </InfoWindow>
      )}
    </div>
  );
};
