import React from "react"
import styled from "styled-components"
import bansimg from "../assets/images/bans.png"

const AboutMeSubtitleStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5vh 1vh;
  img {
    display: block;
    width: 118px;
    height: 154px;
  }

  h3 {
    font-size: 28px;
    margin: 3vh;
  }
`

const AboutMeSubtitle = () => {
  return (
    <AboutMeSubtitleStyle>
      <img src={bansimg} />

      <h3> Jestem Bartek, a to mój blog o tym, jak staję się programistą</h3>
    </AboutMeSubtitleStyle>
  )
}

export default AboutMeSubtitle
