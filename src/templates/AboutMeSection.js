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

const AboutMeSection = ({
  header,
  subheader,
  paragraph1,
  paragraph2,
  paragraph3,
  img,
}) => {
  return (
    <AboutMe>
      <Header header={header} />
      <AboutMeSubtitle subheader={subheader} img={img} />
      <AboutMeParagraph
        paragraph1={paragraph1}
        paragraph2={paragraph2}
        paragraph3={paragraph3}
      />
    </AboutMe>
  )
}

export default AboutMeSection
