import React from "react"
import styled from "styled-components"

const NewsTitleStyle = styled.h3`
  margin: 3vh 0;
  font-size: 30px;
`

const NewsTitle = ({ postTitle }) => {
  return <NewsTitleStyle>{postTitle}</NewsTitleStyle>
}

export default NewsTitle
