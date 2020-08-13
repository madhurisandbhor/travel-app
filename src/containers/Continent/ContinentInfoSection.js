import React, { useContext, useEffect } from 'react';
import { MyContext } from '../../App';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
`;

const Text = styled.div`
   margin-bottom: 1rem;
   &:first-child {
       font-weight: bold;
   }
`;

const ContinentInfoSection = ({ continentSelected }) => {
    return (
        <Wrapper>
            <Text>Geographical Information</Text>
            <Text>Continent : {continentSelected.name}</Text>
            <Text>Population: {continentSelected.population}</Text>
            <Text>Countries : {continentSelected.countries.length}</Text>
        </Wrapper>
    );
}

ContinentInfoSection.propTypes = {
    continentSelected: PropTypes.object.isRequired,
}

export default React.memo(ContinentInfoSection);