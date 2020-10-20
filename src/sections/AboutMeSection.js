import React from "react"
import { StyledParagraph, StyledHeader, StyledSubheader, StyledSection, StyledArticle, StyledWrapper, StyledImage } from "../Components/styled-components/index.styledComponents"


const AboutMeSection = ({ header, subheader, paragraphes, img }) => {
  const paragr = paragraphes.map(paragraph => (
    <StyledParagraph
      key={paragraph.id}
      section="aboutMe"
      className="aboutMe__container--paragraph"
    >{paragraph.content}</StyledParagraph>
  ))

  return (
    <StyledSection white>
      <StyledWrapper column>
        <StyledHeader>{header}</StyledHeader>
        <StyledArticle>
          <StyledImage src={img}/>
          <StyledWrapper column>
          <StyledSubheader>{subheader}</StyledSubheader>
          {paragr}
        </StyledWrapper>
        </StyledArticle>
       
      </StyledWrapper>
    </StyledSection>
  )
}

export default AboutMeSection
