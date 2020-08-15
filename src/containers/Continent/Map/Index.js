import React, { useState, useEffect, useCallback, useContext } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import PropTypes from 'prop-types';
import MapInfoWindow from './MapInfoWindow';
import { InfoContext } from '../../../App/InfoContext';

const containerStyle = {
    width: '45vw',
    height: '80vh'
};

const MapContainer = ({ countries, countrySelected, citySelected }) => {
    const { info } = useContext(InfoContext);

    const [markers, setMarkers] = useState([]);
    const [selected, setSelected] = useState('');
    const [zoom, setZoom] = useState(3);

    const [center, setCenter] = useState({
        lat: countries[0].location.lat,
        lng: countries[0].location.long
    });

    useEffect(() => {
        const selectedLocation = Object.keys(citySelected).length !== 0 ? citySelected : countrySelected;
        const citiesAddedByUser = info.citiesAddedByUser;

        if (Object.keys(citySelected).length !== 0 || Object.keys(countrySelected).length !== 0) {
            if (Object.keys(citySelected).length !== 0) {
                setZoom(10); // adjust zoom level for City
            }
            else {
                setZoom(5); // adjust zoom level for Country
            }
            setCenter({
                lat: selectedLocation.location.lat,
                lng: selectedLocation.location.long
            })

            const isCityAdded = citiesAddedByUser.some(city => city.name === selectedLocation.name);

            setMarkers([{
                lat: selectedLocation.location ? selectedLocation.location.lat : 0,
                lng: selectedLocation.location ? selectedLocation.location.long : 0,
                id: selectedLocation.id,
                name: selectedLocation.name,
                population: selectedLocation.population,
                locationSelected: isCityAdded,
            }]);
        } else {
            setZoom(3);
            countries.forEach(item => {
                const isCityAdded = citiesAddedByUser.some(city => city.name === item.name);

                setMarkers(current => [...current, {
                    lat: item.location ? item.location.lat : 0,
                    lng: item.location ? item.location.long : 0,
                    id: item.id,
                    name: item.name,
                    population: item.population,
                    locationSelected: isCityAdded,
                }]);
            });
        }

    }, [countries, countrySelected, citySelected, info]);

    const onMarkerClick = marker => {
        setSelected(marker);
    };

    const onCloseClick = useCallback(() => {
        setSelected(null);
    }, []);

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyAm_mGNkn5Eyg09y4mHuZo5jHFICyKPBvo"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={zoom}
            >
                {markers.map((marker) => (
                    <Marker
                        key={marker.id}
                        position={{ lat: marker.lat, lng: marker.lng }}
                        onClick={(event) => onMarkerClick(marker, event)}
                    />
                ))}

                {selected ? (<MapInfoWindow selected={selected} onCloseClick={onCloseClick} />) : null}
            </GoogleMap>
        </LoadScript>
    )
}

MapContainer.propTypes = {
    countries: PropTypes.array.isRequired,
    countrySelected: PropTypes.object,
    citySelected: PropTypes.object,
}

export default React.memo(MapContainer);