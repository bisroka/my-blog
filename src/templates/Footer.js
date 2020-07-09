import React from "react"
import styled from "styled-components"

const FooterStyled = styled.div`
  height: 5vh;
  width: 100vw;
  overflow: hidden;
  background-color: #4258b8;
  p {
    font-size: 12px;
    text-align: center;
    color: white;
  }
`

const Footer = ({ footerContent }) => {
  return (
    <FooterStyled>
      <p>{footerContent}</p>
    </FooterStyled>
  )
}

export default Footer
