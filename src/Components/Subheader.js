import React from "react"
import styled from "styled-components"

const SubheaderStyled = styled.h3`
  color: ${props => (props.lightColor ? "#888888" : "#6b6b6b")};
  font-size: 28px;
  margin: 3vh 0;
`

const Subheader = ({ subheader, lightColor }) => {
  return <SubheaderStyled lightColor={lightColor}>{subheader}</SubheaderStyled>
}

export default Subheader
