import React from "react"
import { graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import { device } from "../utils/device"
import {pageContent} from "../utils/pageContent"
import { GlobalStyle, theme } from "../utils/theme"
import Navigation from "../sections/Navigation"
import FooterSection from "../sections/footerSection"
import { StyledParagraph, StyledHeader, StyledSection } from "../Components/styled-components/index.styledComponents"


const StyledWrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  min-height: 85vh;
`

const HeaderImg = styled.div`
  padding: 5vh 0;
  width: 100%;
  height: 30vh;
  background-attachment: fixed;
  background-size: cover;
  align-self: flex-end;
  @media ${device.laptop} {
    height: 45vh;
  }
`

const Article = ({ data: { article } }) => {
  const backgroundImage = {
    backgroundImage: `url("${article.thumbnail.url}")`,
  }
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navigation buttons={pageContent.buttons.navButtons} />
        <StyledSection articleSection>
          <StyledHeader>{article.title}</StyledHeader>
          <HeaderImg style={backgroundImage} />
        </StyledSection>
        <StyledWrapper>
          <StyledParagraph>{article.content}</StyledParagraph>
        </StyledWrapper>
        <FooterSection footerContent={pageContent.footer.footerContent} />
      </ThemeProvider>
    </>
  )
}

export default Article

export const query = graphql`
  query fetchArticle($slug: String) {
    article: datoCmsArticle(slug: { eq: $slug }) {
      title
      slug
      content
      thumbnail {
        url
      }
    }
  }
`
