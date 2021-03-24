import React from "react"
import News from "../Components/News"
import styled from 'styled-components'
import FooterSection from "../sections/footerSection"
import {pageContent} from "../utils/pageContent"
import { theme } from "../utils/theme"

import { StyledHeader, StyledSection, StyledWrapper } from "../Components/styled-components/index.styledComponents"

const StyledArticlesPage = styled.main`
  min-height:100vh;
  background: ${theme.colors.white};
`

const Articles = ({ data, showPostButton }) => {
  const articles = data.allDatoCmsArticle.edges
  const news = articles.map(article => (
    <News
      className="news-card"
      key={article.node.title}
      showPostButton={showPostButton}
      postTitle={article.node.title}
      postDescription={article.node.description}
      thumbnail={article.node.thumbnail}
      link={article.node.slug}
    />
  ))
  return (
    <>
      <StyledSection articles>
        <StyledArticlesPage>
            <StyledHeader>{pageContent.blog.header}</StyledHeader>
          <StyledWrapper blogSection>
              {news}
            </StyledWrapper>
        </StyledArticlesPage>
          <FooterSection footerContent={pageContent.footer.footerContent} />
      </StyledSection>
    </>
  )
}

export default Articles