import React from "react"
import styled from "styled-components"

const NewsDescriptionStyle = styled.p`
  text-align: center;
  font-size: 25px;
`

const NewsDescription = () => {
  return (
    <NewsDescriptionStyle>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iste
      quasi possimus recusandae cum consequuntur beatae eaque, odio fugit soluta
      quia aut, dicta quae ea, ducimus voluptas odit dolorum! Cum?
    </NewsDescriptionStyle>
  )
}

export default NewsDescription
