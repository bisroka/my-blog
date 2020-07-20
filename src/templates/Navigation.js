import React, { Component } from "react"
import styled from "styled-components"

import Menu from "../Components/Menu"
import Hamburger from "../Components/Hamburger"

const NavBar = styled.header`
  display: block;
  position: relative;
  width: 100%;
  height: 5vh;
  top: 0;
  left: 0;
  max-width: 1200px;
  margin: 0 auto;
`

class Navigation extends Component {
  state = { isMenuOpen: false }
  hamburgerButtonHandler = () => {
    const isMenuOpen = !this.state.isMenuOpen
    this.setState({
      isMenuOpen,
    })
  }

  render() {
    return (
      <>
        <NavBar>
          <Hamburger click={this.hamburgerButtonHandler} />
          <Menu
            buttons={this.props.buttons}
            isVisible={this.state.isMenuOpen}
          />
        </NavBar>
      </>
    )
  }
}

export default Navigation
