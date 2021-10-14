import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  padding: 2rem;
  box-shadow: 0 0.7rem 3rem -1rem rgba(150, 170, 180, 0.5);
  border-radius: 0.8rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Title = styled.div`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.palette.primary.dark};
  padding-bottom: 1rem;
  border-bottom: 0.1rem solid black;
`;
export const Grid3 = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, auto);
  grid-gap: 3rem;
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-gap: 1rem;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;

  & > span:first-child {
    font-size: 1.2rem;
    color: ${(props) => props.theme.palette.secondary.dark};
  }
  & > span:last-child {
    font-weight: bold;
    font-size: 1.4rem;
  }
`;
