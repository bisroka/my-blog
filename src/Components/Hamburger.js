import React from "react"
import { StyledHamburger } from "./styled-components/Hamburger.style"
import PropTypes from "prop-types"

const Hamburger = ({ click }) => {
  return (
    <StyledHamburger onClick={click}>
      <div />
    </StyledHamburger>
  )
}

export default Hamburger

Hamburger.propTypes = {
  click: PropTypes.func,
}; 