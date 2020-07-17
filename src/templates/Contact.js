import React from "react"
import styled from "styled-components"

import Header from "../Components/Header"
import Paragraph from "../Components/Paragraph"
import ContactIcons from "../Components/ContactIcons"

const ContactStyled = styled.footer`
  position: relative;
  min-height: 40vh;
`
const ContactImgStyled = styled.img`
  display: block;
  position: absolute;
  bottom: -5vh;
`

const Contact = ({ header, subheader, img, contactPictures }) => {
  return (
    <ContactStyled>
      <Header header={header} />
      <Paragraph paragraph={subheader} section="contact" />
      <ContactImgStyled src={img}></ContactImgStyled>
      <ContactIcons contactPictures={contactPictures} />
    </ContactStyled>
  )
}

export default Contact
