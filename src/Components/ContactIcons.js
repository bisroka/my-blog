import React from "react"
import styled from "styled-components"

import messenger from "../assets/images/messenger.png"
import linkedin from "../assets/images/linkedin.png"
import github from "../assets/images/github.png"

const ContactIconsStyled = styled.div`
  position: absolute;
  width: 45vw;
  right: 5vw;
  top: 25vh;
  img {
    margin: 10px;
  }
`

const ContactIcons = () => {
  return (
    <ContactIconsStyled>
      <img src={messenger} />
      <img src={linkedin} />
      <img src={github} />
    </ContactIconsStyled>
  )
}

export default ContactIcons
