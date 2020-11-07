import React from "react"
import { graphql } from "gatsby"
import { GlobalStyle, theme } from "../utils/theme"
import { ThemeProvider } from "styled-components"
import Navigation from "../sections/Navigation"
import Articles from "../blog/articles"
import { pageContent } from "../utils/pageContent"

const BlogPage = ({ data }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navigation buttons={pageContent.buttons.navButtons} />
        <Articles button1={pageContent.buttons.showPostButton} data={data} />
      </ThemeProvider>
    </>
  )
}

export const query = graphql`
  query MyQuery {
    allDatoCmsArticle {
      edges {
        node {
          title
          slug
          content
          thumbnail {
            url
          }
        }
      }
    }
  }
`

export default BlogPage
