import React from 'react'
import PropTypes from 'prop-types'
import { Header, Footer } from 'gatsby-theme-leshen'
import { Layout } from 'gatsby-theme-contentful'
import { graphql } from 'gatsby'

import primaryNavData from '../data/defaultPrimary'

const date = new Date()

const DefaultTemplate = ({ data }) => {
  const brandyList = [
    'disclaimer-authorizedretailer',
  ]
  const disclaimerList = brandyList
    .map(disclaimerId =>
      data.allBrandyDisclaimer.edges.find(
        ({ node }) => node.brandy_id === disclaimerId
      )
    )
    .filter(node => node)

  const footerDisclaimers = disclaimerList.map(({node}) => ({text: node.text, symbol: node.symbol}))

  return (
  <>
    <Layout
      data={data}
      header={
        <Header
          navData={primaryNavData}
        />
      }
      footer={
        <Footer
          // navData={footerNavData}
          disclaimers={footerDisclaimers}
          dark
          copyright={`©${date.getFullYear()}, Forest All Rights Reserved.`}
        />
      }
    />
  </>
)
}

DefaultTemplate.propTypes = {
  data: PropTypes.shape({}).isRequired,
}

export default DefaultTemplate

export const query = graphql`
  query DefaultTemplateQuery($id: String!) {
    contentfulPage(id: { eq: $id }) {
      ...LeshenPage
    }
    site {
      ...LeshenMetadata
    }
    allBrandyDisclaimer {
      edges {
        node {
          brandy_id
          text
          symbol
        }
      }
    }
  }
`
