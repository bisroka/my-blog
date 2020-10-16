import React from "react"
import { StyledHamburger } from "./styled-components/Hamburger.style"

const Hamburger = ({ click }) => {
  return (
    <StyledHamburger onClick={click}>
      <div />
    </StyledHamburger>
  )
}

export default Hamburger
