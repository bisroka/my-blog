import React from "react"

import { StyledSection, StyledHeader,StyledSubheader, StyledWrapper, StyledImage} from "../Components/styled-components/index.styledComponents"


const HelloSection = ({ header,subheader, img }) => {
  return (
    <StyledSection helloSection>
      <StyledWrapper>
        <StyledWrapper helloSection column>
          <StyledHeader helloSection>{header}</StyledHeader>
          <StyledSubheader>{subheader}</StyledSubheader>
        </StyledWrapper>
        <StyledImage src={img} hello/>
      </StyledWrapper>
    </StyledSection>
  )
}

export default HelloSection
