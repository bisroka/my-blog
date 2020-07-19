import React from "react"
import styled from "styled-components"
import { device } from "../utils/device"

const ContactIconsStyled = styled.div`
  position: absolute;
  width: 45vw;
  right: 5vw;
  top: 30vh;
  @media ${device.tablet} {
    right: 5vw;
    top: 30vh;
  }
  @media ${device.laptop} {
    top: 25vh;
    right: 0;
  }
  img {
    margin: 10px;
    width: 7vw;
    @media ${device.tablet} {
      width: 5vw;
    }
    @media ${device.laptop} {
      width: 3vw;
    }
  }
`

const ContactIcons = ({ contactPictures }) => {
  const contactPicture = contactPictures.map(picture => (
    <img key={picture.id} src={picture.src} />
  ))
  return <ContactIconsStyled>{contactPicture}</ContactIconsStyled>
}

export default ContactIcons
