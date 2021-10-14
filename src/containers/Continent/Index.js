import React, { useContext, useState, useEffect, useCallback } from "react";
import { InfoContext } from "app/InfoContext";
import LoadingIndicator from "components/LoadingIndicator";
import useHttp from "hooks/http";
import SelectMenu from "components/SelectMenu";
import SelectMenuCities from "./SelectMenuCities";
import Wrapper from "./styles";
import ContinentInfoSection from "./Cards/ContinentInfoSection";
import MapContainer from "./Map";
import { Container, MapSection, Info, InfoText } from "./styles";

const Continent = () => {
  const { info } = useContext(InfoContext);
  const [countries, setCountries] = useState([]);
  const continentSelected = info.continentSelected;
  const [countrySelected, setCountrySelected] = useState({});
  const [citySelected, setCitySelected] = useState({});

  const url = "https://api.everbase.co/graphql?apikey=your_key";
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

  const onCountrySelect = useCallback((selectedCountry) => {
    const countrySelected = selectedCountry ? selectedCountry : {};
    setCountrySelected(countrySelected);
    setCitySelected({});
  }, []);

  const onSetCurrentCity = useCallback((currentCity) => {
    setCitySelected(currentCity);
  }, []);

  return (
    <Wrapper>
      {isLoading && <LoadingIndicator />}
      {error && <div className="no-result-text">No result!!!</div>}
      {!isLoading && (
        <Container>
          <Info>
            <ContinentInfoSection continentSelected={continentSelected} />
            {countries.length > 0 && (
              <>
                <InfoText>Please choose your destination to explore</InfoText>
                <SelectMenu
                  type="country"
                  list={countries}
                  onSelectChange={onCountrySelect}
                />
                {Object.keys(countrySelected).length !== 0 && (
                  <SelectMenuCities
                    countrySelected={countrySelected}
                    setCurrentCity={onSetCurrentCity}
                  />
                )}
              </>
            )}
          </Info>
          {countries.length > 0 && (
            <MapSection>
              <p>Click the red markers on map to add city to your travel plan.</p>
              <MapContainer
                countries={countries}
                countrySelected={countrySelected}
                citySelected={citySelected}
              />
            </MapSection>
          )}
          {countries.length === 0 && (
            <MapSection>Map is temporarily not available</MapSection>
          )}
        </Container>
      )}
    </Wrapper>
  );
};

export default Continent;
