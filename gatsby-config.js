const autoprefixer = require('autoprefixer');

module.exports = {
  // siteMetadata: {
  //   title: `GatsbyJS`,
  //   description: `A fantastic new static site generator.`,
  //   siteUrl: `https://www.gatsbyjs.org`
  // },  
  plugins: [
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [
          autoprefixer()
        ],
        precision: 8
      }
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-110088221-1"
      }
    }
  ]
}