import React, { useContext } from "react"

import { StyledSection, StyledHeader,StyledSubheader, StyledWrapper, StyledImage} from "../Components/styled-components/index.styledComponents"
import { StoreContext } from "../store/StoreProvider"

const HelloSection = ({ pageContent}) => {
  const { isMenuOpen } = useContext(StoreContext)
  const {header, subheader, img } = pageContent
  return (
    <StyledSection helloSection>
      <StyledWrapper helloSection>
        <StyledHeader className="helloHeader outer" helloSection isMenuOpen={isMenuOpen}> {header} </StyledHeader>
        <StyledSubheader className="helloSubheader outer" helloSection isMenuOpen={isMenuOpen}>{subheader}</StyledSubheader>
        <StyledImage className="helloImage" src={img} helloSection />
      </StyledWrapper>
    </StyledSection>
  )
}

export default HelloSection
