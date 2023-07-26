import React, { useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";

type props = {
  locations: any[];
};

function Map({ locations }: props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: String(process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ""), // Add your API key
  });
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker: any) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map: any) => {
    const bounds = new google.maps.LatLngBounds();
    if (locations.length > 0) {
      locations.forEach(({ position }) => bounds.extend(position));
    }
    map.fitBounds(bounds);
  };

  if (!isLoaded) return <>Cargando mapa</>;

  return (
    <GoogleMap
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{
        width: "100%",
        height: "85vh",
        borderRadius: "15px",
      }}
      zoom={2}
    >
      {locations && locations.length > 0
        ? locations.map(({ id, name, position }) => (
            <Marker
              key={id}
              position={position}
              onClick={() => {
                handleActiveMarker(id);
              }}
            >
              {activeMarker === id ? (
                <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                  <div>{name}</div>
                </InfoWindow>
              ) : null}
            </Marker>
          ))
        : null}
    </GoogleMap>
  );
}

export default Map;
