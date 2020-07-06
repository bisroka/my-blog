import React from "react"
import styled from "styled-components"
import Header from "../Components/Header"
import News from "../Components/News"
import LoadMore from "../Components/LoadMore"

const BlogStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #4258b8;
`

const Blog = () => {
  return (
    <BlogStyled>
      <Header />
      <News />
      <News />
      <News />
      <LoadMore />
    </BlogStyled>
  )
}

export default Blog
