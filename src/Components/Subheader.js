import React from "react"
import styled from "styled-components"

const SubheaderStyled = styled.h3`
  font-size: 28px;
  margin: 3vh 0;
`

const Subheader = ({ subheader }) => {
  return <SubheaderStyled>{subheader}</SubheaderStyled>
}

export default Subheader
