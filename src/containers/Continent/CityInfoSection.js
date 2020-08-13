import React, { useContext, useEffect } from 'react';
import { MyContext } from '../../App';
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

const CityInfoSection = ({ cityInfo }) => {
    // const { localState } = useContext(MyContext);
    // const citySelected = localState.citySelected ? localState.citySelected : '';

    return (
        <Wrapper>
            <Text>City Selected: {cityInfo.name}</Text>
            <Text>Population: {cityInfo.population}</Text>
        </Wrapper>
    );
}

CityInfoSection.propTypes = {
    cityInfo: PropTypes.object.isRequired,
}

export default React.memo(CityInfoSection);