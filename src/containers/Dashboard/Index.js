import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import asia from '../../images/Asia1.jpg';
import Card from './Card';
import ContinentName from './ContinentName';
import ImageContainer from './ImageContainer';
import LoadingIndicator from '../../components/LoadingIndicator';
import { MyContext } from '../../App';
import useHttp from '../../hooks/http';

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const ContinentList = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const ContinentWrapper = styled.div`
    height: 100%;
    position: relative;
`;

const Dashboard = () => {
    const [continentsList, setContinentsList] = useState([]);
    const { localState, setLocalState } = useContext(MyContext);
    const history = useHistory();
    const url = 'https://api.everbase.co/graphql?apikey=your_key';
    const query = `{
        continents {
            id
            name
            population
            countries {
              id
            }
        }
    }`;

    const { isLoading, data, error } = useHttp(url, query);


    const getCountinentInfo = useCallback(continentSelected => {
        setLocalState({
            ...localState,
            continentSelected: continentSelected,
            citiesAddedByUser: localStorage.getItem('citiesAddedByUser') ? JSON.parse(localStorage.getItem('citiesAddedByUser')) : []
        });
        history.push(`/continents/${continentSelected.name}`);
        localStorage.setItem('continentSelected', JSON.stringify(continentSelected));
    }, [history, localState, setLocalState]);

    useEffect(() => {
        if (data !== null) {
            setContinentsList(data.continents);
        }
    }, [data]);

    return (
        <Wrapper>
            <h4 style={{ margin: '2rem 0', textAlign: 'center' }}>
                Please choose a continent to travel
                </h4>
            {isLoading && <LoadingIndicator />}
            {error && <div>{error}</div>}
            {!isLoading &&
                <ContinentList>
                    {continentsList.length > 0 && continentsList.map(item =>
                        <Card key={item.id} onClick={() => getCountinentInfo(item)}>
                            <ContinentWrapper>
                                <ImageContainer image={asia} />
                                <ContinentName>{item.name}</ContinentName>
                            </ContinentWrapper>
                        </Card>
                    )}
                </ContinentList>
            }
        </Wrapper>
    );
};

Dashboard.propTypes = {};

export default Dashboard;