import React, { useContext, useState, useEffect, useCallback } from 'react';
// import { useHistory } from 'react-router-dom';
import { MyContext } from '../../App';
import LoadingIndicator from '../../components/LoadingIndicator';
import useHttp from '../../hooks/http';
import SelectMenu from '../../components/SelectMenu/Index';
import SelectMenuCities from './SelectMenuCities';
import Wrapper from './Wrapper';

const Continent = () => {
    const { localState, setLocalState } = useContext(MyContext);
    const [countries, setCountries] = useState([]);
    // const history = useHistory();
    const continentSelected = localStorage.getItem('continentSelected') ? JSON.parse(localStorage.getItem('continentSelected')) : localState.continentSelected;
    const [countrySelected, setCountrySelected] = useState('');

    const url = 'https://api.everbase.co/graphql?apikey=your_key';
    const query = `{
        continents(where: {name: {eq: "${continentSelected}"}}) {
            id
            countries {
                id
                name
            }
        }       
    }`;

    const { isLoading, data, error } = useHttp(url, query);

    useEffect(() => {
        if (data !== null) {
            setCountries(data.continents[0].countries);
        }
    }, [data]);

    const onCountrySelect = useCallback(selectedCountry => {
        const countrySelected = selectedCountry ? selectedCountry.name : '';

        setCountrySelected(countrySelected);
        setLocalState({
            ...localState,
            countrySelected: countrySelected,
        });
        localStorage.setItem('countrySelected', JSON.stringify(countrySelected));

    }, [localState, setLocalState]);

    useEffect(() => {
        if (data !== null) {
            setCountries(data.continents[0].countries);
        }
    }, [data]);

    return (
        <Wrapper>
            {isLoading && <LoadingIndicator />}
            {error && <div className="no-result-text">No result!!!</div>}
            {!isLoading && countries.length > 0 &&
                <div className="center-text">
                    Please choose your destination to explore
                </div>
            }
            {!isLoading && countries.length > 0 && <SelectMenu type='country' list={countries} onSelectChange={onCountrySelect} />}
            {!isLoading && countrySelected && <SelectMenuCities countrySelected={countrySelected} />}
        </Wrapper>
    );
}

export default Continent;