import React, { useContext, useState, useEffect, useCallback } from 'react';
// import { useHistory } from 'react-router-dom';
import { MyContext } from '../../App';
import LoadingIndicator from '../../components/LoadingIndicator';
import useHttp from '../../hooks/http';
import SelectMenu from '../../components/SelectMenu/Index';

const Continent = ({ countrySelected }) => {
    const { localState, setLocalState } = useContext(MyContext);
    const [cities, setCities] = useState([]);
    // const history = useHistory();
    // const countrySelected = localStorage.getItem('countrySelected') ? JSON.parse(localStorage.getItem('countrySelected')) : localState.countrySelected;
    // const [citySelected, setCitySelected] = useState('');

    const url = 'https://api.everbase.co/graphql?apikey=your_key';
    const query = `{
        countries(where: {name: {eq: "${countrySelected}"}}) {
            id
            name
            cities {
              id
              name
            }
          } 
    }`;

    const { isLoading, data, error } = useHttp(url, query);

    useEffect(() => {
        if (data !== null) {
            setCities(data.countries[0].cities);
        }
    }, [data]);

    const onCitySelect = useCallback(selectedCity => {
        const citySelected = selectedCity ? selectedCity.name : '';

        // setCitySelected(selectedCity.name);
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
            {!isLoading && cities.length > 0 && <SelectMenu type='city' list={cities} onSelectChange={onCitySelect} />}
            {!isLoading && cities.length === 0 && <div>No cities available</div>}
        </>
    );
}

export default React.memo(Continent);