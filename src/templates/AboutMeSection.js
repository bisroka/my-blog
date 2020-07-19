import React from "react"
import styled from "styled-components"
import { device } from "../utils/device"

import Header from "../Components/Header"
import Paragraph from "../Components/Paragraph"
import Subheader from "../Components/Subheader"

const AboutMeStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent
    linear-gradient(180deg, #4258b8 0%, #eeeeee 50%, #ffffff 100%) 0% 0%
    no-repeat padding-box;
`
const AboutMeSubtitleStyled = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5vh 1vh 0vh;
  img {
    margin: 1vh;
    display: block;
    width: 30vw;
    border-radius: 50%;
    @media ${device.tablet} {
      width: 50vw;
    }
  }
`

const AboutMeSection = ({ header, subheader, paragraphes, img }) => {
  const paragr = paragraphes.map(paragraph => (
    <Paragraph
      key={paragraph.id}
      paragraph={paragraph.content}
      section="aboutMe"
    />
  ))

  return (
    <AboutMeStyled>
      <Header lightColor header={header} />
      <AboutMeSubtitleStyled>
        <img src={img} />
        <Subheader lightColor subheader={subheader}></Subheader>
      </AboutMeSubtitleStyled>
      {paragr}
    </AboutMeStyled>
  )
}

export default AboutMeSection
