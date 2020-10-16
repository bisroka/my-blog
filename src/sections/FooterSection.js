import React from "react"
import styled from "styled-components"
import { device } from "../utils/device"

const FooterStyled = styled.footer`
  height: 5vh;
  width: 100vw;
  overflow: hidden;
  background-color: #4258b8;
  p {
    font-size: 12px;
    text-align: center;
    color: white;
    @media ${device.tablet} {
      font-size: 1.5vh;
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
