import React from "react"
import styled from "styled-components"

import Header from "../Components/Header"
import AboutMeSubtitle from "../Components/AboutMeSubtitle"
import AboutMeParagraph from "../Components/AboutMeParagraph"

const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent
    linear-gradient(180deg, #4258b8 0%, #eeeeee 50%, #ffffff 100%) 0% 0%
    no-repeat padding-box;
`

const AboutMeSection = () => {
  return (
    <AboutMe>
      <Header />
      <AboutMeSubtitle />
      <AboutMeParagraph />
    </AboutMe>
  )
}

export default AboutMeSection
