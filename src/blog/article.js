import React from "react"
import { graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import { device } from "../utils/device"
import {pageContent} from "../utils/pageContent"
import { GlobalStyle, theme } from "../utils/theme"
import Navigation from "../sections/navigation"
import FooterSection from "../sections/footerSection"

import { StyledParagraph, StyledHeader, StyledSection } from "../Components/styled-components/index.styledComponents"
import News from "../Components/News"
import StoreProvider from "../store/StoreProvider"

import { StructuredText } from 'react-datocms';

const StyledWrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  min-height: 85vh;
  padding: 25px 20px;
  h1,h2,h3,h4,h5,h6, p, ul, ol, footer, code{
    color: ${theme.colors.gray};
  }
  a{
    text-decoration: underline;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: ${theme.fontFamily.header};
  }
  p, ul, ol{
    font-family: ${theme.fontFamily.paragraph};
  }
  blockquote{
    border-left: 15px solid ${theme.colors.primary};
    padding: 10px;
    footer{ 
      :before{
        content:"- "
      }
    font-family: ${theme.fontFamily.paragraph};
    font-weight: 200;
    font-style: italy;
  }
  }
`

const Article = ({ data: { article }  }) => {
  console.log(article)
  const backgroundImage = `${article.thumbnail.url ? article.thumbnail.url : ''}`
  return (
    <>
      <GlobalStyle />
      <StoreProvider>
        <ThemeProvider theme={theme}>
          <Navigation buttons={pageContent.buttons.navButtons} />
          <StyledSection articleSection backgroundImage={backgroundImage}>
            <StyledHeader articlePage className="outer">{article.title}</StyledHeader>
          </StyledSection>
          <StyledWrapper articleContent>
            <StructuredText 
            data={article.body} 
            renderInlineRecord={({ record }) => <a href={record.slug}>{record.title}</a>}
            />
          </StyledWrapper>
          <FooterSection footerContent={pageContent.footer.footerContent} />
        </ThemeProvider>
      </StoreProvider>
    </>
  )
}

export default Article

export const query = graphql`
  query fetchArticle($slug: String) {
    article: datoCmsArticle(slug: { eq: $slug }) {
      title
      slug
      body{
        value
        links{
          __typename
          ... on DatoCmsArticle {
            id: originalId
            title
            slug
          }
        }
      }
      thumbnail {
        url
      }
    }
  }
`
