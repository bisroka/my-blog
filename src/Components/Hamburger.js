import React from "react"
import styled from "styled-components"

const StyledHamburger = styled.div`
  display: flex;
  justify-content: center;
  width: 7vh;
  height: 7vh;
  top: 5vw;
  right: 5vw;
  align-items: center;
  position: absolute;
  border: 1px solid black;
  border-radius: 25%;
  z-index: 3;
  padding: 1px;
  cursor: pointer;

  div {
    width: 6vh;
    height: 1vh;
    position: relative;
    background: black;
    transition: transform 0.5s ease;
    ::before,
    ::after {
      width: 6vh;
      height: 1vh;
      position: absolute;
      content: "";
      display: block;
      background: black;
      transition: transform 0.5s ease;
    }
    ::before {
      left: 0px;
      top: -1.5vh;
    }
    ::after {
      left: 0px;
      top: 1.5vh;
    }
  }
`
const Hamburger = ({ click }) => {
  return (
    <StyledHamburger onClick={click}>
      <div />
    </StyledHamburger>
  )
}

export default Hamburger
