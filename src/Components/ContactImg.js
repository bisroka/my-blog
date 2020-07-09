import React from "react"
import styled from "styled-components"

const ContactImgStyled = styled.img`
  display: block;
  position: absolute;
  bottom: -5vh;
`

const ContactImg = ({ img }) => {
  return <ContactImgStyled src={img}></ContactImgStyled>
}

export default ContactImg
