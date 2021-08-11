import styled from 'styled-components';

export default styled.div`
    margin: 1rem auto;
    width: 90%;
    height: 100%;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 2rem 0;
    height: auto;
`;

export const Info = styled.div`
    width: 40%;
    height: 100%;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-content: space-around;
`;

export const InfoText = styled.div`
    margin-bottom: 1.5rem;
    font-weight: bold;
    width: 80%;
`;

export const MapSection = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    padding: 0 1rem;
    flex-direction: column;
    align-items: center;
`;