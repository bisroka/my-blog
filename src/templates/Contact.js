import React from "react"
import styled from "styled-components"

import Header from "../Components/Header"
import Paragraph from "../Components/Paragraph"
import ContactIcons from "../Components/ContactIcons"

import { device } from "../utils/device"

const ContactStyled = styled.footer`
  position: relative;
  min-height: 40vh;
`
const ContactImgStyled = styled.img`
  display: block;
  position: absolute;
  bottom: -5vh;
  height: 35vh;
  @media ${device.tablet} {
    height: 40vh;
  }
`
const WrapperStyled = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  min-height: 40vh;
`

const Contact = ({ header, subheader, img, contactPictures }) => {
  return (
    <ContactStyled>
      <WrapperStyled>
        <Header header={header} />
        <Paragraph paragraph={subheader} section="contact" />
        <ContactImgStyled src={img}></ContactImgStyled>
        <ContactIcons contactPictures={contactPictures} />
      </WrapperStyled>
    </ContactStyled>
  )
}

export default Contact
