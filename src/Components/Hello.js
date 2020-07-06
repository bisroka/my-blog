import React from "react"
import styled from "styled-components"
import trangle from "../../src/assets/images/Polygon 1.png"

const HelloContainer = styled.div`
  padding-top: 5vh;
  width: 70%;
  display: flex;
  flex-direction: row;
`
const TriangleImg = styled.img`
  display: block;
  width: 25px;
  height: 25px;
`

const HelloParagraph = styled.p`
  margin: 0;
  padding: 0;
  display: block;
  font-size: 39px;
`

const Hello = () => {
  return (
    <HelloContainer>
      <TriangleImg src={trangle}></TriangleImg>
      <HelloParagraph>
        Witam Cię Na mojej stronie Mam nadzieję, Że znajdziesz dla siebie Coś
        ciekawego
      </HelloParagraph>
    </HelloContainer>
  )
}

export default Hello
