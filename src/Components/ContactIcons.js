import React from "react"
import styled from "styled-components"

const ContactIconsStyled = styled.div`
  position: absolute;
  width: 45vw;
  right: 5vw;
  top: 25vh;
  img {
    margin: 10px;
  }
`

const ContactIcons = ({ contactPictures }) => {
  const contactPicture = contactPictures.map(picture => (
    <img key={picture.id} src={picture.src} />
  ))
  return <ContactIconsStyled>{contactPicture}</ContactIconsStyled>
}

export default ContactIcons
