import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Grid, Wrapper, Text } from './styles'

const CountryInfoSection = ({ countryInfo }) => {
  const displayMultipleValue = useCallback(
    (data) => data && data.map((item) => item.name).join(', '),
    []
  )

  return (
    <Wrapper>
      <Grid>
        <Text>
          <span>Capital</span>
          <span>
            {countryInfo.capital ? countryInfo.capital.name : 'NA'}
          </span>
        </Text>
        <Text>
          <span>Population</span>
          <span>{countryInfo.population}</span>
        </Text>
        <Text>
          <span>Currencies</span>
          <span>{displayMultipleValue(countryInfo.currencies)} </span>
        </Text>
        <Text>
          <span>Languages</span>
          <span>{displayMultipleValue(countryInfo.languages)}</span>
        </Text>
      </Grid>
    </Wrapper>
  )
}

CountryInfoSection.propTypes = {
  countryInfo: PropTypes.object.isRequired,
}

export default React.memo(CountryInfoSection)
