import React from "react"
import Button from "./Button"
import { StyledMenu } from "./styled-components/Menu.style"
import PropTypes from "prop-types"

const Menu = ({ isVisible, buttons }) => {
  const navButton = buttons.map(button => (
    <Button menu key={button.id} button={button.content} link={button.link} />
  ))
  return <StyledMenu isVisible={isVisible}>{navButton}</StyledMenu>
}

export default Menu

Menu.propTypes = {
  isVisible: PropTypes.bool,
  button: PropTypes.string,
}; 