import React from "react"
import { StyledActivityCard, StyledSubheader, StyledParagraph } from "./styled-components/index.styledComponents"
import PropTypes from "prop-types"

const Activity = ({ img, title, paragraph }) => {
  return (
    <StyledActivityCard>
      <img src={img}></img>
      <div className="description">
        <StyledSubheader>{title}</StyledSubheader>
        <StyledParagraph>{paragraph}</StyledParagraph>
      </div>
    </StyledActivityCard>
  )
}

export default Activity

Activity.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  paragraph: PropTypes.string
}; 