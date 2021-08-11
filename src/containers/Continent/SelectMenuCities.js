import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LoadingIndicator from 'components/LoadingIndicator';
import useHttp from 'hooks/http';
import SelectMenu from 'components/SelectMenu';
import CountryInfoSection from './Cards/CountryInfoSection';
import CityInfoSection from './Cards/CityInfoSection';

const NoCityText = styled.div`
  margin: 1rem 0;
`;

const SelectMenuCities = ({ countrySelected, setCurrentCity }) => {
    const [cities, setCities] = useState([]);
    const [countryInfo, setCountryInfo] = useState({});
    const [cityInfo, setCityInfo] = useState({});

    const url = 'https://api.everbase.co/graphql?apikey=your_key';
    const query = `{
        countries(where: {name: {eq: "${countrySelected.name}"}}) {
            id
            name
            capital {
                name
            }
            cities {
                id
                name
                location {
                  lat
                  long
                }
                population
            }
            languages {
                id
                name
            }
            currencies {
                id
                name
            }
            population
        } 
    }`;

    const { isLoading, data, error } = useHttp(url, query);

    useEffect(() => {
        if (data !== null) {
            setCities(data.countries[0].cities);
            setCountryInfo(data.countries[0]);
            setCityInfo('');
        }
    }, [data]);

    const onCitySelect = useCallback(selectedCity => {
        const citySelected = selectedCity ? selectedCity : {};
        setCityInfo(citySelected);
        setCurrentCity(citySelected);
    }, [setCurrentCity]);

    return (
        <>
            {isLoading && <LoadingIndicator />}
            {error && <div className="no-result-text">No result!!!</div>}
            {!isLoading &&
                <>
                    {Object.keys(countryInfo).length !== 0 && <CountryInfoSection countryInfo={countryInfo}></CountryInfoSection>}
                    {cities.length > 0 && <SelectMenu type='city' list={cities} onSelectChange={onCitySelect} />}
                    {cities.length === 0 && <NoCityText>No city available</NoCityText>}
                    {Object.keys(cityInfo).length !== 0 && <CityInfoSection cityInfo={cityInfo} />}
                </>
            }
        </>
    );
}

SelectMenuCities.propTypes = {
    countrySelected: PropTypes.object.isRequired,
    setCurrentCity: PropTypes.func.isRequired,
}

export default React.memo(SelectMenuCities);