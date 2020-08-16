import styled from 'styled-components';

const ContinentName = styled.div`
  color: ${props => props.theme.app.white};
  font-size: 2rem;
  font-weight: bold;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 600;
`;

export default ContinentName;