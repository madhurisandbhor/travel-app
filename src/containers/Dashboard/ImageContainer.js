import styled from 'styled-components';

const ImageContainer = styled.div`
  background-image: url(${props => props.image});
  height: 100%;
  width: 100%;
  background-size: cover;
  cursor: pointer;
  // filter: brightness(90%);
`;

export default ImageContainer;