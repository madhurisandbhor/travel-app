import styled from 'styled-components';

const ContinentName = styled.div`
  color: ${props => props.theme.app.white};
  font-size: 1.4rem;
  font-weight: bold;
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index:1;
`;

export default ContinentName;