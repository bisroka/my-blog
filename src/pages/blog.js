import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { GlobalStyle, theme } from "../utils/theme"
import { ThemeProvider } from "styled-components"
import Navigation from "../sections/navigation"
import Articles from "../blog/articles"
import { pageContent } from "../utils/pageContent"
import StoreProvider from "../store/StoreProvider"
import { VanillaTilt } from "../animations/tilt-3d/tilt"

const BlogPage = ({ data }) => {
  useEffect(()=>{
    VanillaTilt.init(document.querySelectorAll(".news-card"), {
      max: 5,
      speed: 400
      })
  }, [])

  return (
    <>
      <GlobalStyle />
      <StoreProvider>
        <ThemeProvider theme={theme}>
          <Navigation buttons={pageContent.buttons.navButtons} />
          <Articles button1={pageContent.buttons.showPostButton} data={data} />
        </ThemeProvider>
      </StoreProvider>
    </>
  )
}

export const query = graphql`
query MyQuery {
  allDatoCmsArticle {
    edges {
      node {
        body {
          value
        }
        id
        slug
        description
        title
        thumbnail {
          url
        }
      }
    }
  }
}
`

export default BlogPage
