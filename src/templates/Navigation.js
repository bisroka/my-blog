import React from "react"
import styled from "styled-components"

import MenuButton from "../Components/MenuButton"

const NavBar = styled.div`
  display: block;
  width: 100%;
  height: 5vh;
`
const Navigation = () => {
  return (
    <>
      <NavBar>
        <MenuButton />
      </NavBar>
    </>
  )
}

export default Navigation
