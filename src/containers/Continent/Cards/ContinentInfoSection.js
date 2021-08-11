import React from 'react'
import PropTypes from 'prop-types'
import { Title, Grid3, Wrapper, Text } from './styles'

const ContinentInfoSection = ({ continentSelected }) => (
  <Wrapper>
    <Title>Geographical Information</Title>
    <Grid3>
      <Text>
        <span>Continent </span>
        <span>{continentSelected.name}</span>
      </Text>
      <Text>
        <span>Population </span>
        <span>{continentSelected.population}</span>
      </Text>
      <Text>
        <span>Countries </span>
        <span>
          {continentSelected.countries && continentSelected.countries.length}
        </span>
      </Text>
    </Grid3>
  </Wrapper>
)

ContinentInfoSection.propTypes = {
  continentSelected: PropTypes.object.isRequired,
}

export default React.memo(ContinentInfoSection)
