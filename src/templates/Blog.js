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

const Blog = ({ header, postTitle, postDescription, button1, button2 }) => {
  return (
    <BlogStyled>
      <Header header={header} />
      <News
        button={button1}
        postTitle={postTitle}
        postDescription={postDescription}
      />
      <News
        button={button1}
        postTitle={postTitle}
        postDescription={postDescription}
      />
      <News
        button={button1}
        postTitle={postTitle}
        postDescription={postDescription}
      />
      <LoadMore button={button2} />
    </BlogStyled>
  )
}

export default Blog
