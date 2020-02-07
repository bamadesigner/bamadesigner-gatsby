require("dotenv").config({
  path: ".env",
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://bamadesigner.com/`,
    title: `Rachel Cherry: Sofware engineer. Accessibility advocate.`,
    shortTitle: `Rachel Cherry`,
    description: `Rachel Cherry is a freelance software engineer and consultant with over ten years experience in back and front-end web development and digital design. Rachel enjoys building an accessible, open web.`,
    authorTwitter: `bamadesigner`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-bamadesigner`,
        short_name: `bamadesigner`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#770000`,
        display: `minimal-ui`,
        icon: `src/images/favicons/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["./src/scss"],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `${process.env.GOOGLE_ANALYTICS_ID}`,
      },
    },
  ],
}
