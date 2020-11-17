// const { API_TOKEN } = require("./apiToken");

module.exports = {
  siteMetadata: {
    title: `Blog-bansera`,
    description: `Opis strony Blog-bansera`,
    author: `@BartoszSroka`,
    siteUrl: `http://localhost:8000/`
  },
  plugins: [
    `gatsby-plugin-testing`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-page-transitions`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/index.js`),
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: "45cfd78ae2b7c74b052f4af5b25569" ,
        preview: false,
        disableLiveReload: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#D8E8F9`,
        theme_color: `#D8E8F9`,
        display: `minimal-ui`,
        icons:[
      {
          src:"static/icon-48x48.png",
          sizes:"48x48",
          type:"image/png"},
      {
          src:"static/icon-72x72.png",
          sizes:"72x72",
          type:"image/png"
      },
      {
          src:"static/icon-96x96.png",
          sizes:"96x96",
          type:"image/png"
      },
      {
          src:"static/icon-144x144.png",
          sizes:"144x144",
          type:"image/png"
      },
      {
          src:"static/icon-192x192.png",
          sizes:"192x192",
          type:"image/png"
      },
      {
          src:"static/icon-256x256.png",
          sizes:"256x256",
          type:"image/png"
      },
      {
          src:"static/icon-384x384.png",
          sizes:"384x384",
          type:"image/png"
      },
      {
          src:"static/icon-512x512.png",
          sizes:"512x512",
          type:"image/png"}
      ]},
    },
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: `/.js$/`,
        exclude: /(node modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: "gatsby-plugin-prettier-eslint",
      options: {
        prettier: {
          patterns: [
            // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
            "**/*.{css,scss,less}",
            "**/*.{json,json5}",
            "**/*.{graphql}",
            "**/*.{md,mdx}",
            "**/*.{html}",
            "**/*.{yaml,yml}",
          ],
        },
        eslint: {
          patterns: "**/*.{js,jsx,ts,tsx}",
          customOptions: {
            fix: true,
            cache: true,
          },
        },
      },
    },
  ],
}
