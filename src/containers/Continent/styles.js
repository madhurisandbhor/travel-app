import styled from "styled-components";

export default styled.div`
  width: 100%;
  min-height: 100vh;
  background: white;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  width: 40%;
  height: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

export const InfoText = styled.div`
  margin-bottom: 1.5rem;
  font-weight: bold;
  width: 100%;
`;

export const MapSection = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  padding: 0 1rem;
  flex-direction: column;
  align-items: center;
  & > p {
    font-size: 1.4rem;
    margin: 1rem;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
