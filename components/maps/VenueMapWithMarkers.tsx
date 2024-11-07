// import React, { useState, useCallback } from "react";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

// // Define the type for the map instance
// type MapInstance = google.maps.Map | null;

// const containerStyle = {
//   width: "100%",
//   height: "100%",
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523,
// };

// const VenueMapWithMarkers = () => {
//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string, // Store the API key in env
//   });

//   const [map, setMap] = useState<MapInstance>(null);

//   const onLoad = useCallback((map: google.maps.Map) => {
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);

//     setMap(map);
//   }, []);

//   const onUnmount = useCallback(() => {
//     setMap(null);
//   }, []);

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={10}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//     >
//       {/* Add child components such as markers, info windows, etc. */}
//     </GoogleMap>
//   ) : (
//     <></>
//   );
// };

// export default React.memo(VenueMapWithMarkers);
