import React from "react"

import { StyledSection, StyledHeader,StyledSubheader, StyledWrapper, StyledImage} from "../Components/styled-components/index.styledComponents"
import backgroundHello from "../assets/background.jpg"

const HelloSection = ({ header,subheader, img }) => {
  return (
    <StyledSection helloSection background={backgroundHello}>
      <StyledWrapper>
        <StyledWrapper helloSection column>
          <StyledHeader helloSection>{header}</StyledHeader>
          <StyledSubheader helloSection>{subheader}</StyledSubheader>
        </StyledWrapper>
        <StyledImage src={img} hello/>
      </StyledWrapper>
    </StyledSection>
  )
}

export default HelloSection
