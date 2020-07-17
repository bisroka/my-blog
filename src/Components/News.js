import React from "react"
import styled from "styled-components"

import Subheader from "../Components/Subheader"
import Paragraph from "../Components/Paragraph"

import Button from "../Components/Button"

const NewsStyled = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85vw;
  background-color: white;
  margin: 5vh 0;
`
const NewsImgStyle = styled.img`
  display: block;
  background: grey;
  width: 85vw;
  height: 85vw;
`

const News = ({ postTitle, postDescription, button }) => {
  return (
    <NewsStyled>
      <NewsImgStyle></NewsImgStyle>
      <Subheader subheader={postTitle} />
      <Paragraph paragraph={postDescription} section="news" />
      <Button button={button} />
    </NewsStyled>
  )
}

export default News
