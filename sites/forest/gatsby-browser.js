import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from './src/components/Wrapper'

// wrapRootElement is part of the Gatsby API, and thus cannot be the default export
/* eslint-disable import/prefer-default-export, react/jsx-filename-extension */
export const wrapRootElement = ({ element }) => (
  <Wrapper>
    {element}
  </Wrapper>
)

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
}