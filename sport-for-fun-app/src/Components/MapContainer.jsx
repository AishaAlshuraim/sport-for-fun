
import React, { useState, useEffect } from "react";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

 import * as parData from  "./HomePage/CityDB.json";
import mapStyles from "./MapPage/mapStyles";
 

const REACT_APP_GOOGLE_KEY = "AIzaSyDYPz17vcUgHkZZ2qiyruUsIiMuFcRAGlg";








export default function MapContainer(props) {
  function Map() {
    const [selectedPark, setSelectedPark] = useState(null);

    useEffect(() => {
      const listener = e => {
        if (e.key === "Escape") {
          setSelectedPark(null);
        }
      };
      window.addEventListener("keydown", listener);

      return () => {
        window.removeEventListener("keydown", listener);
      };
    }, []);
  // lat: parData.default.cities[1].lan , lng: parData.default.cities[1].lat
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{
          lat: parData.default.cities[props.id].lan ,
          lng: parData.default.cities[props.id].lat
        }}
        defaultOptions={{ styles: mapStyles }}
      >

        {parData.default.cities[props.id].centers.map(park => (
          <Marker
             key={park.id}
            position={{
              lat: park.lan,
              lng: park.lat
            }}
            onClick={() => {
              setSelectedPark(park);
            }}
            icon={{
              url: `./assets/pinmap.png`,
               scaledSize: new window.google.maps.Size(30, 30)
            }}
          />
        ))}

        {selectedPark && (
          <InfoWindow
            onCloseClick={() => {
              setSelectedPark(null);
            }}
            position={{
              lat: selectedPark.lan,
              lng: selectedPark.lat
            }}
          >
            <div>
              <h4>{selectedPark.centerName}</h4>
              <p>{selectedPark.sportKind}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    );
  }
  const MapWrapped = withScriptjs(withGoogleMap(Map));
  console.log(props)
  return (
    <div className="MapContainer">
      <MapWrapped
    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
         REACT_APP_GOOGLE_KEY
               }`}
        loadingElement={<div style={{ height: `100%`  }} />}
        containerElement={<div style={{ height: `90vh`,    width: `60vw`}} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
