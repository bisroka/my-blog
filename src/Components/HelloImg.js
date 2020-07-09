import React from "react"
import styled from "styled-components"

const HiImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 340px;
  height: 340px;
`

const HelloImg = ({ img }) => {
  return <HiImg src={img}></HiImg>
}

export default HelloImg
