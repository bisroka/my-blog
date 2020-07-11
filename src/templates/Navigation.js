import React, { Component } from "react"
import styled from "styled-components"

import Menu from "../Components/Menu"
import Hamburger from "../Components/Hamburger"

const NavBar = styled.header`
  display: block;
  width: 100%;
  height: 5vh;
`

class Navigation extends Component {
  state = { isMenuOpen: false }
  hamburgerButtonHandler = () => {
    const isMenuOpen = !this.state.isMenuOpen
    this.setState({
      isMenuOpen,
    })
  }
  // showMenu = () => (this.state.isMenuOpen ? true : false)

  render() {
    return (
      <>
        <NavBar>
          <Hamburger click={this.hamburgerButtonHandler} />
          <Menu
            button1={this.props.button1}
            button2={this.props.button2}
            button3={this.props.button3}
            isVisible={this.state.isMenuOpen}
          />
        </NavBar>
      </>
    )
  }
}

export default Navigation

// const Navigation = ({ button1, button2, button3, click }) => {
//   return (
//     <>
//       <NavBar>
//         <Hamburger click={click} />
//         <Menu button1={button1} button2={button2} button3={button3} />
//       </NavBar>
//     </>
//   )
// }

// export default Navigation
