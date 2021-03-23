import React from "react"
import styled from "styled-components"
import { device } from "../utils/device"
import {StyledFooter} from "../Components/styled-components/index.styledComponents"


const FooterStyled = styled.footer`

`

const FooterSection = ({ footerContent }) => {
  return (
    <StyledFooter>
      <p>{footerContent}</p>
    </StyledFooter>
  )
}

export default FooterSection
