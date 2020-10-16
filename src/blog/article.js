import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { device } from "../utils/device"
import {pageContent} from "../utils/pageContent"
import { GlobalStyle } from "../utils/theme"
import Navigation from "../sections/Navigation"
import FooterSection from "../sections/FooterSection"


const StyledWrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  min-height: 85vh;
  h1 {
    color: #6b6b6b;
    margin-top: 5vh;
    text-align: center;
    font-family: Charter;
    font-size: 48px;
    font-style: normal;
    font-weight: bold;
    letter-spacing: 1.2px;
  }
  article {
    margin: 0 5vw;
    font-family: sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: normal;
    @media ${device.laptop} {
      margin: 3vh 3vw;
    }
  }
`

const HeaderImg = styled.div`
  margin: 5vh auto 0;
  width: 100%;
  height: 30vh;
  background-attachment: fixed;
  background-size: cover;
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
      <Navigation buttons={pageContent.buttons.navButtons} />
      <StyledWrapper>
        <HeaderImg style={backgroundImage} />
        <h1>{article.title}</h1>
        <article>{article.content}</article>
      </StyledWrapper>
      <FooterSection footerContent={pageContent.footer.footerContent} />
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
