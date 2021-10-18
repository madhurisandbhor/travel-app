import React, { useState, useEffect, useCallback, useContext } from "react";
import L from "leaflet";
import { TileLayer, Marker } from "react-leaflet";
import PropTypes from "prop-types";
import MapInfoWindow from "./MapInfoWindow";
import { InfoContext } from "app/InfoContext";
import "leaflet/dist/leaflet.css";
import { MapRoot } from "./styles";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = ({
  countries,
  countrySelected,
  citySelected,
  markers,
  setMarkerPosition,
  zoom,
  resetZoom,
}) => {
  const { info } = useContext(InfoContext);
  const [selected, setSelected] = useState("");

  const [map, setMap] = useState(null);

  const [center, setCenter] = useState({
    lat: countries[0].location.lat,
    lng: countries[0].location.long,
  });

  useEffect(() => {
    const selectedLocation =
      Object.keys(citySelected).length !== 0 ? citySelected : countrySelected;
    const citiesAddedByUser = info.citiesAddedByUser;

    if (
      Object.keys(citySelected).length !== 0 ||
      Object.keys(countrySelected).length !== 0
    ) {
      if (Object.keys(citySelected).length !== 0) {
        resetZoom(10); // adjust zoom level for City
      } else {
        resetZoom(5); // adjust zoom level for Country
      }
      setCenter({
        lat: selectedLocation.location.lat,
        lng: selectedLocation.location.long,
      });

      map.setView(
        {
          lat: selectedLocation.location.lat,
          lng: selectedLocation.location.long,
        },
        5
      );

      const isCityAdded = citiesAddedByUser.some(
        (city) => city.name === selectedLocation.name
      );

      setMarkerPosition([
        {
          lat: selectedLocation.location ? selectedLocation.location.lat : 0,
          lng: selectedLocation.location ? selectedLocation.location.long : 0,
          id: selectedLocation.id,
          name: selectedLocation.name,
          population: selectedLocation.population,
          locationSelected: isCityAdded,
        },
      ]);
    } else {
      resetZoom(3);
      countries.forEach((item) => {
        const isCityAdded = citiesAddedByUser.some(
          (city) => city.name === item.name
        );

        setMarkerPosition((current) => [
          ...current,
          {
            lat: item.location ? item.location.lat : 0,
            lng: item.location ? item.location.long : 0,
            id: item.id,
            name: item.name,
            population: item.population,
            locationSelected: isCityAdded,
          },
        ]);
      });
    }
  }, [countries, countrySelected, citySelected, info, map, setMarkerPosition, resetZoom]);

  const onMarkerClick = (marker, e) => {
    setSelected(marker);
  };

  const onCloseClick = useCallback(() => {
    setSelected(null);
  }, []);

  useEffect(()=>{
    if(!countrySelected.id && map){
      map.setView(
        {
          lat: countries[0].location.lat,
          lng: countries[0].location.long,
        },
        3
      );
    }
  },[countrySelected, map, countries])

  return (
    <MapRoot
      id="map"
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
      whenCreated={setMap}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        <Marker
          position={{ lat: marker.lat, lng: marker.lng }}
          eventHandlers={{
            click: (event) => onMarkerClick(marker, event),
          }}
          key={marker.name}
        >
          <MapInfoWindow selected={selected} onCloseClick={onCloseClick} />
        </Marker>
      ))}
    </MapRoot>
  );
};

MapComponent.propTypes = {
  countries: PropTypes.array.isRequired,
  countrySelected: PropTypes.object,
  citySelected: PropTypes.object,
  markers: PropTypes.array,
  setMarkerPosition: PropTypes.func,
  zoom: PropTypes.number,
  resetZoom: PropTypes.func,
};

export default React.memo(MapComponent);
