import styled from 'styled-components';

const ImageContainer = styled.div`
  background-image: url(${props => props.image});
  height: 100%;
  width: 100%;
  filter: brightness(80%);
  background-size: cover;
`;

export default ImageContainer;