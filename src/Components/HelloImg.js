import React from "react"
import styled from "styled-components"
import hi2 from "../assets/images/hi2.png"

const HiImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 340px;
  height: 340px;
`

const HelloImg = () => {
  return <HiImg src={hi2}></HiImg>
}

export default HelloImg
