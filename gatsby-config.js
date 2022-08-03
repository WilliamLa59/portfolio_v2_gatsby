module.exports = {
  siteMetadata: {
    title: `William La`,
    siteUrl: `https://www.williamla.dev`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'React go',
        short_name: 'Reactgo',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/images/favicon/favicon-32x32.png',
      },
    },
    "gatsby-plugin-sass"
  ]
};