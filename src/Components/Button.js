import React from "react"
import { Link } from "gatsby"
import { StyledButton } from "./styled-components/Button.style"
import PropTypes from "prop-types"

const Button = ({ button, loadMore, menu, click, link, white, className }) => {
  return (
    <StyledButton menu={menu} className={className} loadMore={loadMore} white={white} onClick={click}>
     {link!==null ?  <Link to={link ? link : ""}>
        {button}
     </Link> : {button}}
      </StyledButton>
  )
}

export default Button

Button.propTypes = {
  button: PropTypes.string,
  loadMore: PropTypes.bool,
  menu: PropTypes.bool,
  click: PropTypes.func,
  link: PropTypes.string,
  white: PropTypes.bool
}; 