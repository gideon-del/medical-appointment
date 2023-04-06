import React, { useMemo, useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Map() {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const [userLocation, setUserLocation] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
  });

  // Gets the user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => console.error(error)
      );
    } else {
      console.error("Geolocation not supported.");
    }
  }, []);

  return !isLoaded ? (
    <div>Loading...</div>
  ) : (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={userLocation || { lat: 9.0456, lng: 7.5 }}
      zoom={15}
    >
      {userLocation && <Marker position={userLocation} />}
    </GoogleMap>
  );
}
