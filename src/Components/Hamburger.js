import React from "react"
import { StyledHamburger } from "./styled-components/Hamburger.style"
import PropTypes from "prop-types"

const Hamburger = ({isVisible, click }) => {
  return (
    <StyledHamburger className="hamburger" isVisible={isVisible} onClick={click}>
      <div />
    </StyledHamburger>
  )
}

export default Hamburger

Hamburger.propTypes = {
  click: PropTypes.func,
}; 