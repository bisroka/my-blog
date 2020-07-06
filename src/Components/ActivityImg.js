import React from "react"
import styled from "styled-components"

import calm from "../assets/images/calm.png"

const ActivityImgStyle = styled.img`
  display: block;
  height: 250px;
  margin: 3vh 0;
`

const ActivityImg = () => {
  return <ActivityImgStyle src={calm}></ActivityImgStyle>
}

export default ActivityImg
