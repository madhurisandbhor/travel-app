import React, { useContext, useState, useEffect, useCallback } from 'react';
import { MyContext } from '../../App';
import LoadingIndicator from '../../components/LoadingIndicator';
import useHttp from '../../hooks/http';
import SelectMenu from '../../components/SelectMenu/Index';
import CountryInfoSection from './CountryInfoSection';
import CityInfoSection from './CityInfoSection';

const Continent = ({ countrySelected }) => {
    const { localState, setLocalState } = useContext(MyContext);
    const [cities, setCities] = useState([]);
    // const countrySelected = localStorage.getItem('countrySelected') ? JSON.parse(localStorage.getItem('countrySelected')) : localState.countrySelected;
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
        setLocalState({
            ...localState,
            citySelected: citySelected,
        });
        localStorage.setItem('citySelected', JSON.stringify(citySelected));

    }, [localState, setLocalState]);

    return (
        <>
            {isLoading && <LoadingIndicator />}
            {error && <div className="no-result-text">No result!!!</div>}
            {!isLoading && Object.keys(countryInfo).length !== 0 && <CountryInfoSection countryInfo={countryInfo}></CountryInfoSection>}
            {!isLoading && cities.length > 0 && <SelectMenu type='city' list={cities} onSelectChange={onCitySelect} />}
            {!isLoading && cities.length === 0 && <div style={{ margin: '1rem 0' }}>No cities available</div>}
            {!isLoading && Object.keys(cityInfo).length !== 0 && <CityInfoSection cityInfo={cityInfo} />}
        </>
    );
}

export default React.memo(Continent);