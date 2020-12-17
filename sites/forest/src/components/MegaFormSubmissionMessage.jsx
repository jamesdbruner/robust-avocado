import React from 'react'

import { Phone } from 'emotion-icons/material'
import Typography from 'gatsby-theme-leshen/src/components/Typography'
import Button from 'gatsby-theme-leshen/src/components/Button'
import Link from 'gatsby-theme-leshen/src/components/Link'
import styled from '@emotion/styled'

import { useMapi } from 'gatsby-theme-leshen/src/context/mapi'

const SubmissionMessage = () => {
  const { rotatedNumber } = useMapi()

  return (
    <>
      <StyledWrapper>
        <Typography variant="h5">Your quote is ready!</Typography>
        <Typography variant="h6">Call now to secure the right price for you. Specialists are standing by!</Typography>
        <StyledLink
          to={`tel:${rotatedNumber}`}
          data-tracking="sticky-cta-bar__phone"
        >
          <StyledBarButton
            variant="hero"
            leftIcon={<Phone />}
          >
            Call: {rotatedNumber}
          </StyledBarButton>
        </StyledLink>
      </StyledWrapper>
    </>
  )
}

export default SubmissionMessage

const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`

const StyledBarButton = styled(Button)`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.xxs}`};

    .button-text {
      font-size: ${({ theme }) => theme.fonts.body.sm.size}px;
      font-weight: normal;
      margin: 0;
    }
  }
`

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: auto;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xxs};
  }
`
