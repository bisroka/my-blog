import React from "react"
import styled from "styled-components"

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
  width: 100%;
  height: 280px;
  text-align: center;
  font-size: 25px;
  color: white;
  background-color: #4258b8;
  border-radius: 38px;
  h3 {
    color: white;
  }
`
const ActivityImgStyle = styled.img`
  display: block;
  height: 250px;
  margin: 3vh 0;
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
