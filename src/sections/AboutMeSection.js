import React from "react"
import { StyledParagraph, StyledHeader, StyledSubheader, StyledSection, StyledArticle, StyledWrapper, StyledImage } from "../Components/styled-components/index.styledComponents"


const AboutMeSection = ({ header, subheader, paragraphes, img }) => {
  const paragr = paragraphes.map(paragraph => (
    <StyledParagraph
      key={paragraph.id}
      section="aboutMe"
    >{paragraph.content}</StyledParagraph>
  ))

  return (
    <StyledSection>
      <StyledWrapper column>
        <StyledHeader lightColor >{header}</StyledHeader>
        <StyledArticle>
          <StyledImage src={img} circle/>
          <StyledSubheader lightColor >{subheader}</StyledSubheader>
        </StyledArticle>
        <StyledWrapper column>
          {paragr}
        </StyledWrapper>
      </StyledWrapper>
    </StyledSection>
  )
}

export default AboutMeSection
