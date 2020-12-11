import React from "react"
import styled from "styled-components"
import { device } from "../utils/device"


const FooterStyled = styled.footer`
  height: 5vh;
  width: 100vw;
  overflow: hidden;
  z-index: 0;
  align-self: flex-end;
  background-color: ${props => props.theme.colors.primary};
  p {
    font-size: ${props => props.theme.fontSize.s};
    text-align: center;
    color: ${props => props.theme.colors.gray};;
    @media ${device.tablet} {
      font-size: ${props => props.theme.fontSize.m};
    }
  }
`

const FooterSection = ({ footerContent }) => {
  return (
    <FooterStyled>
      <p>{footerContent}</p>
    </FooterStyled>
  )
}

export default FooterSection
