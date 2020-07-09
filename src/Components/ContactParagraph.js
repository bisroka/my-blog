import React from "react"
import styled from "styled-components"

const ContactParagraphStyled = styled.div`
  position: absolute;
  width: 45vw;
  right: 5vw;
  font-size: 20px;
`

const ContactParagraph = ({ subheader }) => {
  return (
    <ContactParagraphStyled>
      <p>{subheader}</p>
    </ContactParagraphStyled>
  )
}

export default ContactParagraph
