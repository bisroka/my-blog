import React, { useEffect } from "react"
import { StyledHeader, StyledImage, StyledFooter, StyledWrapper, StyledSubheader } from "../Components/styled-components/index.styledComponents"
import ContactIcons from "../Components/ContactIcons"
import { socialIconHoverAnimation } from "../animations/hover/socialIconHover"

const ContactSection = ({ header, subheader, img, contactPictures }) => {
  useEffect(()=>{socialIconHoverAnimation()})
  return (
    <StyledFooter contact>
       <StyledWrapper contactSection>
        <StyledHeader contactSection>{header}</StyledHeader>
        <StyledSubheader contactSection>{subheader}</StyledSubheader>
        <ContactIcons contactPictures={contactPictures} />
        <StyledImage contact src={img} />
       </StyledWrapper>
    </StyledFooter>
  )
}

export default ContactSection