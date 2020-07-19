import React from "react"
import styled from "styled-components"

import Subheader from "../Components/Subheader"
import Paragraph from "../Components/Paragraph"

import Button from "../Components/Button"

import { device } from "../utils/device"

const NewsStyled = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75vw;
  background-color: white;
  margin: 5vh 1vw;
  @media ${device.laptop} {
    width: 25vw;
  }
`
const NewsImgStyle = styled.img`
  display: block;
  background: grey;
  width: 75vw;
  height: 50vw;
  @media ${device.laptop} {
    width: 25vw;
    height: 25vw;
  }
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
