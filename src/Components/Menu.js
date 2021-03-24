import React from "react"
import Button from "./Button"
import { StyledMenu } from "./styled-components/Menu.style"
import PropTypes from "prop-types"
import { useEffect } from "react"
import { buttonHoverAnimation } from "../animations/hover/buttonHover"

const Menu = ({ isVisible, navButtons, homePage }) => {
  useEffect(()=>{
    buttonHoverAnimation(document)
  })
  const navButton = navButtons.map(button => (
    <Button className="button-hover" menu key={button.id} buttonText={button.content} link={button.link} />
  ))
  return <StyledMenu className="menu menu-inner" isVisible={isVisible} homePage={homePage}>{navButton}</StyledMenu>
}

export default Menu

Menu.propTypes = {
  isVisible: PropTypes.bool,
  button: PropTypes.string,
}; 