import React from "react"
import News from "../Components/News"
import { pageContent } from "../utils/pageContent"
import { FooterSection } from "../sections/index.sections.js"
import { StyledHeader, StyledSection, StyledWrapper, } from "../Components/styled-components/index.styledComponents"

// const StyledWrapper = styled.section`
//   max-width: 1200px;
//   margin: 5vh auto 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   flex-wrap: wrap;
//   @media ${device.laptop} {
//     flex-direction: row;
//     align-items: baseline;
//   }
// `

const Articles = ({ data, button1 }) => {
  const articles = data.allDatoCmsArticle.edges
  const news = articles.map(article => (
    <News
      key={article.node.title}
      button={button1}
      postTitle={article.node.title}
      postDescription={article.node.content}
      postImg={article.node.thumbnail}
      link={article.node.slug}
    />
  ))
  return (
    <>
      <StyledSection>
        <StyledWrapper column>
          <StyledHeader>Co u mnie słychać</StyledHeader>
          <StyledWrapper>
            {news}
          </StyledWrapper>
          </StyledWrapper>
          <FooterSection footerContent={pageContent.footer.footerContent} />
      </StyledSection>
    </>
  )
}

export default Articles
