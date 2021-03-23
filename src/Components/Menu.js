import React from "react"
import Button from "./Button"
import { StyledMenu } from "./styled-components/Menu.style"
import PropTypes from "prop-types"
import { useEffect } from "react"
import { buttonHoverAnimation } from "../animations/hover/buttonHover"

const Menu = ({ isVisible, buttons, homePage }) => {
  useEffect(()=>{
    buttonHoverAnimation(document)
  })
  const navButton = buttons.map(button => (
    <Button className="button-hover" menu key={button.id} button={button.content} link={button.link} />
  ))
  return <StyledMenu className="menu menu-inner" isVisible={isVisible} homePage={homePage}>{navButton}</StyledMenu>
}

export default Menu

Menu.propTypes = {
  isVisible: PropTypes.bool,
  button: PropTypes.string,
}; 