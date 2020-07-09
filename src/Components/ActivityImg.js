import React from "react"
import styled from "styled-components"

const ActivityImgStyle = styled.img`
  display: block;
  height: 250px;
  margin: 3vh 0;
`

const ActivityImg = ({ img }) => {
  return <ActivityImgStyle src={img}></ActivityImgStyle>
}

export default ActivityImg
