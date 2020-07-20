import React from "react"
import styled from "styled-components"
import Header from "../Components/Header"
import News from "../Components/News"

import Button from "../Components/Button"

import { device } from "../utils/device"

const BlogStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #4258b8;
`
const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
  }
`
const WrapperStyled = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Blog = ({ header, postTitle, postDescription, button1, button2 }) => {
  return (
    <BlogStyled>
      <WrapperStyled>
        <Header lightColor header={header} />
        <NewsWrapper>
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
        </NewsWrapper>

        <Button loadMore button={button2} />
      </WrapperStyled>
    </BlogStyled>
  )
}

export default Blog
