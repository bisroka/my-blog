import React from "react"
import { StyledHeader, StyledParagraph, StyledImage, StyledFooter } from "../Components/styled-components/index.styledComponents"
import ContactIcons from "../Components/ContactIcons"

const ContactSection = ({ header, subheader, img, contactPictures }) => {
  return (
    <StyledFooter contact>
        <StyledHeader>{header}</StyledHeader>
        <StyledParagraph section="contact" >{subheader}</StyledParagraph>
        <StyledImage contact src={img} />
        <ContactIcons contactPictures={contactPictures} />
    </StyledFooter>
  )
}

export default ContactSection