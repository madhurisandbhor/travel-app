import React, { useContext, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { MyContext } from '../../App';
import LoadingIndicator from '../../components/LoadingIndicator';
import useHttp from '../../hooks/http';
import SelectMenu from '../../components/SelectMenu/Index';
import SelectMenuCities from './SelectMenuCities';
import Wrapper from './Wrapper';
import ContinentInfoSection from './ContinentInfoSection';
import CountryInfoSection from './CountryInfoSection';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 2rem 0;
    height: 30rem;
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
    const { localState, setLocalState } = useContext(MyContext);
    const [countries, setCountries] = useState([]);
    const continentSelected = localStorage.getItem('continentSelected') ? JSON.parse(localStorage.getItem('continentSelected')) : localState.continentSelected;
    const [countrySelected, setCountrySelected] = useState();

    const url = 'https://api.everbase.co/graphql?apikey=your_key';
    const query = `{
        continents(where: {name: {eq: "${continentSelected.name}"}}) {
            id 
            name 
            population
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
        setCountrySelected(selectedCountry);
        setLocalState({
            ...localState,
            countrySelected: selectedCountry,
        });
        localStorage.setItem('countrySelected', JSON.stringify(selectedCountry));

    }, [localState, setLocalState]);

    return (
        <Wrapper>
            {isLoading && <LoadingIndicator />}
            {error && <div className="no-result-text">No result!!!</div>}
            <Container>
                <Info>
                    <ContinentInfoSection continentSelected={continentSelected} />
                    {!isLoading && countries.length > 0 &&
                        <InfoText>
                            Please choose your destination to explore
                        </InfoText>
                    }
                    {!isLoading && countries.length > 0 && <SelectMenu type='country' list={countries} onSelectChange={onCountrySelect} />}
                    {!isLoading && countrySelected &&
                        <SelectMenuCities countrySelected={countrySelected} />
                    }
                </Info>
                <MapSection>Map will be loaded shortly</MapSection>
            </Container>
        </Wrapper>
    );
}

export default Continent;