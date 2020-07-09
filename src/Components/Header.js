import React from "react"
import styled from "styled-components"

const HeaderStyle = styled.h2`
  margin-top: 5vh;
  text-align: center;
  font-family: Charter;
  font-size: 48px;
`

const Header = ({ header }) => {
  return <HeaderStyle>{header}</HeaderStyle>
}

export default Header
