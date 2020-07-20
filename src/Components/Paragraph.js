import React from "react"
import styled from "styled-components"
import { device } from "../utils/device"

const AboutMeParagraphStyled = styled.p`
  margin: 1vh 0vh;
  padding: 0 5vh;
  font-size: 2vh;
  @media ${device.tablet} {
    font-size: 4vh;
  }
`
const NewsParagraphStyle = styled.p`
  text-align: center;
  font-size: 25px;
`
const ContactParagraphStyled = styled.div`
  position: absolute;
  width: 45vw;
  left: 45vw;
  top: 15vh;
  font-size: 20px;
  @media ${device.tablet} {
    font-size: 3.5vh;
    top: 15vh;
  }
  @media ${device.laptop} {
    font-size: 3.5vh;
    top: 15vh;
    left: 20vw;
  }
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
