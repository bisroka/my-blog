import React from "react"
import { StyledHeader, StyledSubheader, StyledSection, StyledArticle, StyledImage } from "../Components/styled-components/index.styledComponents"

const AboutMeSection = ({ pageContent, animation }) => {
  const { header, subheader, paragraphes, img } = pageContent
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
        <StyledHeader className={animation}>{header}</StyledHeader>
        <StyledArticle aboutMeSection>
          <StyledImage src={img} className={animation}/>
          <StyledSubheader aboutMeSection className={animation}>{subheader}</StyledSubheader>
          <div style={{gridArea: "paragraphes", zIndex: "1"}}>
            {paragr}
          </div>
        </StyledArticle>
    </StyledSection>
  )
}

export default AboutMeSection
