import React from "react"
import styled from "styled-components"

const HelloContainer = styled.div`
  padding: 5vh 2vh 0;
  width: 70%;
  display: flex;
  flex-direction: row;
`
const TriangleImg = styled.img`
  display: block;
  width: 25px;
  height: 25px;
  margin-top: 1vh;
`

const HelloParagraph = styled.p`
  margin: 0;
  padding: 0;
  display: block;
  font-size: 39px;
`

const Hello = ({ header, img }) => {
  return (
    <HelloContainer>
      <TriangleImg src={img}></TriangleImg>
      <HelloParagraph>{header}</HelloParagraph>
    </HelloContainer>
  )
}

export default Hello
