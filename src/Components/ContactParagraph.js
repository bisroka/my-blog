import React from "react"
import styled from "styled-components"

const ContactParagraphStyled = styled.div`
  position: absolute;
  width: 45vw;
  right: 5vw;
  font-size: 20px;
`

const ContactParagraph = () => {
  return (
    <ContactParagraphStyled>
      <p>Napisz do mnie, Lub sprawdź moje profile na innych portalach</p>
    </ContactParagraphStyled>
  )
}

export default ContactParagraph
