import React from "react"
import styled from "styled-components"
import { device } from "../utils/device"

const ActivityStyled = styled.article`
  width: 85%;
  margin: 5vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ActivityDescriptionStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3vh;
  width: 100%;
  min-height: 280px;
  text-align: center;
  font-size: 25px;
  color: white;
  background-color: #4258b8;
  border-radius: 38px;
  @media ${device.tablet} {
    padding: 5vh 5vh;
    max-width: 50vh;
  }
  h3 {
    color: white;
    @media ${device.tablet} {
      font-size: 5vh;
    }
  }
  p {
    @media ${device.tablet} {
      font-size: 3vh;
    }
  }
`
const ActivityImgStyle = styled.img`
  display: block;
  height: 250px;
  margin: 3vh 0;
  @media ${device.tablet} {
    height: 50vw;
  }
`

const Activity = ({ img, title, paragraph }) => {
  return (
    <ActivityStyled>
      <ActivityImgStyle src={img}></ActivityImgStyle>
      <ActivityDescriptionStyle>
        <h3>{title}</h3>
        <p>{paragraph}</p>
      </ActivityDescriptionStyle>
    </ActivityStyled>
  )
}

export default Activity
