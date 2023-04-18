import React, { useState, useEffect } from 'react'
import { GoogleMap, Marker, InfoWindow, useLoadScript } from '@react-google-maps/api'

const Map = () => {
  const [center, setCenter] = useState(null)
  const [hospitals, setHospitals] = useState([])
  const [selectedHospital, setSelectedHospital] = useState(null)
  const apiKey = import.meta.env.VITE_MAP_API_KEY

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries: ['places']
  })

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
        },
        (error) => {
          console.error(error)
        }
      )
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }, [])

  useEffect(() => {
    if (isLoaded && center) {
      const service = new window.google.maps.places.PlacesService(document.createElement('div'))
      service.nearbySearch({
        location: center,
        radius: 5000,
        type: 'hospital'
      }, (results, status) => {
        if (status === 'OK') {
          setHospitals(results)
        } else {
          console.error(status)
        }
      })
    }
  }, [isLoaded, center])

  const handleMarkerClick = (hospital) => {
    setSelectedHospital(hospital)
  }

  const handleCloseInfoWindow = () => {
    setSelectedHospital(null)
  }

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? (
    <div className="h-screen">
      <GoogleMap
        center={center}
        zoom={16}
        mapContainerClassName="h-full"
      >
        {center && (
          <Marker
            position={center}
            icon={{
              url: "https://www.pngkey.com/png/detail/145-1453194_boy-avatar-png-free-download-man-standing-icon.png",
              scaledSize: new window.google.maps.Size(30, 30)
            }}
          />
        )}

        {hospitals.map((hospital) => (
          <Marker
            key={hospital.place_id}
            position={{ lat: hospital.geometry.location.lat(), lng: hospital.geometry.location.lng() }}
            onClick={() => handleMarkerClick(hospital)}
            icon={{
              url: "https://cdn-icons-png.flaticon.com/512/4320/4320350.png",
              scaledSize: new window.google.maps.Size(30, 30)
            }}
          >
            <p>Hospital</p>
          </Marker>
        ))}

        {selectedHospital && (
          <InfoWindow
            position={{ lat: selectedHospital.geometry.location.lat(), lng: selectedHospital.geometry.location.lng() }}
            onCloseClick={handleCloseInfoWindow}
          >
            <div className="w-80">
              <h3 className="text-lg font-medium text-black mt-2 truncate w-72">{selectedHospital.name}</h3>
              <p className="text-gray-500 mt-2">{selectedHospital.vicinity}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  ) : <div>Loading...</div>
}

export default Map