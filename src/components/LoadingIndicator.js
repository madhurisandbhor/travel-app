import React from 'react';
import styled from 'styled-components';

const Loader = styled.div`
   text-align :center;
`;

const Circle = styled.i`
   color: ${props => props.theme.palette.primary.main};
`;

const LoadingIndicator = () => (
    <Loader data-testid="loader">
        <Circle className="fas fa-circle-notch fa-2x fa-spin"></Circle>
    </Loader>
);

export default LoadingIndicator;