import React from "react"

import { StyledSection, StyledHeader, StyledWrapper, StyledImage} from "../Components/styled-components/index.styledComponents"


const HelloSection = ({ header, img }) => {
  return (
    <StyledSection helloSection>
      <StyledWrapper helloContainer>
        <StyledHeader>{header}</StyledHeader>
        <StyledImage src={img} hello/>
      </StyledWrapper>
    </StyledSection>
  )
}

export default HelloSection
