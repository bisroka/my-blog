import React from "react"
import styled from "styled-components"

import NewsImg from "../Components/NewsImg"
import NewsTitle from "../Components/NewsTitle"
import NewsDescription from "../Components/NewsDescription"
import NewsButton from "../Components/NewsButton"

const NewsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85vw;
  background-color: white;
  margin: 5vh 0;
`

const News = ({ postTitle, postDescription, button }) => {
  return (
    <NewsStyled>
      <NewsImg />
      <NewsTitle postTitle={postTitle} />
      <NewsDescription postDescription={postDescription} />
      <NewsButton button={button} />
    </NewsStyled>
  )
}

export default News
