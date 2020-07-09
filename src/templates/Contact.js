import React from "react"
import styled from "styled-components"

import Header from "../Components/Header"
import ContactParagraph from "../Components/ContactParagraph"
import ContactImg from "../Components/ContactImg"
import ContactIcons from "../Components/ContactIcons"

const ContactStyled = styled.div`
  position: relative;
  min-height: 40vh;
`

const Contact = () => {
  return (
    <ContactStyled>
      <Header />
      <ContactParagraph />
      <ContactImg />
      <ContactIcons />
    </ContactStyled>
  )
}

export default Contact
