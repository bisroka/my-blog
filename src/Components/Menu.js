import React from "react"
import styled from "styled-components"

import Button from "./Button"

const MenuStyled = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: white;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  top: 0;
  transition: 0.2s;
  right: ${props => (props.isVisible ? "0" : "-100vw")};
  opacity: ${props => (props.isVisible ? "1" : "0")};
`

const Menu = ({ isVisible, buttons }) => {
  const navButton = buttons.map(button => (
    <Button key={button.id} button={button.content} />
  ))
  return <MenuStyled isVisible={isVisible}>{navButton}</MenuStyled>
}

export default Menu
