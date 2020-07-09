import React from "react"
import styled from "styled-components"

const NewsDescriptionStyle = styled.p`
  text-align: center;
  font-size: 25px;
`

const NewsDescription = ({ postDescription }) => {
  return <NewsDescriptionStyle>{postDescription}</NewsDescriptionStyle>
}

export default NewsDescription
