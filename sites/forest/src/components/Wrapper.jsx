import React from 'react'
import PropTypes from 'prop-types'
import ThemeProvider from 'gatsby-theme-leshen/src/components/ThemeProvider'
import { withTheme } from 'emotion-theming'
import { css, Global } from '@emotion/core'
import clearlinkTheme from '../../theme'
import 'typeface-montserrat'

const GlobalStyles = withTheme(({ theme }) => (
  <Global
    styles={css`
      main > section {
        position: relative;
        background-color: ${theme.colors.light.lighter.hex};

        &:nth-of-type(even) {
          background-color: ${theme.colors.light.base.hex};
        }
      }
    `}
  />
))

const Wrapper = ({ children }) => (
  <ThemeProvider theme={clearlinkTheme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)

Wrapper.defaultProps = {
  theme: {},
}

Wrapper.propTypes = {
  theme: PropTypes.object, // eslint-disable-line
  children: PropTypes.node.isRequired,
}

export default Wrapper
