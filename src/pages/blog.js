import React from "react"
import { graphql } from "gatsby"
import { GlobalStyle } from "../utils/theme"
import Navigation from "../sections/Navigation"
import Articles from "../blog/articles"
import { pageContent } from "../utils/pageContent"

const Blog = ({ data }) => {
  return (
    <>
      <GlobalStyle />
      <Navigation buttons={pageContent.buttons.navButtons} />
      <Articles button1={pageContent.buttons.showPostButton} data={data} />
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

export default Blog
