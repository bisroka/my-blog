import React from "react"
import styled from "styled-components"

const HeaderStyle = styled.h2`
  color: ${props => (props.lightColor ? "#aaaaaa" : "#6b6b6b")};
  margin-top: 5vh;
  text-align: center;
  font-family: Charter;
  font-size: 48px;
`

const Header = ({ header, lightColor }) => {
  return <HeaderStyle lightColor={lightColor}>{header}</HeaderStyle>
}

export default Header
