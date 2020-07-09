import React from "react"
import styled from "styled-components"
import hej1 from "../assets/images/hej1.png"

const ContactImgStyled = styled.img`
  display: block;
  position: absolute;
  bottom: -5vh;
`

const ContactImg = () => {
  return <ContactImgStyled src={hej1}></ContactImgStyled>
}

export default ContactImg
