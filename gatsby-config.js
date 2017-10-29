const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    // `gatsby-plugin-sass`
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [
          autoprefixer()
        ],
        precision: 8 // SASS default: 5
      }
    },
    `gatsby-plugin-netlify`
  ]
}