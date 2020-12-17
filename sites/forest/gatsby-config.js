require('dotenv').config({
  path: `${__dirname}/.env`,
})

const brandyChannelURLs = require("./src/data/brandyChannelURLs");

const config = {
  brandToken: 'TND',
  mapiBrandToken: 'DN',
  siteName: 'Forest',
  alternateName: 'forest',
  siteURL: 'https://www.leshen-forest.com', // no trailing slash
  defaultTitleTemplate: '',
  defaultPhone: '8774016561',
  defaultPromoCode: 83242,
  removeTrailingSlashes: true,
}

// The gatsby-plugin-sitemap requires "Url" to be capital case in siteMetadata
module.exports = {
  siteMetadata: { ...config, siteUrl: config.siteURL },
  plugins: [
    {
      resolve: 'gatsby-theme-forest',
      options: config,
    },
    {
      resolve: 'gatsby-theme-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        host: process.env.CONTENTFUL_HOST,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        environment: process.env.CONTENTFUL_ENVIRONMENT_ID,
        forceFullSync: true,
      },
    },
    {
      resolve: 'gatsby-source-brandy',
      options: {
        brandToken: config.brandToken,
        brandyChannelURLs
      },
    }
  ],
}
