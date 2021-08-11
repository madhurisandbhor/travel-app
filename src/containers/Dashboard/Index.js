import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import asia from 'images/Asia.jpg';
import africa from 'images/Africa.jpg';
import antarctica from 'images/Antarctica.jpg';
import europe from 'images/Europe.jpg';
import oceania from 'images/Oceania.jpg';
import north_america from 'images/North America.jpg';
import south_america from 'images/South America.jpg';
import ContinentName from './ContinentName';
import ImageContainer from './ImageContainer';
import LoadingIndicator from 'components/LoadingIndicator';
import { InfoContext } from 'app/InfoContext';
import { useHttp } from './useHttp';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin: '0 auto',
        height: '45rem'
    },
    message: {
        margin: '1.5rem 0',
        textAlign: 'center',
    },
    hidden: {
        visibility: 'hidden',
    },
    sliderContainer: {
        height: '44rem',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center'
    },
    menu: {
        position: 'absolute',
        left: 0,
        zIndex: 500,
        width: '100%',
        bottom: 0,
    },
    label: {
        cursor: 'pointer',
        display: 'inline-block',
        width: '1.6rem',
        height: '1.6rem',
        background: theme.app.white,
        borderRadius: '5rem',
        margin: '0 .2rem 1rem',
        '&:hover': {
            background: theme.palette.primary.main,
        }
    },
    // slide: {
    //     position: 'absolute',
    //     top: 0,
    //     left: '100%',
    //     zIndex: 10,
    //     backgroundPosition: '50% 50%',
    //     transition: 'left 0s .75s',
    // },
    // TODO: fix syntax issue with sibling
    // '@global': {
    //     '[id^="slide"]:checked ~$slide': {
    //         left: 0,
    //         zIndex: 100,
    //         transition: 'left .65s ease-out',
    //     }
    // },
}));

const images = [asia, africa, antarctica, europe, north_america, oceania, south_america];

const Dashboard = () => {
    const classes = useStyles();
    const [continentsList, setContinentsList] = useState([]);
    const [UpdatedcontinentsList, setUpdatedContinentsList] = useState([]);
    const [selected, setSelected] = useState(0);
    const { info, setInfo } = useContext(InfoContext);
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
        setInfo({
            ...info,
            continentSelected: continentSelected,
        });
        history.push(`/continents/${continentSelected.name}`);
    }, [history, info, setInfo]);

    const onRadioInput = index => {
        setSelected(index);
    };

    useEffect(() => {
        if (data !== null) {
            setContinentsList(data.continents);
        }
    }, [data]);

    useEffect(() => {
        //update list with respective images as images are not provided by backend
        const tempList = [...continentsList];
        const listWithImages = tempList.map(continent => {
            images.length > 0 && images.forEach(image => {
                    if (image.includes('/') && image.split('/')[3].toString().includes(continent.name))
                        continent.img = image;
            });
            return continent;
        });
        setUpdatedContinentsList(listWithImages);
    }, [continentsList]);

    return (
        <div className={classes.root}>
            {isLoading && <LoadingIndicator />}
            {error && <div>{error}</div>}
            {!isLoading &&
                <>
                    <div className={classes.sliderContainer}>
                        <div className={classes.menu}>
                            {UpdatedcontinentsList.length > 0 && UpdatedcontinentsList.map((continent, index) =>
                                <label className={classes.label} key={continent.id} htmlFor={`slide-dot-${index + 1}`}></label>
                            )}
                        </div>
                        {UpdatedcontinentsList.length > 0 && UpdatedcontinentsList.map((continent, index) =>
                            <React.Fragment key={continent.id}>
                                <input
                                    id={`slide-dot-${index + 1}`}
                                    className={classes.hidden}
                                    type="radio"
                                    name="slides"
                                    onChange={e => onRadioInput(index, e)}
                                    checked={selected === index}
                                />
                                <ImageContainer
                                    className="slide"
                                    image={`'${continent.img}'`}
                                    onClick={(event) => getCountinentInfo(continent, event)}
                                >
                                    <ContinentName>{continent.name}</ContinentName>
                                </ImageContainer>
                            </React.Fragment>
                        )}
                    </div>
                    <h4 className={classes.message}>
                        Please click on the image to select a continent
                    </h4>
                </>}
        </div >
    );
};

Dashboard.propTypes = {};

export default Dashboard;