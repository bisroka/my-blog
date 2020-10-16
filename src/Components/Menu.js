import React from "react"
import Button from "./Button"
import { StyledMenu } from "./styled-components/Menu.style"

const Menu = ({ isVisible, buttons }) => {
  const navButton = buttons.map(button => (
    <Button menu key={button.id} button={button.content} link={button.link} />
  ))
  return <StyledMenu isVisible={isVisible}>{navButton}</StyledMenu>
}

export default Menu
