import React, { useContext, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { MyContext } from '../../App';
import LoadingIndicator from '../../components/LoadingIndicator';
import useHttp from '../../hooks/http';
import SelectMenu from '../../components/SelectMenu/Index';
import SelectMenuCities from './SelectMenuCities';
import Wrapper from './Wrapper';
import ContinentInfoSection from './ContinentInfoSection';
import MapContainer from './Map/Index';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 2rem 0;
    height: auto;
`;

const Info = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: space-around;
`;

const InfoText = styled.div`
    margin-bottom: 1.5rem;
    font-weight: bold;
`;

const MapSection = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const Continent = () => {
    const { localState } = useContext(MyContext);
    const [countries, setCountries] = useState([]);
    const continentSelected = localStorage.getItem('continentSelected') ? JSON.parse(localStorage.getItem('continentSelected')) : localState.continentSelected;
    const [countrySelected, setCountrySelected] = useState({});
    const [citySelected, setCitySelected] = useState({});

    const url = 'https://api.everbase.co/graphql?apikey=your_key';
    const query = `{
        continents(where: {name: {eq: "${continentSelected.name}"}}) {
            id 
            name 
            population
            countries {
                id
                name
                location {
                    lat
                    long
                }
                population
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
        const countrySelected = selectedCountry ? selectedCountry : {};
        setCountrySelected(countrySelected);
        setCitySelected({});
    }, []);

    const onSetCurrentCity = useCallback(currentCity => {
        setCitySelected(currentCity);
    }, []);

    return (
        <Wrapper>
            {isLoading && <LoadingIndicator />}
            {error && <div className="no-result-text">No result!!!</div>}
            {!isLoading &&
                <Container>
                    <Info>
                        <ContinentInfoSection continentSelected={continentSelected} />
                        {countries.length > 0 &&
                            <>
                                <InfoText>
                                    Please choose your destination to explore
                        </InfoText>
                                <SelectMenu type='country' list={countries} onSelectChange={onCountrySelect} />
                                {Object.keys(countrySelected).length !== 0 &&
                                    < SelectMenuCities countrySelected={countrySelected} setCurrentCity={onSetCurrentCity} />
                                }
                            </>
                        }
                    </Info>
                    {countries.length > 0 && <MapSection>
                        <MapContainer countries={countries} countrySelected={countrySelected} citySelected={citySelected} />
                        Click on red marker on map to add city to your travel plan.
                    </MapSection>}
                    {
                        countries.length === 0 &&
                        <MapSection>Map is temporarily not available</MapSection>
                    }
                </Container>
            }
        </Wrapper>
    );
}

export default Continent;