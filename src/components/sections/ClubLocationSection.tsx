import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import {
  API_KEY,
  MAP_CENTER,
  MARKER_POSITION,
  MAP_STYLES,
  MARKER_STYLES,
} from "../../const/locationMap";
import "../../styles/components/sections/ClubLocationSection.scss";

export const ClubLocationSection = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY,
  });

  return (
    <section className="club-location">
      {isLoaded && (
        <GoogleMap
          mapContainerClassName="map-container"
          center={MAP_CENTER}
          zoom={16}
          options={{
            styles: MAP_STYLES,
            mapTypeControl: false,
            fullscreenControl: false,
            streetViewControl: false,
          }}
        >
          <Marker position={MARKER_POSITION} icon={MARKER_STYLES} />
        </GoogleMap>
      )}
    </section>
  );
};
