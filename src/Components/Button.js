import React from "react"
import { Link } from "gatsby"
import {StyledButton} from "./styled-components/Button.style"

const Button = ({ button, loadMore, menu, click, link }) => {
  return (
    <StyledButton menu={menu} loadMore={loadMore} onClick={click}>
      <Link to={link ? link : ""}>{button}</Link>
    </StyledButton>
  )
}

export default Button
