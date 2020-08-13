import React, { useState, useEffect } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: space-between;
    padding: .8rem;
`;

const City = styled.b`
    margin-bottom: .5rem;
`;

const containerStyle = {
    width: '45vw',
    height: '80vh'
};

const MapContainer = ({ countries, countrySelected, citySelected }) => {
    const [markers, setMarkers] = useState([]);
    const [selected, setSelected] = useState(null);
    const [zoom, setZoom] = useState(3);
    const [center, setCenter] = useState({
        lat: countries[0].location.lat,
        lng: countries[0].location.long
    });

    useEffect(() => {
        const selectedLocation = Object.keys(citySelected).length !== 0 ? citySelected : countrySelected;

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

            setMarkers([{
                lat: selectedLocation.location ? selectedLocation.location.lat : 0,
                lng: selectedLocation.location ? selectedLocation.location.long : 0,
                id: selectedLocation.id,
                name: selectedLocation.name,
            }])
        } else {
            setZoom(3);
            countries.map(item =>
                setMarkers(current => [...current, {
                    lat: item.location ? item.location.lat : 0,
                    lng: item.location ? item.location.long : 0,
                    id: item.id,
                    name: item.name,
                }])
            );
        }

    }, [countries, countrySelected, citySelected]);

    const onMarkerClick = marker => {
        setSelected(marker);
    };

    const onCloseClick = () => {
        setSelected(null);
    }

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

                {selected ? (<InfoWindow
                    position={{ lat: selected.lat, lng: selected.lng }}
                    onCloseClick={onCloseClick}>
                    <InfoBox>
                        <City>{selected.name}</City>
                        <button>Add city to travel</button>
                    </InfoBox>
                </InfoWindow>) : null}
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