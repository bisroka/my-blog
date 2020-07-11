import React from "react"
import styled from "styled-components"

import Header from "../Components/Header"
import ContactParagraph from "../Components/ContactParagraph"
import ContactImg from "../Components/ContactImg"
import ContactIcons from "../Components/ContactIcons"

const ContactStyled = styled.footer`
  position: relative;
  min-height: 40vh;
`

const Contact = ({ header, subheader, img }) => {
  return (
    <ContactStyled>
      <Header header={header} />
      <ContactParagraph subheader={subheader} />
      <ContactImg img={img} />
      <ContactIcons />
    </ContactStyled>
  )
}

export default Contact
