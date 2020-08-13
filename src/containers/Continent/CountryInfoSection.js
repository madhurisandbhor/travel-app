import React, { useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    width: 100%;
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
`;

const Text = styled.div`
   margin-bottom: 1rem;
   &:first-child {
       font-weight: bold;
   }
`;

const FlexWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 1rem;
`;

const CountryInfoSection = ({ countryInfo }) => {
    const displayMultipleValue = useCallback(
        (data) => data &&
            data.map(item => item.name).join(', '), []);

    return (
        <Wrapper>
            <Text>Country Selected: {countryInfo.name}</Text>
            <Text>Capital: {countryInfo.capital ? countryInfo.capital.name : 'Not available'}</Text>
            <Text>Population: {countryInfo.population}</Text>
            <FlexWrapper>
                <span>Currencies: </span>
                {displayMultipleValue(countryInfo.currencies)}
            </FlexWrapper>
            <FlexWrapper>
                <span>Languages: </span>
                {displayMultipleValue(countryInfo.languages)}
            </FlexWrapper>
        </Wrapper>
    );
}

CountryInfoSection.propTypes = {
    countryInfo: PropTypes.object.isRequired,
}

export default React.memo(CountryInfoSection);