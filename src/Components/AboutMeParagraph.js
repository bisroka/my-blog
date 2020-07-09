import React from "react"
import styled from "styled-components"

const ParagraphWrapperStyle = styled.div`
  margin: 1vh 0vh;
  padding: 0 5vh;
`

const AboutMeParagraph = ({ paragraph1, paragraph2, paragraph3 }) => {
  return (
    <ParagraphWrapperStyle>
      <p>{paragraph1}</p>
      <p>{paragraph2}</p>
      <p>{paragraph3}</p>
    </ParagraphWrapperStyle>
  )
}

export default AboutMeParagraph
