import styled from 'styled-components';

const Card = styled.div`
box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2);
transition: 0.3s;
flex: 0 0 22%;
border-radius: 0.5rem;
margin: 0.5rem;
height: 20.5rem;
display: flex;
flex-direction: column;
&:hover {
  box-shadow: 0 0.8rem 1.6rem 0 rgba(0, 0, 0, 0.2);
  transform: scale(1.02);
  cursor: pointer;
}`;

export default Card;