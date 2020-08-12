import React from 'react';
import styled from 'styled-components';

const Loader = styled.div`
   text-align :center;
`;

const LoadingIndicator = () => (
    <Loader>
        <i className="fas fa-circle-notch fa-2x fa-spin" style={{ color: '#ff4500' }}></i>
    </Loader>
);

export default LoadingIndicator;