import React from "react"
import styled from "styled-components"

const StyledHamburger = styled.div`
  display: flex;
  justify-content: center;
  width: 30px;
  height: 30px;
  top: 5vw;
  right: 5vw;
  align-items: center;
  position: absolute;
  border: 1px solid black;
  border-radius: 25%;
  z-index: 5;
  padding: 1px;
  cursor: pointer;

  div {
    width: 24px;
    height: 2px;
    position: relative;
    background: black;
    transition: transform 0.5s ease;
    ::before,
    ::after {
      width: 24px;
      height: 2px;
      position: absolute;
      content: "";
      display: block;
      background: black;
      transition: transform 0.5s ease;
    }
    ::before {
      left: 0px;
      top: -3px;
    }
    ::after {
      left: 0px;
      top: 3px;
    }
  }
`
const MenuButton = () => {
  return (
    <StyledHamburger>
      <div />
    </StyledHamburger>
  )
}

export default MenuButton
