import React from "react"
import styled from "styled-components"

import Header from "../Components/Header"
import ContactParagraph from "../Components/ContactParagraph"
import ContactImg from "../Components/ContactImg"

const ContactStyled = styled.div``

const Contact = () => {
  return (
    <ContactStyled>
      <Header />
      <ContactParagraph />
      <ContactImg />
    </ContactStyled>
  )
}

export default Contact
