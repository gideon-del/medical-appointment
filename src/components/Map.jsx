import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { GoogleMap, Marker, InfoWindow, useLoadScript } from '@react-google-maps/api'
import { AuthContext } from "../store/AuthContext";

const Map = () => {
  const [center, setCenter] = useState(null)
  const [hospitals, setHospitals] = useState([])
  const { selectedHospital, setSelectedHospital } = useContext(AuthContext);
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
              scaledSize: new window.google.maps.Size(35, 50)
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
              scaledSize: new window.google.maps.Size(45, 45)
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
              <div className="mt-2 flex justify-between items-center w-full">
                  <Link
                    to="/book-appointment"
                    className="bg-green-500 text-white text-center text-md py-2 px-4 rounded-lg hover:bg-green-600 w-full mr-2"
                  >
                    Select
                  </Link>
                <button 
                  className="bg-red-500 text-white text-md py-2 px-4 rounded-lg hover:bg-red-600 w-full ml-2" 
                  onClick={handleCloseInfoWindow}
                >
                  Close
                </button>
              </div>
            </div>
          </InfoWindow>
        
        )}
      </GoogleMap>
    </div>
  ) : <div className="flex flex-col h-[80vh] justify-center items-center">
        <svg aria-hidden="true" className="inline w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <p className="text-gray-500 mt-5 text-lg font-medium">Loading...</p>
      </div>
}

export default Map