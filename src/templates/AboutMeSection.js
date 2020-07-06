import React from "react"
import styled from "styled-components"

import Header from "../Components/Header"
import AboutMeSubtitle from "../Components/AboutMeSubtitle"
import AboutMeParagraph from "../Components/AboutMeParagraph"

const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
