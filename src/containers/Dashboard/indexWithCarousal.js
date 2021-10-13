import React, { useState, useEffect, useCallback, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import asia from 'images/Asia.jpg'
import africa from 'images/Africa.jpg'
import antarctica from 'images/Antarctica.jpg'
import europe from 'images/Europe.jpg'
import oceania from 'images/Oceania.jpg'
import north_america from 'images/North America.jpg'
import south_america from 'images/South America.jpg'
import LoadingIndicator from 'components/LoadingIndicator'
import { InfoContext } from 'app/InfoContext'
import { useHttp } from './useHttp'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    margin: '0 auto',
    height: '100%',
  },
  hidden: {
    visibility: 'hidden',
  },
  sliderContainer: {
    height: '100%',
    width: '100%',
    '& > .carousel-root': {
      height: '100%',
      '& > .carousel.carousel-slider': {
        height: '100%',
      },
    },
  },
  img: {
    width: '100%',
    height: 'calc(100vh - 5.5rem)',
    objectFit: 'cover',
  },
}))

const images = [
  asia,
  africa,
  antarctica,
  europe,
  north_america,
  oceania,
  south_america,
]

const Dashboard = () => {
  const classes = useStyles()
  const [continentsList, setContinentsList] = useState([])
  const [UpdatedcontinentsList, setUpdatedContinentsList] = useState([])
  const { info, setInfo } = useContext(InfoContext)
  const history = useHistory()
  const url = 'https://api.everbase.co/graphql?apikey=your_key'
  const query = `{
        continents {
            id
            name
            population
            countries {
              id
            }
        }
    }`

  const { isLoading, data, error } = useHttp(url, query)

  const getContinentInfo = useCallback(
    (continentSelected) => {
      setInfo({
        ...info,
        continentSelected: continentSelected,
      })
      history.push(`/continents/${continentSelected.name}`)
    },
    [history, info, setInfo]
  )

  useEffect(() => {
    if (data !== null) {
      setContinentsList(data.continents)
    }
  }, [data])

  useEffect(() => {
    //update list with respective images as images are not provided by backend
    const tempList = [...continentsList]
    const listWithImages = tempList.map((continent) => {
      images.length > 0 &&
        images.forEach((image) => {
          if (
            image.includes('/') &&
            image.split('/')[3].toString().includes(continent.name)
          )
            continent.img = image
        })
      return continent
    })
    setUpdatedContinentsList(listWithImages)
  }, [continentsList])

  return (
    <div className={classes.root}>
      {isLoading && <LoadingIndicator />}
      {error && <div>{error}</div>}
      {!isLoading && (
        <div className={classes.sliderContainer}>
          <Carousel
            autoPlay
            infiniteLoop
            animationHandler="fade"
            showThumbs={false}
            showArrows={true}
          >
            {UpdatedcontinentsList.length > 0 &&
              UpdatedcontinentsList.map((continent, index) => (
                <div
                  key={continent.id}
                  role="button"
                  onClick={(event) => getContinentInfo(continent, event)}
                >
                  <img
                    className={classes.img}
                    src={continent.img}
                    alt={continent.name}
                  />
                  <div className="legend">{continent.name}</div>
                </div>
              ))}
          </Carousel>
        </div>
      )}
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
