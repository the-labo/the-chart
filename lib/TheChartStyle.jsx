'use strict'

import c from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { asStyleData } from 'the-component-util'
import { TheStyle } from 'the-style'

/** Style for TheChart */
const TheChartStyle = ({ className, id, options }) => (
  <TheStyle {...{ id }}
            className={c('the-chart-style', className)}
            styles={TheChartStyle.data(options)}
  />
)

TheChartStyle.displayName = 'TheChartStyle'
TheChartStyle.propTypes = {
  /** Style options */
  options: PropTypes.object,
}

TheChartStyle.defaultProps = {
  options: {},
}

TheChartStyle.data = (options) => {
  const { ThemeValues } = TheStyle
  const {
    dominantColor = ThemeValues.dominantColor,
  } = options
  return asStyleData('.the-chart', {
    '.the-chart-canvas': {

    },
    '&': {},
  })
}

export default TheChartStyle
