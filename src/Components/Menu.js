import React from "react"
import styled from "styled-components"

import MenuButton from "./MenuButton"

const MenuStyled = styled.div`
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

const Menu = ({ button1, button2, button3, isVisible }) => {
  return (
    <MenuStyled isVisible={isVisible}>
      <MenuButton button={button1} />
      <MenuButton button={button2} />
      <MenuButton button={button3} />
    </MenuStyled>
  )
}

export default Menu
