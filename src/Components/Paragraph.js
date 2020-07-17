import React from "react"
import styled from "styled-components"

const AboutMeParagraphStyled = styled.p`
  margin: 1vh 0vh;
  padding: 0 5vh;
`
const NewsParagraphStyle = styled.p`
  text-align: center;
  font-size: 25px;
`
const ContactParagraphStyled = styled.div`
  position: absolute;
  width: 45vw;
  right: 5vw;
  font-size: 20px;
`

const Paragraph = ({ section, paragraph }) => {
  return (
    <>
      {section === "aboutMe" ? (
        <AboutMeParagraphStyled>{paragraph}</AboutMeParagraphStyled>
      ) : null}
      {section === "news" ? (
        <NewsParagraphStyle>{paragraph}</NewsParagraphStyle>
      ) : null}
      {section === "contact" ? (
        <ContactParagraphStyled>{paragraph}</ContactParagraphStyled>
      ) : null}
      {section === "" ? <h3>{paragraph}</h3> : null}
    </>
  )
}

export default Paragraph
