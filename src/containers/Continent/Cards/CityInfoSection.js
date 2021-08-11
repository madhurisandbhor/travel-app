import React from 'react'
import PropTypes from 'prop-types'
import {Wrapper, Text } from './styles'

const CityInfoSection = ({ cityInfo }) => (
  <Wrapper>
    <Text>
      <span>Population</span>
      <span>{cityInfo.population}</span>
    </Text>
  </Wrapper>
)

CityInfoSection.propTypes = {
  cityInfo: PropTypes.object.isRequired,
}

export default React.memo(CityInfoSection)
