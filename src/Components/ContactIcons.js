import React from "react"
import { StyledContactIcons } from "./styled-components/ContactIcons.style"
import PropTypes from "prop-types"


const ContactIcons = ({ contactPictures }) => {
  const contactPicture = contactPictures.map(picture => (
    <a key={picture.id} href={picture.link}>
      <img src={picture.src} />
    </a>
  ))
  return <StyledContactIcons>{contactPicture}</StyledContactIcons>
}

export default ContactIcons

ContactIcons.propTypes = {
  contactPictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      href: PropTypes.string,
      src: PropTypes.string
    })
  ),
}; 