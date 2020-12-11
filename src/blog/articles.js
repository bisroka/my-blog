import React from "react"
import News from "../Components/News"
import styled from 'styled-components'
import FooterSection from "../sections/footerSection"
import {pageContent} from "../utils/pageContent"
import { StyledHeader, StyledSection, StyledWrapper, } from "../Components/styled-components/index.styledComponents"

const StyledArticlesPage = styled.main`
  min-height:100vh;
`

const Articles = ({ data, button1 }) => {
  const articles = data.allDatoCmsArticle.edges
  const news = articles.map(article => (
    <News
      key={article.node.title}
      button={button1}
      postTitle={article.node.title}
      postDescription={article.node.content}
      thumbnail={article.node.thumbnail}
      link={article.node.slug}
    />
  ))
  return (
    <>
      <StyledSection articles>
        <StyledArticlesPage>
          <StyledWrapper column>
            <StyledHeader>Co u mnie słychać</StyledHeader>
            <StyledWrapper>
              {news}
            </StyledWrapper>
            </StyledWrapper>
        </StyledArticlesPage>
          <FooterSection footerContent={pageContent.footer.footerContent} />
      </StyledSection>
    </>
  )
}

export default Articles

// export const query = graphql`
//   query fetchArticle($slug: String) {
//     article: datoCmsArticle(slug: { eq: $slug }) {
//       title
//       slug
//       content
//       thumbnail {
//         url
//       }
//     }
//   }
// `
