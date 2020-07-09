import React from "react"
import styled from "styled-components"

const AboutMeSubtitleStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5vh 1vh 0vh;
  img {
    display: block;
    width: 118px;
    height: 154px;
    border-radius: 50%;
  }

  h3 {
    font-size: 28px;
    margin: 3vh;
  }
`

const AboutMeSubtitle = ({ subheader, img }) => {
  return (
    <AboutMeSubtitleStyle>
      <img src={img} />

      <h3> {subheader}</h3>
    </AboutMeSubtitleStyle>
  )
}

export default AboutMeSubtitle
