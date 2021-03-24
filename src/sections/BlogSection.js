import React, { useContext, useEffect } from "react"
import News from "../Components/News"
import Button from "../Components/Button"
import { StyledSection, StyledHeader, StyledWrapper } from "../Components/styled-components/index.styledComponents"
import { StoreContext } from "../store/StoreProvider"
import { VanillaTilt } from "../animations/tilt-3d/tilt"

const BlogSection = ({ pageContent, showPostButton, loadMorePostButton, data  }) => {
  const articles = data.allDatoCmsArticle.edges
  const { header  } = pageContent

  const { newsLimit, setNewsLimit} = useContext(StoreContext)

  const setNewsLimitHandler = e => {
    e.preventDefault()
    if(data.allDatoCmsArticle.edges.length > newsLimit ){
      setNewsLimit(
        newsLimit+3
      )
    }else {
      location.href = '/blog';
    }
  }

  useEffect(()=>{
    VanillaTilt.init(document.querySelectorAll(".news-card"), {
      max: 5,
      speed: 400
      })
  }, [newsLimit])

  const news = articles.map(article => (
    <News
      className="news-card"
      key={article.node.title}
      showPostButton={showPostButton}
      postTitle={article.node.title}
      postDescription={article.node.description}
      thumbnail={article.node.thumbnail}
      slug={article.node.slug}
      link={`/blog/${article.node.slug}/`}
    />
  )).slice(0, newsLimit)

  return (
    <StyledSection>
      <StyledWrapper blogSection className="blog-section" column>
        <StyledHeader>{header}</StyledHeader>
        <StyledWrapper blogSection> {news} </StyledWrapper>
        <Button className="button-hover" buttonText={loadMorePostButton} click={setNewsLimitHandler} />
      </StyledWrapper>
    </StyledSection>
  )
}
export default BlogSection
