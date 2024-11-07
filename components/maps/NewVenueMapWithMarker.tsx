import { APIProvider, ControlPosition, Map } from "@vis.gl/react-google-maps";
import { Fragment, useState } from "react";

import { VenueMarkerCard } from "../atoms/VenueMarkerCard";

import { CustomMapControlClose } from "./CustomMapControlClose";
import { CustomZoomControl } from "./CustomZoomControl";
import { MarkerWithInfowindow } from "./MarkerWithInfoWindow";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;
const MAP_ID = process.env.NEXT_PUBLIC_MAP_ID as string;

interface NewVenueMapWithMarkers {
  venue_random_lat: number;
  venue_random_lng: number;
  data: any[];
  handleCloseMap: () => void;
}

export const NewVenueMapWithMarkers = ({
  venue_random_lat,
  venue_random_lng,
  data,
  handleCloseMap,
}: NewVenueMapWithMarkers) => {
  const [zoom, setZoom] = useState(13);
  const [currentMarker, setCurrentMarker] = useState<any>(null);
  const handleClickInfoWindowOpen = ({
    lat,
    lng,
  }: {
    lat: number;
    lng: number;
  }) => {
    setCurrentMarker({
      lat,
      lng,
    });
  };

  return (
    <APIProvider apiKey={API_KEY} libraries={["marker"]}>
      <Map
        disableDefaultUI
        defaultCenter={{ lat: venue_random_lat, lng: venue_random_lng }}
        gestureHandling={"greedy"}
        mapId={MAP_ID}
        zoom={zoom}
        onClick={() => {
          setCurrentMarker(null);
        }}
        onZoomChanged={(ev) => setZoom(ev.detail.zoom)}
      >
        {data &&
          data.length > 0 &&
          data.map(
            (
              {
                place_name,
                place_image,
                place_location_lat,
                place_location_lng,
                place_address,
                place_price,
                super_venue_live,
                is_new_venue,
                venue_url,
                max_no_of_guest_standing,
                max_no_of_guest_sitting,
                reviews_score,
                reviews_total,
              },
              index,
            ) => (
              <Fragment key={index}>
                <MarkerWithInfowindow
                  currentMarker={currentMarker}
                  handleClickInfoWindowOpen={handleClickInfoWindowOpen}
                  lat={Number(place_location_lat)}
                  lng={Number(place_location_lng)}
                >
                  <VenueMarkerCard
                    address={place_address}
                    is_new_venue={is_new_venue}
                    max_no_of_guest_sitting={max_no_of_guest_sitting}
                    max_no_of_guest_standing={max_no_of_guest_standing}
                    name={place_name}
                    photo={place_image}
                    reviews_score={reviews_score}
                    reviews_total={reviews_total}
                    super_venue_live={super_venue_live}
                    venue_price={place_price}
                    venue_url={venue_url}
                  />
                </MarkerWithInfowindow>
              </Fragment>
            ),
          )}
      </Map>

      {/* <ControlPanel /> */}
      <CustomZoomControl
        controlPosition={ControlPosition.TOP_RIGHT} // TOP_RIGHT
        setZoom={setZoom}
        zoom={zoom}
      />
      <CustomMapControlClose
        controlPosition={ControlPosition.TOP_LEFT}
        handleClose={handleCloseMap}
      />
    </APIProvider>
  );
};
