import React from "react"
import News from "../Components/News"
import Button from "../Components/Button"
import { StyledSection, StyledHeader, StyledWrapper } from "../Components/styled-components/index.styledComponents"
import { useEffect } from "react"

const BlogSection = ({ header, button1, button2, data, limit, click }) => {
  const articles = data.allDatoCmsArticle.edges
  
  const news = articles.map(article => (
    <News
      className="news-card"
      key={article.node.title}
      button={button1}
      postTitle={article.node.title}
      postDescription={article.node.description}
      thumbnail={article.node.thumbnail}
      slug={article.node.slug}
      link={`/blog/${article.node.slug}/`}
    />
  ))
  const newsToShow = news.slice(0, limit)
  return (
    <StyledSection>
      <StyledWrapper blogSection className="blog-section" column>
        <StyledHeader>{header}</StyledHeader>
        <StyledWrapper blogSection> {newsToShow} </StyledWrapper>
        <Button className="button-hover" button={button2} click={click} />
      </StyledWrapper>
    </StyledSection>
  )
}
export default BlogSection
