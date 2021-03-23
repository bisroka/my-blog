import React from "react"
import { StyledParagraph, StyledHeader, StyledSubheader, StyledSection, StyledArticle, StyledWrapper, StyledImage } from "../Components/styled-components/index.styledComponents"


const AboutMeSection = ({ header, subheader, paragraphes, img, animation }) => {
  const paragr = paragraphes.map(paragraph => (
    <StyledSubheader
      key={paragraph.id}
      section="aboutMe"
      className="aboutMe__container--paragraph"
      aboutMeSection
    >{paragraph.content}</StyledSubheader>
  ))
  return (
    <StyledSection white>
      {/* <StyledWrapper column> */}
        <StyledHeader className={animation}>{header}</StyledHeader>
        <StyledArticle aboutMeSection>
          <StyledImage src={img} className={animation}/>
          <StyledSubheader aboutMeSection className={animation}>{subheader}</StyledSubheader>
          <div style={{gridArea: "paragraphes"}}>
            {paragr}
          </div>
        </StyledArticle>
      {/* </StyledWrapper> */}
    </StyledSection>
  )
}

export default AboutMeSection
