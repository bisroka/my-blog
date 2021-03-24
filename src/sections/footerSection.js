import React from "react"
import {StyledFooter} from "../Components/styled-components/index.styledComponents"

const FooterSection = ({ footerContent }) => {
  return (
    <StyledFooter>
      <p>{footerContent}</p>
    </StyledFooter>
  )
}

export default FooterSection
