import React from "react"
import { StyledHeader, StyledParagraph, StyledImage, StyledFooter, StyledWrapper } from "../Components/styled-components/index.styledComponents"
import ContactIcons from "../Components/ContactIcons"

const ContactSection = ({ header, subheader, img, contactPictures }) => {
  return (
    <StyledFooter contact>
        <StyledHeader>{header}</StyledHeader>
       <StyledWrapper>
          <StyledParagraph section="contact" >{subheader}</StyledParagraph>
          <ContactIcons contactPictures={contactPictures} />
       </StyledWrapper>
          <StyledImage contact src={img} />
    </StyledFooter>
  )
}

export default ContactSection