import React from "react"
import styled from "styled-components"
import { device } from "../utils/device"

const ContactIconsStyled = styled.div`
  position: absolute;
  width: 45vw;
  right: 5vw;
  top: 25vh;
  @media ${device.tablet} {
    right: 5vw;
    top: 30vh;
  }
  img {
    margin: 10px;
    width: 7vw;
  }
`

const ContactIcons = ({ contactPictures }) => {
  const contactPicture = contactPictures.map(picture => (
    <img key={picture.id} src={picture.src} />
  ))
  return <ContactIconsStyled>{contactPicture}</ContactIconsStyled>
}

export default ContactIcons
